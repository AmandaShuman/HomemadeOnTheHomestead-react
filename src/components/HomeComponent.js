import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="introduction">
            <div className="caption">
              <h1 className="text-center text-white"><strong>We help people with</strong></h1>
              <h2 className="text-center text-white">Adulting • Finances • Gardening • Homesteading</h2>
              <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#signUpModal">Sign up now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;