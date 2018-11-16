/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../../src/mvc/view/ReactView";
import * as React from "react";
import {CSSProperties} from "react";

export interface IItemProps {
    data: number;
    index: number;
}

export class ItemRenderer extends ReactView<IItemProps> {

    readonly style: CSSProperties = {
        borderColor: "gray",
        borderStyle: "solid",
        display: "block",
        padding: 5,
        margin: 5,
    };

    onClickRemove: (index: number) => void;

    render(): React.ReactNode {
        return <div style={this.style}>
            <div>Item {this.props.data}</div>
            <button onClick={() => this.onClickRemove(this.props.index)}>Remove</button>
        </div>;
    }
}
