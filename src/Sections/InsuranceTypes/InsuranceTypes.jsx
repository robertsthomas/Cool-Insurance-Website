import React from 'react'

import { insuranceTypes as infos } from "../../Maps/InsuranceTypes";

const InsuranceTypes = () => (
	<div className="border-top">
		<div className="container py-5">
			<div className="row">
				<div className="col-12 align-self-center pb-5">
					<h1 className='display-4'>Insurance Types</h1>
				</div>
				{infos.map(info => (
					<div className="row py-3" key={info.title}>
						<div className="col-4">
							<img src={info.img} className='img-fluid w-100' style={{ height: 200, objectFit: 'cover' }} />
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
	</div>
)

export default InsuranceTypes
