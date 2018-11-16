/**
 * Created by Roman.Gaikov
 */

import {TestApp, TestAppEvent} from "./TestApp";
import {RefreshEvent} from "./events/RefreshEvent";
import {Mediator} from "../src/mvc/view/Mediator";

export class TestAppMediator extends Mediator<TestApp> {

    initialize(): void {
        super.initialize();


        this.addViewListener(TestAppEvent.REFRESH_CLICKED, () => {
            this.dispatch(RefreshEvent.REFRESH_CLICKED, 10);
        });

        this.view.button3Click = ()=> {
            this.dispatch(RefreshEvent.REFRESH_CLICKED, 20);
        };

        console.info("app initialized");
    }

    destroy(): void {
        console.info("app destroyed");
        super.destroy();
    }
}
