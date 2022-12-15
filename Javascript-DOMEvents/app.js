//Inputla ad ve  soyadin consola yazilmasi

/* function getNameSurname(){
console.log(    document.getElementById('myText1').value + ' ' +
document.getElementById('myText2').value
);
}
 */




// Arxa fon rengini deyishdiren emeliyyat icrasi
 /* const body=document.querySelector('body');

const button=document.querySelector('button');
const rengler =['red','blue','green'];

button.addEventListener('click', rengDeyisdir);
let sira=0;

function rengDeyisdir(){
    console.log(sira);
    const secilmisReng=rengler[sira]
    sira++;
    body.style.backgroundColor=secilmisReng;

} */
 


// Sehife yuklenende ekrana atalar sozu gelmesi.
/* function proVerb(){
    alert('Yalan dörd nalla gedər. Həqiqət isə addım-addım yeriyər, lakin yenə də vaxtında çatar');
}
window.onload=proVerb();

 */

let atalarSozleri=[
    "Bu günün işini sabaha qoyma",
    "Tələsən təndirə düşər",
    "Atlar işlər, ər öyünər",
    "Abdal oynayanda qar yağar",
    "Abbasını bəyənməyən beş şahı çıxardar"
    ]


    let textLength=atalarSozleri.length;
    let randomText=Math.random();
    randomText=randomText*textLength;
    randomText=Math.floor(randomText);
    let chooseVerb=atalarSozleri[randomText];
    verb.value=chooseVerb;

