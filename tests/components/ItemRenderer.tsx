/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../../src/mvc/view/ReactView";
import * as React from "react";
import {CSSProperties} from "react";
import {ToDoItem} from "../model/ToDoItem";

export interface IItemProps {
    data: ToDoItem;
    index: number;
}

export class ItemRenderer extends ReactView<IItemProps> {

    readonly style: CSSProperties = {
        backgroundColor: "#ade4ff",
        display: "block",
        padding: 5,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
    };

    onClickRemove: (index: number) => void;

    render(): React.ReactNode {
        return <div style={this.style}>
            <div>Caption: {this.props.data.caption}</div>
            <div>Nodes: {this.props.data.notes}</div>
            <button onClick={() => this.onClickRemove(this.props.index)}>Remove
            </button>
        </div>;
    }
}
