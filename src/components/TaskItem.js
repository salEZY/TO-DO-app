import { removeTask, checkTask } from "../utility/utility"

export const TaskItem = (task) => {
    const div = document.createElement('div')
    div.className = 'task-item'
    const p = document.createElement('p')
    p.textContent = task.desc
    p.style = 'margin-left: 10px; font-size: 20px;'
    const inputDiv = document.createElement('div')
    inputDiv.style = 'display: flex; flex-direction: row; align-items: center;'
    const checkLbl = document.createElement('label')
    checkLbl.className = 'check-label'
    checkLbl.htmlFor = 'check'
    checkLbl.textContent = 'Done?'
    checkLbl.addEventListener('click', ()=> {
        checkTask(task.id)
        p.style.textDecoration = 'line-through cadetblue'
    })
    const check = document.createElement('input')
    check.id = 'check'
    check.type = 'checkbox'
    const customSpan = document.createElement('span')
    customSpan.id = 'customCheck'
    checkLbl.append(check, customSpan)
    const x = document.createElement('button')
    x.className = 'remove-btn btn'
    x.id = 'del'
    const deleteLbl = document.createElement('label')
    deleteLbl.htmlFor = 'del'
    deleteLbl.textContent = 'Delete'
    deleteLbl.style.fontSize = '20px'
    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'fas fa-trash'
    x.appendChild(deleteIcon)
    x.addEventListener('click',() => {
        removeTask(task.id)
        div.remove()
    })

    inputDiv.append(checkLbl, deleteLbl, x)    
    div.append(p, inputDiv)
    return div
}
