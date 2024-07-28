import Dropdown from './components/Dropdown/Dropdown';

const options = [{
  value: '1',
  label: 'Option 1'
}, {
  value: '2',
  label: 'Option 2'
}, {
  value: '3',
  label: 'Long option 3'
}, {
  value: '4',
  label: 'Long long option 4'
},{
  value: '5',
  label: 'Option 1'
}, {
  value: '6',
  label: 'Option 2'
}, {
  value: '7',
  label: 'Long option 3'
}, {
  value: '8',
  label: 'Long long option 4'
}, {
  value: '9',
  label: 'Long option 3'
}, {
  value: '10',
  label: 'Long long option 4'
}]
function App() {
  return (
    <div className='container mx-auto py-10 px-4'>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
