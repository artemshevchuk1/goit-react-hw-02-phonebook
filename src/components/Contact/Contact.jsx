import React from 'react';
import PropTypes from 'prop-types';

import { Ul, Li, Button } from './Contact.styled';
export function Contact({ items, removeContact }) {
  const elements = items.map(({ name, phone, id }) => {
    return (
      <Li key={id}>
        Name :{name} Phone :{phone}
        <Button onClick={() => removeContact(id)}>Delete</Button>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}

Contact.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ),
  };