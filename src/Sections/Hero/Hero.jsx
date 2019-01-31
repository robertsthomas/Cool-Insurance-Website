import React from 'react'

import './style.scss'

const Hero = () => (
	<div className="hero">
		<div className="heading h-50">
			<h1>
				Shop For Insurance In California
			</h1>
			<p className='text-capitalize text-center h5'>
				Get &amp; compare your rates in as little as 5 minutes
			</p>

			<div className="input-group w-50 mx-auto my-5">
				<input type="text" className='form-control' placeholder='Enter Zip Code' />
				<div className="input-group-append">
					<button className="btn btn-secondary rounded-right" type='button'>Get Your Quote</button>
				</div>
				<p>or speak with an agent at 1-800-888-8888</p>
			</div>

		</div>
	</div>
)


export default Hero
