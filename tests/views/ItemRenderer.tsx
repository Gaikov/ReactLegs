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

    get editing(): boolean {
        return this.state.editing
    }

    set editing(value: boolean) {
        this.setState({editing: value});
    }

    get itemIndex(): number {
        return this.props.index;
    }


    onClickChange: (caption: string, notes: string) => void;
    onClickRemove: () => void;

    renderStatic(): React.ReactNode {
        return <div>
            <div>Caption: {this.props.data.caption}</div>
            <div> Nodes: {this.props.data.notes}</div>
            <button onClick={() => this.editing = true}>Edit</button>
            <button onClick={() => this.onClickRemove()}>Remove</button>
        </div>
    }

    private onInputChanged(e: React.ChangeEvent): string {
        const target = e.nativeEvent.target as HTMLInputElement;
        return target.value
    }

    renderEditing(): React.ReactNode {

        let caption = this.props.data.caption;
        let notes = this.props.data.notes;

        return <div>
            <div>Caption:<br/>
                <input type="text" defaultValue={this.props.data.caption}
                       onChange={e => caption = this.onInputChanged(e)}/>
            </div>
            <div>Notes:<br/>
                <input type="text" defaultValue={this.props.data.notes}
                       onChange={e => notes = this.onInputChanged(e)}/>
            </div>
            <button onClick={() => this.onClickChange(caption, notes)}>Ok</button>
            <button onClick={() => this.editing = false}>Cancel</button>
        </div>
    }

    render(): React.ReactNode {
        return <div style={this.style}>
            {this.state.editing ? this.renderEditing() : this.renderStatic()}
        </div>;
    }
}
