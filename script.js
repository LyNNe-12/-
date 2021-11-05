let shell = document.querySelector('.shell');
let btn = document.querySelector('.btn');
let image = document.querySelector('.image');
let b_image = document.querySelector('.b_image');
btn.onclick = function() {
	shell.style.display = 'none';
	btn.style.display = 'none';
	image.style.display = 'inline-block';
	b_image.style.height = '100vh';
}