
 const app = {
     init: function(){
      //on récupère la galerie de photos
       app.galeriePhotos= document.querySelector(".galeriePhotos");
      // on récup le boutton pour les photos
       app.ButtonPhoto=document.querySelector(".photos");
      // on ajoute au boutton l'évènement click et la fonction de toggle
       app.ButtonPhoto.addEventListener("click", app.togglePhotos);
     
       //idem pour la galerie vidéo, le boutton vidéo=>click=>fct
       app.galerieVideos=document.querySelector(".galerieVideos");
       app.ButtonVideo=document.querySelector(".videos");
       app.ButtonVideo.addEventListener("click", app.toggleVideos);
// on récupère les 2 golden roses pr la navigation haut/bas de la page
         app.goldenUp=document.querySelector(".upPics");
         app.goldenDown=document.querySelector(".downPics");
         //on ajoute l'évènement click et la fonction de scroll
     app.goldenUp.addEventListener("click", app.scrollUp);
    app.goldenDown.addEventListener("click", app.scrolldown);
      }, 

//Pour le toggle caché, montré
     togglePhotos: function() { 
     
        // comme l'affichage de la page est mise sur flex
        //il faut le retirer car cela neutralise l'action de la fonction toggle
        //app.galeriePhotos.style.display = 'flex'; tt seul fige galeriePhoto en mode 'ouvert'
    if (app.galeriePhotos.style.display === 'flex') {
     app.galeriePhotos.style.display = 'none'; // Masquez la galerie de photos
     app.galerieVideos.style.display='none';
    } else {
    app.galeriePhotos.style.display = 'flex'; // Affichez la galerie de photos en tant que flex
    };
   
    },


    toggleVideos: function(){

//pour le display en flex 
if(app.galerieVideos.style.display==='flex'){
    app.galeriePhotos.style.display = 'none'; 
    app.galerieVideos.style.display='none';
}else{
    app.galerieVideos.style.display='flex';
};

    },

    scrollUp: function(){
        window.scrollTo({top:0, behavior:'smooth'});
    },
    scrolldown: function(){
        window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'});
    },
  }

   document.addEventListener('DOMContentLoaded', app.init);