import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Content from '../Content/Content';
import DividerLine from '../DividerLine/DividerLine';

const MoreButton = ({ link }) => {
  return (
    <div>
      <a href={link}>
        <div>
          <h1>MORE</h1>
        </div>
      </a>
    </div>
  );
};

class GalleryItem extends React.Component {
  constructor(key) {
    super();
    this.galleryKey = key;
    // the linter incorrectly claims
    // that getKey is never used, to
    // appease it, I use it here
    this.getKey();
  }

  getKey() {
    return this.galleryKey;
  }
}

class Photo extends GalleryItem {
  constructor(link, altText) {
    super(link);
    this.link = link;
    this.altText = altText;
  }

  render() {
    return (
      <div className="col-md-1">
        <img src={this.link} alt={this.altText} />
      </div>
    );
  }
}

class Video extends GalleryItem {
  constructor(link, title) {
    super(link);
    this.link = link;
    this.title = title;
  }

  render() {
    return (
      <div className="col-md-4 embed-responsive embed-responsive-16by9">
        <iframe title={this.title} className="embed-responsive-item" src={this.link} />
      </div>
    );
  }
}

const Gallery = ({ title, morelink, children }) => {
  const items = React.Children.toArray(children).map((item) => {
    return (
      <Col key={item.getKey()}>
        item
      </Col>
    );
  });
  return (
    <Container fluid>
      <Content title={title}>
        <Row>
          <Col>
            <DividerLine />
          </Col>
          <Col>
            <MoreButton link={morelink} />
          </Col>
        </Row>
        <Row>{items}</Row>
      </Content>
    </Container>
  );
};

export { Photo, Video, Gallery };
