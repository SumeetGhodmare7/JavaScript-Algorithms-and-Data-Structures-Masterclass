function merge(arr1, arr2){
    let arrFinal =[]
    let i=0, j =0;
    while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
       arrFinal.push(arr1[i])
       i++
    }
    else{
        arrFinal.push(arr2[j])
        j++
    }
    }
    
    while(i < arr1.length){
        arrFinal.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        arrFinal.push(arr2[j]);
        j++
    }
    return arrFinal;
}
merge([12,14,16,18],[11,13,15,17,19])

function mergeSort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
mergeSort([12,14,16,18,11,13,15,17,19])