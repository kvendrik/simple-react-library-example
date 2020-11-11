import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../../';

function App() {
  return (
    <main>
      <h1>Hello!</h1>
      <Button>Hey!</Button>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App />,
  rootElement
);
