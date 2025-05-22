 function function_name(Parameters){
    Task;
}


function_name(values);

function_name=(parameters)=>{
    Task;
}

function_name(values);

let sum=(a,b)=>{
    console.log(a+b);
}

sum(10,20);

function vowel(str){
    let count = 0;
    for(i of str){
        if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
            count++; 
        } 
    }
   console.log(count);
}
vowel('Education');


const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char==="a"||
           char==="e"||
            char==="i"||
            char==="o"||
            char==="u"){
            count++;
        }
        
    }
   return count;
};
//difference b/w function and method

let arr=['a','b','c'];

arr.forEach((val,idx) => {
    console.log(idx,val);
    console.log(idx,val.toLocaleUpperCase());
}
);

let arr1=[1,2,3,4,5];

let arr2=arr1.filter((val)=>{
    return val%2==0;
}
);

console.log(arr2);