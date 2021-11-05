import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

const PhotographyProds = ({ pageAttr }) => {
	// const { page, product } = pageAttr;

	// const stuff = product;
	// console.log('Page, ', page, 'Product, ', product);
	const { page, product, classes } = pageAttr;
	const { productCont } = classes;

	return (
		<Container fluid className={productCont.secProducts}>
			<Container className={productCont.secNav}>
				<Nav style={{ margin: '0 auto' }}>
					<Nav.Link>{page.navLinkOne}</Nav.Link>
					<Nav.Link>{page.navLinkTwo}</Nav.Link>
					<Nav.Link>{page.navLinkThree}</Nav.Link>
				</Nav>
			</Container>
			<Row className={productCont.secProductsRow}>
				{product.map((item, index) => (
					//  console.log(item)
					<Col key={index} md={3}>
						<Container
							style={{
								margin: '.5rem auto 0 auto',
								textAlign: 'center',
								// border: '1px solid #000',
								height: '175px',
							}}>
							<img
								src={`${item.img}`}
								style={{ width: '200px', margin: '.5rem auto 0 auto' }}
								alt={`${item.name}`}
							/>
						</Container>
						<Container
							style={{ margin: '.5rem auto 0 auto', textAlign: 'center' }}>
							<h3 style={{ fontWeight: '700', fontSize: '18px' }}>
								{item.name}
							</h3>
							<p style={{ margin: '1.2rem auto 0 auto', fontSize: '1.1rem' }}>
								{item.release}
							</p>
						</Container>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default PhotographyProds;
