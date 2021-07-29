import React from 'react';

import { cartContext } from 'src/contexts/cartContext';

export const useCartStore = () => React.useContext(cartContext);
