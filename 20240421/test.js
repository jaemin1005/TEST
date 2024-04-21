const fetch = require('node-fetch');

const async = generatorFunc => {
  const generator = generatorFunc();

  const onReslved = arg => {
    const result = generator.next(arg);

    return result.done ? result.value : result.value.then(res => onReslved(res));
  };

  return onResolved;
}

(async(function* fetchTodo(){
  const response = yield fetch(url);
  const todo = yield response.json();
  console.log(todo);
})());