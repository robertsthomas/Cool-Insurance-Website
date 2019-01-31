import React from 'react'

import GetQuote from '../../Components/GetQuote/GetQuote'

import './style.scss'

const Hero = () => (
	<div className="hero vh-100">
		<div className="d-flex h-100 justify-content-center align-items-center flex-wrap">
			<div className="w-100 text-center">
				<h1>Shop For Insurance In California</h1>
				<h5>Get &amp; Compare Your Rates In As Little As 5 Minutes</h5>
				<GetQuote />
			</div>
		</div>
	</div>
)


export default Hero
