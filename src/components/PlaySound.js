import Sound from 'react-sound';
import ring from '../ring.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return(
    <Sound
        url={ ring }
        playStatus={ Sound.status.PLAYING }
        playFromPosition={ 300 }
        onLoading={ handleSongLoading }
        onPlaying={ handleSongPlaying }
        onFinishedPlaying={ handleSongFinishedPlaying }
    />
  );
}

export default PlaySound;
