import { removeTask } from "../utility/utility"

export const TaskItem = (task) => {
    const div = document.createElement('div')
    div.className = 'task-item'
    const p = document.createElement('p')
    p.textContent = task.desc

    const x = document.createElement('button')
    x.className = 'remove-btn btn'
    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'fas fa-trash'
    x.appendChild(deleteIcon)
    x.addEventListener('click',() => {
        removeTask(task.id)
        div.remove()
    })

    div.append(p, x)
    return div
}
