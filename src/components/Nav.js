import { displayMain } from '../layouts/Main'
import { hideIntro } from '../components/Intro'

export const Nav = () => {
    const ul = document.createElement('ul')
    ul.style = 'display: flex; flex-direction: row;'
    const li1 = document.createElement('li')
    const loginBtn = document.createElement('button')
    loginBtn.id = 'log'
    loginBtn.className = 'btn'
    loginBtn.textContent = 'Login'
    loginBtn.addEventListener('click', () => {
        hideIntro(true)
        loginBtn.style.display = 'none'
        registerBtn.style.display = 'block'
        displayMain(true)
    })
    const logIcon = document.createElement('i')
    logIcon.className = 'fas fa-sign-in-alt'
    logIcon.style.marginLeft = '5px'
    loginBtn.appendChild(logIcon)

    const li2 = document.createElement('li')
    const registerBtn = document.createElement('button')
    registerBtn.id = 'reg'
    registerBtn.className = 'btn'
    registerBtn.textContent = 'Logout'
    registerBtn.addEventListener('click', () => {  
        hideIntro(false)   
        loginBtn.style.display = 'block'
        registerBtn.style.display = 'none'
        displayMain(false)
    })
    const regIcon = document.createElement('i')
    regIcon.className = 'fas fa-sign-out-alt'
    regIcon.style.marginLeft = '5px'
    registerBtn.appendChild(regIcon)

    li1.appendChild(loginBtn)
    li2.appendChild(registerBtn)
    ul.append(li1, li2)
    return ul
}