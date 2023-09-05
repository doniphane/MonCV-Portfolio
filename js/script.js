document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez tous les liens de navigation dans votre barre de navigation
  const navLinks = document.querySelectorAll('header nav a');

  // Ajoutez un gestionnaire d'événements pour chaque lien de navigation
  navLinks.forEach(link => {
    link.addEventListener('click', scrollSmooth);
  });

  // Fonction pour faire défiler en douceur vers la section cible
  function scrollSmooth(event) {
    event.preventDefault(); // Empêche le comportement de lien par défaut

    // Obtenez l'ID de la section cible depuis l'attribut href du lien
    const targetId = this.getAttribute('href').substring(1);

    // Sélectionnez la section cible par son ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculez la position de la section cible par rapport au haut de la page
      const targetOffset = targetSection.offsetTop;

      // Faites défiler la page jusqu'à la section cible en douceur
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }
});
