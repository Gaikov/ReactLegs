/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../src/mvc/view/Mediator";
import {ItemsListView} from "./ItemsListView";
import {ToDoListModel, ModelEvent} from "../model/ToDoListModel";

export class ItemsListMediator extends Mediator<ItemsListView> {

    initialize(): void {
        super.initialize();

        this.addContextListener(ModelEvent.CHANGED, ()=> this.invalidateView());
        this.invalidateView();
    }

}
