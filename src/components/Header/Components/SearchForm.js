import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const SearchForm = () => {
	return (
		<Nav>
			<Form className='header__search__form'>
				<img src='assets/logo.png' alt='Logo' />
				<FormControl
					type='search'
					placeholder='What are you looking for?'
					className='me-2'
					aria-label='Search'
				/>
				<Button>FIND A LEICA STORE</Button>
			</Form>
		</Nav>
	);
};

export default SearchForm;
