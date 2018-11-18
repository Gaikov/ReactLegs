/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../src/mvc/view/Mediator";
import {ItemRenderer} from "./ItemRenderer";
import {ToDoListModel} from "../model/ToDoListModel";
import {ToDoItem} from "../model/ToDoItem";

export class ItemRendererMediator extends Mediator<ItemRenderer> {

    private _model: ToDoListModel;

    initialize(): void {
        super.initialize();

        this._model = this.context.locate(ToDoListModel);
        this.view.onClickRemove = () => this.onClickRemove();
        this.view.onClickChange = this.onClickChange.bind(this);

        console.log("item mediator created");
    }

    destroy(): void {
        super.destroy();
        console.log("item mediator destroyed");
    }

    private onClickRemove(): void {
        this._model.removeAt(this.view.itemIndex);
    }

    private onClickChange(caption: string, notes: string): void {
        this._model.setItem(this.view.itemIndex, new ToDoItem(caption, notes));
        this.view.editing = false;
    }
}
