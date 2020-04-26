export const Footer = () => {
    const footer = document.createElement('footer')
    const h4 = document.createElement('h4')
    h4.textContent = `Copyright \u00A9 2020`

    footer.appendChild(h4)
    return footer
}
