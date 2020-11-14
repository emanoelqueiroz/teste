import './App.css';
import PageTitle from './components/PageTitle';
import List from './components/Stock/List';

function App() {
  return (
    <div className="App">
      <PageTitle>Controle de Estoque</PageTitle>
      <List/>
    </div>
  );
}

export default App;
