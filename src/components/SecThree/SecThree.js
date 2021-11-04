import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const SecThree = () => {
	return (
		<Container
			fluid
			className='sec__three'
			style={{
				margin: '4.7rem 0 0 0',
				padding: '0 0 8.4rem 0',
				textAlign: 'left',
				// border: '1px solid #000',
			}}>
			<Container
				style={{
					margin: '0 0 2.5rem 4.1rem',
					padding: '0',
					textAlign: 'left',
					// border: '1px solid #000',
				}}>
				<h2>INSPIRATION</h2>
			</Container>

			<Carousel
				className='carousel__container'
				fade
				controls='false'
				variant='dark'>
				<Carousel.Item>
					<Row>
						<Col
							style={{
								height: '487px',
								width: '650px',
								// border: '10px solid #0f0',
								padding: '0',
								background: 'url(../../assets/Layer73.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}>
							<Container
								style={{
									position: 'absolute',
									bottom: '3rem',
									left: '1rem',
									margin: 0,
									padding: '0',
								}}>
								<h3>Exceptionally Discreet</h3>
								<p>&amp; 50MM F2. Edition 'Safari'</p>
								<Button variant='danger'>IN STOCK</Button>{' '}
							</Container>
							<img src='../../assets/Layer73.png' alt='camera' />
						</Col>
						<Col
							style={{
								// border: '1px solid #0f0',
								width: '250px',
								padding: '0',
								// margin: '0',
								background: 'url(../../assets/Layer76.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}>
							<Container
								fluid
								style={{
									margin: '0',
									padding: '0',
									width: '800px',
									position: 'relative',
								}}>
								<Container
									style={{
										position: 'absolute',
										bottom: '1rem',
										left: '0',
										padding: '0',
									}}>
									<h3>Exceptionally Discreet</h3>
									<p>&amp; 50MM F2. Edition 'Safari'</p>
									<Button variant='danger'>IN STOCK</Button>{' '}
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
