import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import customCss from  '../css/customCss.scss'


const slides = [
  {
		title: 'INPAY',
		description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
		button: 'Read More',
		image: require('../assets/images/inpay.png').default,
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
	},
	{
		title: 'QBAZAR',
		description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
		button: 'Discover',
		image: require('../assets/images/qbazar.png').default,
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
	},
	{
		title: 'NJEEK',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
		button: 'Buy now',
		image: require('../assets/images/njeek.png').default,
		user: 'Michael',
		userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
	},
];

function ProjectD() {
 return (

<Slider classNames={customCss} autoplay={3000}>
				{slides.map((item, index) => (
					<div
						key={index}
						className={customCss.sliderContent}
						style={{ background: `url('${item.image}')`,backgroundRepeat: "no-repeat",
            backgroundSize: "1500px 400px",width:"100%",height:"100%" }}
					>
						<div className={customCss.inner} style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						
						</div>
					
					</div>
				))}
			</Slider>
//   <Slider>
//   {slides.map((slide, index) => <div key={index}>
//     <h2>{slide.title}</h2>
//     <div>{slide.description}</div>
//   </div>)}
// </Slider>
  );
}


export default ProjectD

