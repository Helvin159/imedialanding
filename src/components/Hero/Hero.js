import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HeroCarousel from './Components/Carousel';

const Hero = () => {
	return (
		<Container className='hero__container' fluid>
			<Row className='hero__container__row'>
				<Col
					className='hero__container__row__col__one'
					md={{ span: 8 }}
					style={{
						backgroundColor: '#fff',
						margin: '0',
						padding: '0',
						width: '845px',
					}}>
					<HeroCarousel />
				</Col>
				<Col className='hero__container__row__col col__two' md={{ span: 3 }}>
					<Button variant='danger'>ONLINE</Button>
					<Container className='col__two__caption'>
						<p>LEICA AKADEMIE</p>
						<h3>Leica Q Owners Workshops</h3>
						<p>
							Classes Offered:
							<br />
							<span>April 10th through June 26th, 2021</span>
						</p>
						<Button>Learn More</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
