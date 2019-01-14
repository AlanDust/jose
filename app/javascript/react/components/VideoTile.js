import React from 'react';

const VideoTile = props => {

  return(
    <div>
      <div className="large-12 medium-12 small-12 column showpage-images">
        <video width="320" height="240" controls src={props.video} type="video/mp4">
        </video>
        <h2 className="showpage-text description-text">{props.description}</h2>
      </div>
    </div>
  )
}

export default VideoTile;
