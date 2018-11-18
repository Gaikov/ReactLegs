/**
 * Created by Roman.Gaikov
 */
import {Locatable} from "./Locatable";
import {IContext} from "../context/IContext";
import {ClassType, getClassId} from "../common";

export class ClassMapping {
    private readonly _modelClass: typeof Locatable;
    private _instance: Locatable;
    private readonly _context: IContext;

    constructor(modelClass: typeof Locatable, context:IContext) {
        this._modelClass = modelClass;
        this._context = context;
    }

    getInstance(): Locatable {
        if (!this._instance) {
            this._instance = new this._modelClass();
            this._instance.init(this._context);
        }
        return this._instance;
    }

    forceInstance(instance?:Locatable):void {
        if (this._instance) {
            throw "Locatable already instantiated: " + this._modelClass;
        }

        if (instance) {
            this._instance = instance;
        } else {
            this._instance = new this._modelClass();
        }
        this._instance.init(this._context);
    }
}

export class InstanceStorage {
    private _map:{[name: string]: ClassMapping} = {};
    private readonly _context:IContext;

    constructor(context: IContext) {
        this._context = context;
    }

    mapLocatable(modelClass: typeof Locatable):ClassMapping {
        const className = getClassId(modelClass);
        if (this._map[className]) {
            console.warn("locatable already mapped: ", className);
            return null;
        }
        return this._map[className] = new ClassMapping(modelClass, this._context);
    }

    locale<T extends Locatable>(modelClass: ClassType<T>): T {
        const className = getClassId(modelClass);
        const mapping = this._map[className];
        if (!mapping) {
            console.warn("locatable is not mapped: ", className);
            return null;
        }

        return <T>mapping.getInstance();
    }
}
