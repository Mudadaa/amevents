
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
    app.galerieVideos.hidden
    if(app.galerieVideos.hidden="false"){
        app.galeriePhotos};
        // comme l'affichage de la page est mise sur flex
        //il faut le retirer car cela neutralise l'action de la fonction toggle
        //app.galeriePhotos.style.display = 'flex'; tt seul fige galeriePhoto en mode 'ouvert'
    if (app.galeriePhotos.style.display === 'flex') {
     app.galeriePhotos.style.display = 'none'; // Masquez la galerie de photos
    } else {
    app.galeriePhotos.style.display = 'flex'; // Affichez la galerie de photos en tant que flex
    };
    
    },
    toggleHideVideos: function(){
console.log("video caché ou pas ?");
if(app.galerieVideos.style.display==='flex'){
    app.galerieVideos.style.display='none'
}else{
    app.galerieVideos.style.display='flex'
}
app.galerieVideos.hidden=!app.galerieVideos.hidden
if(app.galerieVideos.hidden="false"){
    app.galerieVideos
}


 
    }
  }

   document.addEventListener('DOMContentLoaded', app.init);