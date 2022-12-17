const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS = 5;

const inputForm = document.querySelector('.img-upload__form');
const submitButton = inputForm.querySelector('.img-upload__submit');
const inputHashtag = inputForm.querySelector('.text__hashtags');

const pristine = new Pristine(inputForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (text) => {
  errorMessage = '';

  text = text.toLowerCase().trim();
  if (!text) {
    return true;
  }

  const inputArray = text.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => item.indexOf('#') >= 1),
      error: 'Хэш-теги должны быть разделены пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должнен начинаться с символа #',
    },
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хэш-тег не должнен состоять из одного символа #',
    },
    {
      check: inputArray.some((item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)),
      error: 'Хэш-теги не должны повторяться',
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Хэш-тегов должно быть не больше ${MAX_HASHTAGS}`,
    },
    {
      check: inputArray.some((item) => item.length > MAX_HASHTAG_LENGTH),
      error: `Длина хэш-тега не должна превышать ${MAX_HASHTAG_LENGTH} символов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы',
    }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

pristine.addValidator(inputHashtag, hashtagsHandler, error, 2, false);

const onHashtagInput = () => {
  submitButton.disabled = !pristine.validate();
};

inputHashtag.addEventListener('input', onHashtagInput);

export {inputHashtag};
