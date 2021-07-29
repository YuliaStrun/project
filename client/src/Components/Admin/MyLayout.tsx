import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';

import { Menu } from './Menu';

export const MyLayout = (props: LayoutProps): JSX.Element => <Layout {...props} appBar={() => <></>} menu={Menu} />;
