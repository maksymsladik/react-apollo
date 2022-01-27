import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  position: "relative",
}));
