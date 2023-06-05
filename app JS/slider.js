var imagenUno = "https://res.cloudinary.com/dclgwdu77/image/upload/v1685590408/imagenes%20olaia/slider2_avgbpn.jpg"
var imagenDos = "https://res.cloudinary.com/dclgwdu77/image/upload/v1685589467/imagenes%20olaia/slider3_ejcshl.jpg"
var imagenTres = "https://res.cloudinary.com/dclgwdu77/image/upload/v1685589466/imagenes%20olaia/slider1_ytazsq.jpg"
var imagenCuatro = "https://res.cloudinary.com/dclgwdu77/image/upload/v1685589467/imagenes%20olaia/slider4_lvip8g.jpg"

var listaImagenes = [imagenUno,imagenDos,imagenTres,imagenCuatro]
var sliderImg = document.getElementById('slider-img')
sliderImg.src = imagenUno
var contador = 1
function sliderImagenes(){
   
   sliderImg.src = listaImagenes[contador]
   contador = contador  + 1

   if(contador > listaImagenes.length -1 ){
      contador = 0
   }
}

setInterval(sliderImagenes, 3000)

const btn = document.querySelector(".mobile-btn")

btn.addEventListener('click', ()=>{
   btn.classList.toggle("active-btn")
})