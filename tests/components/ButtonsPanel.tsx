import {ReactView} from "../../src/mvc/view/ReactView";
import * as React from "react";

export class ButtonsPanelEvent {
    static readonly ADD_CLICKED: string = "ButtonsPanelEvent.ADD_CLICKED";
    static readonly REMOVE_CLICKED: string = "ButtonsPanelEvent.REMOVE_CLICKED";
    static readonly REMOVE_ALL_CLICKED: string = "ButtonsPanelEvent.REMOVE_ALL_CLICKED";
}

export class ButtonsPanel extends ReactView {

    render(): React.ReactNode {
        return <div style={{margin: 5}}>
            <button onClick={() => this.dispatchLocal(ButtonsPanelEvent.ADD_CLICKED)}>add</button>
            <button onClick={() => this.dispatchLocal(ButtonsPanelEvent.REMOVE_CLICKED)}>remove</button>
            <button onClick={() => this.dispatchLocal(ButtonsPanelEvent.REMOVE_ALL_CLICKED)}>remove all</button>
        </div>
    }
}