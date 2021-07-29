import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { Sizes } from 'src/api/interfaces/Sizes';

interface Props {
  productsSizes: Sizes[];
  setNewSize: (newSize: string) => void;
}
export const SizeField: React.FC<Props> = ({ productsSizes, setNewSize }) => {
  const [size, setSize] = useState(productsSizes[0]?.size ?? '');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string);
    setNewSize(event.target.value as string);
  };

  return (
    <FormControl>
      {productsSizes.length > 0 && (
        <>
          <InputLabel htmlFor="uncontrolled-native">Size</InputLabel>
          <NativeSelect id="demo-customized-select-native" value={size} onChange={handleChange}>
            {productsSizes.map((currentValue: Sizes) => (
              <option key={`size-${currentValue.id}`} value={currentValue.size}>
                {currentValue.size}
              </option>
            ))}
          </NativeSelect>
        </>
      )}
      {productsSizes.length === 0 && <div> The product is out of stock </div>}
    </FormControl>
  );
};
