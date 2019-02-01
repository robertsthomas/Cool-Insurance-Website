import React from 'react'

import { insuranceTypes as infos } from "../../Maps/InsuranceTypes";

const InsuranceTypes = () => (
	<div className="vh-100 border-top">
		<div className="row h-100">
			<div className="col-12 py-5 align-self-center">
				<h1 className='display-4'>Insurance Types</h1>
			</div>
			{infos.map(info => (
				<div className="row py-3">
					<div className="col-4">
						<img src="//unsplash.it/400/400" className='img-fluid w-100' style={{ height: 200, objectFit: 'cover' }} />
					</div>
					<div className="col-8">
						<h1>{info.title}</h1>
						<p>{info.desc}</p>
						<button className="btn btn-primary">{info.button}</button>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default InsuranceTypes
