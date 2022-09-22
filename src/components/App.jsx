import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contact } from 'components/Contact/Contact';
import { Form } from 'components/Form/Form';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { SectiomSubmit,Section } from './App.Styled';

export class App extends Component {
  state = {
    contact: [],
    filter: '',
  };
  addContact = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} -   is already in Phonebook List`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contact: [...prev.contact, newContact],
      };
    });
  };
  removeContact = id => {
    this.setState(prev => {
      const newContact = prev.contact.filter(item => item.id !== id);
      return {
        contact: newContact,
      };
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  isDublicate({ name, phone }) {
    const { contact } = this.state;
    const result = contact.find(
      item => item.name === name && item.phone === phone
    );
    return result;
  }
  getFilterContacts() {
    const { contact, filter } = this.state;

    if (!filter) {
      return contact;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContact = contact.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContact;
  }
  render() {
    const { addContact, handleChange, removeContact } = this;

    const contact = this.getFilterContacts();
    return (
      <Section>
        <SectiomSubmit>
          <Form onSubmit={addContact} />
        </SectiomSubmit>

        <FilterContact handleChange={handleChange} />
        <Contact items={contact} removeContact={removeContact} />
      </Section>
    );
  }
}