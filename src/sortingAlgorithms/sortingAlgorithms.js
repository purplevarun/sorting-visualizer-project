// export const mergeSort = array => {
//     // console.log("this is the array inside merge sort function = "+array);
//     if(array.length===1) return array;
//     const middle_index = Math.floor(array.length / 2);
//     const firsthalf = mergeSort(array.slice(0,middle_index));
//     const secondhalf = mergeSort(array.slice(middle_index));
//     const sortedArray = [];
//     let i=0;
//     let j=0;
//     while (i<firsthalf.length && j<secondhalf.length) {
//          if(firsthalf[i]<secondhalf[j]){
//              sortedArray.push(firsthalf[i++]);
//          }
//          else{
//              sortedArray.push(secondhalf[j++]);
//          }
//     }
//     // console.log("first half  = "+firsthalf);
//     // console.log("secondhalf = "+secondhalf);
//     while(i<firsthalf.length) sortedArray.push(firsthalf[i++]);
//     while(j<secondhalf.length) sortedArray.push(secondhalf[j++]);
//     return sortedArray;
//     // return array;
// };
//