import React, { Component } from 'react';
import './Tabular.css';

import {Table} from 'react-bootstrap';

class Tabular extends Component {  
  render() {
    return (
    <div className="infotable">
            
        <h3>Some information about the places I would like to visit</h3>
        
   <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Destination</th>
        <th>Capital</th>
        <th>Official Language</th>
        <th>Population</th>
        <th>National Bird</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Spain</td>
        <td>Madrid</td>
        <td>Spanish</td>
        <td>46.77 million</td>
        <td>Eagle</td>
      </tr>
      <tr>
        <td>Italy</td>
        <td>Rome</td>
        <td>Italian</td>
        <td>59.83 million</td>
        <td>Bluebirds</td>
      </tr>
      <tr>
         <td>Aruba</td>
        <td>Oranjestad</td>
        <td>Dutch</td>
        <td>102,911</td>
        <td>Aruban Burrowing Owl</td>
      </tr>
       <tr>
         <td>Chile</td>
        <td>Santiago</td>
        <td>Spanish</td>
        <td>17.62 million</td>
        <td>Andean condor</td>
      </tr>
    </tbody>
  </Table>
  </div>
    );
  }
}

export default Tabular;