
/* let text="Hər Hansı Bir Sözün Daxilində Olan Kiçik Hərfləri Böyük hərfə, böyük hərfləri kiçik hərfə çevirən funksiya yazın"


console.log(text.toLowerCase());
console.log(text.toUpperCase());
 */
/* let arr=[23,12,34,12,30,12,34,89,1,3,0,123,453] ;
function removeDublicates(value) {
    let array=[];
    for(let i=0;i<arr.lengthl;i++)
    if(array.push[i]===value){

    }

        }
    
    
  
const filtered = arr.push(removeDublicates);
  console.log(filtered); */

/* function removeDublicates(unique){

    return unique.filter((str,index)=>unique.indexOf(str)===index);

}

console.log(removeDublicates(arr));


 */

/* let set=new Set([...arr]);
let newArray=[...set];
 */


function changeCaseLetter(str){
    let letters=str.split('')
       let newArray=[];

for(let letter of letters) {
      if(letter===letter.toUpperCase()){
       newArray.push(letter.toLowerCase())
}else{
    newArray.push(letter.toUpperCase())
}
}return newArray.join('');

}



let result1=changeCaseLetter('Apples');
console.log(result1);



let arr=[23,12,34,12,30,12,34,89,1,3,0,123,453] ;

function removeDublicates() {
    let num=[];

    let leng=arr.length;
    for(let i=0;i<leng; i++)
    if(num.indexOf[i]===-1){
num.push(arr[i]);
    }

        }
    
        let result2=removeDublicates(num);
    console.log(result2);
    
  
// const filtered = arr.push(removeDublicates);
//   console.log(filtered);