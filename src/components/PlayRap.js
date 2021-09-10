import Sound from 'react-sound';
import rap from '../rap.mp3';

const PlayRap = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return(
    <Sound
        url={ rap }
        playStatus={ Sound.status.PLAYING }
        playFromPosition={ 300 }
        onLoading={ handleSongLoading }
        onPlaying={ handleSongPlaying }
        onFinishedPlaying={ handleSongFinishedPlaying }
    />
  );
}

export default PlayRap;
