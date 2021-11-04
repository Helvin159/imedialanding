import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const SecThree = () => {
	return (
		<Container fluid className='sec__three'>
			<Container className='sec__three__header'>
				<h2>INSPIRATION</h2>
			</Container>

			<Carousel
				className='sec__three__carousel__container'
				fade
				controls='false'
				variant='dark'>
				<Carousel.Item className='sec__three__carousel__item'>
					<Row>
						<Col className='sec__three__carousel__item__col__one'>
							<Container>
								<h3>Exceptionally Discreet</h3>
								<p>&amp; 50MM F2. Edition 'Safari'</p>
								<Button variant='danger'>IN STOCK</Button>{' '}
							</Container>
							<img src='../../assets/Layer73.png' alt='camera' />
						</Col>
						<Col className='sec__three__carousel__item__col__two'>
							<Container fluid>
								<Container>
									<h3>Exceptionally Discreet</h3>
									<p>&amp; 50MM F2. Edition 'Safari'</p>
								</Container>
								{/*<img
										src='../../../assets/Layer76.png'
										alt='camera'
										style={{ maxHeight: '450px' }}
									/>*/}
							</Container>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default SecThree;
