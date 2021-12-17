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

// Elements
function createElement(tag, className, text = "") {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
  }