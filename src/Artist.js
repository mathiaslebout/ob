import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BackToHome } from './Utils' 

const config = require('../config.json')

class Artist extends Component {
  render() {
    return (
      <div className='obArtist'>
        <Row className='obPageText'>
          <Col xs={10} md={6} lg={4} xsOffset={1} mdOffset={3} lgOffset={4}>
            <div dangerouslySetInnerHTML={{ __html: config.page.artist.join('\n') }} />
          </Col>
        </Row>
        <BackToHome />
      </div>          
    )
  }
}

export default Artist