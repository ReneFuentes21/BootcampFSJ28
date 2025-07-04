import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import { name, isStudent } from './sintaxis.ts'
//import { greeting2 } from './functions.ts'
import { Estudiante } from './kodigo/estudiante.ts'
import { Coach, docente } from './kodigo/coach.ts'


let docente2 = new Coach ("Diego Martinez", 21, "Español", "diego@gmail.com", "Por Hora", ["JavaDeveloper, FullStackJr, Data Analytics"] , ["JavaScript, PHP, CSS"])
console.log(docente2.mostrarDetalles())
console.log(docente2)
console.log(docente.mostrarDetalles())
console.log(docente)
let estudiante = new Estudiante("Rene Fuentes", 22, "El Salvador", "rene@gmail.com","becado" ,"Full Stack Jr.", "Activo");
console.log(estudiante);
//estudiante.setEstado("En clases")
console.log(estudiante.getEstado())
console.log(estudiante.mostrarDetalles())
console.log(estudiante.getTipoFinanciamiento())
/** 
console.log(greeting2("Rene Fuentes"));
console.log(greeting2())
console.log(`Tipo de dato de la variable: ${typeof(name)}`);
console.log(`Tipo de dato de la variable: ${typeof(isStudent)}`);
*/

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
