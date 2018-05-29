import * as React from 'react';
// import SVG from 'react-inlinesvg';
// import ReactSVG from 'react-svg'
import Qrcodereader from './Qrcodereader';

import Loader from './Loader';

const Camera = (props) => {   
  return (
    <div>
      <h2>{props.match.params.id}</h2>
      <Qrcodereader />
    </div>
)}

export default Camera

      // <SVG
      //   src={'/api/v1/employees/qrcode/' + props.match.params.id}
      //   cacheGetRequests={true}
      //   className={'QRCode'}        
      // />


      // <img src={'/api/v1/employees/qrcode/' + props.match.params.id}/>
