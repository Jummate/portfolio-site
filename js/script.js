
(function(){
	let pressedToggle = true;
	let changeCloud = true;
	let changeCloud2 = true;

	const _ = elem => {										//create a function for getting elements from the DOM
	return document.querySelector(elem);
	}

	window.addEventListener("DOMContentLoaded", ()=>{
		if(!sessionStorage.hasOwnProperty("first-loading"))
		{
			sessionStorage.setItem("first-loading", "1");
		}
		if(sessionStorage.getItem("first-loading") === "1")
		{
			sessionStorage.setItem("first-loading","0");
			_("#loader-wrapper").style.display = "flex";
			setTimeout(()=>{
				_("#loader-wrapper").style.display = "none";
				_("#main-container").style.display = "block";
				_("#main-container").style.animation = "appear-slowly 0.7s ease";								
			}, 3000);
			
		}
		else
		{
			_("#main-container").style.display = "block";
		}

	})
	//this creates a scroll indicator based on the height scrolled
	window.addEventListener("scroll", ()=>{
		let amountScrolled = (window.pageYOffset /(document.body.scrollHeight - document.body.clientHeight)) * 100;
		_("#scroll-indicator").style.width = `${amountScrolled}%`;
	})
	
	
	const goToMenu = function(pressedTab){
	switch(pressedTab)
	{
		case "home":
			_("#main-container").scrollIntoView();
			break;
		case "about":
			_("#about-me").style.animation = "appear-slowly 0.7s ease";
			_("#about-me").scrollIntoView();
			break;
		case "projects":
			_("#project").style.animation = "appear-slowly 0.7s ease";
			_("#project").scrollIntoView();
			break;
		case "contact":
			_("#contact").style.animation = "appear-slowly 0.7s ease";
			_("#contact").scrollIntoView();
	}
	}

	_("#footer-nav").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
	});

	_("#nav-larger-screen").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
	});

	_("#nav-smaller-screen").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
	_(".open-menu").setAttribute("class","fa fa-bars open-menu");
	_("#nav-smaller-screen").style.display = "none";
	pressedToggle = true;
	});

	//-------------This creates a rotaion effect on close and open menu toggler
	_(".open-menu").addEventListener("click",() => {
	if(pressedToggle)
	{
		_(".open-menu").setAttribute("class","fa fa-close open-menu");
		_("#nav-smaller-screen").style.display = "block";
		_(".open-menu").style.transform = "rotate(180deg)";
		_(".open-menu").style.transition = "transform 0.7s ease";
		_("#nav-smaller-screen").style.animation = "appear-slowly 0.7s ease";
		pressedToggle = false;
	}
	else
	{
		_(".open-menu").setAttribute("class","fa fa-bars open-menu");
		_("#nav-smaller-screen").style.animation = "disappear-slowly 0.7s ease";
		setTimeout(()=>{
			_("#nav-smaller-screen").style.display = "none";
		},500);
		_(".open-menu").style.transform = "rotate(-180deg)";
		_(".open-menu").style.transition = "transform 0.7s ease";
		pressedToggle = true;
	}

	});

	//-----------------------------Cloudy and rainy day effect-------------------------------------
	setInterval(()=>{
	if(changeCloud)
	{
		_("#first-cloud img").src = "images/cloud-rain.png";
		changeCloud = false;
	}
	else
	{
		_("#first-cloud img").src = "images/cloud-rain2.png";
		changeCloud = true;
	}
	}, 500);

	setInterval(()=>{
	if(changeCloud)
	{
		_("#second-cloud img").src = "images/cloud-rain2.png";
	}
	else
	{
		_("#second-cloud img").src = "images/cloud-rain.png";
	}
	}, 500);
})()
