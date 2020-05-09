const div = document.createElement('div')
div.className = 'intro-section'

export const Intro = () => {
    const p = document.createElement('p')
    p.textContent = 'Create tasks and follow through'
    const span = document.createElement('span')
    span.textContent = 'Login to start!'
    div.append(p, span)
    return div
}

export const hideIntro = (bool) => {
    bool ? div.style.display = 'none' : div.style.display = 'block'
}