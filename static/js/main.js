  const imagensZoom = document.querySelectorAll('.imagemZoom');

  imagensZoom.forEach((imagem) => {
    imagem.addEventListener('mouseover', () => {
      imagem.style.transform = 'scale(1.5)';
    });
  
    imagem.addEventListener('mouseout', () => {
      imagem.style.transform = 'scale(1)';
    });
  });

  var path = window.location.pathname;

  var menuItems = document.getElementsByClassName('menu-item');
  
  for (var i = 0; i < menuItems.length; i++) {
    var href = menuItems[i].getAttribute('href');
    if (path === href) {
      menuItems[i].classList.add('current');
      break;
    }
  }


