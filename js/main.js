//@ts-check
'use strict';

window.sr = ScrollReveal({
	reset: true
});

sr.reveal('.work-overlay', {
	duration: 1200,
	// easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',	
	translate: '500px',
	scale: 1,
	viewFactor: 1.28,
	opacity: 1,
	distance: 0
});

var rellax = new Rellax('.background-title', {
	speed: 2,
	center: false,
	round: true,
	vertical: false,
	horizontal: true
})


var logo = document.querySelector('.aurora-icon')

logo.addEventListener('mousedown', function () {
	window.location = '/index.html'
})

// Animates each work preview element when scrolled into view

var intersectEl = document.querySelector('.intersect-area')
// var intersectRect = intersectEl.getBoundingClientRect()

var workPreviews = document.querySelectorAll('.work-preview')
var workOverlay = document.querySelector('.work-overlay')
var buttons = document.querySelectorAll('button')

var workID = document.querySelectorAll('*[id]')
var centeredDiv = false



// Scroll event for work previews
document.addEventListener('scroll', function (event) {

	if (window.scrollX > window.innerWidth / 2) {



	}


	window.onscroll = function (e) {
		// print "false" if direction is down and "true" if up
		if (this.oldScroll > this.scrollX) {
			console.log('Left');
			// console.log(centeredDiv);
		} else {
			console.log('Right');

			// console.log(centeredDiv);
		}

		this.oldScroll = this.scrollX;
	}

	for (let i = 0; i < workPreviews.length; i++) {

		var thisWork = workPreviews[i]
		var thisworkRect = thisWork.getBoundingClientRect()
		var triggerAnchorPoint = window.innerWidth / 5
		var thisOverlay = thisWork.children[4]

		// Animate work preview when in view and animate out when out of view
		if ((thisworkRect.left > triggerAnchorPoint) && (thisworkRect.right < (window.innerWidth - triggerAnchorPoint))) {


			// Velocity(thisOverlay, {
			// 	translateX: '-50%',
			// 	scaleX: 0
			// }, {
			// 	duratoin: 800
			// })

			// thisWork.classList.add('work-focus')
			// thisOverlay.classList.add('.hide-overlay')

		} else {

			// thisWork.classList.remove('work-focus')
			// thisOverlay.classList.remove('.hide-overlay')

		}
	}

})






// Click event for work previews
for (let i = 0; i < workID.length; i++) {

	var thisWorkID = workID[i]

	// Calculates each work previews position relative to the viewport to center it

	var triggerAnchorPoint = window.innerWidth / 3.8
	var workPreviewBoundingLeft = thisWorkID.getBoundingClientRect().left
	var workPreviewBoundingRight = thisWorkID.getBoundingClientRect().right

	thisWorkID.addEventListener('mousedown', function (event) {

		// Scroll to clicked element and center it
		var halfPreviewWidth = this.offsetWidth / 2,
			previewOffset = this.getBoundingClientRect().left,
			scrollPos = window.scrollX + halfPreviewWidth + (previewOffset - (window.innerWidth / 2))

		// Scrolls to
		window.scrollTo({
			behavior: 'smooth',
			left: scrollPos
		})

		if (thisWorkID.classList.contains('focus')) {
			console.log('hi');
		}

		// window.location = workHTML + '.html'

		// Sets up XMLHttp request

		var xhr = new XMLHttpRequest()
		var workHTML = this.getAttribute('id')

		xhr.onreadystatechange = function () {

			if (this.readyState == 4 && this.status == 200) {

				// xhr.open('GET', workHTML + '.html', true);
				// xhr.send()

			}
		}

		xhr.open('GET', 'unoccupied.html', true);
		xhr.send();

		// xhr.onload = function(e) {
		//
		//
		// 	if (xhr.readyState === 4) {
		// 		console.log(this);
		//
		// 		if (xhr.status === 200) {
		//
		//
		// 			var workID = document.querySelectorAll('article')
		//
		// 			// setTimeout(function() {
		//             //
		// 			// 	xhr.open('GET', workHTML + '.html', true)
		// 			// 	xhr.send()
		//             //
		// 			// }, 100)
		//
		// 			/*for (var i = 0; i < workID.length; i++) {
		// 				console.log(workID);
		// 			}
		//
		// 			if (this.style.opacity == 1) {
		//
		// 				window.scrollTo({
		// 					behavior: 'smooth',
		// 					left: scrollPos
		// 				})
		//
		// 			} else if (this.style.opacity == 0.2) {
		//
		// 				var workHTML = this.getAttribute('id')
		//
		// 				setTimeout(function(){
		//
		// 					xhr.open('GET', workHTML + '.html', true)
		// 					xhr.send()
		//
		// 				}, 100)
		//
		// 				console.log(xhr.statusText)
		//
		// 			}*/
		//
		// 		} else {
		// 			console.error(xhr.statusText)
		// 		}
		// 	}
		// }
		//
		// xhr.onerror = function(e) {
		// 	console.error(xhr.statusText)
		// }

	})
}


