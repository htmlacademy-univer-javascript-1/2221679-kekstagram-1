//функция случайных чисел в диапозоне от min к max.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  console.log (random());
//данную функцию взял с сайта : https://habr.com/ru/company/ruvds/blog/534108/


//данную функцию создал сам

let func2 = function(name, max_lenght) {
    name = String(name);
    length_name = name.length;
    if(max_lenght >=length_name){
        return true;
    } else {
        return false;
    }

}
console.log(func2());