export class Model{
    user;
    items;

    constructor(){
        this.user = "Pasha";
        this.items = [
            new TodoItem('Exercise 1',false),
            new TodoItem('Exercise 2',false),
            new TodoItem('Exercise 3',false),
            new TodoItem('Exercise 4',false),
            new TodoItem('Exercise 5',false),
            new TodoItem('Exercise 6',false),
        ]
    }
}

export class TodoItem{
    description;
    action;

    constructor(description: any, action: any) {
        this.description = description;
        this.action = action;
    }
}