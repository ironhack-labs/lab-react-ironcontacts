import ContactList from './components/ContactList';
import './tailwind.css';

function App() {
  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center m-12">
      <ContactList />
    </div>
  );
}

export default App;
