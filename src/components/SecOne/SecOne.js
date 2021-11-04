import React from 'react';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import MainContent from './Components/MainContent';
import PhotographyProds from './Components/PhotographyProds';

const SecOne = ({ products, pageAttr }) => {
	const stuff = products;
	console.log(stuff);
	return (
		<Container fluid className='sec__one'>
			<MainContent pageAttr={pageAttr} />
			<PhotographyProds products={products} pageAttr={pageAttr} />
		</Container>
	);
};

export default SecOne;
