import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input } from '../FilterContact/FilterContact.styled';

export const FilterContact = ({ filter, handleChange }) => {
  const filterId = nanoid();

  return (
    <Input
      id={filterId}
      onChange={handleChange}
      type="text"
      name="filter"
      placeholder="Find Contacts"
      value={filter}
    />
  );
};

FilterContact.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
  };