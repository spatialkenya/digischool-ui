import React from 'react';
import {Link} from 'react-router-dom';
import Topbar from '../topbar/Topbar';

import '/home/geogirl/Downloads/digischool-ui-master/src/pages/about/About.css';

export default class About extends React.Component{
  render(){
    return(
      <div>
        <Topbar subhead={"About"}/>
        <div classname="heading">
        <br></br>
        <br></br>
        <h1>About DigiSchool Kenya</h1>
        <h3>DigiSchool Kenya</h3>
        </div>
        <div>
        <p>This is a management information system that brings together all Digischool information and
        visualizes it for better understanding and flow of the information on class one laptops. </p>
        </div>
      </div>
    );
  }
}
