import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import CaveeLogo from '../../assets/images/Website logo.PNG'
import '../../App.css';
import 'react-sticky-header/styles.css';
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import {Link} from 'react-router-dom';
// import Contact from "./components/Contact/Contact";
const Header = (props) => {

  return (
      <div>
        <div className='topHeader text-center'>
          <marquee className='text-white'><span className='deliveringHeader'>We are now delivering orders across India. Order Now on WhatsApp +91-8882422772.</span>Launch
            offer: <strong>FLAT 25% OFF </strong>+ <strong>FREE SHIPPING!</strong>
          </marquee>
        </div>
        <Navbar color="white" light expand="md">
          <NavbarBrand className='isMobile text-center m-auto cavelogoMobile'>
            <Link to="/" className='cavelogo'>
              <img src={CaveeLogo} alt='logo' className='w-50'/>
            </Link>
          </NavbarBrand>
          <Nav navbar className='row w-100 pl-40 text-center isDesktop'>
            <div className='col-md-3 navbarSpacing'>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
            </div>
            <div className='col-md-2 navbarSpacing'>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PRODUCTS
                </DropdownToggle>
                <DropdownMenu left className='navDropdownMenu'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h6 className='subHeadingNav'>
                        SINGLE HERBS
                      </h6>
                      <DropdownItem divider/>
                      <DropdownItem className='navDropdownItem'><Link
                          to='/ashwagandha'>ASHWAGANDHA</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'><Link to='/shilajit'>SHILAJIT</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'> <Link to='/triphala'>TRIPHALA</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'><Link to='/spirulina'>SPIRULINA</Link></DropdownItem>

                    </div>
                    <div className='col-md-6'>
                      <h6 className='subHeadingNav'>
                        MIXED HERBS
                      </h6>
                      <DropdownItem divider/>

                      <DropdownItem className='navDropdownItem'><Link to='/immunityBooster'>IMMUNITY
                        BOOSTER</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'><Link to='/hairWellness'>HAIR
                        WELLNESS</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'><Link to='/mindWellness'>MIND
                        WELLNESS</Link></DropdownItem>
                      <DropdownItem className='navDropdownItem'><Link to='/skinWellness'>SKIN
                        WELLNESS</Link></DropdownItem>

                    </div>
                  </div>

                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className='col-md-2'>
              <NavItem>
                <Link to="/" className='cavelogo'>
                  <img src={CaveeLogo} alt='logo' className='w-75'/>
                </Link>
              </NavItem>
            </div>

            {/*<div className='col-md-2 navbarSpacing'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                DISCOVER
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to='/about'>About CaveAyurveda</Link>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  <Link to='/blog'>Blog</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>*/}
            <div className='col-md-2 navbarSpacing'>
              <NavItem>
                <Link to='/about'>ABOUT US</Link>
              </NavItem>
            </div>
            <div className='col-md-3 navbarSpacing'>
              <NavItem>
                <Link to='/blog'>BLOG</Link>
              </NavItem>
            </div>


          </Nav>

          <Nav className='isMobile'>
            <PersistentDrawerLeft/>
          </Nav>
        </Navbar>
      </div>


  )
}


export default Header
