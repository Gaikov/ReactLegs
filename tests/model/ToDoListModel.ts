/**
 * Created by Roman.Gaikov
 */
import {Locatable} from "../../src/mvc/locatable/Locatable";
import {IContext} from "../../src/mvc/context/IContext";
import {EventBus} from "../../src/mvc/context/EventBus";
import {ToDoItem} from "./ToDoItem";

export class ModelEvent {
    static readonly CHANGED: string = "ModelEvent::CHANGED";
}

export class ToDoListModel extends Locatable {
    private _items: ToDoItem[] = [];
    private _eventBus: EventBus;

    constructor() {
        super();
        for (let i: number = 0; i < 5; i++) {
            this._items.push(new ToDoItem("caption" + i, "some notes"));
        }
    }

    init(context: IContext): void {
        super.init(context);
        this._eventBus = context.eventBus;
    }

    add(value: ToDoItem | ToDoItem[]): void {
        if (Array.isArray(value)) {
            this._items = this._items.concat(value);
        } else {
            this._items.push(value);
        }
        this._eventBus.emit(ModelEvent.CHANGED);
    }

    removeAt(index: number): void {
        this._items.splice(index, 1);
        this._eventBus.emit(ModelEvent.CHANGED);
    }

    clear(): void {
        this._items.length = 0;
        this._eventBus.emit(ModelEvent.CHANGED);
    }

    get numItems(): number {
        return this._items.length;
    }

    getItem(index: number): ToDoItem {
        return this._items[index];
    }

    setItem(index: number, item: ToDoItem) {
        this._items[index] = item;
        this._eventBus.emit(ModelEvent.CHANGED);
    }
}
