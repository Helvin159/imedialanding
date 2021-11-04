import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const HeroCarousel = () => {
	return (
		<Carousel
			className='carousel__container'
			fade
			variant='dark'
			style={{ height: '478px' }}>
			<Carousel.Item>
				<Row>
					<Col>
						<Row>
							<Col>
								<img
									src='../../../assets/camera.png'
									alt='camera'
									style={{
										height: '288px',
										marginTop: '6.6rem',
										marginLeft: '3.6rem',
									}}
								/>
							</Col>
							<Col>
								<h3>Exceptionally Discreet</h3>
								<p>&amp; 50MM F2. Edition 'Safari'</p>
								<Button variant='danger'>IN STOCK</Button>{' '}
							</Col>
						</Row>
					</Col>
				</Row>
			</Carousel.Item>
		</Carousel>
	);
};

export default HeroCarousel;
