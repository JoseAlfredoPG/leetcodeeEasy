
// 9. Palindrome Number



/* Description and Intructions (Descripcion e Innstrucciones)

                ▶ English

Given an integer x, return true if x is a palindrome, and false otherwise.

                ▶ Spanish

Dado un número entero x, devuelve true si x es un palíndromo
y falso en caso contrario. 
*/


/* Examples(Ejemplos)

-Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

-Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

-Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 */

/* Constraints (Restricciones)

● -231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

Siguiendo con el tema: ¿Podrías resolverlo sin convertir el entero en una cadena?

*/


/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    let array=x.toString().split('').join('');
    let revers=x.toString().split('').reverse().join('');
   

    return array==revers;
};



console.log(isPalindrome(221))
console.log(isPalindrome(121))