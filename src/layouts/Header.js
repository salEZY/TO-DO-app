import { Nav } from '../components/Nav'

export const Header = () => {
    const header = document.createElement('header')
    header.style = 'display: flex; flex-direction: row; justify-content: space-between;'

    const title = document.createElement('h2')
    title.textContent = 'TO DO APP'
    const addIcon = document.createElement('i')
    addIcon.className = 'fas fa-tasks'
    addIcon.style.marginLeft = '10px'
    title.appendChild(addIcon)

    header.append(title, Nav())
    return header
}