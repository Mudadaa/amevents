
 const app = {
     init: function(){
        //on récupère la galerie
        app.galerie=document.querySelector(".galerie");
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
     // Ajouter un écouteur d'événements pour les changements de la requête de média
     window.matchMedia("(max-width: 400px)").addListener(app.handleMediaQuerySize);
    //pour des tailles d'écran inférieures à 400px, on cache les golden roses
    app.handleMediaQuerySize();
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
    handleMediaQuerySize: function () {
        const matchMedia = window.matchMedia("(max-width: 400px)");
    
        // Vérifier si la requête de média correspond
        if (matchMedia.matches) {
            // Code à exécuter lorsque la largeur de l'écran est inférieure ou égale à 400 pixels
            app.goldenUp.style.display = 'none';
            app.goldenDown.style.display = 'none';
           
        } else {
            // Code à exécuter lorsque la largeur de l'écran est supérieure à 400 pixels
            // Vous pouvez ajuster ce bloc en fonction de vos besoins
            app.goldenUp.style.display = 'block'; // ou 'initial', selon votre mise en page
            app.goldenDown.style.display = 'block'; // ou 'initial', selon votre mise en page
        }
    },
    
    };
    
    
    

   document.addEventListener('DOMContentLoaded', app.init);