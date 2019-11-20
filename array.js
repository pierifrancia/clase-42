// // Ejercicio 1
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log(playlistFoo[1])
console.log(playlistFoo[4])


//Ejercicio 2
let bandas = ['Stereophonics', 'The Killers', 'Babasonicos', 'No te va gustar', 'Blur', 'Vampire Weekend', 'Tan Bionica', 'La perra que los pario', 'Queen', 'The Cranberries']
let primeraBanda = bandas[0]
let terceraBanda = bandas[2]
let sextaBanda = bandas[5]

console.log(`La banda en primer lugar es: ${primeraBanda}`)
console.log(`La banda en tercer lugar es: ${terceraBanda}`)
console.log(`La banda en sexto lugar es: ${sextaBanda}`)


// Ejercicio 5
let alumnas = []
alumnas[0] = "Pieri"
alumnas[1] = "Tefi"
alumnas[2] = "Noe"
alumnas[3] = "Lili"
alumnas[4] = "Gabu"
alumnas[5] = "Maria"

console.log(`Indice 0: `+ alumnas[0])
console.log(`Indice 1: `+ alumnas[1])
console.log(`Indice 2: `+ alumnas[2])
console.log(`Indice 3: `+ alumnas[3])
console.log(`Indice 4: `+ alumnas[4])
console.log(`Indice 5: `+ alumnas[5])


// Ejercicio 8 
let etiquetasHtml = ['<h1>', '<body>', '<br>', '<div>', '<Submit>', '<pr>', '<nav>', '<header>']

console.log(etiquetasHtml[1].toUpperCase())
console.log(etiquetasHtml[4].toLowerCase())
console.log(etiquetasHtml.length)


// Ejercicio 9
var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(`Primera Ganadora: ` + ganadorasRupaul[0]);
console.log(`Ultima Ganadora: ` + ganadorasRupaul[ganadorasRupaul.length-1])


// Ejercicio 10
var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

console.log(playlistNirvana);
console.log(playlistFoo);

if (playlistNirvana.length > playlistFoo.length) {
    alert("La playlist de Nirvana tiene más canciones")
}
else {
    alert("La playlist de Foo Fighters tiene más canciones")
}

