const img = document.querySelector('img')
img.addEventListener('click', changeImg)
var num, sum = 'y'
function changeImg() {
    if (num < 7) {
        num++
    } else {
        num = 1
    }
    img.src = `./imgs/frame-${num}.gif`
}