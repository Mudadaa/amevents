 const app = {
     init: function(){
      //on récupère la galerie de photos
       app.galeriePhotos= document.querySelector(".galeriePhotos");
      // on récup le boutton pour les photos
       app.ButtonPhoto=document.querySelector(".photos");
      // on ajoute au boutton l'évènement click et la fonction de toggle
       app.ButtonPhoto.addEventListener("click", app.toggleHidePhotos);
     
       //idem pour la galerie vidéo, le boutton vidéo=>click=>fct
       app.galerieVideos=document.querySelector(".galerieVideos");
       app.ButtonVideo=document.querySelector(".videos");
       app.ButtonVideo.addEventListener("click", app.toggleHideVideos);
      }, 
     toggleHidePhotos: function() { 
     console.log("tof caché ou pas ?");
    app.galeriePhotos.hidden =!app.galeriePhotos.hidden
    },
    toggleHideVideos: function(){
console.log("video caché ou pas ?");
app.galerieVideos.hidden=!app.galerieVideos.hidden
    }
  }

   document.addEventListener('DOMContentLoaded', app.init);