/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../src/mvc/view/Mediator";
import {ButtonsPanel, ButtonsPanelEvent} from "./ButtonsPanel";
import {ToDoListModel} from "../model/ToDoListModel";

export class ButtonsPanelMediator extends Mediator<ButtonsPanel> {

    private _model: ToDoListModel;

    initialize(): void {
        super.initialize();

        this._model = this.context.locate(ToDoListModel);

        this.addViewListener(ButtonsPanelEvent.ADD_CLICKED, () => this.onAddClicked());
        this.addViewListener(ButtonsPanelEvent.REMOVE_CLICKED, () => this.onRemoveClicked());
        this.addViewListener(ButtonsPanelEvent.REMOVE_ALL_CLICKED, ()=> this.onRemoveAllClicked());
    }

    private onAddClicked() {
        console.log("add click");
        const value = Math.ceil(Math.random() * 100);
        this._model.add(value);

    }

    private onRemoveClicked() {
        console.log("remove click");
        this._model.removeAt(this._model.numItems - 1);
    }

    private onRemoveAllClicked() {
        console.log("clear all click");
        this._model.clear();
    }
}
