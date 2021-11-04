import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

const SportsProds = ({ products }) => {
	const stuff = products;
	return (
		<Container className='sec__two__products' fluid>
			<Container className='sec__two__nav'>
				<Nav style={{ margin: '0 auto' }}>
					<Nav.Link>NEW PRODUCTS</Nav.Link>
					<Nav.Link>SPECIAL OFFERS</Nav.Link>
					<Nav.Link>BEST SELLERS</Nav.Link>
				</Nav>
			</Container>
			<Row>
				{stuff.map((item, index) => (
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

export default SportsProds;
