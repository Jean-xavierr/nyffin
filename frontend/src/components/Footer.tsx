import React from 'react';
import SocialBar from '~/src/components/SocialBar';
import NyffinLogo from './Svg/NyffinLogo';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-nyffinBlack text-white">
        <div className="w-[1090px] m-auto">
          <div className="grid grid-cols-2">
            <NyffinLogo />
            <SocialBar className="w-[300px] flex basis-full" />
            <p>nyffin.esport@gmail.com</p>
            <div>
              <a href="#About">About</a>
              <a href="#Teams">Teams</a>
              <a href="#Achievements">Achievements</a>
            </div>
          </div>
          <p>2022, FR - Nyffin Esports.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
