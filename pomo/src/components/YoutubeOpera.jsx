import React from "react";
import PropTypes from "prop-types";
import './yt.css';

const YoutubeOpera = () => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="150"
      src={`https://www.youtube.com/embed/VB6SIKl8Md0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      class="yt-videos"
    />
  </div>
);

YoutubeOpera.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeOpera;
