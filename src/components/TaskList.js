import { tasks } from "../utility/utility"
import { TaskItem } from './TaskItem'

export const TaskList = () => {
    const taskContainer = document.createElement('div')    
    tasks.forEach(task => taskContainer.appendChild(TaskItem(task)))
    return taskContainer
}
