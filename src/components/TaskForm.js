import { addTask } from '../utility/utility'
import { renderTaskList } from '../layouts/Main'

export const TaskForm = () => {
    const div = document.createElement('div')
    div.id = 'task-form'
    const label = document.createElement('label')
    label.textContent = 'Task description'
    label.htmlFor = 'desc'
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Task Name'
    input.id = 'desc'
    const span = document.createElement('span')
    span.textContent = 'No task description!'
    span.style = 'display: none; padding-top: 7.5px; color: darkred;font-weight: bolder;font-size: 18px;'
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.id = 'addTask'
    submitBtn.className = 'btn'
    submitBtn.textContent = 'Add'
    submitBtn.addEventListener('click', () => {
        if (input.value === '') {
            span.style.display = 'block'
            setTimeout(() => {
                span.style.display = 'none'
            },3000)
        }
        addTask(input.value)
        renderTaskList()
    })

    div.append(label, input, span, submitBtn)
    return div
}