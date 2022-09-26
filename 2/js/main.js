//функция случайных чисел в диапозоне от min к max.
const random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
random();
//данную функцию взял с сайта : https://habr.com/ru/company/ruvds/blog/534108/


//данную функцию создал сам

const func2 = function(name, maxlenght) {
  name = String(name);
  const lengthname = name.length;
  if(maxlenght >=lengthname){
    return true;
  } else {
    return false;
  }

};
func2();
