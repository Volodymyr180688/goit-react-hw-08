import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";

const ContactList = () => {
   const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.container}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;