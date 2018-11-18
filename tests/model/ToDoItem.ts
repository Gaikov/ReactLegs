export class ToDoItem {
    public caption: string;
    public notes: string;

    constructor(caption: string, node: string) {
        this.caption = caption;
        this.notes = node;
    }
}