class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);
const four = new Node(42);

one.next = two;
two.next = three;
three.next = four;

/**
 * printList
 * 
 * @param {Node} head The head node of the list
 * @returns {string} The result string
 */
function printList(head) {
  let aux = head;
  let str = '';

  str = aux.value + ' -> ';

  while (aux.next !== null) {
    aux = aux.next;
    str = str + aux.value + ' -> ';
  }
  return str;
}

/**
 * addAfter
 * 
 * @param {Node} head 
 * @param {number} target 
 * @param {number} value 
 */
function addAfter(head, target, value) {
  let aux = head;
  while (aux.next) {
    if (aux.value === target) {
      const newNode = new Node(value);

      newNode.next = aux.next;
      aux.next = newNode;
    }
    aux = aux.next;
  }
}

function addBefore(head, target, value){
  let aux = head;
  let prev = null;

  while (aux.next){
    if(aux.value === target){
      const newNode = new Node(value);
      if(prev){
        newNode.next = aux;
        prev.next = newNode;
      }
      break;
    }
    prev = aux;
    aux = aux.next;
  }
}

function removeBefore(head, target) {
  let aux = head;
  let prev = null;

  while (aux.next) {
    if (aux.next.value === target) {
      if (prev) {
        prev.next = aux.next;
      } 
      break;
    }
    prev = aux;
    aux = aux.next;
  }
}

function removeAfter(head, target){
  let aux = head;
  let next = null;
  while(aux){
    if(aux.value === target){
    next = aux.next;
    if(next){
      aux.next = next.next;
    }
    break;
  }
  aux = aux.next;
  }
}

// 5 -> 3 -> 7 -> 42
console.log(printList(one));

addAfter(one, 7, 13);
// 5 -> 3 -> 7 -> 13 -> 42
console.log(printList(one));

addBefore(one, 13, 30);
// 5 -> 3 -> 7 -> 30 -> 13 -> 42
console.log(printList(one));

removeBefore(one, 7);
// 5 -> 7 -> 30 -> 13 -> 42
console.log(printList(one));

removeAfter(one, 7);
// 5 -> 7 -> 13 -> 42
console.log(printList(one));