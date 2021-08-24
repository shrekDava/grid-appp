import React from 'react';
import {Link} from 'react-router-dom'

import './tab-panel.css';

const TabPanel = () => {
  return (
    <div className="header d-flex">  
      <ul className="d-flex">
        <li>
          <Link to="/left/">Left</Link>
        </li>
        <li>
          <Link to="/middle/">Middle</Link>
        </li>
        <li>
          <Link to="/right/">Right</Link>
        </li>
      </ul>
    </div>
  );
};

export default TabPanel;