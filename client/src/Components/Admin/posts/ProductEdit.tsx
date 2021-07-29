import React from 'react';
import { Edit, TextInput, NumberInput, SimpleForm, ImageInput, ImageField, ListProps } from 'react-admin';

import { FormatImage } from './FormatImage';

export const ProductEdit = (props: ListProps) => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput multiline source="description" />
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
  </Edit>
);
