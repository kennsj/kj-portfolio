//////////////////////////////////////////////////////////////////////

/* PROJECTS JS */

//////////////////////////////////////////////////////////////////////

window.addEventListener('load', function () {

	var theEls = document.querySelectorAll('.animate-container')
	var scrollTimeline = []

	// Now we loop through the elements and add each one to the timeline along with its scroll position
	for (let i = 0; i < theEls.length; i++) {

		var thisEl = theEls[i]

		scrollTimeline.push({
			el: thisEl,
			top: thisEl.getBoundingClientRect().top - window.innerHeight / 2.5
		})

	}

	// Function which iterates as user scrolls
	function toggleWidth() {

		for (let i = 0; i < scrollTimeline.length; i++) {

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
