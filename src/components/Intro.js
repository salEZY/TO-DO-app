const div = document.createElement('div')
div.className = 'intro-section'

export const Intro = () => {
    const canvas = document.createElement('canvas')
    canvas.id = 'myCanvas'
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setInterval(() => {
        drawTriangle(canvas, ctx)
    }, 1000)
    setInterval(() => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    },20000)  
    div.appendChild(canvas)
    const h1 = document.createElement('h1')
    h1.textContent = 'Welcome TO DO App'
    h1.className = 'title-list'
    const p = document.createElement('p')
    p.textContent = 'Login to start adding to do tasks!'
    div.append(h1, p)
    return div
}

export const hideIntro = (bool) => {
    bool ? div.style.display = 'none' : div.style.display = 'block'
}

const drawTriangle = (canvas, ctx) => {
    let a = generateRandom(canvas.width)
    let b = generateRandom(canvas.height)
    let c = generateRandom(canvas.height)
    ctx.beginPath();
    ctx.strokeStyle = 'cadetblue'
    ctx.lineWidth = generateRandom(1)+1.5
    ctx.moveTo(a, b);
    ctx.lineTo(a, c);
    ctx.lineTo(b, c);
    ctx.closePath();
    ctx.stroke();
}

const generateRandom = (num) => {
    return Math.floor(Math.random()*num);
}