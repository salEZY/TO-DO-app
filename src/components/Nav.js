export const Nav = () => {
    const ul = document.createElement('ul')
    ul.style = 'display: flex; flex-direction: row;'
    const li1 = document.createElement('li')
    li1.style = 'list-style: none;'
    const loginBtn = document.createElement('button')
    loginBtn.textContent = 'Login'
    li1.appendChild(loginBtn)

    const li2 = document.createElement('li')
    li2.style = 'list-style: none;'
    const registerBtn = document.createElement('button')
    registerBtn.textContent = 'Register'
    li2.appendChild(registerBtn)
    ul.append(li1, li2)
    return ul
}