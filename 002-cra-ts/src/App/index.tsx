import './App.css';
import D3 from '../D3';
import VirtualList from '../virtual-list';

const App = (): JSX.Element => {
  
  return (
    <div className="App">
      { false && <D3 /> }
      <VirtualList/>
    </div>
  );
}

export default App;
