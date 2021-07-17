function countInterval() {
    count++;
    return count;
}

export default class Task {
    constructor(name, dueDate = 'No Date') {
        this.name = name;
        this.dueDate = dueDate;
        // this.index = countInterval();
        // this.count = 0;
    }

    getIndex() {
        return this.index;
    }

    getName() {
        return this.name;
    }

    getDueDate() {
        return this.dueDate;
    }
}