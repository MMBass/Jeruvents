import { NavLink } from "react-router-dom";

import { ArrowForward } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

const pages = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }];

function SidePagesList(className) {
  return (
    <List className={className} sx={{padding: '10px'}}>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index}>
          <ListItem button key={page.name} alignItems="center">
            <ListItemText primary={page.name} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
