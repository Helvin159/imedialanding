import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const MainContent = ({ pageAttr }) => {
	const { page, classes } = pageAttr;
	const { mainContent } = classes;
	const {
		secHeader,
		secRow,
		secRowColOne,
		secRowOneCaption,
		secRowColTwo,
		secContOne,
		secContTwo,
	} = mainContent;
	// console.log('MainContent, ', mainContent.secOneHeader);
	return (
		<div>
			<Container className={secHeader}>
				<h2>{page.title}</h2>
			</Container>
			<Row className={secRow}>
				<Col
					md={{ span: 8 }}
					className={secRowColOne}
					style={{ background: `url(${page.mainImage})` }}>
					<Container className={secRowOneCaption}>
						<hr />
						<p>{page.mainCaptionTitle}</p>
						<div>
							<h3>
								{page.mainCaptionBody}
								<span>
									<img src='assets/redArrow.png' alt='Red Arrow Button' />
								</span>
							</h3>
						</div>
					</Container>
				</Col>
				<Col md={{ span: 3 }} className={secRowColTwo}>
					<Container
						className={secContOne}
						style={{ background: `url(${page.secImage})` }}>
						<Button variant='danger'>Limited Editions</Button>
					</Container>
					<Container
						className={secContTwo}
						style={{ background: `url(${page.triImage})` }}>
						<Button variant='danger'>Leica L Mount</Button>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default MainContent;
