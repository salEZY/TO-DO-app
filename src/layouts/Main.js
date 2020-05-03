import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'

const main = document.createElement('main')
main.style.display = 'none'
const h1 = document.createElement('h1')
h1.className = 'title-list'
h1.textContent = 'Tasks'

export const Main = () => { 
    main.appendChild(TaskForm())
    main.appendChild(h1)
    main.appendChild(TaskList())
    return main
}

export const renderTaskList = () => {
    main.replaceChild(TaskList(), document.querySelector('#tasks-container'))
}

export const displayMain = (bool) => {
    bool ? main.style.display = 'block' : main.style.display = 'none'
}