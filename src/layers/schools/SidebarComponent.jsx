import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Checkbox from 'material-ui/Checkbox';

const UIComponent = (props) => {

  return (
    <div>
      <Tabs className="sidebar-tabs">
        <Tab label="Data">
          <div className="sidebar-tab-content">
            <div style={{
              padding: '15px'
            }}>
              <h4>Lot 2 Primary Schools</h4>
              <Checkbox  label="All Schools" checked={props.checkboxes.schools_all} onCheck={() => props.onCheckboxChange('schools_all')}/>
              <Checkbox label="Schools Received" checked={props.checkboxes.schools_received} onCheck={() => props.onCheckboxChange('schools_received')}/>
              <Checkbox style={{backgroungColor:"red"}} label="Schools Not Received" checked={props.checkboxes.schools_not_received} onCheck={() => props.onCheckboxChange('schools_not_received')}/>
            </div>
          </div>
        </Tab>
        <Tab label="About">
          <div className="sidebar-tab-content">
            <div className="padded">
              <h4>Schools Layer</h4>
              <p>Sources for these data layers are as follows:</p>
              <p/>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default UIComponent;
