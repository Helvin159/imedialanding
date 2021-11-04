import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const HeroCarousel = () => {
	return (
		<Carousel className='hero__container__carousel' fade variant='dark'>
			<Carousel.Item className='hero__container__carousel__item'>
				<Container>
					<Row
						className='hero__container__carousel__row'
						style={{
							border: '5px solid yellow',
						}}>
						<Col
							className='hero__container__carousel__row__col__one'
							style={{
								border: '1px solid black',
							}}>
							<img src='../../../assets/camera.png' alt='camera' />
						</Col>
						<Col
							className='hero__container__carousel__row__col__two'
							style={{
								border: '1px solid black',
							}}>
							<Container className='hero__container__carousel__row__col__two__caption'>
								<h3>Exceptionally Discreet</h3>
								<p>&amp; 50MM F2. Edition 'Safari'</p>
								<Button variant='danger'>IN STOCK</Button>{' '}
							</Container>
						</Col>
					</Row>
				</Container>
				<h2>
					LEICA <br /> M10-P
				</h2>
			</Carousel.Item>
		</Carousel>
	);
};

export default HeroCarousel;
