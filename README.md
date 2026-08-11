# Interactive To-Do List

A clean and responsive To-Do List web application built with **HTML5, CSS3, and JavaScript**. The project demonstrates practical DOM manipulation, event handling, task management, filtering, and dynamic UI updates.

## Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Filter tasks by **All, Active, and Completed**
- Display the number of remaining tasks
- Clear completed tasks
- Responsive and clean user interface
- Dynamic updates without page reloads

## Technologies Used

- **HTML5** — Application structure and semantic elements
- **CSS3** — Styling, layout, and responsive design
- **JavaScript** — DOM manipulation, event handling, filtering, and task management

## Project Structure

```text
to-do-list/
├── index.html
├── style.css
├── script.js
└── README.md
```

## File Overview

| File | Description |
|---|---|
| `index.html` | Contains the application structure and UI elements |
| `style.css` | Handles styling, layout, and visual design |
| `script.js` | Handles task management, DOM manipulation, filtering, and rendering |
| `README.md` | Project documentation |

## Functionality

The application maintains tasks in JavaScript and dynamically updates the interface based on the current task state.

Users can:

- Add a task through the input form
- Mark a task as completed using the checkbox
- Delete individual tasks
- View all, active, or completed tasks
- Clear all completed tasks
- View the number of remaining tasks

## DOM Manipulation

This project uses JavaScript DOM methods such as `querySelector`, `addEventListener`, and `createElement` to interact with the page. Task elements are created dynamically rather than building the entire list with `innerHTML`.

The `tasks` array acts as the main source of truth, while the `render()` function keeps the DOM synchronized with the current task data.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a modern web browser.

Alternatively, open the project in **Visual Studio Code** and use the **Live Server** extension.

## Learning Objectives

This project demonstrates practical experience with:

- DOM manipulation
- JavaScript event listeners
- Form handling
- Array-based state management
- Dynamic rendering
- Task filtering
- Responsive frontend development

## Author

**Kaif Ur Rehman**

---

*Frontend JavaScript practice project.*
