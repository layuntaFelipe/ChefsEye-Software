import React from 'react';
import { Link } from 'react-router-dom';
import personIcon from '../images/personIcon.svg';
import logo from '../images/logo.svg';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';


function Header({itemOn}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const headerLinkNames = ['Panel', 'Manage', 'Kitchen', 'Menu', 'Create QR'];
  const headerLinksURL = ['/', '/manage', '/kitchen', '/menu', '/qrcode'];

  const id = open ? 'simple-popover' : undefined;

  return (
    <header className='containerHeader'>
      <img src={logo} alt="" />
      <ul className='headerList'>
        {
          headerLinkNames.map((links, index) => {
            return (
              <li><Link className={index === itemOn ? 'active headerLink' : 'headerLink'} key={index} to={headerLinksURL[index]}>{links}</Link></li>
            );
          })
        }
      </ul>
      <div className="profile" aria-describedby={id} variant="contained" onClick={handleClick}>
        <h4>Restaurant 1</h4>
        <img src={personIcon} alt="" />
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          Add another account
        </MenuItem>
        <MenuItem>
          Settings
        </MenuItem>
        <MenuItem>
          Logout
        </MenuItem>
      </Menu>
    </header>
  )
}

export default Header