import Sound from 'react-sound';
import jazz from '../jazz.mp3';

const PlayJazz = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return(
    <Sound
        url={ jazz }
        playStatus={ Sound.status.PLAYING }
        playFromPosition={ 300 }
        onLoading={ handleSongLoading }
        onPlaying={ handleSongPlaying }
        onFinishedPlaying={ handleSongFinishedPlaying }
    />
  );
}

export default PlayJazz;
