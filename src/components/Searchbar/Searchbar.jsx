import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import toast from 'react-hot-toast';

import { Header, SearchForm, SearchBtn, SearchField } from './Searchbar.styled';

export const Searchbar = ({ searchByQuery }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  const onSubmitBtn = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error('Будь ласка, введіть назву зображення, яке ви хочете знайти!');
    }
    searchByQuery(query);
    setQuery('');
  };

  return (
    <>
      <Header>
        <SearchForm onSubmit={onSubmitBtn}>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>

          <SearchField
            onChange={onInputChange}
            value={query}
            type="text"
            autocomplete="off"
            placeholder="Пошук зображень і фотографій"
          />
        </SearchForm>
      </Header>
    </>
  );
};
