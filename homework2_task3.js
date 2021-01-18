const findLongestWord = function(string) {
    // твой код
    const words = string.split(' ');

    let longestIndex = 0;

    for (let i = 0; i < words.length; i++){
        const word = words[i];
        if (word.length > words[longestIndex].length){
            longestIndex = i;
        }
    }
    return words[longestIndex];
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'