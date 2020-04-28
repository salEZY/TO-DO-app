import { addTask } from '../utility/utility'
import { renderTaskList } from '../layouts/Main'

export const TaskForm = () => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Add task'
    input.id = 'desc'
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'ADD!'
    submitBtn.addEventListener('click', () => {
        addTask(input.value)
        renderTaskList()
    })

    div.append(input, submitBtn, document.createElement('hr'))
    return div
}