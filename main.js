


let max,num;
max=[10,20,30,40,50]
num=max[0]

max.forEach(function(maxi){
    if(num<maxi){
        num=maxi
    }
})
document.write(num)