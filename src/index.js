function handleToDo(task) {
  const p = document.createElement('p') 
  const btn = document.createElement('button')
  const editBtn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  editBtn.addEventListener('click', handleEdit)
  btn.textContent = 'x'
  editBtn.textContent = 'edit'
  p.textContent = `${task} `
  p.appendChild(btn)
  p.appendChild(editBtn)
  document.querySelector("#tasks").appendChild(p)
}

function handleEdit() {
  const p = document.querySelector('p')
  let taskText = p.firstChild
  let currentText = p.nodeValue

  //Create an input field
  const inputField = document.createElement("input")
  inputField.type = "text"
  inputField.value = currentText;
  
  
  p.replaceChild(inputField, taskText)

  inputField.focus()

  inputField.addEventListener("blur", () => {

    let updatedTask = inputField.value
    
    p.replaceChild(document.createTextNode(updatedTask), inputField)
  })

}

function handleDelete() {
  const task = document.querySelector('p')
  task.remove()
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', e => {
    //Prevent Default
    e.preventDefault()
    //Grab text from description
    let newTask = e.target.new_task_description.value
    handleToDo(newTask)
  })
});

