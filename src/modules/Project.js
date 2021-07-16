export default class Project {
    constructor(name) {
        this.name = name;
        this.taskArray = [];
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
}