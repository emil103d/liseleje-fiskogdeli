<script>
	let navWidth = 0;

	let navOpen = false;

	// Saml de to nedenstående funktioner til denne smarte en
	const handleNav = () => {
		navOpen = !navOpen;
		navOpen ? (navWidth = 100) : (navWidth = 0);
	};

	// const openNav = () => {
	// 	navOpen = !navOpen;
	// 	navWidth = 100;
	// };
	// const closeNav = () => {
	// 	navOpen = !navOpen;
	// 	navWidth = 0;
	// };
</script>

<div id="mySidenav" class="sidenav" style="width: {navWidth}%">
	<a href="javascript:void(0)" class="closebtn" on:click={handleNav}>&times;</a>
	<a href="#">About</a>
	<a href="#">Services</a>
	<a href="#">Clients</a>
	<a href="#">Contact</a>
</div>

<!-- Use any element to open the sidenav -->
<!-- <span on:click={openNav}>open</span> -->

<!--hamburger icon to open the sidenav -->
<div class="container" on:click={handleNav} class:change={navOpen}>
	<div class="bar1" />
	<div class="bar2" />
	<div class="bar3" />
</div>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main">
	<h2>Sidenav Push Example</h2>
	<p>
		Click on the element below to open the side navigation menu, and push this content to the right.
	</p>
</div>

<style>
	/* span {
		position: absolute;
		right: 10%;
	} */

	/* The side navigation menu */
	.sidenav {
		height: 100%; /* 100% Full-height */
		width: 0%; /* 0 width - change this with JavaScript */
		position: fixed; /* Stay in place */
		z-index: 1; /* Stay on top */
		top: 0;
		left: 0;
		background-color: #111; /* Black*/
		overflow-x: hidden; /* Disable horizontal scroll */
		padding-top: 60px; /* Place content 60px from the top */
		transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
	}

	/* The navigation menu links */
	.sidenav a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

	/* When you mouse over the navigation links, change their color */
	.sidenav a:hover {
		color: #f1f1f1;
	}

	/* Position and style the close button (top right corner) */
	.sidenav .closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}

	.open {
		width: 100%;
	}

	/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
	#main {
		transition: margin-left 0.5s;
		padding: 20px;
	}

	/* ---------Hamburger menu start---------- */
	.container {
		display: inline-block;
		cursor: pointer;
		position: absolute;
		right: 10%;
	}

	.bar1,
	.bar2,
	.bar3 {
		width: 35px;
		height: 5px;
		background-color: #333;
		margin: 6px 0;
		transition: 0.4s;
	}

	.change .bar1 {
		transform: translate(0, 11px) rotate(-45deg);
	}

	.change .bar2 {
		opacity: 0;
	}

	.change .bar3 {
		transform: translate(0, -11px) rotate(45deg);
	}

	/* ---------Hamburger menu close---------- */

	/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
	@media screen and (max-height: 450px) {
		.sidenav {
			padding-top: 15px;
		}
		.sidenav a {
			font-size: 18px;
		}
	}
</style>
