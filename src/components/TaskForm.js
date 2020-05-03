import { addTask } from '../utility/utility'
import { renderTaskList } from '../layouts/Main'

export const TaskForm = () => {
    const div = document.createElement('div')
    div.style = 'display: flex; flex-direction: row; justify-content: space-evenly;'
    const label = document.createElement('label')
    label.textContent = 'Add task'
    label.htmlFor = 'desc'
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Task Name'
    input.id = 'desc'
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.id = 'addTask'
    submitBtn.className = 'btn'
    submitBtn.textContent = 'ADD'
    submitBtn.addEventListener('click', () => {
        addTask(input.value)
        renderTaskList()
    })

    div.append(label, input, submitBtn)
    return div
}