import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const MainContent = ({ pageAttr }) => {
	const { page, product } = pageAttr;
	console.log('PageAttr at MainContent, ', page, product);
	return (
		<div>
			<Container className='sec-one-header'>
				<h2>PHOTOGRAPHY</h2>
			</Container>
			<Row className='sec__one__row'>
				<Col md={{ span: 8 }} className='sec__one__row__col__one'>
					<Container className='sec__one__row__one__caption'>
						<hr />
						<p>Leica Q</p>
						<div>
							<h3>
								INTRODUCING THE NEW LEICA Q2
								<span>
									<img src='assets/redArrow.png' alt='Red Arrow Button' />
								</span>
							</h3>
						</div>
					</Container>
				</Col>
				<Col md={{ span: 3 }} className='sec__one__row__col__two'>
					<Container className='sec__one__cont__one'>
						<Button variant='danger'>Limited Editions</Button>
					</Container>
					<Container className='sec__one__cont__two'>
						<Button variant='danger'>Leica L Mount</Button>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default MainContent;
