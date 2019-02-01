import React from 'react'

import GetQuote from "../GetQuote/GetQuote";

import './style.scss'


// TODO: Consolidate Navbar
const Nav = () => (
	<nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent position-absolute w-100">
		<a class="navbar-brand" href="#">
			Quotable&nbsp;
		<span style={{color: '#90a4ae'}}>
				<i class="far fa-comment-alt"></i>
			</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav mx-auto">
				<a class="nav-item nav-link active" href="#">Auto Insurance <span class="sr-only">(current)</span></a>
				<a class="nav-item nav-link" href="#">Home Insurance</a>
				<a class="nav-item nav-link" href="#">Renters Insurance</a>
				<a class="nav-item nav-link" href="#">Health Insurance</a>
				<a class="nav-item nav-link" href="#">Life Insurance</a>
			</div>
			<div className="input-big d-none d-lg-block w-25">
				<div className="input-group">
					<input type="text" className='rounded-0 form-control' placeholder='Zip Code' />
					<div className="input-group-append">
						<button className="btn btn-secondary rounded-0" type='button'>
							Get Your Quote
				</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
)


export default Nav
