import React, { Component } from 'react';
import { Link } from 'react-router';
import DaythreeTile from '../components/DaythreeTile'

class DaythreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureArray: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/daythree`)
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

    let daythreeTiles = this.state.pictureArray.map(picture => {
      return(
        <DaythreeTile
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
              <Link to={'/videos'} className="navbar-link">Videos</Link>
              <Link to={'/dayone'} className="navbar-link">1/9</Link>
              <Link to={'/daytwo'} className="navbar-link">1/10</Link>
              <Link to={'/daythree'} className="navbar-link">1/11</Link>
              <Link to={'/dayfour'} className="navbar-link">1/12</Link>
              <Link to={'/dayfive'} className="navbar-link">1/13</Link>

            </div>
          </div>
        </ul>
        <div className="large-12 medium-12 small-12 column">
          {daythreeTiles}
        </div>
      </div>

    )
  }
}

export default DaythreeContainer;
