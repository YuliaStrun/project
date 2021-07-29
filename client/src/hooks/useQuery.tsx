import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useQuery = (property = '') => {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(new URLSearchParams(location.search).get(property) ?? '');

  const updateQuery = (newValue = '') => {
    const newQuery = new URLSearchParams(location.search);

    setValue(newValue);

    if (newQuery.has(property)) {
      newQuery.set(property, newValue);
    } else if (property && newValue) {
      newQuery.append(property, newValue);
    }

    history.push({
      search: newQuery.toString(),
    });
  };

  return [value, updateQuery] as const;
};
