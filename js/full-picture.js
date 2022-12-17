const COMMENTS_TO_SHOW = 5;

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const comments = bigPicture.querySelector('.social__comments');
const loadButton = bigPicture.querySelector('.comments-loader');

const createCommentItem = (comment) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;
  newComment.appendChild(avatar);

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;
  newComment.appendChild(text);

  return newComment;
};

const loadComments = () => {
  const commentsItems = comments.children;
  const loadedCommentsCountElement = document.querySelector('.loaded-comments');
  const loadedCommentsCount = parseInt(loadedCommentsCountElement.textContent, 10);
  const currenntComments = parseInt(loadedCommentsCount, 10) + COMMENTS_TO_SHOW > commentsItems.length ? commentsItems.length - loadedCommentsCount : COMMENTS_TO_SHOW;

  for (let i = 0; i < currenntComments; i++) {
    document.querySelector('.social__comment.hidden').classList.remove('hidden');
  }
  loadedCommentsCountElement.textContent = loadedCommentsCount + currenntComments;

  if (loadedCommentsCount + currenntComments === commentsItems.length) {
    loadButton.classList.add('hidden');
  }
};

const onDocumentEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentEscKeyDown);
    document.removeEventListener('click', loadComments);
  }
};

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEscKeyDown);
  document.removeEventListener('click', loadComments);
});

const onPictureClick = (picture, pictureData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
    bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
    bigPicture.querySelector('.social__caption').textContent = pictureData.description;

    comments.innerHTML = '';
    pictureData.comments.forEach((comment) => {
      comments.appendChild(createCommentItem(comment));
    });
    const commentsItems = comments.children;
    bigPicture.querySelector('.loaded-comments').textContent = commentsItems.length > COMMENTS_TO_SHOW ? COMMENTS_TO_SHOW : commentsItems.length;
    for (let i = COMMENTS_TO_SHOW; i < commentsItems.length; i++) {
      commentsItems[i].classList.add('hidden');
    }

    document.querySelector('body').classList.add('modal-open');

    document.addEventListener('keydown', onDocumentEscKeyDown);

    loadButton.addEventListener('click', loadComments);
    if (commentsItems.length <= 5) {
      loadButton.classList.add('hidden');
    } else {
      loadButton.classList.remove('hidden');
    }
  });
};

export {onPictureClick};
