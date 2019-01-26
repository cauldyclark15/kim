import React from 'react';

import './styles/header-link.css';

function HeaderLink({ label, isAuth }) {
  const linkClassName = isAuth ? 'auth link' : 'link';
  return (
    <a className={linkClassName} href='/'>
      {label}
    </a>
  );
}

export default HeaderLink;
