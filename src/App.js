import ReactDOM from 'react-dom'
import Mage from './components/Mage'

function App() {
  return (
    <div className="App">
      {
        ReactDOM.createPortal(
        <Mage />,
        document.getElementById('thanos-location')
        )
      }
    </div>
  );
}

export default App;
