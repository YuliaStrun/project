import React from 'react';

import { cardContext } from 'src/contextes/cardContext';

export const useCardStore = () => React.useContext(cardContext);
