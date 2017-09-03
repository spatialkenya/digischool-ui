import React from 'react';
import Topbar from '../topbar/Topbar';
import $ from "jquery";
import "jquery-ui-bundle"
import "pivottable/dist/pivot";
import "pivottable/dist/gchart_renderers"

import './Analytics.css';
import "pivottable/dist/pivot.css"

export default class Analytics extends React.Component {
  componentDidMount() {
    $(function() {
      $("#output").pivotUI([
        {
          color: "blue",
          shape: "circle"
        }, {
          color: "red",
          shape: "triangle"
        }
      ], {
        rows: ["color"],
        cols: ["shape"]
      });
    });
  }
  render() {
    return (
      <div>
        <Topbar subhead={"Analytics"}/>
        <div className="fullpage">
          <div className="row">
            <div id="output">
              <p>Loading Please wait</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
