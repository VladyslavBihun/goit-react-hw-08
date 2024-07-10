// ContactsPage.jsx

import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectToken } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(selectContacts);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Oops. Something went wrong.</p>}
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
