import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dropdown } from './Dropdown/Dropdown';

const options = [{
  key: '1',
  value: 'Option 1'
}, {
  key: '2',
  value: 'Option 2'
}, {
  key: '3',
  value: 'Long option 3'
}, {
  key: '4',
  value: 'Long long option 4'
},{
  key: '5',
  value: 'Option 1'
}, {
  key: '6',
  value: 'Option 2'
}, {
  key: '7',
  value: 'Long option 3'
}, {
  key: '8',
  value: 'Long long option 4'
}, {
  key: '9',
  value: 'Long option 3'
}, {
  key: '10',
  value: 'Long long option 10 Long long option 4 Long long option 4 Long long option 4 Long long option 4'
}];

function App() {
  return (
    <div style={{ padding: 16 }}>
      <Dropdown options={options} />
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
