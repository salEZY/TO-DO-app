import { Nav } from '../components/Nav'

export const Header = () => {
    const header = document.createElement('header')
    header.style = 'display: flex; flex-direction: row;'

    const title = document.createElement('h2')
    title.textContent = 'TO DO APP'

    header.append(title, Nav())
    return header
}