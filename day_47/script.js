let grille = document.getElementById("container");

for(let i = 0;i<400;i++){
		grille.innerHTML += `<div class="pixel pixelRouge" id="pixel-${i}"></div>`;
}

document.querySelectorAll('.pixel').forEach(item => {
  item.addEventListener('click', event => {
		let pixelId= event.target.id;
		let pixel = document.getElementById(pixelId);
		
		if(pixel.classList.contains("pixelRouge")){
			pixel.classList.remove("pixelRouge");
			pixel.classList.add("pixelBlanc");
		}
		else{
			pixel.classList.add("pixelRouge");
			pixel.classList.remove("pixelBlanc");
		}
  })
})

