import React from 'react'

import GetQuote from '../../Components/GetQuote/GetQuote'

import './style.scss'

const Hero = () => (
	<div className="hero vh-100">
		<div className="d-flex h-100 justify-content-center align-items-center flex-wrap">
			<div className="w-100 text-center">
				<h2 className='display-4'>Shop For Insurance In California</h2>
				<h4>Get &amp; Compare Your Rates In As Little As 5 Minutes</h4>
				<GetQuote />
			</div>
		</div>
	</div>
)


export default Hero
