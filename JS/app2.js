
            //tiene que tener un ciclo (bucle)              aca es while
            //tiene que tener una condicional               aca es if




const edades = [0];              //variable cost (edades)  aca almacenare las edades ingresadas  (array)
let contador = 0;               //variable let (contador) aca voy sumando por cada persona 8 personas en total

while (contador < 8) {          //aca esta el -->bucle
  const input = prompt(`Por favor persona numero ${contador + 1} ingrese su edad en este prompt`);
  const edad = parseInt(input);          //aca esta el input de arriba que sera iguala a<<<-edad->>>




   // Verificar si es un número entero (sin decimales) y si no es NaN
  if (!isNaN(edad) && Number.isInteger(edad) && input !== "" && !input.includes(".") && !input.includes(",")) {
    edades.push(edad);              //edad manda su informacion al array edades
    contador++;                     //contador aumenta en 1
  } else {
    alert("Por favor, ingrese un número entero válido sin decimales, comas o puntos.");
  }                               ///////else aca si no cumple con los requisitos que puse saldra este mensaje
}

function calcularEdadPromedio(edades) {           // creo una funcion con el parametro edades<----este puede ser cambiado
 /////////////////////
 
 
 ////////////     if (edades.length === 0) {                      //  aca para que empieza solo empieza si hay 0 datos ingresados

//  }




  /*       /////////      esto n oes necesario este return

    {
    /////////     return "No se ingresaron edades válidas.";    //si es igual a 0 dira no se ingresaron edades
  }


        */



               

  const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
                                                  //esta es la funcion flecha



                //array.reduce(callback, initialValue)
                //el array edades aca almaacenar las edades ingresadas
                //funcion de alto orden para sumar variables
                          //acumulador es el actualizado de la suma (callback)
                          //valor inicial que se va acumulado(initial value)
                                      //acmuludaor+ edad es la operacion matematica que quiero hacer
                                          //despues de la (,) viene donde empieza



  return sumaEdades / edades.length;     }           

      
                //aca lo importante es edades.length es la longitud 
               //(cantidad de elementos) del array edades, que representa cuántas edades se han ingresado.



const promedio = calcularEdadPromedio(edades);

      //aca primero hay una variable promedio que es igual a la funcion anterior

if (typeof promedio === "number") {
  alert(`El promedio de edades ingresadas es: ${promedio.toFixed(2)}`);



} else {                                        
  alert(promedio);   
}                                  //en caso de que no sea numero
                                  //////talvez esto no es necesario porque le puse un monton de condiciones
                                    /////pero no estoy seguro


                                 

    /*

let resultado = 0
function sumar (a, b)    {
  return resultado = a + b}
console.log( suma(15,20) )

const suma  = function (a, b) { return a + b }
console.log( suma(15,20) )

const suma  = (a, b) => { return a + b }
console.log( suma(15,20) )



        */