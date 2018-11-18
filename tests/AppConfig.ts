/**
 * Created by Roman.Gaikov
 */
import {ButtonsPanel} from "./views/ButtonsPanel";
import {ButtonsPanelMediator} from "./views/ButtonsPanelMediator";
import {TestAppMediator} from "./TestAppMediator";
import {TestApp} from "./TestApp";
import {ItemsListView} from "./views/ItemsListView";
import {ItemsListMediator} from "./views/ItemsListMediator";
import {ToDoListModel} from "./model/ToDoListModel";
import {CreateListCommand} from "./commands/CreateListCommand";
import {ItemRenderer} from "./views/ItemRenderer";
import {ItemRendererMediator} from "./views/ItemRendererMediator";
import {CoreSignal} from "./signals/CoreSignal";
import {ItemRendererMediator2} from "./views/ItemRendererMediator2";
import {IConfig} from "../src/mvc/context/IConfig";
import {IMapping} from "../src/mvc/context/IMapping";

export class AppConfig implements IConfig {
    configure(context: IMapping): void {
        context.mapLocatable(ToDoListModel);

        context.mapMediator(TestApp, TestAppMediator);
        context.mapMediator(ButtonsPanel, ButtonsPanelMediator);

        context.mapMediator(ItemsListView, ItemsListMediator);
        context.mapMediator(ItemRenderer, ItemRendererMediator);
        context.mapMediator(ItemRenderer, ItemRendererMediator2);

        context.mapCommand(CoreSignal.CREATE_LIST, CreateListCommand);
    }
}
