const useDebounce = (callBackFunc, wait = 1000) => {
  let timeoutId = null;
  console.log(callBackFunc);
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // clearTimeout(timeoutId);
    timeoutId = setTimeout(callBackFunc, wait);
  };
};

export default useDebounce;
