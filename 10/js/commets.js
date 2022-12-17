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

export {createCommentItem};
