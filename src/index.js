import React from 'react';
import ReactDOM from 'react-dom';
import RoutedApp from './Router';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
