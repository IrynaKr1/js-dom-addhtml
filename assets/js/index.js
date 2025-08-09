const articleEl = document.createElement('article');
articleEl.classList.add('newsArticle');
document.body.append(articleEl);

const headerEl = document.createElement('header');
headerEl.classList.add('newsHeader');
articleEl.append(headerEl);

const imgEl = document.createElement('img');
imgEl.classList.add('backgroundImg');
headerEl.append(imgEl);

const h1El = document.createElement('h1');
h1El.classList.add('newsTitle');
headerEl.append(h1El);

const divEl = document.createElement('div');
divEl.classList.add('buttons');
headerEl.append(divEl);

const likeBtnEl = document.createElement('button');
likeBtnEl.classList.add('likeIcon');
divEl.append(likeBtnEl);

const likeBtnIcon = document.createElement('i');
likeBtnIcon.classList.add('fa-solid');
likeBtnIcon.classList.add('fa-heart');
likeBtnEl.append(likeBtnIcon);

const deleteBtnEl = document.createElement('button');
deleteBtnEl.classList.add('trashIcon');
divEl.append(deleteBtnEl);

const deleteBtnIcon = document.createElement('i');
deleteBtnIcon.classList.add('fa-solid');
deleteBtnIcon.classList.add('fa-trash');
deleteBtnEl.append(deleteBtnIcon);
