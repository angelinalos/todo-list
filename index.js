const root = document.querySelector("#root") 

// Elements
function createElement(tag, className, text = "") {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
  }