import React, { Component } from 'react';
import './Flag.css';

import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

class Flag extends Component {  
  render() {
    return (
    <Col className="col" md={3}>
      <Thumbnail src={this.props.jpgPath} alt={this.props.country}>
        <h3><span style={{textTransform: 'capitalize'}}>{this.props.country}</span></h3>
        <a href={this.props.tourismSite} target="_blank"><span style={{textTransform: 'capitalize'}}>{this.props.country}</span> Tourism Site</a>
      </Thumbnail>
    </Col>
    );
  }
}

export default Flag;