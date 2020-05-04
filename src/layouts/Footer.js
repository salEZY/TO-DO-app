export const Footer = () => {
    const footer = document.createElement('footer')
    footer.style = 'display: flex; flex-direction: row; justify-content: space-between'
    const h4 = document.createElement('h4')
    h4.textContent = `Copyright \u00A9 2020`
    const git = document.createElement('a')
    git.textContent = 'GitHub - salEZY'
    git.href = 'https://github.com/salEZY'
    git.target = '_blank'
    git.style = 'margin: 18px 20px; text-decoration: none; color: #a0785f; font-size: 20px;font-weigth: bolder; text-shadow: 2px 2px 1px white'

    footer.append(h4, git)
    return footer
}
