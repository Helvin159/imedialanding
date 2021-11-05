import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SecOne from './components/SecOne/Sections';
// import SecTwo from './components/SecTwo/SecTwo';
import SecThree from './components/SecThree/SecThree';
import Footer from './components/Footer/Footer';

const photography = [
	{
		name: 'Leica M10-P “Reporter” Limited Edition',
		release: 'Just Announced',
		img: './assets/camera.png',
	},
	{
		name: 'Leica Q2 Daniel Craig x  Greg Williams',
		release: 'Just Released',
		img: './assets/q2.png',
	},
	{
		name: 'Leica APO-Summicron-SL  28 f/2 ASPH',
		release: 'Just Announced',
		img: './assets/asph.png',
	},
	{
		name: 'Leica D-Lux 7 Street Kit',
		release: 'Just Announced',
		img: './assets/d-lux.png',
	},
];

// const sportsOptics = [
// 	{
// 		name: 'Leica Geovid 8 x 42 3200.COM',
// 		price: '$2,999.00',
// 		img: './assets/Layer134.png',
// 	},
// 	{
// 		name: 'Leica Noctivid 10 x 42 Green ',
// 		price: 'Notify Me',
// 		img: './assets/Layer131.png',
// 	},
// 	{
// 		name: 'Leica Trinovid 10x40',
// 		price: '$1,649.00',
// 		img: './assets/Layer133.png',
// 	},
// 	{
// 		name: 'Leica Rangemaster CRF 3500.COM',
// 		price: '$1,199.00',
// 		img: './assets/Layer132.png',
// 	},
// ];

const pageContent = {
	photography: {
		page: {
			title: 'PHOTOGRAPHY',
			navLinkOne: 'NEW PRODUCTS',
			navLinkTwo: 'SPECIAL OFFERS',
			navLinkThree: 'BEST SELLERS',
			mainImage: 'assets/Layer124.png',
			mainCaptionTitle: 'Leica Q',
			mainCaptionBody: 'INTRODUCING THE NEW LEICA Q2',
			secImage: 'assets/Layer43.png',
			secImgBtnCap: 'Limited Editions',
			triImage: 'assets/Layer44.png',
			triImgBtnCap: 'Leica L Mount',
		},
		product: [
			{
				name: 'Leica M10-P “Reporter” Limited Edition',
				release: 'Just Announced',
				img: './assets/camera.png',
			},
			{
				name: 'Leica Q2 Daniel Craig x  Greg Williams',
				release: 'Just Released',
				img: './assets/q2.png',
			},
			{
				name: 'Leica APO-Summicron-SL  28 f/2 ASPH',
				release: 'Just Announced',
				img: './assets/asph.png',
			},
			{
				name: 'Leica D-Lux 7 Street Kit',
				release: 'Just Announced',
				img: './assets/d-lux.png',
			},
		],
		classes: {
			section: { sec: 'sec__one' },
			mainContent: {
				secHeader: 'sec__one__header',
				secRow: 'sec__one__row',
				secRowColOne: 'sec__one__row__col__one',
				secRowOneCaption: 'sec__one__row__one__caption',
				secRowColTwo: 'sec__one__row__col__two',
				secContOne: 'sec__one__cont__one',
				secContTwo: 'sec__one__cont__two',
			},
			productCont: {
				secProducts: 'sec__one__products',
				secNav: 'sec__one__nav',
				secProductsRow: 'sec__one__products__row',
			},
		},
	},
	sports: {
		page: {
			title: 'SPORTS OPTICS',
			navLinkOne: 'NEW PRODUCTS',
			navLinkTwo: 'SPECIAL OFFERS',
			navLinkThree: 'BEST SELLERS',
			mainImage: 'assets/Layer128.png',
			mainCaptionTitle: 'Leisure',
			mainCaptionBody: 'FULL SIZE BINOCULARS',
			secImage: 'assets/Layer129.png',
			secImgBtnCap: 'Rangemasters',
			triImage: 'assets/Layer130.png',
			triImgBtnCap: 'Rangefinders',
		},
		product: [
			{
				name: 'Leica Geovid 8 x 42 3200.COM',
				price: '$2,999.00',
				img: './assets/Layer132.png',
			},
			{
				name: 'Leica Noctivid 10 x 42 Green ',
				price: 'Notify Me',
				img: './assets/Layer131.png',
			},
			{
				name: 'Leica Trinovid 10x40',
				price: '$1,649.00',
				img: './assets/Layer133.png',
			},
			{
				name: 'Leica Rangemaster CRF 3500.COM',
				price: '$1,199.00',
				img: './assets/Layer132.png',
			},
		],
		classes: {
			section: { sec: 'sec__two' },
			mainContent: {
				secHeader: 'sec__two__main',
				secRow: 'sec__two__row',
				secRowColOne: 'sec__two__row__col__one',
				secRowOneCaption: 'sec__two__row__col__one__caption',
				secRowColTwo: 'sec__two__row__col__two',
				secContOne: 'sec__two__cont__one',
				secContTwo: 'sec__two__cont__two',
			},
			productCont: {
				secProducts: 'sec__two__products',
				secNav: 'sec__two__nav',
				secProductsRow: 'sec__two__products__row',
			},
		},
	},
};

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<SecOne products={photography} pageAttr={pageContent.photography} />
			<SecOne products={photography} pageAttr={pageContent.sports} />

			{/* <SecTwo products={sportsOptics} pageAttr={pageContent.sports} /> */}
			<SecThree />
			<Footer />
		</div>
	);
}

export default App;
