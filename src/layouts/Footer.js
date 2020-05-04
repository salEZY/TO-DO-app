export const Footer = () => {
    const footer = document.createElement('footer')
    footer.style = 'display: flex; flex-direction: row; justify-content: space-between'
    const h4 = document.createElement('h4')
    h4.textContent = `Copyright \u00A9 2020`
    const git = document.createElement('a')
    git.className = 'git'
    git.textContent = 'GITHUB - SALEZY'
    git.href = 'https://github.com/salEZY'
    git.target = '_blank'

    footer.append(h4, git)
    return footer
}
