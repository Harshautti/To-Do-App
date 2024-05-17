


let addBtn = document.querySelector('.btn')
addBtn.addEventListener('click',()=>{
    let task = document.querySelector('.input').value
    // console.log(task)
    if(task !== '')
        {
          let newDiv = document.createElement('div')
          newDiv.classList.add('task')
          document.body.appendChild(newDiv)
          newDiv.className = 'task'
          let card = document.querySelector('.card')
          card.appendChild(newDiv)
          let checkbox = document.createElement('input')
          checkbox.type = 'checkbox'  
          checkbox.className = 'checkbox'
          newDiv.appendChild(checkbox)
          let newTask = document.createElement('p')
          newTask.innerText = task
          newDiv.appendChild(newTask)
          let delBtn = document.createElement('button')
          delBtn.innerText = 'delete'
          newDiv.appendChild(delBtn)
          checkbox.addEventListener('click',()=>{
            if(checkbox.checked)
                {
                    newTask.style.textDecoration = 'line-through'
                }
                else{
                    newTask.style.textDecoration = 'none'
                }
          })
          delBtn.addEventListener('click',()=>{
           newDiv.remove()
          })
         document.querySelector('.input').value = '' 
         
        }
       
})
