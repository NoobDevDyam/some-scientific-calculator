import Stack from "./class/Stack.js";
import { regex } from "./constants/regex.js";
import { operators } from "./constants/operators.js";
import { functions } from "./constants/functions.js";

const postfixString = document.querySelector('#postfixString')! as HTMLElement
const outputString = document.querySelector('#outputString')! as HTMLElement

export default function evaluate() {

  // tokenize postfix
  const postfix: string[] = postfixString.innerHTML.match(regex)
  const stack = new Stack<string>()

  console.log(postfix)

  for (let i = 0; i < postfix.length; i++) {
    const token = postfix[i]
    if (token === 'π') {
      let answer = Math.PI
      stack.push(`${answer}`)
    } else if (!isNaN(Number(token))) {
      stack.push(token)
    } else if (operators.indexOf(token) !== -1) {
      let a = Number(stack.pop())
      let b = Number(stack.pop())
      let answer: number
      switch (token) {
        case '+':
          answer = b + a
          break
        case '-':
          answer = b - a
          break
        case '/':
          answer = b / a
          break
        case '*':
          answer = b * a
          break
        case '^':
          answer = b ** a
      }
      stack.push(`${answer}`)
    } else if (functions.indexOf(token) !== -1) {
      let a: number
      let answer: number

      // conversion
      if (['sin', 'cos', 'tan'].indexOf(token) !== -1) {
        a = convertToRadian(Number(stack.pop()))
      } else {
        a =  Number(stack.pop())
      }

      switch(token) {
        case 'sin':
          answer = Math.sin(a)
          break
        case 'cos':
          answer = Math.cos(a)
          break
        case 'tan':
          answer = Math.tan(a)
          break
        case 'log':
          answer = Math.log10(a)
          break
        case 'arcsin':
          answer = Math.asin(a)
          break
        case 'arccos':
          answer = Math.acos(a)
          break
        case 'arctan':
          answer = Math.atan(a)
          break
        case 'ln':
          answer = Math.log(a)
          break
        case 'sqrt':
          answer = Math.sqrt(a)
          break
        case 'cbrt':
          answer = Math.cbrt(a)
      }
      
      if (['arcsin', 'arccos',
      'arctan'].indexOf(token) !== -1) {
        answer = convertToDegree(answer)
      }

      console.log(answer)
      stack.push(`${answer}`)
    }

    outputString.innerHTML = stack.shift()
    console.log(stack)

  }
}

function convertToDegree(radian: number){
  return radian * 180 / Math.PI
}

function convertToRadian(degree: number){
  return degree * Math.PI / 180
}
