var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function changeBackground(){
	let pic_color = Math.round(Math.random() * colors.length-1);
	document.body.style.backgroundColor = colors[pic_color];
}