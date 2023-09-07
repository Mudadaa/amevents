 const app = {
     init: function(){
       app.galeriePhotos= document.querySelector(".galeriePhotos");
       app.ButtonPhoto=document.querySelector(".photos");
       app.ButtonPhoto.addEventListener("click", app.getPhotos);
     }, 
     getHidePhotos: function() { // Define the function
          console.log("ça click oùùù");
          app.galeriePhotos.setAttribute("hidden",true);
        },
        getPhotos: function(){
          app.galeriePhotos.removeAttribute("hidden");
          
          console.log("ça s'annule ouuu ?")
        }
   
   }
   document.addEventListener('DOMContentLoaded', app.init);