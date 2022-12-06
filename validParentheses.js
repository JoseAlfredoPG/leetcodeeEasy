
// 20. Valid Parentheses




/* Description and Intructions (Descripcion e Innstrucciones)

                ▶ English

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.


                ▶ Spanish

Dada una cadena s que sólo contiene los caracteres '(', ')', '{', '}', '[' y ']', determine si la cadena de entrada es válida.

Una cadena de entrada es válida si

    Los corchetes abiertos deben estar cerrados por el mismo tipo de corchetes.
    Los corchetes abiertos deben cerrarse en el orden correcto.
    Cada corchete cerrado tiene su correspondiente corchete abierto del mismo tipo.

*/


/* Examples(Ejemplos)

-Example 1:

Input: s = "()" 
Output: true


-Example 2:

Input: s = "()[]{}"
Output: true


-Example 3:

Input: s = "(]"
Output: false

 */

/* Constraints (Restricciones)

● 1 <= s.length <= 10^4
● s consists of parentheses only '()[]{}'

*/


/**
 * @param {string} s
 * @return {boolean}
 */

let codes = {
  '(': 1,
  ')': 2,
  '[': 4,
  ']': 5,
  '{': 7,
  '}': 8
}

var isValid = function (s) {
  let array = s.split('');
  let resultado=[array[0]];
  for(let x=1;x<array.length;x++){
      let actual=codes[array[x]]
      let anterior=codes[resultado[resultado.length-1]]
      if((anterior==actual-1)){
          resultado.pop()
      }
      else{
        resultado.push(array[x])
      }
  }
  return resultado.length==0 ? true : false;
};


console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{[]}([{{}}])"))