/*function selectionSort(arr){
    let min = arr[0];
    for(let i=0; i< arr.length; i++){
    if(arr[i]>arr[i+1]){
        min= arr[i+1]
    }
    if(arr[0]!==min){
        arr[0]=min
    }
    }
        
    return arr
}

selectionSort([15,13,12,17,19,20,14]); */

function selectionSort(arr){
    for(let i =0 ; i < arr.length; i++){
        let min=i;
        for(let j = i+1; j< arr.length; j++)
        {
            if(arr[j]<arr[min]){
                min = j;
             }
        if( i !== min){
        let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
        }
        
    }
    return arr;
}
selectionSort([15,13,12,17,19,20,14]);
