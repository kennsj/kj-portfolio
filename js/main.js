// Animates each work preview element when scrolled into view

var workPreviews = document.querySelectorAll('.work-preview')

document.addEventListener('scroll', function(event) {

	for (var i = 0; i < workPreviews.length; i++) {

		var thisWork = workPreviews[i]

		var triggerAnchorPoint = window.innerWidth / 3.8
		var workPreviewBoundingLeft = thisWork.getBoundingClientRect().left
		var workPreviewBoundingRight = thisWork.getBoundingClientRect().right

		// Animate work preview when in view and animate out when out of view
		if ((workPreviewBoundingLeft > triggerAnchorPoint) && (workPreviewBoundingRight < (window.innerWidth - triggerAnchorPoint))) {
			//if (i === 0) console.log('show item')
			thisWork.style.background = 'white'
			thisWork.style.opacity = .2
			thisWork.style.transform = 'scale(1.4)'
		} else {
			//if (i === 0) console.log('hide item')
			thisWork.style.background = 'black'
			thisWork.style.opacity = 1
			thisWork.style.transform = 'scale(1)'
		}
	}
})

// Sets up AJAX & adds click event to each work preview element
var workID = document.querySelectorAll('*[id]')

for (i = 0; i < workID.length; i++) {

	var thisWorkID = workID[i]

	var triggerAnchorPoint = window.innerWidth / 3.8
	var workPreviewBoundingLeft = thisWorkID.getBoundingClientRect().left
	var workPreviewBoundingRight = thisWorkID.getBoundingClientRect().right

	thisWorkID.addEventListener('mousedown', function(event) {

		// 1. If an element is clicked and not zoomed in (see script above),
		//    center the clicked element
		//
		// 2. If an element which is centered and zoomed in is clicked, it will
		//    dynamically expand its width and height to 100vw/100vh and the body
		//    will set its width and size accordingly and to a fixed size so the user
		//    can't scroll left/right
		//
		// 3. After the element is resized and the body is fixed, AJAX will be called once
		//    the animations are done
		//
		// 4. AJAX calls send you to the ID (WorkID) of the clicked element


		// Scroll to clicked element and center it
		var halfPreviewWidth = this.offsetWidth / 2,
			previewOffset = this.getBoundingClientRect().left,
			scrollPos = window.scrollX + halfPreviewWidth + (previewOffset - (window.innerWidth / 2))

		// console.log(this.style.opacity);

		window.scrollTo({
			behavior: 'smooth',
			left: scrollPos
		})

		// Sets up XMLHttp

		var xhr = new XMLHttpRequest()
		var workHTML = this.getAttribute('id')

		xhr.open("GET", workHTML + '.html', true)
		xhr.onload = function(e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {


					console.log(this.responseURL)
					var workID = document.querySelectorAll('article')

					// setTimeout(function() {
					// 	window.location.href = 'project.html'
					// }, 500)



					for (var i = 0; i < workID.length; i++) {
						console.log(workID);
					}

					if (this.style.opacity == 1) {

						window.scrollTo({
							behavior: 'smooth',
							left: scrollPos
						})

					} else if (this.style.opacity == 0.2) {

						// var workHTML = this.getAttribute('id')
						//
						// setTimeout(function(){
						//
						// 	xhr.open('GET', workHTML + '.html', true)
						// 	xhr.send()
						//
						// }, 100)

						//console.log(xhr.statusText);

					}

				} else {
					console.error(xhr.statusText)
				}
			}
		}

		setTimeout(function() {

			xhr.open('GET', workHTML + '.html', true)
			xhr.send()

		}, 100)

		xhr.onerror = function(e) {
			console.error(xhr.statusText)
		};


		/* if (this.style.opacity == 1) {

			window.scrollTo({
				behavior: 'smooth',
				left: scrollPos
			})

		} else if (this.style.opacity == 0.2) {

			// var workHTML = this.getAttribute('id')
			//
			// setTimeout(function(){
			//
			// 	xhr.open('GET', workHTML + '.html', true)
			// 	xhr.send()
			//
			// }, 100)

			//console.log(xhr.statusText);

		} */

	})

}






window.addEventListener('mousewheel', function(e){

	if (wDelta = e.wheelDelta < 0) {
		console.log('Right');
	} else {
		console.log('Left');
	}

})



////////////////////////////////////////////////////////////////

document.querySelector('a').addEventListener('mouseover', function() {

	console.log(this);

	this.classList.add('hover-cursor')

	// Velocity(this, {
	// 	this.classList.add('hover-cursor')
	// }, {
	// 	duration: 500
	// })
	// this.style.cursor = "url('../img/green_cursor-hover.png')"

})


//////////////////////////////////////////////////////////////////////

/* LOADER ANIMATION */

//////////////////////////////////////////////////////////////////////


// Animating pre-loader

// var overlayDiv = document.querySelector('.text-overlay')
//
// Velocity(overlayDiv, {
// 	left: 0,
// 	width: '600px'
// }, {
// 	duration: 300,
// 	delay: 800,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(overlayDiv, {
//     right: 0,
//     width: 0,
//     translateX: 600
// }, {
// 	duration: 300,
// 	delay: 300,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(document.querySelector('.h1-name'), {
// 	opacity: 1
// }, {
// 	duration: 0,
// 	delay: 1100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(overlayDiv, {
//     left: '-600px',
//     width: '600px'
// }, {
//     duration: 300,
//     delay: 1100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(document.querySelector('.h1-name'), {
//     opacity: 0
// }, {
//     delay: 1800,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(document.querySelector('.h1-title'), {
//     opacity: 1
// }, {
//     duration: 0,
//     delay: 3100,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// Velocity(overlayDiv, {
//     width: 0
// }, {
//     duration: 300,
//     delay: 500,
// 	easing: [0.0, 0.0, 0.2, 1]
// })
//
// var about = document.querySelector('.about-link'),
// 	auroraIcon = document.querySelector('.aurora-icon'),
// 	hamburger = document.querySelector('.hamburger'),
// 	articleSection = document.querySelector('article')
//
// Velocity(about, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// 	delay: 4000
// })
//
// Velocity(auroraIcon, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// 	delay: 4000
// })
//
// Velocity(hamburger, {
// 	opacity: 1,
// }, {
// 	duration: 800,
// 	delay: 4000
// })
//
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



//////////////////////////////////////////////////////////////////////

/* PROJECTS JS */

//////////////////////////////////////////////////////////////////////

window.addEventListener('load', function() {

	var theEls = document.querySelectorAll('.animate-container')
	var scrollTimeline = []

	// Now we loop through the elements and add each one to the timeline along with its scroll position
	for (i = 0; i < theEls.length; i++) {

		var thisEl = theEls[i]

		scrollTimeline.push({
			el: thisEl,
			top: thisEl.getBoundingClientRect().top - window.innerHeight / 2.5
		})

	}

	// Function which iterates as user scrolls
	function toggleWidth() {

		for (i = 0; i < scrollTimeline.length; i++) {

			var thisEvent = scrollTimeline[i]

			if (checkHeight(thisEvent)) {

				Velocity(theEls[i], {
					width: 0
				}, {
					duration: 1000,
					easing: [0.0, 0.0, 0.2, 1]
				})

			}
		}
	}

	function checkHeight(ev) {
		return document.documentElement.scrollTop > ev.top
	}

	window.addEventListener('scroll', toggleWidth)

})
