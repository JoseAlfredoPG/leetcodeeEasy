
// 1. Two Sum


/* Description and Intructions (Descripcion e Innstrucciones)

                ▶ English

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

                ▶ Spanish

Dado un array de enteros 'nums' y un entero 'target', devolver los índices de los dos números tales que sumen 'target'.

Puede suponer que cada entrada tendría exactamente una solución, y no puede utilizar el mismo elemento dos veces.

Puede devolver la respuesta en cualquier orden. 
*/


/* Examples(Ejemplos)

-Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

-Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

-Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

/* Constraints (Restricciones)

● 2 <= nums.length <= 104
● -109 <= nums[i] <= 109
● -109 <= target <= 109
● Only one valid answer exists.(Sólo existe una respuesta válida.) */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    result = [];
    nums.map((item, index) => {
        let dif = target - item;
        let enc = nums.indexOf(dif);

        if (enc != -1 && enc != index && result.length == 0) {
            result.push(index, enc)
        }

    })

    return result.sort();
};

console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6))