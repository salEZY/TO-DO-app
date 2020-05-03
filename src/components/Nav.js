import { displayMain } from '../layouts/Main'

export const Nav = () => {
    const ul = document.createElement('ul')
    ul.style = 'display: flex; flex-direction: row;'
    const li1 = document.createElement('li')
    li1.style = 'list-style: none;'
    const loginBtn = document.createElement('button')
    loginBtn.id = 'log'
    loginBtn.className = 'btn'
    loginBtn.textContent = 'Login'
    loginBtn.addEventListener('click', () => {
        loginBtn.style.display = 'none'
        registerBtn.style.display = 'block'
        displayMain(true)
    })
    const li2 = document.createElement('li')
    li2.style = 'list-style: none;'
    const registerBtn = document.createElement('button')
    registerBtn.id = 'reg'
    registerBtn.className = 'btn'
    registerBtn.textContent = 'Logout'
    registerBtn.addEventListener('click', () => {
        loginBtn.style.display = 'block'
        registerBtn.style.display = 'none'
        displayMain(false)
    })

    li1.appendChild(loginBtn)
    li2.appendChild(registerBtn)
    ul.append(li1, li2)
    return ul
}