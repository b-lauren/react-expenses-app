import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
