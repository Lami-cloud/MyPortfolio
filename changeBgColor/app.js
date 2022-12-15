const divs=document.querySelectorAll('.red');

for (let div of divs){
    div.style.background ='red'
}




     
        
function romanToInt(str) {
    let listStrings=[];
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    
    
        }
   
    for(let i=0; i<str.length; i++){
           for(let j=i+1; j<str.length+1; j++){
            listStrings.push(romanNumerals.slice(i,j))
        }
    }return listStrings;
    
    // daxil edilən string məlumatın hər hərfini ekrana çap et
    // hər hərfə qarşılıq gələn ədədi ekrana çap et
    




}

console.log(romanToInt());





HTMLElement.prototype.changeBgColor()=function(){
    this.style.background='red';
}
