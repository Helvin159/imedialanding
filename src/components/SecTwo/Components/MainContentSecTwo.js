import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const MainContentSecTwo = () => {
	return (
		<div>
			<Container
				style={{
					padding: '0',
				}}>
				<h2
					style={{
						border: '1px solid #000',
						margin: '0 0 0 0',
						width: '15rem',
					}}>
					SPORT OPTICS
				</h2>
			</Container>
			<Row className='sec__two__row'>
				<Col md={{ span: 8 }} className='sec__two__row__col__one'>
					<Container className='sec__two__row__one__caption'>
						<hr />
						<p>LEISURE</p>
						<div style={{ width: '16rem' }}>
							<h3>
								FULL SIZE BINOCULARS
								<span>
									<img src='assets/redArrow.png' alt='Red Arrow Button' />
								</span>
							</h3>
						</div>
					</Container>
				</Col>
				<Col md={{ span: 3 }} className='sec__two__row__col__two'>
					<Container className='sec__two__cont__one'>
						<Button variant='danger'>Rangemasters</Button>
					</Container>
					<Container className='sec__two__cont__two'>
						<Button variant='danger'>Rangefinders</Button>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default MainContentSecTwo;
