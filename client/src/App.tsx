import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Camera from './components/Camera';
import logo from './logo.svg';

import './App.css';

class App extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
           foo: null,
        };
    }

  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the future of tool management</h1>
          </header>
          <p className="App-intro">
            To get starteqwad,sedsit <code>src/App.tsx</code> and save to reload.
          </p>
          <button
              className="more"
              onClick={this.getTools}>
              Try Again?
          </button>
          <Switch>
            <Route path="/id/:id" component={Camera} />
          </Switch>
        </div>
       </Router>
    );
  }

  public getQR = (id) => {
    fetch('/api/v1/employees/qrcode/' + id)
      .then(response => { this.setState({ response }); });
  }

  private getTools = () => {
    fetch('/api/v1/tools')
      .then(response => response.json())
      .then((foo) => { this.setState({ foo }); });
  }

  // private state = { tools: [] }

  // // Fetch tools after first mount
  // componentDidMount() {
  //   this.getTools();
  // }

  // getTools = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/v1/tools')
  //     .then(res => res.json())
  //     .then(passwords => this.setState({ passwords }));
  // }

}

export default App;
