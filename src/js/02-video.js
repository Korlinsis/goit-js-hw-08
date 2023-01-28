import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function({seconds}) {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
}), 1000);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
