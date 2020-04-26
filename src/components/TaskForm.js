import { addTask } from '../utility/utility'

export const TaskForm = () => {
    const div = document.createElement('div')

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Add task'
    input.id = 'desc'

    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'ADD!'
    submitBtn.addEventListener('click', addTask(input.value))

    div.append(input, submitBtn, document.createElement('hr'))
    return div
}