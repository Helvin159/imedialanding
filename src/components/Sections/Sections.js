import React from 'react';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import MainContent from './Components/MainContent';
import PhotographyProds from './Components/Products';

const SecOne = ({ products, pageAttr }) => {
	// const stuff = products;
	const { classes } = pageAttr;
	const { section } = classes;
	const sec = section.sec;

	// console.log(sec, ' from SecOne');
	return (
		<Container fluid className={sec}>
			<MainContent pageAttr={pageAttr} />
			<PhotographyProds products={products} pageAttr={pageAttr} />
		</Container>
	);
};

export default SecOne;
