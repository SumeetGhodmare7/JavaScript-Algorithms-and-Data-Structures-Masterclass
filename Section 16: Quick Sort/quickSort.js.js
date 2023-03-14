function pivot(arr, start, end)
    {
        let pivot = arr[start];
        let pivotIndex = start;
        for(let i =1 ; i < arr.length; i++){
            if(pivot>arr[i]){
                pivotIndex++
                let temp = arr[pivotIndex]
                arr[pivotIndex]=arr[i]
                arr[i]=temp
            }   
        }
        let temp = arr[pivotIndex]
            arr[pivotIndex] = arr[start]
            arr[start] = temp
        //console.log(arr);
        return pivotIndex;
        
    }
//let arr = [23,45,10,11,15,17,18,50];
//pivot(arr, 0, arr.length)

/*function quickSort(arr, left = 0, right = arr.length -1){
    let left = []
    let right= []
    do{
    let pivotIndex = pivot(arr, left, right)
     left = pivot(arr.slice(0, pivotIndex))
     right = pivot(arr.slice(pivotIndex, arr.length-1))
    }
    while(left.length>=2 || right.length>=2)
    return arr
    
}*/
function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
    let pivotIndex = pivot(arr, left, right)
    
    quickSort(arr, left, pivotIndex-1);
    
    quickSort(arr,pivotIndex+1, right)
    }
    return arr;
}

let arr = [23,45,10,11,15,17,18,50];
quickSort(arr)

