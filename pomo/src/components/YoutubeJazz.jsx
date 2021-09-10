import React from "react";
import PropTypes from "prop-types";
import './yt.css';

const YoutubeJazz = () => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="150"
      src={`https://www.youtube.com/embed/LiCb4-4-BAQ`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      class="yt-videos"
    />
  </div>
);

YoutubeJazz.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeJazz;
