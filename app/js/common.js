$(document).ready(function() {
	$(".mobile__burger").click(function() {
		$(".mobile__nav").toggleClass("mobile__nav-active")
	}),

	$(".mobile__close").click(function() {
		$(".mobile__nav").toggleClass("mobile__nav-active")
	});
});