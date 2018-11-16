/**
 * Created by Roman.Gaikov
 */

import {IContext} from "../../src/mvc/context/IContext";
import {ToDoListModel} from "../model/ToDoListModel";
import {Command} from "../../src/mvc/command/Command";

export class RefreshListCommand extends Command {
    execute(context: IContext, count: number): void {
        const model = context.locate(ToDoListModel);
        const start = model.numItems;
        model.clear();

        const values:number[] = [];
        for (let i = 0; i < count; i++) {
            values.push(start + i);
        }
        model.add(values);
    }
}
