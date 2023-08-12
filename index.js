const setScale = () => {
            let clientWidth = document.documentElement.clientWidth
            let clientHeight = document.documentElement.clientHeight
            let designWidth = document.getElementById('container').offsetWidth
            let designHeight = document.getElementById('container').offsetHeight
            let scale = Math.min((clientWidth / designWidth), (clientHeight / designHeight))
            document.querySelector('#container').style.transform = `scale(${scale}) translate(-50%,-50%)`
        }
        window.addEventListener('load', setScale)
        window.addEventListener('resize', setScale)
