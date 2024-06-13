import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../redux/contacts/slice';
import { selectNameFilter } from '../redux/filter/slice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);