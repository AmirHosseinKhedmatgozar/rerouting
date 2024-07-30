import "./App.css";
import { useState } from "react";

//Caculator

function App() {
  return <TipCalculator />;
}
function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [me, setMe] = useState(0);
  const [friend, setFriend] = useState(0);
  const tip = (+me + +friend) / 2;
  return (
    <div className="container">
      <BillingPoot bill={bill} onBill={setBill} />
      <PersonTezh persent={me} onPersent={setMe} />
      <PersonTezh persent={friend} onPersent={setFriend}>
        FRIEND
      </PersonTezh>
      {tip > 0 && bill > 0 && <ShowInformation tip={tip} bill={bill} />}
      <Reset onPercentMe={setMe} onPercentfriend={setFriend} onBill={setBill} />
    </div>
  );
}

function BillingPoot({ bill, onBill }) {
  return (
    <div className="item">
      <h3>HOW MUCH WAS THE BILLL?</h3>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBill(e.target.value)}
      ></input>
    </div>
  );
}
function PersonTezh({ children, persent, onPersent }) {
  return (
    <div className="item">
      <h3>HOW DID YOU {children} LIKE THE SERVISE?</h3>
      <select value={persent} onChange={(e) => onPersent(e.target.value)}>
        <option value="0">Dissatisfied</option>
        <option value="5">It was OK(5%) </option>
        <option value="10">It was GOOD(10%)</option>
        <option value="20">Absolutelt amazin(20%)</option>
      </select>
    </div>
  );
}
function ShowInformation({ tip, bill }) {
  const pay = (tip * bill) / 100 + +bill;
  return (
    <div className="item">
      <h2>
        YOU PAY ${pay} (${bill} + ${tip}tip)
      </h2>
    </div>
  );
}
function Reset({ onPercentMe, onPercentfriend, onBill }) {
  function onReset() {
    onBill(0);
    onPercentMe(0);
    onPercentfriend(0);
  }
  return (
    <div className="item btn">
      <button onClick={onReset}>reset</button>
    </div>
  );
}
export default App;
