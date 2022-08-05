import React from 'react';
import {
  SearchFormBtn,
  SearchForm,
  SeacrHeader,
  SearchInput,
} from './Searchbar.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

const values = {
  search: '',
};

const schema = yup.object().shape({
  search: yup.string().required(),
});

const Searchbar = ({ onSubmit }) => {
  const handeSubmit = (values, { resetForm }) => {
    onSubmit(values.search);
    resetForm();
  };
  return (
    <Formik
      initialValues={values}
      onSubmit={handeSubmit}
      validationSchema={schema}
    >
      <SeacrHeader>
        <SearchForm autoComplete="off">
          <SearchFormBtn type="submit"></SearchFormBtn>
          <SearchInput
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SeacrHeader>
    </Formik>
  );
};

export default Searchbar;
