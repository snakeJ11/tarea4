import React from 'react';import './App.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
function App() {
  return (
    <div className="App">
      <h1>Agenda Web</h1>
      <AddContact />
      <ContactList />
      
    </div>
  );
}

export default App;
