import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'

const main = document.createElement('main')

export const Main = () => {
    main.appendChild(TaskForm())
    main.appendChild(TaskList())
    return main
}

export const renderTaskList = () => {
    main.replaceChild(TaskList(), document.querySelector('#tasks-container'))
}