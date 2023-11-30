import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
const DashboardSidebar = () => {

    const [sidebar, setSidebar] = useState(false);


  return (
    <>
   
<IconButton>
    <MenuIcon onClick={(e)=>{setSidebar(!sidebar)}}/>
</IconButton>

      <Drawer
       
        open={sidebar}
        onClose={()=>{
            setSidebar(false);
        }}
        className="dashboard-sidebar"
      >

        <img src="src/imgs/Netroots-logo-tm-transparent.png" alt="" className="logo" />
        <List className="list">
            <ListItemButton className="list-btn">
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItemButton>
            <ListItemButton className="list-btn">
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItemButton>
            <ListItemButton className="list-btn">
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItemButton>
            <ListItemButton className="list-btn">
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItemButton>
            <ListItemButton className="list-btn">
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
