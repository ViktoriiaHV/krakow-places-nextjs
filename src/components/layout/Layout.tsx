import React from 'react';

import NavHeader from './NavHeader';
import classes from './Layout.module.css';

type LayoutProps = {
    children?: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <NavHeader />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;