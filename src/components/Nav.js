export const Nav = () => {
    const ul = document.createElement('ul')
    ul.style = 'display: flex; flex-direction: row;'
    const li1 = document.createElement('li')
    li1.style = 'list-style: none;'
    const loginBtn = document.createElement('button')
    loginBtn.textContent = 'Login'
    loginBtn.addEventListener('click', () => {
        loginBtn.style.display = 'none'
        registerBtn.style.display = 'block'
    })
    const li2 = document.createElement('li')
    li2.style = 'list-style: none;'
    const registerBtn = document.createElement('button')
    registerBtn.textContent = 'Logout'
    registerBtn.style = 'display: none; color: white; background-color: black;border: 0;outline: 0; padding: 5px;'
    registerBtn.addEventListener('click', () => {
        loginBtn.style.display = 'block'
        registerBtn.style.display = 'none'
    })

    li1.appendChild(loginBtn)
    li2.appendChild(registerBtn)
    ul.append(li1, li2)
    return ul
}