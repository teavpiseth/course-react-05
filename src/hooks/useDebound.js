// const useDebounce = (callBackFunc, wait = 1000) => {
//   let timeoutId = null;
//   console.log(callBackFunc);
//   return function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     // clearTimeout(timeoutId);
//     timeoutId = setTimeout(callBackFunc, wait);
//   };
// };

// export default useDebounce;

export default function useDebounce() {
  let timeoutId = null;
  const debounce = (cb, delay = 1000) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(cb, delay);
  };
  return debounce;
}
