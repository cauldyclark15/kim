import React from 'react';
import { Layout, Row, Col } from 'antd';

import HeaderLink from './partials/HeaderLink';
import './styles/header.css';

const { Header } = Layout;

function HeaderContainer() {
  return (
    <Header>
      <Row>
        <Col span={12}>
          <HeaderLink label='Seller Center' />
          <span className='h__spacer10' />
          <HeaderLink label='Download' />
          <span className='h__spacer10' />
          <HeaderLink label='Follow us on' />
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <HeaderLink label='Notifications' />
          <span className='h__spacer10' />
          <HeaderLink label='Help' />
          <span className='h__spacer10' />
          <HeaderLink label='Sign up' isAuth />
          <span className='h__spacer10' />
          <HeaderLink label='Login' isAuth />
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderContainer;
