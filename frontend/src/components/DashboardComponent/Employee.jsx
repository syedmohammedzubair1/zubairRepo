import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import ChatIcon from "@mui/icons-material/Chat";

const NAVIGATION = [
  { segment: "usermanagement", title: "User Management", icon: <PeopleIcon /> },
  {
    segment: "contentmanagement",
    title: "Content Management",
    icon: <EditCalendarIcon />,
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "financial",
        title: "Financial Reports",
        icon: <DescriptionIcon />,
      },
      {
        segment: "taskreports",
        title: "Task Reports",
        icon: <DescriptionIcon />,
      },
    ],
  },
  { segment: "communication", title: "Communication", icon: <ChatIcon /> },
];

const drawerWidth = 240;

// ... (Keep all the styled components and mixins the same as original)

export default function DashboardLayoutBasic() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedSegment, setSelectedSegment] = React.useState("usermanagement");

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const renderContent = () => {
    switch (selectedSegment) {
      case "usermanagement":
        return <Typography paragraph>User Management Content</Typography>;
      case "contentmanagement":
        return <Typography paragraph>Content Management Content</Typography>;
      case "financial":
        return <Typography paragraph>Financial Reports</Typography>;
      case "taskreports":
        return <Typography paragraph>Task Reports</Typography>;
      case "communication":
        return <Typography paragraph>Communication Center</Typography>;
      default:
        return <Typography paragraph>Select a menu item</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Busitron Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {NAVIGATION.map((item) => (
            <React.Fragment key={item.segment}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => setSelectedSegment(item.segment)}
                  selected={selectedSegment === item.segment}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {item.children?.map((child) => (
                <ListItem key={child.segment} disablePadding sx={{ display: "block", pl: 4 }}>
                  <ListItemButton
                    onClick={() => setSelectedSegment(child.segment)}
                    selected={selectedSegment === child.segment}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {child.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={child.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ 
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          p: 3,
          minHeight: '80vh'
        }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}