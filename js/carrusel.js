let indice = 0;
let imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpeg","img/img5.jpg"];

document.getElementById("siguiente").addEventListener("click", ()=>{
    if (indice<5){
        indice++;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})

document.getElementById("anterior").addEventListener("click", ()=>{
    if (indice>-1){
        indice--;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})
