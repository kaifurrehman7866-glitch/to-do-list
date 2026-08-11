// ============================================
// STATE — single source of truth
// ============================================
let tasks = [];          // { id, text, completed }
let currentFilter = "all"; // "all" | "active" | "completed"
let nextId = 1;

// ============================================
// DOM REFERENCES
// ============================================
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const counter = document.querySelector("#counter");
const filtersWrap = document.querySelector("#filters");
const clearCompletedBtn = document.querySelector("#clear-completed");

// ============================================
// EVENT LISTENERS
// ============================================
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

filtersWrap.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  currentFilter = btn.dataset.filter;

  filtersWrap.querySelectorAll(".filter-btn").forEach((b) =>
    b.classList.remove("active")
  );
  btn.classList.add("active");

  render();
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  render();
});

// Event delegation for the list (checkbox toggle + delete)
list.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (deleteBtn) {
    const id = Number(deleteBtn.closest(".todo-item").dataset.id);
    deleteTask(id);
    return;
  }
});

list.addEventListener("change", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    const id = Number(e.target.closest(".todo-item").dataset.id);
    toggleTask(id);
  }
});

// ============================================
// DATA FUNCTIONS — mutate the array, then render
// ============================================
function addTask(text) {
  const trimmed = text.trim();
  if (trimmed === "") return;

  tasks.push({ id: nextId++, text: trimmed, completed: false });
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  render();
}

function getFilteredTasks() {
  if (currentFilter === "active") return tasks.filter((t) => !t.completed);
  if (currentFilter === "completed") return tasks.filter((t) => t.completed);
  return tasks;
}

// ============================================
// RENDER — rebuilds the DOM from the tasks array
// using document.createElement (no innerHTML strings)
// ============================================
function render() {
  // clear existing list items
  list.textContent = "";

  const visibleTasks = getFilteredTasks();

  if (visibleTasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent =
      tasks.length === 0
        ? "No tasks yet — add one above."
        : "No tasks in this filter.";
    list.appendChild(empty);
  } else {
    visibleTasks.forEach((task) => {
      list.appendChild(buildTaskElement(task));
    });
  }

  updateCounter();
}

function buildTaskElement(task) {
  const li = document.createElement("li");
  li.className = "todo-item" + (task.completed ? " completed" : "");
  li.dataset.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.setAttribute("aria-label", "Delete task");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function updateCounter() {
  const remaining = tasks.filter((t) => !t.completed).length;
  counter.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

// ============================================
// INITIAL RENDER
// ============================================
render();
