import React from 'react';
// import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import DropDownMenus from './Components/DropDownMenus';
import SearchForm from './Components/SearchForm';

const Header = () => {
	return (
		<header>
			<Navbar>
				<SearchForm />
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<DropDownMenus />
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
