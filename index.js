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

    // Loading
function createLoading() {
    const loading = createElement("div", 'd-flex justify-content-center mb-2')
    const spinner1 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    const spinner2 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    const spinner3 = createElement('div', 'spinner-grow spinner-grow-sm text-danger')
    loading.append(spinner1,spinner2,spinner3)
    return loading
} 

  // Elements
  function createElement(tag, className, text = "", style) {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    element.style = style
    return element
  }