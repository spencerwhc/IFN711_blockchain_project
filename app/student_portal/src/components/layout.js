import { Container } from '@mui/material';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container maxWidth='lg'>{children}</Container>
    </div>
  );
}
