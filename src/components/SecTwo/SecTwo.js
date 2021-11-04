import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import MainContentSecTwo from './Components/MainContentSecTwo';
import SportsProds from './Components/SportsProds';

const SecTwo = ({ products }) => {
	const stuff = products;
	console.log(stuff);
	return (
		<Container fluid className='sec__two'>
			<MainContentSecTwo />
			<SportsProds products={products} />
		</Container>
	);
};

export default SecTwo;
