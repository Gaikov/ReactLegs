/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../../src/mvc/view/ReactView";
import * as React from "react";
import {CSSProperties} from "react";
import {ToDoItem} from "../model/ToDoItem";

export interface IItemRendererProps {
    data: ToDoItem;
    index: number;
}

interface IItemRendererState {
    editing: boolean;
}

export class ItemRenderer extends ReactView<IItemRendererProps, IItemRendererState> {

    constructor(props: IItemRendererProps) {
        super(props);
        this.state = {editing: false};
    }

    readonly style: CSSProperties = {
        backgroundColor: "#ade4ff",
        display: "block",
        padding: 5,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2
    };

    onClickRemove: (index: number) => void;

    renderStatic(): React.ReactNode {
        return <div>
            <div>Caption: {this.props.data.caption}</div>
            <div> Nodes: {this.props.data.notes}</div>
            <button onClick={() => this.setState({editing: true})}>Edit</button>
            <button onClick={() => this.onClickRemove(this.props.index)}>Remove</button>
        </div>
    }

    renderEditing(): React.ReactNode {
        return <div>
            <div>Caption:<br/>
                <input type="text" defaultValue={this.props.data.caption}/>
            </div>
            <div>Notes:<br/>
                <input type="text" defaultValue={this.props.data.notes}/>
            </div>
            <button>Ok</button>
            <button onClick={()=> this.setState({editing: false})}>Cancel</button>
        </div>
    }

    render(): React.ReactNode {
        return <div style={this.style}>
            {this.state.editing ? this.renderEditing() : this.renderStatic()}
        </div>;
    }
}
