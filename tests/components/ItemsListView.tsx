/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../../src/mvc/view/ReactView";
import * as React from "react";
import {ItemRenderer} from "./ItemRenderer";
import {ToDoListModel} from "../model/ToDoListModel";

export class ItemsListView extends ReactView {

    render(): React.ReactNode {

        const model = this.locate(ToDoListModel);

        const list: JSX.Element[] = [];
        for (let i = 0; i < model.numItems; i++) {
            list.push(<ItemRenderer key={i} data={model.getItem(i)} index={i}/>);
        }

        return <div>{list}</div>
    }
}
