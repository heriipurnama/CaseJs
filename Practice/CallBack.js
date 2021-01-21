const hello2 = (callback) => {
  console.log('hello2');
  callback();
}

const hello3 = () => {
  setTimeout(() => {
    console.log('hello2');
  }, 1000)
}

hello2();
hello3();
