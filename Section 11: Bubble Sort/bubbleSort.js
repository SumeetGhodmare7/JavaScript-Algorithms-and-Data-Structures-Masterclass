function swap(num1, num2){
    let temp= num1;
    num2 = num1;
    num1 = temp;
 return num1, num2;
}
function bubbleSort(arr){
    for(let i=arr.length-1 ; i>=0; i--)
        {
            for(let j = 0; j<i-1;j++)
                {
                    if(arr[j]>arr[j+1])
                        swap(arr[j],arr[j+1])
                }
        }
    return arr
}
bubbleSort([23,45,10,11,15,17,18,50])