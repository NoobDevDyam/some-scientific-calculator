import InfixTokenizer from '@psse-cpu/tokenizer'
import Stack from './class/Stack'

//return parsed postfix
const postfixString = document.querySelector('#postfixString')! as HTMLElement

export default function parse() {
  // read user input
  const inputString = document.querySelector('#inputString')! as HTMLElement

  // output queue
  let queue: string = ''
  const infix = inputString.innerHTML // set input as infix

  const tokenizer = new InfixTokenizer(infix) // tokenize infix

  // dictionaries
  const functions: string[] = ['log', 'sin', 'cos', 'tan']
  const operators: string[] = ['+','-','/','*','^']

  // operator stack
  const stack = new Stack()

  // Shunting yard Algo
  while (tokenizer.hasMoreTokens()) {
    const token = tokenizer.readToken ! as unknown as string

    let topStack = stack.peek()
    if (!isNaN(Number(token))) {
      queue += token + " "

      // for debug
      console.log('is a number')
    } else if (functions.indexOf(token) !== 1) {
      // push token to stack
      stack.push(token)

      //for debug
      console.log('is a function')
    } else if (operators.indexOf(token) !== -1) {

      // for debugging
      console.log('is operator')
    }
  }
}

// operator dictionary
const operators: any[] = [
  {operator: '+',
  precedence: 2,
  associativity: 'left'
  },
  {operator: '-',
  precedence: 2,
  associativity: 'left'
  },
  {operator: '/',
  precedence: 3,
  associativity: 'left'
  },
  {operator: '*',
  precedence: 3,
  associativity: 'left'
  },
  {operator: '^',
  precedence: 4,
  associativity: 'right'
  },
]

function checkPrecedence(operator: string) {
  // loop through array of operators
  let precedence = 0
  for (let i = 0; i < operators.length; i++) {
    if(operators[i].operator === operator){
      precedence = operators[i].precedence
    }
  }
  return precedence
}

function checkAssociativity(operator: string) {
  // loop through array of operators
  let associativity = ''
  for (let i = 0; i < operators.length; i++) {
    if(operators[i].operator === operator){
      associativity = operators[i].associativity
    }
  }
  return associativity
}