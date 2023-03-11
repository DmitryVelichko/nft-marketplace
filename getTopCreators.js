export const getCreators = (array) => {
    const finalized = [];
  
    const result = array.reduce((res, currentValue) => {
      (res[currentValue.seller] = res[currentValue.seller] || []).push(currentValue);
  
      return res;
    }, {});
  
   