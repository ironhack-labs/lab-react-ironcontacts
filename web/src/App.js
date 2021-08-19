
import { Switch, Route } from 'react-router-dom';
import ContactList from './components/contacts/contact-list/ContactList';
import ContactDetails from './components/contacts/contact-details/ContactDetails';

function App() {
  return (
    <div className="container py-5">
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/contacts/:id" component={ContactDetails} />
      </Switch>
    </div>
  );
}

export default App;
