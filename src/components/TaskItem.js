import { removeTask, checkTask } from "../utility/utility"
let count = 1

export const TaskItem = (task) => {
    const div = document.createElement('div')
    div.className = 'task-item'
    const p = document.createElement('p')
    p.textContent = task.desc
    p.className = 'task-desc'
    const inputDiv = document.createElement('div')
    inputDiv.style = 'display: flex; flex-direction: row; align-items: center;'
    const checkLbl = document.createElement('label')
    checkLbl.className = 'check-label'
    checkLbl.htmlFor = 'check'+count
    checkLbl.textContent = 'Done?'
    const check = document.createElement('input')
    check.id = 'check'+count++
    check.style.display = 'none'
    check.type = 'checkbox'
    check.checked = task.done
    if (check.checked) {
        p.style.textDecoration = 'line-through'
        p.style.opacity = '0.4'
    }
    checkLbl.addEventListener('change', (e) => {
        if (e.target.checked) {
            checkTask(task.id)
            p.style.textDecoration = 'line-through'
            p.style.opacity = '0.4'
        }else{
            p.style.textDecoration = 'none'
            p.style.opacity = '1'
        }      
    })
    const customSpan = document.createElement('span')
    customSpan.id = 'customCheck'
    checkLbl.append(check, customSpan)
    const deleteLbl = document.createElement('label')
    deleteLbl.htmlFor = 'del'+count
    deleteLbl.textContent = 'Delete'
    deleteLbl.style.fontSize = '20px'
    const x = document.createElement('button')
    x.className = 'remove-btn btn'
    x.id = 'del'+count++
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
