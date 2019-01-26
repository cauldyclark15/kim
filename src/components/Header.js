import React from 'react';
import { Layout } from 'antd';

import HeaderLink from './partials/HeaderLink';

const { Header } = Layout;

function HeaderContainer() {
  return (
    <Header>
      <HeaderLink label='Seller Center' />
      <HeaderLink label='Download' />
      <HeaderLink label='Follow us on' />
      <HeaderLink label='Notifications' />
      <HeaderLink label='Help' />
      <HeaderLink label='Sign up' isAuth />
      <HeaderLink label='Login' isAuth />
    </Header>
  );
}

export default HeaderContainer;
