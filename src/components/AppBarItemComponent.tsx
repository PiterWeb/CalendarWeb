import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

type AppBarItemProps = {
  icon: JSX.Element;
  text: string;
  open: boolean;
  to:string;
};

function AppBarItemComponent({ icon, text, open, to }: AppBarItemProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/dashboard/${to}`);
  }

  return (
    <ListItemButton
      key={text}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
    onClick={onClick}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
}

export default AppBarItemComponent;
