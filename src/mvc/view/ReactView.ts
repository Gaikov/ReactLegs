/**
 * Created by Roman.Gaikov
 */
import * as React from "react";
import {ClassType, EventHandler} from "../common";
import {EventEmitter} from "events";
import {Context} from "../context/Context";
import {Locatable} from "../locatable/Locatable";
import {MediatorsBundle} from "./MediatorMapping";

export class ReactView<P = {}, S = {}> extends React.Component<P, S> {

    private _dispatcher: EventEmitter = new EventEmitter();
    private _mediators: MediatorsBundle;

    locate<T extends Locatable>(modelClass: ClassType<T>):T {
        return Context.instance().locate(modelClass);
    }

    dispatchGlobal(name: string, data?: any): void {
        Context.instance().eventBus.emit(name, data);
    }

    dispatchLocal(name: string, data?: any): void {
        this._dispatcher.emit(name, data);
    }

    addListener(name: string, handler: EventHandler) {
        this._dispatcher.on(name, handler);
    }

    removeListener(name: string, handler: EventHandler) {
        this._dispatcher.removeListener(name, handler);
    }

    componentDidMount(): void {
        this._mediators = Context.instance().createMediators(this);
    }

    componentWillUnmount(): void {
        if (this._mediators) {
            this._mediators.destroy();
            this._mediators = null;
        }
    }
}
