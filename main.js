// variáveis
var urlDaImg = ''

// criar 5000 imagens aleatório
const container = document.getElementById('div');

for (var i = 0; i < 5000; i++) {
  const img = document.createElement('img');
  img.classList.add('lazyload')
  img.setAttribute('id', 'img');
  img.setAttribute('onclick', 'link(this.src)');
  img.setAttribute('src', './imagens/carregamento.png');
  img.setAttribute('data-src', `https://picsum.photos/seed/${Math.floor(Math.random() * (1, 999999) + 1)}/720/1280.jpg`);
  
  container.appendChild(img)
}


// ir para o topo da página
function home() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};

// atualizar página
function refresh() {
  location.reload(true);
}

// criar link de download
function link(a) {
  urlDaImg = a
};

// baixar imagem
function download() {
  fetch(urlDaImg).then(response => response.blob()).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'download.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }).catch(error => console.error('Ocorreu um erro ao baixar', error));
};


// função não disponível
function info() {
  const body = document.getElementById('body');
  const div = document.createElement('div');
  div.setAttribute('id', 'info')
  div.textContent = "Pedimos desculpas pelo inconveniente, mas a função que você está tentando acessar ainda não foi implementada. Estamos trabalhando para disponibilizá-la em breve."
  
  body.appendChild(div);
  
  setTimeout(function() {
    const info = document.getElementById('info');
    info.style.animation = 'opacidade 1.5s ease-in-out';
    setTimeout(function() {
      document.body.removeChild(div)
    }, 1500);
  }, 10000)
}