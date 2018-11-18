/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../src/mvc/view/Mediator";
import {ItemRenderer} from "./ItemRenderer";
import {ToDoListModel} from "../model/ToDoListModel";

export class ItemRendererMediator extends Mediator<ItemRenderer> {

    private _model:ToDoListModel;

    initialize(): void {
        super.initialize();

        this._model = this.context.locate(ToDoListModel);
        this.view.onClickRemove = index => this.onClickRemove(index);

        console.log("item mediator created");
    }

    destroy(): void {
        super.destroy();
        console.log("item mediator destroyed");
    }

    private onClickRemove(index: number):void {
        this._model.removeAt(index);
    }
}
