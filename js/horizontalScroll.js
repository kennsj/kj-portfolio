/*// Change vertical scroll to horizontal scroll

function horizontalScroll(event) {

	// event.preventDefault()
	// window.deltaY = 0
	// window.deltaX = 0
	if (event.deltaY != 0) {

		// Manually scroll horizonally instead
		// window.scroll(window.scrollX + event.deltaY * .5, window.scrollY * 0 )

		// Prevent vertical scroll
		event.preventDefault()
	}

	// console.log(window.scrollX);

	return
}

// window.addEventListener('wheel', horizontalScroll)

// window.addEventListener('mousewheel', function(e){
//     // wDelta = e.wheelDelta < 0 ? 'right' : 'left';
//
// 	if (wDelta = e.wheelDelta < 0) {
// 		console.log('right');
// 	} else {
// 		console.log('left');
// 	}
//
//     // console.log(wDelta);
//
// });



// function noShakeScroll(e) {
// 	this.scrollBy(0,e.deltaY);
// 	e.preventDefault();
// }
*/
