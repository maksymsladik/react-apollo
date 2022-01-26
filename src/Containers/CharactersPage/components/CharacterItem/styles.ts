import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  a: {
    display: 'flex',
    flexGrow: '1',
    position: 'relative',
  },
  img: {
    width: '100%',
    objectFit: 'contain',
  },
  em: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
}));
