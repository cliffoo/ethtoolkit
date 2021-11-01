import Header from './Header';
import Kit from './Kit/Kit';
import Decoder from './Decoder';

function App() {
  return (
    <div id="app">
      <Header />
      <div className='content'>
        <Kit />
        <Decoder />
      </div>
    </div>
  );
}

export default App;
