 const app = {
     init: function(){
       app.galeriePhotos= document.querySelector(".galeriePhotos");
       app.ButtonPhoto=document.querySelector(".photos");
       app.ButtonPhoto.addEventListener("click", app.getPhotos);
     }, 
     getHidePhotos: function() { // Define the function
          console.log("ça click oùùù");
          app.galeriePhotos.removeAttribute("hidden");
        },
        getPhotos: function(){
          app.galeriePhotos.setAttribute("hidden",true);
          console.log("ça s'annule ouuu ?")
        }
   
   }
   document.addEventListener('DOMContentLoaded', app.init);