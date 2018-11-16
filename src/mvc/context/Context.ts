/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../view/ReactView";
import {Mediator} from "../view/Mediator";
import {EventEmitter} from "events";
import {Command} from "../command/Command";
import {ClassMapping, InstanceStorage} from "../locatable/InstanceStorage";
import {Locatable} from "../locatable/Locatable";
import {IContext} from "./IContext";
import {IConfig} from "./IConfig";
import {ClassType} from "../common";
import {MediatorMapping, MediatorsBundle} from "../view/MediatorMapping";
import {EventBus} from "./EventBus";
import {IMapping} from "./IMapping";

export class Context implements IContext, IMapping {

    private static _instance: Context;

    private _dispatcher: EventEmitter = new EventBus();

    private _mediatorsMap: { [name: string]: MediatorMapping } = {};
    private _locatableStorage: InstanceStorage = new InstanceStorage(this);

    static init(config: IConfig) {
        if (this._instance) {
            console.error("context already initialized");
            return;
        }

        this._instance = new Context();
        config.configure(this._instance);
    }

    get eventBus(): EventEmitter {
        return this._dispatcher;
    }

    mapMediator<T extends ReactView>(viewClass: ClassType<T>, mediatorClass: ClassType<Mediator<T>>) {
        const className = viewClass.name;
        let mapping: MediatorMapping = this._mediatorsMap[className];
        if (!mapping) {
            this._mediatorsMap[className] = mapping = new MediatorMapping(this);
        }
        mapping.map(mediatorClass);
    }

    mapCommand(eventName: string, cls: ClassType<Command>): void {
        this._dispatcher.addListener(eventName, data => {
            const command = new cls();
            command.execute(this, data);
        });
    }

    mapLocatable(modelClass: typeof Locatable): ClassMapping {
        return this._locatableStorage.mapLocatable(modelClass);
    }

    locate<T extends Locatable>(modelClass: ClassType<T>): T {
        return this._locatableStorage.locale(modelClass);
    }

    createMediators(view: ReactView): MediatorsBundle {
        const mapping = this._mediatorsMap[view.constructor.name];
        if (mapping) {
            return mapping.createMediators(view);
        }
        return null;
    }

    static instance(): Context {
        if (!this._instance) {
            console.error("context is not initialized");
            return null;
        }
        return this._instance;
    }
}
