import React from 'react'

const GetQuote = () => (
	<div className="zipcode mx-auto d-flex justify-content-center">

		<div className="input-big d-none d-lg-block w-25">
			<div className="input-group">
				<input type="text" className='form-control' placeholder='Zip Code' />
				<div className="input-group-append">
					<button className="btn btn-secondary rounded-right" type='button'>
						Get Your Quote
				</button>
				</div>
			</div>
			<p>or speak with an agent at 1-800-888-8888</p>
		</div>

		<div className="input-small d-lg-none w-50">
			<div className="form-group">
				<input type="text" className="rounded-0 form-control" placeholder='Zip Code' />
				<button className="btn btn-secondary btn-block rounded-0 ">Get Your Quote</button>
			</div>
			<p>or speak with an agent at 1-800-888-8888</p>
		</div>
	</div>
)

export default GetQuote
