import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class Footer extends Component {
  render() {
    return (
      // navbar-fixed-bottom
      <div className="obFooter footer">
        <Row>
          <Col xs={10} md={10} xsOffset={1} mdOffset={1}>
            <a href='https://www.facebook.com/olgablacker' target='_blank' className='obSocialLink'>
              <FontAwesome
                name='facebook'
                size='2x'
              />
            </a>
            <a href='https://twitter.com/olgablacker' target='_blank' className='obSocialLink'>
              <FontAwesome
                name='twitter'
                size='2x'
              />
            </a>
            <a href='https://www.instagram.com/olgablacker/' target='_blank' className='obSocialLink'>
              <FontAwesome
                name='instagram'
                size='2x'
              />
            </a>
            <a href='mailto:olga.blacker@gmail.com' target='_blank' className='obSocialLink'>
              <FontAwesome
                name='envelope-o'
                size='2x'
              />            
            </a>
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col xs={10} md={10} xsOffset={1} mdOffset={1}>
            <p>©olgablacker 2017. All rights reserved.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer