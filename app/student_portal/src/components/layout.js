import { Container } from '@mui/material';
import '../styles/globals.css';
export default function Layout({ children }) {
  return (
    <div>
      <Container maxWidth='lg'>{children}</Container>
    </div>
  );
}
