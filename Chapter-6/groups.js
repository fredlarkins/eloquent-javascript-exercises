class Group {
    // add a property called members which we can mess around with.
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

let group = new Group();

group.add(1);
group.add(2);
group.add(2);
group.add('Hello');

console.log(group);

group.delete(2);
console.log(group);

console.log(Group.from([1, 1, 2, 3, 4, 4, 5, 'Hello']));