import { Container, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container
      // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      maxWidth="xl"
    >
      <Button fullWidth variant="contained">
        Send
      </Button>
    </Container>
  );
}

export default App;
