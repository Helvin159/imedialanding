import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SecOne from './components/SecOne/SecOne';
import SecTwo from './components/SecTwo/SecTwo';
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

const photo = {
	page: {
		title: 'PHOTOGRAPHY',
		mainImage: 'assets/Layer124.png',
		secImage: 'assets/Layer43.png',
		triImage: 'assets/Layer44.png',
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
};

const sports = {
	page: {
		title: 'SPORTS OPTICS',
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
};

const sportsOptics = [
	{
		name: 'Leica Geovid 8 x 42 3200.COM',
		price: '$2,999.00',
		img: './assets/Layer134.png',
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
];

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<SecOne products={photography} pageAttr={photo} />

			<SecTwo products={sportsOptics} pageAttr={sports} />
			<SecThree />
			<Footer />
		</div>
	);
}

export default App;
