const root = document.querySelector("#root") 
const header = createHeader()

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

// Elements
function createElement(tag, className, text = "") {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
  }