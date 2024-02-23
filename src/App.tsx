import { useState } from 'react';
import './App.css';
import { Header } from './screens/Header';

function App() {
  const [name, setName] = useState<string>('');
  return (
    <>
      <Header name={name} setName={setName} />
    </>
  );
}

export default App;
