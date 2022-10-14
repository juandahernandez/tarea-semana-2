class Queue {
  constructor() {
    this.queue = [];
    this.limit = 10;
  }

  add(item) {
    if (this.queue.length < this.limit) {
      this.queue.push(item);
      return true;
    }
    console.log(
      `the element cannot be entered, the limit of the list is ${this.limit} elements `
    );
    return false;
  }

  element() {
    return this.queue[0];
  }

  offer1(item) {
    this.queue.push(item);
    return true;
  }

  offer2(item) {
    if (this.queue.length) {
      this.queue.pop();
      this.queue.push(item);
      return true;
    }
    return false;
  }

  peek() {
    if (this.queue.length === 0) {
      return null;
    }
    return this.queue[0];
  }

  poll() {
    if (this.queue.length === 0) {
      return null;
    }
    return this.queue.pop();
  }

  remove() {
    return this.queue.pop();
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

//console.log(queue.peek());
console.log(queue.add(1));
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.add(6);
queue.add(7);
queue.add(8);
queue.add(9);
queue.add(10);
console.log(queue.queue);

console.log(queue.add(11));

queue.offer1(12);
console.log(queue.queue);

queue.offer2(13);
console.log(queue.queue);

console.log(queue.peek());

console.log(queue.poll());

console.log(queue.remove());
console.log(queue.queue);

console.log(queue.size());
console.log(queue.isEmpty());
