function imagesCleanUp(imagesSum){
    let i;
    imageList = [];
    for (i = 0; i < imagesSum; i++) {
        imageList.push(`${String(i)}.jpg`);
    }
    return imageList;
}

const images = imagesCleanUp(20);
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg_img");

document.body.appendChild(bgImage);