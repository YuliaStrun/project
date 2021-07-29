import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import LabelIcon from '@material-ui/icons/Label';

export const Menu = (): JSX.Element => {
  let open = true;
  // const resources = useSelector(getResources);
  return (
    <div>
      {/* {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={resource.options && resource.options.label || resource.name}
                    leftIcon={createElement(resource.icon)}
                    onClick={() => {open = !open}}
                    sidebarIsOpen={open}
                />
            ))} */}
      <MenuItemLink
        to="/custom-route"
        primaryText="Products"
        leftIcon={<LabelIcon />}
        onClick={() => {
          open = !open;
        }}
        sidebarIsOpen={open}
      />
    </div>
  );
};
