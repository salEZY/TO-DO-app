import { removeTask } from "../utility/utility"

export const TaskItem = (task) => {
    const div = document.createElement('div')
    div.className = 'task-item'
    const p = document.createElement('p')
    p.textContent = task.desc

    const x = document.createElement('button')
    x.className = 'remove-btn btn'
    x.textContent = 'X'
    x.addEventListener('click',() => {
        removeTask(task.id)
        div.remove()
    })

    div.append(p, x)
    return div
}
