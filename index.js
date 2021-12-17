let tasks = [
    {
        id: 1,
        text: "=^.^=",
        isCompleted: false,
        date: new Date().toLocaleDateString()
    }
]
const root = document.querySelector("#root") 
const header = createHeader()
const main = createMain(tasks)
header.addEventListener('click', (event) => onHeaderClick(event))
root.append(header, main)

//   Header
function createHeader() {
    const header = createElement(
      "header",
      "flex flex-col gap-7 "
    )
    const btnAdd = createElement("button", "text-gray-100 rounded-full p-3 shadow-md shadow-lime-500 animate-pulse", "Add")
    const btnDelete = createElement("button", "text-gray-100 rounded-full p-3 shadow-md shadow-fuchsia-500", "Delete All")
    btnDelete.id = "delete"
    btnAdd.id = "add"
    header.append(btnAdd, btnDelete)
    return header
  }

  
// Handlers
const onHeaderClick = (event) => {
    switch (event.target.id) {
      case "add":
          if (document.getElementById('enter').value === ''){
              document.getElementById('enter').focus()
              break
          }
        const task = {
          id: tasks.length + 1 ,
          text: document.getElementById('enter').value,
          isCompleted: false,
          date: new Date().toLocaleDateString(),
        }
        tasks.push(task)
        render(tasks)
        break
      case "delete":
        tasks.length = 0
        render(tasks)
        break
    }
  }

// Render
function render(tasks) {
    const main = createMain(tasks)
    root.innerHTML = ""
    root.append(
      header,
      main
    )
  }

  // Main
function createMain(tasks) {
    const main = createElement("main", "main flex flex-col mx-9 my-3 gap-6")
    const input = createElement("input", "rounded-full border-2 border-lime-500 self-center shadow-sm shadow-lime-500 bg-black text-gray-100 px-2 lg:px-6")
    input.id = 'enter'
    main.append(input)
    tasks.forEach((task) => {
      const card = createCard(task)
      main.append(card)
    })
    return main
  }

// // Card
function createCard(task) {
    const card = createElement(
      "div",
      "flex flex-row justify-between relative place-items-center rounded-full shadow-md shadow-cyan-500 gap-4 px-1 lg:px-6 w-52 md:w-96"
    )
    card.id = task.id
    const input = createElement("input", "accent-gray-100")
    input.id = task.id
    input.type = "checkbox"
    input.checked = task.isCompleted
    // /////////// Active checkbox
    input.addEventListener('click', () => {
        if (input.checked) {
            task.isCompleted = true
            card.classList.remove('shadow-cyan-500')
            card.classList.add('shadow-red-500')
          } else {
            task.isCompleted = false
            card.classList.add('shadow-cyan-500')
            card.classList.remove('shadow-red-500')
          }
        })    
    const text = createElement(
        "span",
        "text-gray-100 text-sm break-words lg:break-normal", task.text
      )
      const date = createElement("span", "rounded-lg mx-3 text-white text-xs absolute bottom-0 right-0 mb-7 lg:mb-11 text-blue-600/75", 
      task.date
      )
      card.append(input, text, date, btnDelete)
    return card
  }
  
// Elements
function createElement(tag, className, text = "") {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
  }