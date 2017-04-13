import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

import ImageGallery from 'react-image-gallery'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

const config = require('../config.json')

class Home extends Component {
  render() {
    const images = config.gallery.home

    return (
      <Col xs={10} md={10} mdOffset={1} xsOffset={1} className="obHome">
        <ImageGallery 
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}          
          showThumbnails={false}
          lazyLoad={true}
          />
      </Col>
    )
  }
}

export default Home