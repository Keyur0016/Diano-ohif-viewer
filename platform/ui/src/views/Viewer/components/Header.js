import React from 'react';
import { NavBar, Svg, Icon, IconButton } from '../../../components';

const Header = () => {
  return (
    <NavBar className="justify-between border-b-4 border-black">
      <div className="flex flex-1 justify-between">
        <div className="flex items-center">
          <div className="mr-3 inline-flex items-center">
            {/* <Icon
              name="chevron-left"
              className="text-primary-active w-8 cursor-pointer"
              onClick={() => alert('Navigate to previous page')}
            /> */}
            <a href="#" className="ml-4">
              <img src="https://res.cloudinary.com/dryhptx96/image/upload/v1715699852/cloudimts_evortl.jpg" className="cloudimts-icon" alt="OHIF Logo" />
            </a>
        </div>
        {/* <div className="flex items-center">
          <span className="text-common-light mr-3 text-lg">FOR INVESTIGATIONAL USE ONLY</span>
          <IconButton
            variant="text"
            color="inherit"
            className="text-primary-active"
            onClick={() => {}}
          >
            <React.Fragment>
              <Icon name="settings" /> <Icon name="chevron-down" />
            </React.Fragment>
          </IconButton>
        </div> */}
      </div>
    </NavBar>
  );
};

export default Header;
