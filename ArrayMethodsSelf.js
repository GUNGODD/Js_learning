const food = ['🍇','🍈','🍉','🍊','🍌','🍅','🥝','🍓','🍒','🍑','🍍'];
const arr1 = ['🍇','🍈','🍉','🍊'];
const arr2 = ['❤️','😃','😎','😋','😊'];
const array = [1,3,5,7,4,2];

const ForEch = () => {
  food.forEach(element => {
    console.log(element);
  });
};

const mapExample = () => {
  const transformed = food.map(any => any.toUpperCase());
  console.log(transformed);
};

const filterExample = () => {
  const fil = arr2.filter(element => element === '😃' || element === '😎' || element === '😋' || element === '😊');
  console.log(fil);
};

const findExample = (searchValue) => {
  const value = array.find(item => item === searchValue);
  console.log(value);
};

const findIndexExample = (searchValue) => {
  const ans = array.indexOf(searchValue);
  console.log(ans);


  
};

ForEch();
mapExample();
filterExample();
findExample(92);
findIndexExample(3);