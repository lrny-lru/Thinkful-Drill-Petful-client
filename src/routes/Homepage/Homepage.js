import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hompage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="page-container">
          <h1 className="welcome">Welcome!</h1>
          <div className="process-container">
            <section id="yellow">
              <h2>What you need to know:</h2>
              <p>
                In order to adopt one of our friends, you should add your name to the list of those looking to adopt. Please keep in mind, while you can view all our furry friends, only those up for immediate adoption will be available. We are a fair Adoption service that  believe all pets should be given the chance for a loving home
            </p>
              <h3>
                Ready to adopt?
              <br />
              Click{' '}
                <Link className="adopt" to="/adoption">
                  here
              </Link>{' '}
              to begin the process!
            </h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
