debounce(() => {console.log(hello)},500);

function now(){
  return Date.now || new Date().getTime;
}

function debounce(func, wait, immediate)
{
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);

      if (!timeout) args = context = null;
    }
  };


  var debounced = function(...args){
    context = this;
    previous = now();

    if(!timeout)
    {
      timeout = setTimeout(later, wait);
      if(immediate) result = func.apply(context, ...args);
    }

    return result;
  }


  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}
