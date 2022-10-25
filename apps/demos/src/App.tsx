import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { usePaystack } from "@wjbright/paystack";

function App() {
  console.log(process.env.REACT_APP_PAYSTACK_PUBLIC_KEY);
  const { popUp, setInput, setCallbackMethods } = usePaystack(
    process.env.REACT_APP_PAYSTACK_PUBLIC_KEY as any
  );

  useEffect(() => {
    setInput({
      email: "brightasima@gmail.com",
      amount: 50,
    });

    setCallbackMethods({
      onSuccess: (transaction) =>
        console.log("Successful! We did it", transaction),
      onCancel: () => console.log("You stopped the party"),
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => popUp()}
        >
          Open Paystack Popup
        </a>
      </header>
    </div>
  );
}

export default App;
