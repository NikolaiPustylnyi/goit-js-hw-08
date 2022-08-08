import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const userCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(userCurrentTime);

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));