/**
 * Created by Roman.Gaikov
 */

import {IConfig} from "./context/IConfig";
import {Context} from "./context/Context";

export type EventHandler = (data: any) => void;

export class EventListener {
    name: string;
    handler: EventHandler;

    constructor(name: string, handler: EventHandler) {
        this.name = name;
        this.handler = handler;
    }
}

export interface ClassType<T> {
    new(...args: any[]): T;
}

export function configure(config: IConfig): void {
    Context.init(config);
}

let classIdCounter: number = 0;
const CLASS_ID:string = "__react_legs_class_id__";

export function getClassId(classType: Function): string {
    const type: any = classType;
    if (!type.hasOwnProperty(CLASS_ID)) {
        type[CLASS_ID] = classIdCounter++;
    }
    return type[CLASS_ID];
}