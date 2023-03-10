import { Typography, Box, useTheme } from "@mui/material";
// import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color="gray"
        fontWeight="bold"
        textAlign="center"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6"  textAlign="center" color="gray">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;