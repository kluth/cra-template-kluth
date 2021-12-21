import './global.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/home';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/ >}/>
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
