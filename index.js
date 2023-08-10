const setScale = () => {
    let clientWidth = document.documentElement.clientWidth
    let clientHeight = document.documentElement.clientHeight
    let designWidth = 1920
    let designHeight = 1080
    let scale = Math.min((clientWidth / designWidth), (clientHeight / designHeight))
    document.querySelector('#container').style.transform = `scale(${scale}) translate(-50%,-50%)`
}
window.onload = setScale
window.onresize = setScale