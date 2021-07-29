import React from 'react';
import { Create, TextInput, NumberInput, SimpleForm, ImageInput, ImageField, ListProps } from 'react-admin';

import { FormatImage } from './FormatImage';

export const ProductCreate = (props: ListProps) => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <ImageInput
        source="picture"
        format={FormatImage}
        accept="image/*"
        label="Product Cover"
        placeholder={<p>Drop your picture here</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="price" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);
