import React, { useState } from 'react';
import Col from './components/Col'
import img from './images/hh.jpg'

export default function App() {

  return (
    <div >
      <img src={img} className="img" />
      <table>
        <tbody>
          <tr>
            <Col />
          </tr>
        </tbody>
      </table>

    </div >
  );
}
