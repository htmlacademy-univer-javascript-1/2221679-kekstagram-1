const NAMES = [
  'Семен',
  'Евгений',
  'Александр',
  'Иван',
  'Павел',
  'Роман',
  'Илья',
  'Аркадий',
  'Никита',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Все отлично!',
  'Очень нравится эта фотография',
  'Мне лень придумывать описания..',
  'Хочу порекамендовать вам сайт <реклама>',
  '<3',
  'Ваааау',
  'Зачем я поступил в Урфу?',
  'Очень крутая фотка',
  'КРУТО',
];


function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

let idComment = 0;


const createComment = () => ({
  id: idComment ++,
  avatar: `img/avatar${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

let idPublication = 0;
const minimumNumberOfLikes = 15;
const maximumNumberOfLikes = 200;


const createPublication = () => ({
  id: idPublication++,
  url: `photos/${this.id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(maximumNumberOfLikes, minimumNumberOfLikes),
  comment: Array.from({length: 5}, createComment),
});

const arrayPhotos = Array.from({length: 25 }, createPublication);
checkStringLength();
arrayPhotos();
