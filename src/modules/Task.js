let count = 0;

function countInterval() {
    count++;
    return count;
}

export default class Task {
    constructor(name, dueDate = 'No Date') {
        this.name = name;
        this.dueDate = dueDate;
        this.index = countInterval();
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