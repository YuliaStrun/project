import React from 'react';

import 'src/index.css';
import { CardStore } from 'src/stores/cardStore';

export const cardContext = React.createContext({
  cardStore: new CardStore(),
});
