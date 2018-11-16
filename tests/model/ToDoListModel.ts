/**
 * Created by Roman.Gaikov
 */
import {Locatable} from "../../src/mvc/locatable/Locatable";
import {IContext} from "../../src/mvc/context/IContext";
import {EventEmitter} from "events";

export class ModelEvent {
    static readonly CHANGED: string = "ModelEvent::CHANGED";
}

export class ToDoListModel extends Locatable {
    private _items: number[] = [1, 2, 3, 4];
    private _dispatcher: EventEmitter;

    init(context: IContext): void {
        super.init(context);
        this._dispatcher = context.eventBus;
    }

    add(value: number | number[]): void {
        if (Array.isArray(value)) {
            this._items = this._items.concat(value);
        } else {
            this._items.push(value);
        }
        this._dispatcher.emit(ModelEvent.CHANGED);
    }

    removeAt(index: number): void {
        this._items.splice(index, 1);
        this._dispatcher.emit(ModelEvent.CHANGED);
    }

    clear(): void {
        this._items.length = 0;
        this._dispatcher.emit(ModelEvent.CHANGED);
    }

    get numItems(): number {
        return this._items.length;
    }

    getItem(index: number): number {
        return this._items[index];
    }
}
