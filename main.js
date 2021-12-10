//- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
//- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

function addPost(array, container) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      const singlePost = array[i];
  
      const addDiv = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${singlePost.profilePic}" alt="">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.name}</div>
                    <div class="post-meta__time">${singlePost.time}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.text}</div>
        <div class="post__image">
            <img src="${singlePost.postImage}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.like}</b> persone
                </div>
            </div> 
        </div>            
        </div>`;
      container.innerHTML += addDiv;
    }
  }

const post = [
    {
        name: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        profilePic: 'https://unsplash.it/300/300?image=15',
        postImage: 'https://unsplash.it/600/300?image=171',
        like: 80,
    },
    {
        name: 'Sofia Perlari',
        time: '2 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        profilePic: 'https://unsplash.it/300/300?image=16',
        postImage: 'https://unsplash.it/600/300?image=172',
        like: 91,
    },
    {
        name: 'George Lucas',
        time: '2 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        profilePic: 'https://unsplash.it/300/300?image=12',
        postImage: 'https://unsplash.it/600/300?image=173',
        like: 102,
    },
  ];

const container = document.getElementById('container');
addPost(post, container);