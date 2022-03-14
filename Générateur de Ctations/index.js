let btn = document.getElementById('btn');
let citation = document.getElementById('citation');
let quotes =
 ['"La vie est femme... la femme est vie... une vie sans femme est une vie sans VIE".Pierre Adonis ',
 '"L unique miracle de la vie c est la mort".Taha-Hassine FERHAT ',
 '"Il n’y a rien de plus précieux en ce monde que le sentiment d’exister pour quelqu’un". Victor Hugo',
 '"Aimer, c’est savoir dire je t’aime sans parler."Victor Hugo ',
 ' "Les philosophes n ont fait qu interpréter diversement le monde ; il s agit maintenant de le transformer."Karl Marx',
];
btn.addEventListener('click',function(){
    let randomQuote = quotes[Math.floor(Math.random() *quotes.length)]
    citation.innerHTML = randomQuote;
})