import * as Raven from 'raven-js';
import * as React from 'react';
import QrReader from 'react-qr-reader'

interface IMyComponentState { result :  string }

class Reader extends React.Component<{}, IMyComponentState> {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this)
  }
  public render(){
    return(
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
  private handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }
  private handleError(err){
    Raven.captureException(err, { extra: err });
  }
}

export default Reader;

