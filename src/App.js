import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
