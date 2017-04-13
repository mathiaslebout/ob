import React, { Component } from 'react'
import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class BackToHome extends Component {
  render() {
    return (
      <Link to="/" className="obMenuItem">
        <Row>
          <h4>back to gallery</h4>
        </Row>
        <Row>
          <Image src='assets/OBWeb.png' style={{height: 75}} />
        </Row>
      </Link>
    )
  }
}
