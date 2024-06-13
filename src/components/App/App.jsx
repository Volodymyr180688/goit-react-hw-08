import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from '../Loader/Loader.jsx'
import Error from '../Error/Error.jsx'
import style from "./App.module.css";
import { selectError, selectLoading } from "../../redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error>Error message</Error>}
      <ContactList />
    </div>
  );
}

export default App;