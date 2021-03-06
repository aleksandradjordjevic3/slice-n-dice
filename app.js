//data
const images = [
	'url("img/carousel-img-1.jpg")',
	'url("img/carousel-img-2.jpg")',
	'url("img/carousel-img-3.jpg")',
	'url("img/carousel-img-4.jpg")',
	'url("img/carousel-img-5.jpg")'
	
]

const banners = [
	"<h1><span>Lorem</span> ipsum dolor sit amet</h1>",
 	 "<h1>Quae aut corrupti pariatur reiciendis deleniti?</h1>",  
	 "<h1>Doloremque explicabo neque</h1>",
	  "<h1>Delectus, cumque dolorum.</h1>",
 	"<h1>Voluptatem sed odio inventore voluptatibus</h1>"
    
]



// responsive header
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){

//height - dynamic:
const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
if(containerHeight === 0){

	linksContainer.style.height = `${linksHeight}px`;
}

else {
	linksContainer.style.height = 0;
}
});


//carousel:
const bannerTitle = document.getElementById("banner-title");
const navBullets = document.querySelectorAll(".bullet");

//initial setup
navBullets[0].classList.add("active");
const header = document.getElementById("home");
header.style.backgroundImage = images[0];



//change slides prev/next

function changeSlide(n){
	let url = header.style.backgroundImage;
	let current = images.indexOf(url);
	//start from beginning when last image is shown
	if(current===images.length-1 && n===1){
		current=-1;
	}
	//go back to last image if prev button is clicked when first image is shown
	if(current===0 && n===-1){
		current=images.length;
	}
   //change image url and banner text on click
    let index = current+n;
	header.style.backgroundImage = images[index];
	bannerTitle.innerHTML = banners[index];
	
	//change bullet color if active
	for(let i=0; i<=navBullets.length-1; i++){
		if(i===index){
			navBullets[i].classList.add("active");
		}
		else {
			navBullets[i].classList.remove("active");
		}
	}
	
}

//add event listener to bullets

navBullets.forEach((bullet,index) => { 
	bullet.addEventListener('click', function(){
		header.style.backgroundImage = images[index];
		navBullets.forEach(navBullet => navBullet.classList.remove("active"));
		bullet.classList.add("active");		
	});
	
	
});
