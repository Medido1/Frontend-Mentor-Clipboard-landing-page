import './App.css'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <main className='min-h-[100vh] w-full font-[barlow] flex flex-col'>
      <Header />
      <Main />
    </main>
  )
}

export default App