// 1)
// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const array1 = [1,2,3,5,8,9,10];

function createArr(arr, fn) {
  let newArr = [];

  arr.forEach(function(item, i, arr) {
    newArr.push(fn(item))
  });

  return newArr;
}

function createObj(el) {
  let ifOdd = false;

  if (el%2 !== 0) {
    ifOdd = true;
  }

  return {
    digit: el,
    odd: ifOdd
  }
}

createArr(array1, createObj);



// 2)
// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. 
// Если да - вернуть false.

const array2 = [12, 4, 50, 1, 0, 18, 40];

function checkValue(arr) {
  let ifHasNoZero = true;

  arr.forEach(function(item) {
    if (item === 0) {
      ifHasNoZero = false;
    }
  });

  return ifHasNoZero;
}

checkValue(array2);


// 3)
// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] 
// хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

const array3 = ['yes', 'hello', 'no', 'easycode', 'what'];

function checkLength(arr) {
  let longLength = false;

  longLength = arr.some(checkItemLength);

  return longLength;
}

const checkItemLength = (item, longLength) => item.length > 3;

checkLength(array3);



// 4)
// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке 
// {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки

const array4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3},   {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function createString(arr) {
  const newArr = arr.sort( (item1, item2) => item1.index - item2.index );
  let result = arr.reduce((acc, item) => (acc += item.char), '');

  return result;
}

createString(array4);



// 5)
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const array5 = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

function chackArrLength(arr) {
  const newArr = arr.sort( (item1, item2) => item1.length - item2.length );

  return newArr;
}

chackArrLength(array5);


// 6)
// Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// Отсортировать их по возрастающему количеству ядер (cores).

const array6 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

function sortArray(arr) {
  const newArr = arr.sort( (item1, item2) => item1.info.cores - item2.info.cores );

  return newArr;
}

sortArray(array6);


// 7)
// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr, minPrice, maxPrice) {
  const filteredArr = arr
  .filter(item => item.price >= minPrice && item.price <= maxPrice)
  .sort( (item1, item2) => item1.price - item2.price );
  return filteredArr;
}

filterCollection(products, 15, 30);

// 8)
// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 10, 
  height: 20, 
  getSquare: function() {
    return this.width * this.height;
  }
};

rectangle.getSquare();


// 9)
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
      return this.price;
    },
    getPriceWithDiscount: function() {
      let discount = parseFloat(this.discount);
      return this.price - ((this.price * discount)/100);
    }
};

price.getPrice();
price.getPriceWithDiscount();



// 10)
// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const rectangleObj = {
  height: 10,
  increaseHeight: function() {
    this.height = this.height + 1;
    return this.height;
  }
}

rectangleObj.height;
rectangleObj.increaseHeight();


// 11)
// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function () {
      this.value = this.value * 2;
      return this;
    },
    plusOne: function () {
      this.value = this.value + 1;
      return this;
    },
    minusOne: function () {
      this.value = this.value - 1;
      return this;
    }
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value;


// 12)
// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const getOveralPrice = function() {
  return this.retailPrice * this.productsAmount;
}

const priceList = {
  retailPrice: 100,
  productsAmount: 112,
  getOveralPrice
}

priceList.getOveralPrice();


// 13)
// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const detailsList = {
  retailPrice: 50,
  productsAmount: 60
}

getOveralPrice.call(detailsList);


// 14)
// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {width: 5, height: 10};
let getSquare = function () {return this.width * this.height};

getSquare.call(sizes);


// additional tasks
// https://www.notion.so/8e2b70ab692a4986b1816ce7dd2fb1ca