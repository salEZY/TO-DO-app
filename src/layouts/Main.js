import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'

export const Main = () => {
    const main = document.createElement('main')

    main.append(TaskForm(), TaskList())
    return main
}