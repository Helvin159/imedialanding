import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const MainContentSecTwo = () => {
	return (
		<div className='sec__two__main'>
			<Container>
				<h2>SPORT OPTICS</h2>
			</Container>
			<Row className='sec__two__row'>
				<Col md={{ span: 8 }} className='sec__two__row__col__one'>
					<Container className='sec__two__row__col__one__caption'>
						<hr />
						<p>LEISURE</p>
						<Container>
							<h3>
								FULL SIZE BINOCULARS
								<span>
									<img src='assets/redArrow.png' alt='Red Arrow Button' />
								</span>
							</h3>
						</Container>
					</Container>
				</Col>
				<Col md={{ span: 3 }} className='sec__two__row__col__two'>
					<Container className='sec__two__cont__one'>
						<Button>Rangemasters</Button>
					</Container>
					<Container className='sec__two__cont__two'>
						<Button>Rangefinders</Button>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default MainContentSecTwo;
