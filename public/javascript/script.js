// mise en cache de l'utilisation de la font dyslexie pour changement de page

document.addEventListener('DOMContentLoaded', () => {
    let dyslexie = localStorage.getItem('dyslexieState') === 'true';
    let dyslexieButton = document.getElementById('dyslexie');
  
    dyslexieButton.classList.toggle('active', dyslexie);
    document.body.classList.toggle('dyslexie', dyslexie);
  
    dyslexieButton.addEventListener('click', () => {
      dyslexie = !dyslexie;
      dyslexieButton.classList.toggle('active', dyslexie);
      document.body.classList.toggle('dyslexie', dyslexie);
      localStorage.setItem('dyslexieState', dyslexie.toString());
    });
  });