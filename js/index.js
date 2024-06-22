document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('ppsbutt');
    const muteButton = document.getElementById('mute');
    const seekBar = document.getElementById('seek-bar');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');

    audio.volume = 0.07;

    function tryPlayAudio() {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.warn('DEBUG: Audio is playing');
                playPauseButton.className = 'fas fa-pause-circle';
            }).catch((error) => {
                console.error('Audio play was prevented:', error);
                playPauseButton.className = 'fas fa-play-circle';
                audio.play();
            });
        }
    }

    function stopAudioWhenClose() {
        const duration = audio.duration;
        const currentTime = audio.currentTime;

        if (currentTime >= duration) {
            console.warn('DEBUG: Audio was paused because time over')
            audio.pause();
            audio.currentTime = 0;
            playPauseButton.className = 'fas fa-play-circle';
        }
    }

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            console.warn('DEBUG: Audio is playing');
            playPauseButton.className = 'fas fa-pause-circle';
        } else {
            audio.pause();
            cconsole.warn('DEBUG: Audio is paused');
            playPauseButton.className = 'fas fa-play-circle';
        }
    });

    muteButton.addEventListener('click', () => {
        if (audio.volume > 0) {
            audio.volume = 0;
            muteButton.className = 'fas fa-volume-xmark';
        } else {
            audio.volume = 0.07;
            muteButton.className = 'fas fa-volume-up';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        seekBar.value = (currentTime / duration) * 100;
        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
        
        stopAudioWhenClose();
    });

    seekBar.addEventListener('input', () => {
        const seekTo = (seekBar.value / 100) * audio.duration;
        audio.currentTime = seekTo;
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });

    tryPlayAudio();
});

const button = document.getElementById('more');
const symbol = document.getElementById('circlebutton');

button.addEventListener('click', function() {
    if (symbol.classList.contains('fa-plus-circle')) {
        symbol.classList.remove('fa-plus-circle');
        symbol.classList.add('fa-minus-circle');
    } else {
        symbol.classList.add('fa-plus-circle');
    }
});

// async function getMoreInfo(owner, repo, path = null) {
//     const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
//     const headers = {};

//     try {
//         const response = await fetch(url, { headers });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.encoding === 'base64') {
//             const content = atob(data.content);
//             document.getElementById('moreinfo').textContent = content;
//         } else {
//             document.getElementById('moreinfo').textContent = 'File is not base64 encoded';
//         }
//     } catch (error) {
//         console.error('Error fetching file content:', error);
//         document.getElementById('moreinfo').textContent = 'Error fetching file content';
//     }
// }

// const owner = '1dontkillme';
// const repo = 'dontkillmewtf';
// const path = 'moreinfo.md';

// getMoreInfo(owner, repo, path);