const SCROLL_DELAY = 2000;
var blockTimeStamp = 0;

function scrollProject(dir) {

	if ((Date.now() - blockTimeStamp) > SCROLL_DELAY) {

		console.log('scroll', dir);
		for (let i = 0; i < workID.length; i++) {

			var thisWorkID = workID[i]

			console.log(thisWorkID)


			/*
			var triggerAnchorPoint = window.innerWidth / 3.8
			var workPreviewBoundingLeft = thisWorkID.getBoundingClientRect().left
			var workPreviewBoundingRight = thisWorkID.getBoundingClientRect().right

			var halfPreviewWidth = this.offsetWidth / 2
			var previewOffset = this.getBoundingClientRect().left
			var scrollPos = window.scrollX + halfPreviewWidth + (previewOffset - (window.innerWidth / 2))

			window.scrollTo({behavior: 'smooth', left: scrollPos})
			*/


		}

		blockTimeStamp = Date.now()
	}
}

for (let i = 0; i < buttons.length; i++) {

	buttons[i].addEventListener('mousedown', function () {

		window.location = this.parentElement.getAttribute('id') + '.html'

		// window.location = buttonHTML + '.html'

	})

}



//////////////////////////////////////////////////////////////////////

/* LOADER ANIMATION */

//////////////////////////////////////////////////////////////////////


// Animating pre-loader



// var overlayDiv = document.querySelector('.text-overlay')

// Velocity(overlayDiv, {
// 	left: 0,
// 	width: '600px'
// }, {
// 	duration: 300,
// 	delay: 800,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(overlayDiv, {
//     right: 0,
//     width: 0,
//     translateX: 600
// }, {
// 	duration: 300,
// 	delay: 300,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-name'), {
// 	opacity: 1
// }, {
// 	duration: 0,
// 	delay: 1100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(overlayDiv, {
//     left: '-600px',
//     width: '600px'
// }, {
//     duration: 300,
//     delay: 1100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-name'), {
//     opacity: 0
// }, {
//     delay: 1800,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-title'), {
//     opacity: 1
// }, {
//     duration: 0,
//     delay: 3100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(overlayDiv, {
//     width: 0
// }, {
//     duration: 300,
//     delay: 500,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// var auroraIcon = document.querySelector('.aurora-icon')
// var hamburger = document.querySelector('.hamburger')
// var articleSection = document.querySelector('article')

// Velocity(auroraIcon, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// 	delay: 4000
// })

// Velocity(hamburger, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// 	delay: 4000
// })

// Velocity(articleSection, {
// 	opacity: 1,
// }, {
// 	display: 'flex',
// 	duration: 800,
// 	delay: 4000
// })


var overlayDiv = document.querySelector('.text-overlay')

Velocity(overlayDiv, {
	left: 0,
	width: '600px'
}, {
	duration: 300,
	delay: 800,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(overlayDiv, {
	right: 0,
	width: 0,
	translateX: 600
}, {
	duration: 300,
	delay: 300,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(document.querySelector('.h1-name'), {
	opacity: 1
}, {
	duration: 300,
	delay: 1100,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(overlayDiv, {
	left: '-600px',
	width: '600px'
}, {
	duration: 300,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(document.querySelector('.h1-name'), {
	opacity: 0
}, {
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(document.querySelector('.h1-title'), {
	opacity: 1
}, {
	duration: 0,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(overlayDiv, {
	width: 0
}, {
	duration: 300,
	easing: [0.0, 0.0, 0.2, 1]
})

var auroraIcon = document.querySelector('.aurora-icon'),
	hamburger = document.querySelector('.hamburger'),
	articleSection = document.querySelector('article')

Velocity(auroraIcon, {
	opacity: 1,
}, {
	duration: 800,
})

Velocity(hamburger, {
	opacity: 1,
}, {
	duration: 800,
})

Velocity(articleSection, {
	opacity: 1,
}, {
	display: 'flex',
	duration: 0,
})