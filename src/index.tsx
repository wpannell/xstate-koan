import "./styles.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useMachine } from "@xstate/react";
import { machine } from "./machine";

function App() {
  const [state, send] = useMachine(machine);

  return (
    <div className="App">
      {!state.matches("loading") && !state.matches("complete") && (
        <div>Try adding a 'loading' state to the machine!</div>
      )}
      {state.matches("loading") && <div>Loading...</div>}
      {state.matches("complete") && (
        <div>
          <p>Fetched Data</p>
          <p>Id: {state.context.id ?? "Id not found in context"}</p>
          <button
            onClick={() => {
              send("REFETCH");
            }}
          >
            REFETCH
          </button>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
