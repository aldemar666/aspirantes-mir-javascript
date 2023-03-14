// Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(array){
    let cont = 0;

    if (array.length === 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        
        cont += array[i]
       
    }
    return cont;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5] )) // 35                   
    console.log(sum([])) // 0

    // Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined

// escribe la función max acá

function max(array) {
    if (array.length === 0) {
      return undefined;
    }
    
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
    
    return maxNum;
  }

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

// Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.

// escribe la función maxIndex acá

function maxIndex(array) {
    if (array.length === 0) {
      return -1;
    }
    
    let maxNum = array[0];
    let maxIndex = 0;
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
        maxIndex = i;
      }
    }
    
    return maxIndex;
  }

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

// Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.

function join(array) {
    let str = '';
    
    for (let i = 0; i < array.length; i++) {
      str += array[i];
      
      if (i < array.length - 1) {
        str += ' ';
      }
    }
    
    return str;
  }

  console.log(join(['hello', 'world', 'from', 'my', 'house']))