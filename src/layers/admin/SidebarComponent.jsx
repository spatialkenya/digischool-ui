import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {Tabs, Tab} from 'material-ui/Tabs';
import 'react-select/dist/react-select.css';

const UIComponent = (props) => {

  return (
    <div>
      <Tabs className="sidebar-tabs">
        <Tab label="Data">
          <div className="sidebar-tab-content">
            <div style={{
              padding: '15px'
            }}>
              <h4>County Layer</h4>

              <Checkbox label="Counties" checked={props.checkboxes.counties} onCheck={() => props.onCheckboxChange('counties')}/>
              <Checkbox label="Lot 2" checked={props.checkboxes.counties_lot2} onCheck={() => props.onCheckboxChange('counties_lot2')}/>
            </div>
          </div>
        </Tab>
        <Tab label="About">
          <div className="sidebar-tab-content">
            <div className="padded">
              <h4>Admin Layers</h4>
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
