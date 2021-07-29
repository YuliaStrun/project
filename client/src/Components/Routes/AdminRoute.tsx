import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { MyLayout } from 'src/Components/Admin/MyLayout';
import { ProductCreate } from 'src/Components/Admin/posts/ProductCreate';
import { ProductEdit } from 'src/Components/Admin/posts/ProductEdit';
import { ProductList } from 'src/Components/Admin/posts/ProductList';

export const AdminRoute = (): JSX.Element => (
  <Admin layout={MyLayout} dataProvider={simpleRestProvider('https://localhost:5001/')} disableTelemetry>
    <Resource name="posts" list={ProductList} create={ProductCreate} edit={ProductEdit} />
  </Admin>
);
