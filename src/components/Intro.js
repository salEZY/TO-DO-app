const div = document.createElement('div')
div.className = 'intro-section'

export const Intro = () => {
    const canvas = document.createElement('canvas')
    canvas.width = innerWidth
    canvas.height = innerHeight
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setInterval(() => {drawTriangle(ctx)}, 1000)
    div.appendChild(canvas)
    return div
}

export const hideIntro = (bool) => {
    bool ? div.style.display = 'none' : div.style.display = 'block'
}

const drawTriangle = (ctx) => {
    let a = generateRandom(2000)
    let b = generateRandom(700)
    let c = generateRandom(2000)
    ctx.beginPath();
    ctx.strokeStyle = 'cadetblue'
    ctx.lineWidth = generateRandom(5)
    ctx.moveTo(a, b);
    ctx.lineTo(b, c);
    ctx.lineTo(a, c);
    if (Math.random() > .5) {
        ctx.fillStyle = 'cadetblue'
        ctx.fill()
    }else{
        ctx.closePath();
        ctx.stroke();
    } 
}

const generateRandom = (num) => {
    return Math.floor(Math.random()*num);
}