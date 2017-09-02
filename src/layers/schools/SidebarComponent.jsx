import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {Tabs, Tab} from 'material-ui/Tabs';

const UIComponent = (props) => {

  return (
    <div>
      <Tabs className="sidebar-tabs">
        <Tab label="Data">
          <div className="sidebar-tab-content">
            <div style={{
              padding: '15px'
            }}>
              <h4>Schools Layer</h4>

              <Checkbox label="Schools" checked={props.checkboxes.schools} onCheck={() => props.onCheckboxChange('schools')}/>

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
