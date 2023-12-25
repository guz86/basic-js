const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  
  encrypt(message, key) {
    if (!message) throw new Error('Incorrect arguments!');
    if (!key) throw new Error('Incorrect arguments!');

    let result = '';
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      let temp = message.toUpperCase().charCodeAt(i);
      if (temp >= 65 && temp <= 90) {
        let num = temp + key.toUpperCase().charCodeAt(j % (key.length)) - 65;
        if (num > 90) {
          num -= 26;
        };
        result += String.fromCharCode(num);
        j++;
      } else {
        result += message.charAt(i);
      }
    }
    return this.value ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message) throw new Error('Incorrect arguments!');
    if (!key) throw new Error('Incorrect arguments!');

    let result = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let temp = message.toUpperCase().charCodeAt(i);
      if (temp >= 65 && temp <= 90) {
        let sub = key.toUpperCase().charCodeAt(j % (key.length)) - 65;
        let num = temp - sub;
        if (num < 65) {
          num += 26;
        };
        result += String.fromCharCode(num);
        j++;
      } else {
        result += message.charAt(i);
      }
    }
    return this.value ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
