import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route exact path="" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
