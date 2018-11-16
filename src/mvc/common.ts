/**
 * Created by Roman.Gaikov
 */

import {IConfig} from "./context/IConfig";
import {Context} from "./context/Context";
import {func} from "prop-types";

export type EventHandler = (data: any) => void;

export class EventListener {
    name: string;
    handler: EventHandler;

    constructor(name: string, handler: EventHandler) {
        this.name = name;
        this.handler = handler;
    }
}

export interface ClassType<T>
{
    new(...args: any[]): T;
}

export function configure(config:IConfig):void {
    Context.init(config);
}