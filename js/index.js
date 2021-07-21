const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false

    console.log('le diste click al boton play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true

    console.log('le diste click al boton pause')
}

function handleBackward(){
    $video.currentTime -= 10
    console.log('Retrocediste 10 segundos')

}

function handleForward(){
    $video.currentTime += 10
    console.log('Avanzaste 10 segundos',$video.currentTime)
}

function handleLoaded(){
    $progress.max = $video.duration
    console.log('Ha cargado mi video')
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    console.log('holi', $video.currentTime)
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log('$progress.value')
}

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)