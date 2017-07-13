
import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import './FlagDisplay.css';
import Flag from '../flag/Flag'


class FlagDisplay extends Component {
  render() {
    return (
      <Grid className='grid'>
           <Row className='row'>
          <Flag jpgPath={require("../flag/assets/images/spain_flag.svg")} country="spain" tourismSite="http://www.spain.info/en_US/" />
          <Flag jpgPath={require("../flag/assets/images/italy_flag.svg")} country="italy" tourismSite="http://www.italy.info/en_US/" />
          <Flag jpgPath={require("../flag/assets/images/aruba_flag.svg")} country="aruba" tourismSite="http://www.aruba.info/en_US/" />
          <Flag jpgPath={require("../flag/assets/images/chile_flag.svg")} country="chile" tourismSite="http://www.chile.info/en_US/" />
        </Row>
      </Grid>
    );
  }
}

export default FlagDisplay;