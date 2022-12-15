// find the last word- axirinci sozu tap


/* let sonSoz=sonSozuTap(target.innerText);
console.log(sonSoz);

function sonSozuTap(text){

    return text.split(' ').pop();

} */



/* const test={
    a:1,
    b:[2,3]

};

const{a,b}=test;

console.log(a);
console.log(b[1]);
console.log(b[0]);
console.log(b);
 */

/* const a=["A",'B'];
const b=a.toString();
console.log(a);

const c=a.join(""); */

/* b.onclick=a;

function a(){
    this.value+='v'
} */

/* const btns=document.getElementById('r');

for (let btn of btns){
    btn.onclick=colorChange;
}

 function colorChange(){
    document.body.style.background=this.value;
 } */

/* var elements=document.getElementsByName('resultName');
var message=' ',i;
for (i=0;i<elements.length;i++){
    message+=elements[i].innerHTML + '\n';
}
alert(message);



 */
/* var element=document.querySelector('button');

element.addEventListener('click', function1);
element.addEventListener('click', function2);


function function1(){
    alert('salamlar');
}


function function2(){
    console.log('salam');
} */


var number1=document.querySelector('#num1');
var number2= document.querySelector('#num2');
var sum=document.querySelector('#sum');

number1.addEventListener('input',topla);
number2.addEventListener('input',topla);


function topla(){
    var one=parseInt(number1.value) || 0;
    var two=parseInt(number2.value) || 0;
   sum.innerHTML="Toplam: " +(one+two);
   
}















