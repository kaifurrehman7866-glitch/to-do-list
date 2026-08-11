# Interactive To-Do List — DOM Manipulation

Ek to-do list app jo pure JavaScript (`document.querySelector`, `addEventListener`,
aur `document.createElement`) se banayi gayi hai — koi innerHTML string-building
poori list ke liye nahi ki gayi.

## Features
- Task add karna (form submit)
- Task complete mark karna (checkbox)
- Task delete karna
- Live counter — "X tasks remaining"
- Filter — All / Active / Completed
- Clear completed button

## Files
- `index.html` — structure
- `style.css` — styling
- `script.js` — saari logic (state array + DOM sync)

## Kaise chalayein
`index.html` ko seedha browser me open karein, ya VS Code me **Live Server**
extension se "Go Live" karein.

## DOM ↔ Data Sync
`index.html` ke andar "Notes" section me 3-4 sentences likhe hain is baare mein
ke DOM aur `tasks` array ko sync me kaise rakha gaya hai.
