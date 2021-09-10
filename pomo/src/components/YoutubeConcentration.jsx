import React from "react";
import PropTypes from "prop-types";
import './yt.css';

const YoutubeConcentration = () => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="150"
      src={`https://www.youtube.com/embed/9Jmnu9NPPqQ`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeConcentration.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeConcentration;
