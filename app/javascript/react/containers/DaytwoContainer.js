import React, { Component } from 'react';
import { Link } from 'react-router';
import DaytwoTile from '../components/DaytwoTile'

class DaytwoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureArray: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/daytwo`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        pictureArray: response.artwork
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let daytwoTiles = this.state.pictureArray.map(picture => {
      return(
        <DaytwoTile
          key={picture.id}
          id={picture.id}
          title={picture.title}
          picture={picture.picture}
          description={picture.description}
        />
      )
    })

    return(
      <div>
        <ul>
          <div className="large-12 medium-12 small-12 column top-bar-full">
            <div className="large-4 medium-12 small-12 column left-name">
              <p className="navbar-name">Jose Maria De Andrés Flores</p>
              <span className="navbar-description">Trip to USA 2019</span>
            </div>
            <div className="large-7 medium-12 small-12 column right-links">
              <Link to={'/'} className="navbar-link">Home </Link>
              <Link to={'/dayone'} className="navbar-link">1/9</Link>
              <Link to={'/daytwo'} className="navbar-link">1/10</Link>
            </div>
          </div>
        </ul>
        <div className="large-12 medium-12 small-12 column">
          {daytwoTiles}
        </div>
      </div>

    )
  }
}

export default DaytwoContainer;