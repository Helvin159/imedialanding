import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
	return (
		<Container className='footer' fluid>
			<Container fluid className='footer__header'>
				<Row>
					<Col md={9}>
						<h3>LOREM IPSUM DOLOR SITAMET</h3>
						<p>
							Consecutor adipiscing elid sed do eiusmod tempor incididunt ut
							labore et dolore.
						</p>
					</Col>

					<Col md={3}>
						<Button variant='dark'>Learn More</Button>
					</Col>
				</Row>
			</Container>
			<Container className='footer__menu' fluid>
				<Row>
					<Col md={1}>
						<h3>PHOTOGRAPHY</h3>
						<ul>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
							<li>Leica M</li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>SPORT OPTICS</h3>
						<ul>
							<li>COMPACT</li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>BRAND ACCESSORIES</h3>
						<ul>
							<li>BAGS &amp; CASES </li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>PRE-OWNED</h3>
						<ul>
							<li>M SYSTEM</li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>WORLD OF LEICA</h3>
						<ul>
							<li>LEICA STORES</li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>LEICA AKADEMIE</h3>
						<ul>
							<li>DESTINATIONS</li>
						</ul>
					</Col>
					<Col md={1}>
						<h3>LEICA CAMERA INC.</h3>
					</Col>
				</Row>
			</Container>
			<Container fluid className='footer__social'>
				<Container className='footer__social__buttons'>
					<h3>FOLLOW US</h3>
				</Container>
			</Container>
			<Container fluid className='footer__copy'>
				<Row>
					<Col md={2}>
						<p>&#169;2021 Leica Camera Inc</p>
					</Col>
					<Col md={8}>
						<ul>
							<li>Privacy Policy</li>
							<li>Terms &amp; Conditions</li>
							<li>Data Protection Statement</li>
							<li>California Proposition 65</li>
							<li>Sitemap</li>
						</ul>
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Footer;
