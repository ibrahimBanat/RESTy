import './design/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import RenderMethod from './components/RenderMethod';

function App() {
  return (
    <div className='app'>
      <Header />
      <Form />
      <RenderMethod />
      <Footer />
    </div>
  );
}

export default App;
