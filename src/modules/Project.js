export default class Project {
    constructor(name) {
        this.name = name;
        this.taskArray = [];
        this.count = -1;
    }

    getName() {
        return this.name;
    }

    getTaskArray() {
        return this.taskArray;
    }

    appendTask(task) {
        this.taskArray.push(task);
    }

    countInterval() {
        this.count++;
        return this.count;
    }
}