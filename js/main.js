//@ts-check
'use strict';

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
			// console.log('Left');
			// console.log(centeredDiv);
		} else {
			// console.log(centeredDiv);
		}

		this.oldScroll = this.scrollX;
	}

	for (var i = 0; i < workPreviews.length; i++) {

		var thisWork = workPreviews[i]

		var triggerAnchorPoint = window.innerWidth / 5
		var workPreviewRect = thisWork.getBoundingClientRect()

		// Animate work preview when in view and animate out when out of view

		if ((workPreviewRect.left > triggerAnchorPoint) && (workPreviewRect.right < (window.innerWidth - triggerAnchorPoint))) {

		
			thisWork.classList.add('focus')

			Velocity(workOverlay, {
				width: 0
			}, {
				duration: 800
			})

			// workOverlay.classList.add('hide-overlay')
			// workOverlay.classList.add('')

		} else {

			thisWork.classList.remove('focus')
			// workOverlay.classList.remove('hide-overlay')
			// thisWork.classList.add('inactive')

		}
	}
})


function workClick() {
	
	for (var i = 0; i < workPreviews.length; i++) {

		var thisWork = workPreviews[i]

		var triggerAnchorPoint = window.innerWidth / 5
		var workPreviewRect = thisWork.getBoundingClientRect()

		// Animate work preview when in view and animate out when out of view

		thisWork[i].addEventListener('mousedown', function () {
			console.log('hi');

		})

	}
}


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
	
	buttons[i].addEventListener('mousedown', function(){
	
		window.location = this.parentElement.getAttribute('id') + '.html'
		
		// window.location = buttonHTML + '.html'
		
	})
	
}



//////////////////////////////////////////////////////////////////////

/* LOADER ANIMATION */

//////////////////////////////////////////////////////////////////////


// Animating pre-loader



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
	duration: 0,
	delay: 1100,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(overlayDiv, {
    left: '-600px',
    width: '600px'
}, {
    duration: 300,
    delay: 1100,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(document.querySelector('.h1-name'), {
    opacity: 0
}, {
    delay: 1800,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(document.querySelector('.h1-title'), {
    opacity: 1
}, {
    duration: 0,
    delay: 3100,
	easing: [0.0, 0.0, 0.2, 1]
})

Velocity(overlayDiv, {
    width: 0
}, {
    duration: 300,
    delay: 500,
	easing: [0.0, 0.0, 0.2, 1]
})

var auroraIcon = document.querySelector('.aurora-icon')
var hamburger = document.querySelector('.hamburger')
var articleSection = document.querySelector('article')

Velocity(auroraIcon, {
	opacity: 1,
}, {
	duration: 800,
	delay: 4000
})

Velocity(hamburger, {
	opacity: 1,
}, {
	duration: 800,
	delay: 4000
})

Velocity(articleSection, {
	opacity: 1,
}, {
	display: 'flex',
	duration: 800,
	delay: 4000
})







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
// 	right: 0,
// 	width: 0,
// 	translateX: 600
// }, {
// 	duration: 300,
// 	delay: 300,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-name'), {
// 	opacity: 1
// }, {
// 	duration: 300,
// 	delay: 1100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(overlayDiv, {
// 	left: '-600px',
// 	width: '600px'
// }, {
// 	duration: 300,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-name'), {
// 	opacity: 0
// }, {
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(document.querySelector('.h1-title'), {
// 	opacity: 1
// }, {
// 	duration: 0,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// Velocity(overlayDiv, {
// 	width: 0
// }, {
// 	duration: 300,
// 	easing: [0.0, 0.0, 0.2, 1]
// })

// var about = document.querySelector('.about-link'),
// 	auroraIcon = document.querySelector('.aurora-icon'),
// 	hamburger = document.querySelector('.hamburger'),
// 	articleSection = document.querySelector('article')

// Velocity(about, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// })

// Velocity(auroraIcon, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// })

// Velocity(hamburger, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// })

// Velocity(articleSection, {
// 	opacity: 1,
// }, {
// 	display: 'flex',
// 	duration: 0,
// })