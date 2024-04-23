let images = [...document.querySelectorAll('.img')]; /* Selecting the images */
let slider = document.querySelector('.slider'); 
let sliderWidth; 
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.1; /* Easing effect for movement */

window.addEventListener('resize', init);

images.forEach((img, idx) => { 
	img.style.backgroundImage = `url(Images/${idx+1}.jpeg)` /* Starting at +1 because images start at 1.jpeg,...3.jpeg */
})

function lerp(start, end, t) { 
	return start * (1-t) + end * t; /* t is the ease variable */ 
	
}

function setTransform(el, transform) {
	el.style.transform = transform;
}

function init() { 
	sliderWidth = slider.getBoundingClientRect().width;
	imageWidth = sliderWidth / images.length;
	document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px` /* Setting body height to adjust scroll space */
}

function animate(){
	current = parseFloat(lerp(current, target, ease)).toFixed(2);
	target = window.scrollY; /* Target position updated when user scrolls */
	setTransform(slider, `translateX(-${current}px)`) /* Slider moves horizontally */
	animateImages();
	requestAnimationFrame(animate);
}

function animateImages(){ /* Animation for each image in the slider */
	let ratio = current / imageWidth;
	let intersectionRatioValue;
	
	images.forEach((image, idx) => {
		intersectionRatioValue = ratio - (idx * 0.7);
		setTransform(image, `translateX(${intersectionRatioValue * 70}px)`) /* Applying horizontal translation to the image */
		
		
})

}

init();
animate()

/* Guidance & Inspiration - https://www.youtube.com/watch?v=z-oexYPY9GY - Accessed: 13/04/2024 */