document.addEventListener("DOMContentLoaded", () => {

  // your code here
  //const task = document.getElementById("new-task-description")
  const form = document.querySelector("form")
  const tasks = document.querySelector("#tasks")

  form.addEventListener("submit",(e) => {
    e.preventDefault();
    const inputValue = e.target.task.value
    addElement(inputValue)
  })


function addElement(element) {
  let p = document.createElement("p")
  p.textContent = ` ${element} `
  tasks.appendChild(p)
}

});


