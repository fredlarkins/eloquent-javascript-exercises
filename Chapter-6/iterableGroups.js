class Group {
    constructor() {
        this.members = [];
    }
    has(element) {
        return this.members.includes(element);
    }
    add(element) {
        if (!this.has(element)) {
            this.members.push(element);
        }
    }
    delete(element) {
            this.members = this.members.filter(elem => elem != element);
        }
    static from(array) {
        let g = new Group();
        for (let item of array) {
            g.add(item);
        }
        return g;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.count = 0;
        this.stop = group.members.length;
        // this.value;
    }
    next() {
        let loopIsFinished = this.count == this.stop;
        if (loopIsFinished) return {done: loopIsFinished};
        let current = {value: this.group.members[this.count], done:loopIsFinished};
        this.count++;
        return current;
    }
}

// Add iterator to Group prototype
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}


let g = Group.from([1,2]);
console.log(g);

for (let member of g) {
    console.log(member);
}
iter = g[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());