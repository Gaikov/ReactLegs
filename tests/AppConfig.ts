/**
 * Created by Roman.Gaikov
 */
import {ButtonsPanel} from "./components/ButtonsPanel";
import {ButtonsPanelMediator} from "./components/ButtonsPanelMediator";
import {TestAppMediator} from "./TestAppMediator";
import {TestApp} from "./TestApp";
import {ItemsListView} from "./components/ItemsListView";
import {ItemsListMediator} from "./components/ItemsListMediator";
import {ToDoListModel} from "./model/ToDoListModel";
import {RefreshListCommand} from "./commands/RefreshListCommand";
import {ItemRenderer} from "./components/ItemRenderer";
import {ItemRendererMediator} from "./components/ItemRendererMediator";
import {RefreshEvent} from "./events/RefreshEvent";
import {ItemRendererMediator2} from "./components/ItemRendererMediator2";
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

        context.mapCommand(RefreshEvent.REFRESH_CLICKED, RefreshListCommand);
    }
}