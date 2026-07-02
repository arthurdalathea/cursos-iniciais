let hora = new Date().getHours();
const texto = document.getElementById("texto");
const img = document.getElementsByTagName("img")[0];
texto.innerText = `Agora são ${hora} hora(s).`;

if (hora < 6) {
    img.src = "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg"
    document.body.style.backgroundColor = "#303030"
} else if (hora >= 6 && hora < 12) {
    img.src = "https://cdn.pixabay.com/photo/2017/03/11/12/02/zagreb-2134898_1280.jpg"
    document.body.style.backgroundColor = "#298ED4"
} else if (hora >= 12 && hora < 18) {
    img.src = "https://cdn.pixabay.com/photo/2016/11/21/16/19/beach-1846235_1280.jpg"
    document.body.style.backgroundColor = "#f0b771";
} else {
    img.src = "https://cdn.pixabay.com/photo/2024/06/16/14/15/nigh-photography-8833532_1280.jpg"
    document.body.style.backgroundColor = "#043655";
}

