import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider.js';
import MessageParser from './MessageParser.js';
import config from './config.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          placeholderText='Write your question here'
          headerText='Chatbot'
        />
      </header>
    </div>
  );
}

export default App;
