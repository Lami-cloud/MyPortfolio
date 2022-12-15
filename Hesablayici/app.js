const item=document.querySelectorAll('count-down-item>h4');
let countDown=new Date(2022,11,18,10,0,0).getTime();
console.log(countDown);

function getCount(){
    const now=new Date().getTime();

    const distance=countDown=now;
}