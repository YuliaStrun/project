import React from 'react';

import 'src/index.css';
import { CartStore } from 'src/stores/cartStore';

export const cartContext = React.createContext(new CartStore());
