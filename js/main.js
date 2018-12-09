'use strict';
var QUANTITY_GENERATE_CARD = 25;

var comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var autorName = ['Артём', 'Ольга', 'Игорь', 'Александр', 'Мария', 'Надежда'];

// Создаём случайный список

var randomMassive =
{
  url: 'img/' + getRandomNumber(1, 25) + '.svg',
  likes: getRandomNumber(15, 200),
  message: getRandomNumber(1, lengthArrComments),
  name: autorName[lengthArrAutorName]
};

// функция генерация числа для фотографии

function getRandomNumber (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
};

// для значения максимального кол-ва комментариев
var lengthArrComments = 0;
for ( var i = 0; i <= comments.length; i++) {
  var lengthArrComments = Math.round(comments.length / 2);
};

var lengthArrAutorName = 0;
for ( var i = 0; i <= autorName.length - 1; i++) {
  var lengthArrAutorName = Math.round(autorName.length);
  lengthArrAutorName = getRandomNumber(0, lengthArrAutorName);
};

// alert(comments[getRandomNumber(1, lengthArrComments)]);

var createCard = function (url, likes, message, name) {
  for (var i = 0; i <= QUANTITY_GENERATE_CARD; i++) {

  }
};

