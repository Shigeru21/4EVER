window.addEventListener('load', function () {
    const loading = this.document.querySelector('.loading');
    setTimeout(() => {
      loading.classList.add('fade-out');
      document.body.classList.remove('noscroll');
    }, 1000);
    setTimeout(() => {
      loading.classList.add('hiden');
    }, 1500);
  });