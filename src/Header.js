import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="obHeader">
        <Row>
          <Col xs={8} md={8} xsOffset={2} mdOffset={2}>
            <h1><Link to="/" className="obMenuItem">Olga Blacker</Link></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={5} className="obMenuCol">
            <div style={{textAlign: 'right'}}>
              <Link to="/antiselfie" className="obMenuItem obMenuItemPage">#antiselfie - why</Link>
            </div>
          </Col>
          <Col xs={2} md={2} className="obMenuCol">
            <div style={{ borderRight: 'solid', borderLeft: 'solid', borderWidth: 1, paddingRight: 2, paddingLeft: 2}}>
              <Link to="/artist" className="obMenuItem obMenuItemPage">artist</Link>
            </div>
          </Col>
          <Col xs={5} md={5} className="obMenuCol">
            <div style={{textAlign: 'left'}}>
              <Link to="/underway" className="obMenuItem obMenuItemPage">underway</Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header