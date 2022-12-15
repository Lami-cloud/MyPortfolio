// /* /* function kreditHesabla(){
//     var cekilesiMiqdar,vaxtMiqdari;
//     var ayliqfaiz,odenecekmiqdar;
// } */

// const nums=[2,7,9,5,6,8,12,10]



// function getOddNumbers(numsarr){
//     let temparr=[];
//     for(let num in numsarr){
//         if(num%2 !==0){
//             temparr.push(num);
//         }
//     }
//     return temparr
// }

// function getEvenNumbers(arr){
// let temparr=[];
// for (let num in arr){
//     if(num%2 !==1){
//         temparr.push(num)
//     }
// }
// return temparr;
// }








// console.table(greaterThanNum(nums)); */


// Ən uzun ada malik kitab

// Ən qisa ada malik kitab

// T hərfi ilə başlayan kitabları göstərin


let books=[

    "The Hobbit",

    "The Lord of the Rings",

    "The Silmarillion",

    "The Children of Hurin",

    "Unfinished Tales",

    "The History of Middle-earth",

    "The Book of Lost Tales",

    "The Book of Lost Tales Part Two",

    "The Lays of Beleriand",

    "The Shaping of Middle-earth",

    "The Lost Road and Other Writings"

]

 function findLongestBookName(chekfunction){
    let arr=books.splice( ' ')
    let bookArr=[];
    for (let i of arr){
        
            bookArr.push(i.length)
        }
        
            
        }

/*         var bookSort=bookArr.sort(function(a,b){
            return b-a;

    }) */


       /*  arr.filter((val)=>val.length===bookSort[0]);
        console.log(bookSort[0]);  */

//console.table(findLongestBookName(books));



/* const result=books.getLongestBookName(str.filter((val)=>val.length===bookArr[0]))
         

function findMax(input){
return input.reduce((a,b)=>a.length>=b.length ? b : a)
}

console.log(findMax(books));
 */



/* function getLongestName(bookArr){
    let nameLength=[];
  for( let book of bookArr){
  nameLength.push(book.length)
  }
  for (let book of bookArr){
    if(book.length===Math.min(...nameLength)){
console.log(book);
    }
  }
}

getLongestName(books);


function getFirsttLetter(bookArr){
    let nameLength=[];
  for( let book of bookArr){
  nameLength.push(book.length)
  }
  for (let book of bookArr){
    if(book[0]=='T'){
console.log(book);
    }
  }
}

getFirsttLetter(books);*/

let nameLength=[];
 
function getLongestName(bookArr,filter){
  for( let book of bookArr){
  nameLength.push(book.length)
  }
  for (let book of bookArr){
    if (filter(book)){
console.log(book);
    }
  }
}

getLongestName(books,b=>b.length===Math.max(...nameLength));





// verilən array daxilində hasili ən böyük olan iki ədədi tapın.



// Aşağıdakı alqoritmi çalışın bir necə fərqli üsulda həll edəsiniz


let nums=[3,4,6,12,34,67]





function biggestValues(){
    let products=[];
    for(let i=0; i<nums.length;i++){
        for(let j=i+1;i< nums.length;i++){
            products.push((nums[i]-1)*(nums[j]-1))

        }
    }
    //return Math.max(...products);
}

biggestValues(nums,n=>n*n===Math.max(...products));