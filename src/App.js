import logo from './logo.svg';
import './App.css';
import consumer from './cable';
import { useState } from 'react';

const todoChannel = consumer.subscriptions.create({
  channel: 'TodoChannel',
}, {
  connected: () => console.log('connected'),
  disconnected: () => console.log('disconnected'),
  received: data => console.log(data),
}
)


function App() {

  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  // ActionCable.server.



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" id='user' value={name} onChange={(e) => setName(e.target.value)} placeholder='User Name' />
        <input type="text" id='msg' value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message' />

        <button
          onClick={() => {

            todoChannel.send(
              {
                sent_by: { name },
                body: { msg }
              }
            )
          }}
        > Send message</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
