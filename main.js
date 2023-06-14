 const url = 'http://35.173.135.86/';

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const header = document.querySelector('header');
      const aiPreview = document.querySelector('.ai_preview');
      
      aiPreview.innerHTML = html;
    });



