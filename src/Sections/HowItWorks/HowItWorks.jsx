import React from 'react'

import './style.scss';

import { howItWorks as infos } from '../../Maps/HowItWorks'

const HowItWorks = () => (
	<div className="border-top">
		<div className="container py-5">
			<div className="row">
				<div className="col-12 align-self-center pb-5">
					<h1 className='display-4'>How It Works</h1>
				</div>
				{infos.map(info => (
					<div className="col-md" key={info.title}>
						<img src={info.img} className='img-fluid w-100' style={{ height: 200, objectFit: 'cover' }} alt="" />

						<div className="info ">
							<h4>{info.title}</h4>
							<p>{info.desc}</p>
						</div>

					</div>
				))}
			</div>
		</div>
	</div>
)


export default HowItWorks
