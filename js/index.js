document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('ppsbutt');
    const muteButton = document.getElementById('mute')
    const seekBar = document.getElementById('seek-bar');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');

    audio.volume = 0.07;

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.className = 'fas fa-pause-circle'
        } else {
            audio.pause();
            playPauseButton.className = 'fas fa-play-circle'
        }
    });
    muteButton.addEventListener('click', () => {
        if (audio.volume > 0) {
            audio.volume = 0;
            muteButton.className = 'fas fa-volume-xmark'
        } else {
            audio.volume = 0.07;
            muteButton.className = 'fas fa-volume-up'
        }
    });
    
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        seekBar.value = (currentTime / duration) * 100;
        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
    })

    seekBar.addEventListener('input', () => {
        const seekTo = (seekbar.value / 100) * audio.duration;
        audio.currentTime = seekTo;
    })
    
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });
});