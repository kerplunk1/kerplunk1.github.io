import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MiddleSection from './components/MiddleSection/MiddleSection'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lang, setLang] = useState('eng')

  return (
    <>
      <Header />
      <MiddleSection />
    </>
  );
}

export default App
