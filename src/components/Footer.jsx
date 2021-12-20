import React from 'react';

import facebookIcon from '../img/icon_fb.png';
import flickrIcon from '../img/icon_flickr.png';
import mailIcon from '../img/icon_mail.png';
import youtubeIcon from '../img/icon_youtube.png';

const Footer = () => {
  return (
    <div className="footer col-md-12">

      <a href="https://www.facebook.com/WaterlooRocketry/">
        <img src={facebookIcon} alt="Facebook Icon" />
      </a>
      <a href="mailto:contact@waterloorocketry.com">
        <img src={mailIcon} alt="Mail Icon" />
      </a>
      <a href="https://www.flickr.com/photos/64315121@N05/">
        <img src={flickrIcon} alt="Flickr Icon" />
      </a>
      <a href="https://www.youtube.com/user/uwrocketry">
        <img src={youtubeIcon} alt="YouTube Icon" />
      </a>
    </div>

  );
};

export default Footer;
