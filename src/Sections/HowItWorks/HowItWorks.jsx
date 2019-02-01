import React from 'react'

import './style.scss';

import { howItWorks as infos } from '../../Maps/HowItWorks'

const HowItWorks = () => (
	<div className="vh-100 border-top">
		<div className="row h-100">
			<div className="col-12 align-self-center py-3">
				<h1 className='display-4'>How It Works</h1>
			</div>
			{infos.map(info => (
				<div className="col-md">
					<img src={info.img} className='img-fluid w-100' style={{ height: 200, objectFit: 'cover' }} alt="" />

					<div className="info ">
						<h4>{info.title}</h4>
						<p>{info.desc}</p>
					</div>

				</div>
			))}
		</div>
	</div>
)


export default HowItWorks
