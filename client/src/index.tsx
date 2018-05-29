import * as Raven from 'raven-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
Raven
    .config('https://7a14edc681d241968023a56ee5ce2550@sentry.io/1215182')
    .install();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
