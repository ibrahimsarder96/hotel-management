import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../../assets/logo.png';
import "./Header.css";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" >
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src={logo} alt="logo" width={100} />

        {/* menu */}
        {/* <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        > */}
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            // style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">
              <a href="er.ibrahimsarder@gmail.com">Contact</a>
            </button>
          </div>
        {/* </OutsideClickHandler> */}

        {/* for medium and small screens */}
        {/* <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div> */}
      </div>
    </section>
  );
};

export default Header;