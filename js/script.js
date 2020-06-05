let button = document.getElementsByClassName("b1");
let items = document.getElementsByClassName('item');
let itemsimg = document.getElementsByClassName("itemimg");
let itemsname = document.getElementsByClassName("itemname");
let itemsprice = document.getElementsByClassName("itemprice");
let isPressed = false;
let bal = 500;
function getRand(a, b){
	return(Math.round(Math.random() * (b-a) + a));
}	
function getUpdate(){
	items = document.getElementsByClassName('item');
	itemsimg = document.getElementsByClassName("itemimg");
	itemsname = document.getElementsByClassName("itemname");
	itemprice = document.getElementsByClassName("itemprice");
	for(let i = 0; i < items.length; i++){
		items[i].style.transitionDuration = "0.5s";
		items[i].style.left = (((i % 20 + 2) % 20 ) * 220 + 20) + "px";
		seed = getRand(1, 10);
		if(seed == 10){
			itemsimg[i].style.backgroundImage = "url(https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20heL2KoTcl3lT5MB4kOzFyoD8j1yg5UNkaz_xIdfEd1A5aQ3U-lPskunphJHptZvPwSM26CUht3_UmUe3gEpSLrs4ZlidBgY)"
			itemsname[i].innerHTML = "Karambit Doppler Ruby"
			itemsprice[i].innerHTML = "495.7$"
		}
		else{
			itemsimg[i].style.backgroundImage = "url(https://vignette.wikia.nocookie.net/counterstrike/images/3/3c/Negev.png/revision/latest?cb=20150703053522&path-prefix=ru)"
			itemsname[i].innerHTML = "Negev Govno"
			itemsprice[i].innerHTML = "0.03$"
		}
	}
}
getUpdate();
button[0].addEventListener("click", function(){
	if(!isPressed){
		isPressed = true;
		button[0].innerHTML = "OPENING...";
		let rand1 = getRand(2800, 3000);
		let rand2 = getRand(2800, 3000);
		let rand3 = getRand(2800, 3000);
		for(let i = 0; i < items.length; i++){
			items[i].style.transitionDuration = (Math.floor(i/20) + 3) + "s";
			if(Math.floor(i/20) == 0){
				items[i].style.left = (((i % 20 + 2) % 20 ) * 220 + 20 - rand1) + "px";
			}
			else if(Math.floor(i/20) == 1){
				items[i].style.left = (((i % 20 + 2) % 20 ) * 220 + 20 - rand2) + "px";
			}
			else{
				items[i].style.left = (((i % 20 + 2) % 20 ) * 220 + 20 - rand3) + "px";
			}
			setTimeout(function(){
				getUpdate();
				isPressed = false;
				button[0].innerHTML = "EASY KNIFE";
			}, 6000);
		}
	}
})