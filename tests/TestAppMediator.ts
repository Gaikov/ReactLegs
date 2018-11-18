/**
 * Created by Roman.Gaikov
 */

import {TestApp, TestAppEvent} from "./TestApp";
import {CoreSignal} from "./signals/CoreSignal";
import {Mediator} from "../src/mvc/view/Mediator";

export class TestAppMediator extends Mediator<TestApp> {

    initialize(): void {
        super.initialize();


        this.addViewListener(TestAppEvent.REFRESH_CLICKED, () => {
            this.dispatch(CoreSignal.CREATE_LIST, 10);
        });

        this.view.button3Click = ()=> {
            this.dispatch(CoreSignal.CREATE_LIST, 20);
        };

        console.info("app initialized");
    }

    destroy(): void {
        console.info("app destroyed");
        super.destroy();
    }
}
