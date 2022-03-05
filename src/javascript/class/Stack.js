"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.data = Object.seal(new Array(10).fill(undefined));
        this.count = 0;
    }
    push(element) {
        this.data[this.count] = element;
        this.count++;
    }
    pop() {
        this.count--;
        return this.data[this.count];
    }
    peek() {
        return this.data[this.count - 1];
    }
    isEmpty() {
        return this.count <= 0;
    }
    isFull() {
        return this.count >= this.data.length;
    }
}
exports.default = Stack;
