/**
 * Created by Roman.Gaikov
 */
import {EventHandler, EventListener} from "../common";
import {ReactView} from "./ReactView";
import {IContext} from "../context/IContext";

export class Mediator<T extends ReactView> {

    private _view: T;

    private _viewListeners: EventListener[] = [];
    private _contextListeners: EventListener[] = [];
    private readonly _context: IContext;

    constructor(view: T, context: IContext) {
        this._view = view;
        this._context = context;
    }

    get view(): T {
        return this._view;
    }

    get context(): IContext {
        return this._context;
    }

    dispatch(name: string, data?: any): void {
        this._context.eventBus.emit(name, data);
    }

    addViewListener(name: string, handler: EventHandler): void {
        this._view.addListener(name, handler);
        this._viewListeners.push(new EventListener(name, handler));
    }

    addContextListener(name: string, handler: EventHandler): void {
        this._context.eventBus.addListener(name, handler);
        this._contextListeners.push(new EventListener(name, handler));
    }

    protected invalidateView():void {
        this._view.forceUpdate();
    }

    initialize(): void {
    }

    destroy(): void {
        for (const l of this._viewListeners) {
            this._view.removeListener(l.name, l.handler);
        }

        for (const l of this._contextListeners) {
            this._context.eventBus.removeListener(l.name, l.handler);
        }
        this._view = null;
    }

}
