import React from 'react';
import { Link } from 'react-router';


const Homepage = props => {

  let NavBar = React.createClass({
    render() {
      return (
        <div>
          <ul>
            <div className="large-12 medium-12 small-12 column top-bar-full">
              <div className="large-4 medium-12 small-12 column left-name">
                <p className="navbar-name">Jose Maria De Andrés </p>
                <span className="navbar-description">Trip to USA 2019</span>
              </div>
              <div className="large-7 medium-12 small-12 column right-links">
                <Link to={'/'} className="navbar-link">Home </Link>
                <Link to={'/dayone'} className="navbar-link">1/9</Link>

              </div>
            </div>
          </ul>
        </div>
      )
    }
  });

  return(
    <div>
      <div className="large-12 medium-12 small-12 column">
        <NavBar />
      </div>
      <div className="large-12 medium-12 small-12 column">
        <img className="homepage-image" src="https://s3.amazonaws.com/patri-website/JoseMaria/dayone/1.1.jpg" />
      </div>
    </div>
  )
}

export default Homepage;