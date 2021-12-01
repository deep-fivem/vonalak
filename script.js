window.onload = function() {
    document.getElementById('secret').style.display = 'none';
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var playing = false

async function secret() {
    var video = document.getElementById('secret')
    if (playing) {
        console.log('pressed while playing')
    } else {
        console.log('start playing')

        video.style.display = 'block';
        video.play();

        playing = true;

        await sleep(6900);

        console.log('aaa')
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';

        playing = false;
    }
};