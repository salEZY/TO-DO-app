export const Footer = () => {
    const footer = document.createElement('footer')
    footer.style = 'display: flex; flex-direction: row; justify-content: space-between'
    const h4 = document.createElement('h4')
    h4.textContent = `Copyright \u00A9 2020`
    const git = document.createElement('a')
    git.className = 'git'
    git.textContent = 'salEZY'
    git.href = 'https://github.com/salEZY'
    git.target = '_blank'
    const gitIcon = document.createElement('i')
    gitIcon.className = 'fab fa-github'
    gitIcon.style.marginLeft = '5px'
    git.appendChild(gitIcon)

    footer.append(h4, git)
    return footer
}
