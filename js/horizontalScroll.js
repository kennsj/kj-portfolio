// Change vertical scroll to horizontal scroll

function horizontalScroll(event) {

	event.preventDefault()

	if (event.deltaY != 0) {

		// Manually scroll horizonally instead
		window.scroll(window.scrollX + event.deltaY * .5, 0)

	}
	return
}

window.addEventListener('wheel', horizontalScroll)

// window.addEventListener('mousewheel', function(e){
//     // wDelta = e.wheelDelta < 0 ? 'right' : 'left';
//
// 	if (wDelta = e.wheelDelta < 0) {
//
// 		// window.scrollTo(500, 0)
//         // console.log('hi');
//
// 	} else {
//
// 		// window.scrollTo(-500, 0)
//
// 	}
// })
