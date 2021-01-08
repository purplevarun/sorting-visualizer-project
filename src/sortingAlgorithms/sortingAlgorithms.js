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
//naive method
export function merge_sort(array){
    const amnimations=[];
    if(array.length<=1) return array;
    const aux_array = array.slice();
    merge_sort_helper(array,0,array.length-1,aux_array,animations);
    return animations;
}
function merge_sort_helper(main_array,l,r,aux_array,animations) {
    if(l==r) return;
    const m = Math.floor((l+r)/2);
    merge_sort_helper(main_array,l,m,aux_array,animations);
    merge_sort_helper(main_array,m+1,r,aux_array,animations);
    do_merge(main_array,l,m,r,aux_array,animations);
}
function do_merge(main_array,l,m,r,aux_array,animations) {
    let k = l,i=l,j=m+1;
    while(i<=m && j<=r){
        animations.push([i,j]); // values being compared right now  // change color
        animations.push([i,j]); // revert color
        if(aux_array[i]<=aux_array[j]){
            animations.push([k,aux_array[i]]); // overwriting value at index k 
            main_array[k++] = aux_array[i++];
        }
        else{
            animations.push([k,aux_array[j]]); // overwriting value at index k 
            main_array[k++] = aux_array[j++];
        }
    }
    while(i<=m){
        animations.push([i,i]); // change color
        animations.push([i,i]);  // revert color
        animations.push([k,aux_array[i]]);
        main_array[k++]=aux_array[i++];
    }
    while(j<=r){
        animations.push([j,j]); // change color
        animations.push([j,j]);  // revert color
        animations.push([k,aux_array[j]]);
        main_array[k++]=aux_array[j++];
    }
}