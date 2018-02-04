//@ts-check
'use strict';

// Animates each work preview element when scrolled into view

var workPreviews = document.querySelectorAll('.work-preview')
var workID = document.querySelectorAll('*[id]')
var intersectEl = document.querySelector('.intersect-area')
var intersectRect = intersectEl.getBoundingClientRect()
var centeredDiv = false


// Scroll event for work previews
document.addEventListener('scroll', function(event) {

	window.onscroll = function(e) {
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

		var thisWorkRect = thisWork.getBoundingClientRect()
		// console.log(thisWorkRect.left + ' ' + thisWorkRect.right);
		// console.log(intersectRect.left + ' ' + intersectRect.right);

		// console.log(thisWorkRect);

		if (thisWorkRect.left < intersectRect.right && thisWorkRect.right > intersectRect.left) {
			console.log('hi');
		} else {
			console.log('nope')
		}

		var triggerAnchorPoint = window.innerWidth / 3.8
		var workPreviewBoundingLeft = thisWork.getBoundingClientRect().left
		var workPreviewBoundingRight = thisWork.getBoundingClientRect().right

		// Animate work preview when in view and animate out when out of view
		// if ((workPreviewBoundingLeft > triggerAnchorPoint) && (workPreviewBoundingRight < (window.innerWidth - triggerAnchorPoint))) {
		//
		// 	thisWork.style.transform = 'scale(1.4)'
		// 	centeredDiv = true
		// 	// console.log(centeredDiv);
		//
		// } else {
		//
		// 	thisWork.style.transform = 'scale(1)'
		// 	centeredDiv = false
		//
		// }

	}
})

// Click event for work previews
for (let i = 0; i < workID.length; i++) {

	var thisWorkID = workID[i]

	// Calculates each work previews position relative to the viewport to center it

	var triggerAnchorPoint = window.innerWidth / 3.8
	var workPreviewBoundingLeft = thisWorkID.getBoundingClientRect().left
	var workPreviewBoundingRight = thisWorkID.getBoundingClientRect().right

	thisWorkID.addEventListener('mousedown', function(event) {

		// Scroll to clicked element and center it
		var halfPreviewWidth = this.offsetWidth / 2,
			previewOffset = this.getBoundingClientRect().left,
			scrollPos = window.scrollX + halfPreviewWidth + (previewOffset - (window.innerWidth / 2))

		// Scrolls to
		window.scrollTo({
			behavior: 'smooth',
			left: scrollPos
		})


		// Sets up XMLHttp request

		var xhr = new XMLHttpRequest()
		// var workHTML = this.getAttribute('id')

		xhr.onreadystatechange = function() {

			if (this.readyState == 4 && this.status == 200) {

				// console.log(open);
				console.log(this);
				// console.log(centeredDiv)

				// window.location = workHTML + '.html'

				//
				// xhr.open('GET', workHTML + '.html', true);
				// xhr.send();

			}

		}

		xhr.open('GET', 'unoccupied.html', true);
		xhr.send();

		/*

		if (centeredDiv === true) {
			scroll()
		} else if (centeredDiv === false) {
			disableScroll()
		}

		*/

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


// var workID = document.querySelectorAll('*[id]')
//
// const SCROLL_DELAY = 2000;
// var blockTimeStamp = 0;
//
// function scrollProject(dir) {
//
// 	if ((Date.now() - blockTimeStamp) > SCROLL_DELAY) {
//
// 		console.log('scroll', dir);
// 		for (let i = 0; i < workID.length; i++) {
//
// 			var thisWorkID = workID[i]
//
// 			console.log(thisWorkID)
//
// 			/*
//
// 			var triggerAnchorPoint = window.innerWidth / 3.8
// 			var workPreviewBoundingLeft = thisWorkID.getBoundingClientRect().left
// 			var workPreviewBoundingRight = thisWorkID.getBoundingClientRect().right
//
// 			var halfPreviewWidth = this.offsetWidth / 2
// 			var previewOffset = this.getBoundingClientRect().left
// 			var scrollPos = window.scrollX + halfPreviewWidth + (previewOffset - (window.innerWidth / 2))
//
// 			window.scrollTo({behavior: 'smooth', left: scrollPos})
//
// 			*/
// 		}
//
// 		blockTimeStamp = Date.now()
// 	}
// }



//////////////////////////////////////////////////////////////////////

/* LOADER ANIMATION */

//////////////////////////////////////////////////////////////////////


// Animating pre-loader

/*

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

	auroraIcon = document.querySelector('.aurora-icon'),
	hamburger = document.querySelector('.hamburger'),
	articleSection = document.querySelector('article')

Velocity(about, {
	opacity: 1,
}, {
	duration: 800,
	delay: 4000
})

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


*/




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

var about = document.querySelector('.about-link'),
	auroraIcon = document.querySelector('.aurora-icon'),
	hamburger = document.querySelector('.hamburger'),
	articleSection = document.querySelector('article')

Velocity(about, {
	opacity: 1,
}, {
	duration: 800,
})

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
