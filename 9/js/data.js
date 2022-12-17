import {getRandomInteger, getNonExistenObject} from './utils.js';

const USERS_COUNT = 25;
const MAX_COMMENT_ID = 1000;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MAX_COMMENT_COUNT = 20;

const existingUsersIds = [];
const existingCommentsIds = [];
const existingPhotos = [];

const descriptions = ['Горы...', 'Не, ну это круто', 'АУФ', 'Апасные', 'С подружками', 'А у вас как дела?'];
const commentsExamples = ['Всё отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names = ['Иван', 'Сережа', 'Катюха', 'Валерий Петрович', 'Аноним', 'Кирилл', 'Вадик', 'Петька', 'Витек', 'Елизавета', 'Любовь', 'Виктория' , 'Ленка'];


const createMessage = () => {
  let message = '';
  for (let i = 0; i <= getRandomInteger(0, 1); i++){
    message += commentsExamples[getRandomInteger(0, commentsExamples.length - 1)];
  }
  return message;
};

const createComment = () => {
  const comment = {
    id: getNonExistenObject(existingCommentsIds, 1, MAX_COMMENT_ID),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
    message: createMessage(),
    name: names[getRandomInteger(0, names.length - 1)]
  };

  return comment;
};

const createUser = () => {
  const user = {
    id: getNonExistenObject(existingUsersIds, 1, USERS_COUNT),
    url: `photos/${getNonExistenObject(existingPhotos, 1, USERS_COUNT)}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInteger(1, MAX_COMMENT_COUNT)}, createComment),
  };

  return user;
};

const createdPictures =  Array.from({length: USERS_COUNT}, createUser);

export {createdPictures};
