/**
 * Created by Yun on 2015-12-02.
 */

import React from 'react';
import './MyNavBar.less';

import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Navbar, NavbarBrand, Nav, NavItem,
} from 'react-bootstrap';

const linksInternal = [
  // {section: 'offdocs', href: 'https://facebook.github.io/react-native/docs/getting-started.html', text: '官方文档(英文)'},
  // {section: 'blogs', href: '/blog/', text: '博客'},
  // {section: 'releases', href: 'https://github.com/facebook/react-native/releases', text: '版本'},
  // {section: 'showcase', href: 'https://facebook.github.io/react-native/showcase.html', text: '案例'},
  {section: 'docs', href: '/docs/getting-started.html', text: '文档', hash: '#content'},
  {section: 'bbs', href: 'http://bbs.react-native.cn/', text: '讨论', hot: true, newTab: false},
  {section: 'about', href: '/about.html', text: '关于', hash: '#content'},
];
const linksExternal = [
  {section: 'github', href: 'https://github.com/facebook/react-native', text: 'GitHub'},
  {section: 'react', href: 'http://facebook.github.io/react-native', text: 'in English'},
];


export default class MyNavBar extends React.Component {
  createLink(v) {
    const external = /^\w+\:/.test(v.href);

    const newTab = v.newTab !== null ? v.newTab : external;

    return (external || newTab) ? (
      <NavItem key={v.section} href={v.href} target={newTab ? '_blank' : '_self'}>
        {v.text}
        {v.hot && <div className = "hotSign"><img src = {require('../images/hot.png')}/></div>}
      </NavItem>
    ) : (
      <LinkContainer to={v.href} key={v.section} hash={v.hash}><NavItem>
        {v.text}
        {v.hot && <div className = "hotSign"><img src = {require('../images/hot.png')}/></div>}
      </NavItem></LinkContainer>
    );
  }
  render() {
    return (
      <div>
        <Navbar className="nav-main">
          <Navbar.Header>
            <NavbarBrand>
              <Link to="/">
                <img src={require('../images/header_logo.png')} />
                React Native
              </Link>
            </NavbarBrand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse eventKey={0}>
            <Nav>
              {
                linksInternal.map(v=>this.createLink(v))
              }
            </Nav>
            <Nav pullRight>
              {
                linksExternal.map(v=>this.createLink(v))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navbar-placeholder"></div>
      </div>
    );
  }
}
