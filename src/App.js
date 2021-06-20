import './design/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import RenderMethod from './components/RenderMethod';
import Main from './components/Main';
function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
