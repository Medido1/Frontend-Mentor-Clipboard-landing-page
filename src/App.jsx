import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <main className='min-h-[100vh] w-full font-[barlow] flex flex-col'>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default App