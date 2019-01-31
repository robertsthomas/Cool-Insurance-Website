import React from 'react'
import './style.scss'

const Nav = () => (
	<nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent position-absolute w-100">
		<a class="navbar-brand" href="#">Quotable</a>
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
			<button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
		</div>
	</nav>
)


export default Nav
