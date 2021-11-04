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
								<h3>Alpine Fragments</h3>
								<p>
									The eternal ice is subject to constant change: in glaciers,
									the past the present merge...
								</p>
								<hr />
								<p>04.12.2021</p>
							</Container>
							<img src='../../assets/Layer73.png' alt='camera' />
						</Col>
						<Col className='sec__three__carousel__item__col__two'>
							<Container fluid>
								<Container>
									<h3>
										Five Takeaways on Lens Development from Two Key Leica
										Managers{' '}
									</h3>

									<p>04.09.2021</p>
								</Container>
							</Container>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default SecThree;
