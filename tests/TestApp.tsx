import * as React from "react";
import {ButtonsPanel} from "./components/ButtonsPanel";
import {ItemsListView} from "./components/ItemsListView";
import {RefreshEvent} from "./events/RefreshEvent";
import {ReactView} from "../src/mvc/view/ReactView";

/**
 * Created by Roman.Gaikov
 */

export class TestAppEvent {
    static readonly REFRESH_CLICKED: string = "TestAppEvent::REFRESH_CLICKED";
}

export class TestApp extends ReactView<{}, {}> {

    button3Click: () => void;

    private overlay: any =  {
        color: "#ffffff",
        background: "#0088ff",
        display: "table-cell",
        position: "fixed",
        right: 0,
        bottom: 0,
        padding: 20,
        margin: 5,
        borderRadius: 10
    };

    render(): React.ReactNode {
        console.log("app.render");
        return <div>
            <div style={{margin: 5}}>
                <button onClick={() => this.dispatchGlobal(RefreshEvent.REFRESH_CLICKED, 5)}>Refresh list</button>
                <button onClick={() => this.dispatchLocal(TestAppEvent.REFRESH_CLICKED)}>Refresh list 2</button>
                <button onClick={() => this.button3Click()}>Refresh list 2</button>
            </div>
            <ButtonsPanel/>
            <ItemsListView/>
            <div style={this.overlay}>Hello from ReactLegs!</div>
        </div>
    }

}