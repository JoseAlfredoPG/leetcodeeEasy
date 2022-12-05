
// 14. Longest Common Prefix



/* Description and Intructions (Descripcion e Innstrucciones)

                ▶ English

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

                ▶ Spanish

Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.

Si no hay prefijo común, devuelve una cadena vacía "".

*/


/* Examples(Ejemplos)

-Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

-Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


 */

/* Constraints (Restricciones)

● 1 <= strs.length <= 200
● 0 <= strs[i].length <= 200
● strs[i] consists of only lowercase English letters.

*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = '';
  let resultado = [];
  let corta = '';

  corta = strs.reduce((a, b) => {
    if (a.length < b.length) { return a; }
    else { return b; }
  })


  strs.map(e => {
    res = '';
    for (let x = 1; x <= corta.length; x++) {
      if (corta.slice(0, x) == e.slice(0, x)) {
        res = corta.slice(0, x);
      }
    }
   
    if (res.length != 0) {
      resultado.push(res);
    }
  })

  if(resultado.length==strs.length){
    resultado = resultado.reduce((a, b) => {
      if (a.length < b.length) { return a; }
      else { return b; }
    })
    return resultado;
  }

  return  '';
};



console.log(longestCommonPrefix(["flight", "fliaaa", "flo", "flow", "flight"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));