import React from 'react';

const DayeightTile = props => {

  return(
    <div>
      <div className="large-12 medium-12 small-12 column showpage-images">
        <img src={props.picture} />
        <h2 className="showpage-text description-text">{props.description}</h2>
      </div>
    </div>
  )
}

export default DayeightTile;
