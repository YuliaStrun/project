import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { useQuery } from 'src/hooks/useQuery';

import { useStyles, theme } from './Filtering.styles';

interface Props {
  setNewFilters: (newValueFrom: number, newValueTo: number, newSize: string) => void;
}
const TIMEOUT_BETWEEN_UPDATING_INFO = 1000;

export const Filtering: React.FC<Props> = ({ setNewFilters }) => {
  const classes = useStyles();
  const [minPrice, updateMinPrice] = useQuery('minPrice');
  const [maxPrice, updateMaxPrice] = useQuery('maxPrice');
  const [size, updateSize] = useQuery('size');
  const sizeList = ['42', '44', '46', '48', '50'];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    updateSize(event.target.value as string);
  };

  const handleUpdateMinPrice = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (!isNaN(Number(event.target.value)) && (event.target.value as string).length < 7) {
      updateMinPrice(event.target.value as string);
    } else {
      updateMinPrice('');
    }
  };

  const handleUpdateMaxPrice = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (!isNaN(Number(event.target.value)) && (event.target.value as string).length < 7) {
      updateMaxPrice(event.target.value as string);
    } else {
      updateMaxPrice('');
    }
  };

  const onClick = () => {
    if (minPrice > maxPrice && Number(maxPrice) !== 0) {
      const timer = setTimeout(
        () => setNewFilters(Number(maxPrice), Number(minPrice), size.toString()),
        TIMEOUT_BETWEEN_UPDATING_INFO,
      );
      const newMaxPrice = minPrice;
      updateMinPrice(maxPrice);
      updateMaxPrice(newMaxPrice);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => setNewFilters(Number(minPrice), Number(maxPrice), size.toString()),
        TIMEOUT_BETWEEN_UPDATING_INFO,
      );
      return () => clearTimeout(timer);
    }
  };

  const click = (event?: React.KeyboardEvent) => {
    if (event?.key === 'Enter') {
      onClick();
    }
  };
  return (
    <>
      <FormControl className={classes.root}>
        <ThemeProvider theme={theme}>
          <InputLabel htmlFor="demo-customized-select-native">Size</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={size}
            onChange={handleChange}
            className={classes.size}
            onKeyDown={click}
          >
            <option aria-label="None" value="" />
            {sizeList.map((currentValue: string) => (
              <option key={currentValue} value={currentValue}>
                {currentValue}
              </option>
            ))}
          </NativeSelect>
        </ThemeProvider>
        <div className={classes.text}> Price: </div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="from"
            variant="outlined"
            size="small"
            className={classes.textField}
            value={minPrice}
            onChange={handleUpdateMinPrice}
            onKeyDown={click}
          />
          <TextField
            id="outlined-basic"
            label="to"
            variant="outlined"
            size="small"
            className={classes.textField}
            value={maxPrice}
            onChange={handleUpdateMaxPrice}
            onKeyDown={click}
          />
        </form>
        <Button className={classes.button} onClick={onClick}>
          Apply
        </Button>
      </FormControl>
    </>
  );
};
