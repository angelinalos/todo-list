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
  
  // Elements
  function createElement(tag, className, text = "", style) {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    element.style = style
    return element
  }