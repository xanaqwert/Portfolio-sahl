import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/xanaqwert"><BsTwitter/></a> 
    </div>
    <div>
    <a href="https://github.com/xanaqwert"><BsGithub/></a> 
    </div>
    <div>
    <a href="https://www.instagram.com/xanaqwerty/?hl=id"><BsInstagram/></a> 
    </div>
  </div>
);

export default SocialMedia;