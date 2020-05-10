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
    span.textContent = 'No task description'
    const warning = document.createElement('i')
    warning.className = 'fas fa-exclamation-triangle'
    warning.style.marginLeft = '2px'
    span.appendChild(warning)
    span.style = 'display: none; padding-top: 7.5px; color: darkred;font-weight: bolder;font-size: 18px;'
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.id = 'addTask'
    submitBtn.className = 'btn'
    submitBtn.textContent = 'Add'
    const addIcon = document.createElement('i')
    addIcon.className = "fas fa-plus"
    addIcon.style.marginLeft = '5px'
    submitBtn.appendChild(addIcon)
    submitBtn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            addTask(input.value)
            renderTaskList()
        }else{
            span.style.display = 'block'
            setTimeout(() => {
                span.style.display = 'none'
            },3000)
        }
    })
    

    div.append(label, input, span, submitBtn)
    return div
}