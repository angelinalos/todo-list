let tasks = [
    //   {
    //     id: 0,
    //     text: "=^.^=",
    //     isComplited: false,
    //     date: new Date().toDateString(),
    //   },
    //   {
    //     id: 1,
    //     text: "(____((________()~~~",
    //     isComplited: false,
    //     date: new Date().toDateString(),
    //   },
    //   {
    //     id: 2,
    //     text: "c(¯¯)",
    //     isComplited: false,
    //     date: new Date().toDateString(),
    //   },
  ]
  
  // App
const root = document.querySelector("#root")
const header = createHeader()
const loading = createLoading()
const main = createMain(tasks)
header.addEventListener("click", (event) => onHeaderClick(event))
main.addEventListener("change", (event) => onMainChange(event))
root.append(header, loading, main)

// Handlers

// // Header handler
const onHeaderClick = (event) => {
    switch (event.target.id) {
      case "add":
        const task = {
          id: tasks.length ,
          text: event.target.previousElementSibling.value,
          isComplited: false,
          date: new Date().toDateString()
        }
        tasks.push(task)
        render()
        fill()
        break
      case "delete":
        tasks.length = 0
        render()
        fill()
        break
    }
  }

   // // Main handler

// // // add
const onMainChange = (event) => {
    let id = event.target.getAttribute("id")
    const root = document.querySelector("#root")
    const main = root.lastChild.children[event.target.id].children[1]
    if (id === event.target.id && event.target.checked === true) {
      main.classList.add("progress")
      main.classList.add("progress-bar")
      main.classList.add("progress-bar-striped")
      main.classList.add("progress-bar-animated")
      main.classList.add("text-secondary")
      main.style.width="2%"

  } else {main.classList.remove("progress")
    main.classList.remove("progress-bar")
    main.classList.remove("progress-bar-striped")
    main.classList.remove("progress-bar-animated")
    main.classList.remove("text-secondary")

  }
  }

//   Header
  function createHeader() {
    const header = createElement(
      "header",
      "d-flex  justify-content-center gap-2 mb-2 flex-grow-1 "
    )
    const input = createElement(
      "input",
      "input-group mt-2 mb-2 border border-danger w-50",
      ""
    )
    const btnAdd = createElement("button", "btn btn-outline-danger", "Add")
    const btnDelete = createElement("button", "btn btn-danger", "Delete All")
    btnDelete.id = "delete"
    input.id = "enterTask"
    btnAdd.id = "add"
    header.append(btnDelete, input, btnAdd)
    return header
  }

  // Render

// 1.
const render = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    const main = document.querySelector("#root")
    main.removeChild(main.lastChild)
  }

  // 2.
  const fill = () => {
    if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"))
      let main = createMain(tasks)
      main.addEventListener("change", (event) => onMainChange(event))
      main.addEventListener("click", (event) => onMainClick(event))
      root.append(main)
    }
  }

    // Loading
function createLoading() {
    const loading = createElement("div", 'd-flex justify-content-center mb-2')
    const spinner1 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    const spinner2 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    const spinner3 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    loading.append(spinner1,spinner2,spinner3)
    return loading
} 

// Main
function createMain(tasks) {
    const main = createElement("main", "d-flex flex-column  gap-2 ")
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
      "d-flex align-items-center gap-3 border border-danger"
    )
    const input = createElement("input", "form-check-input")
    const progress = createElement("div", "")
    input.id = task.id
    input.type = "checkbox"
    input.checked = task.isComplited
    const toDoText = createElement(
      "span",
      "text-break m-0 flex-grow-1",
      task.text
    )
    const date = createElement("span", "m-0 badge bg-danger", task.date)
    const btnDelete = createElement("button", "btn-close-white")
    btnDelete.id = task.id
    btnDelete.tag = "button"
    card.append(input, progress, toDoText, date, btnDelete)

    return card
  }

  // Elements
  function createElement(tag, className, text = "", style) {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    element.style = style
    return element
  }