import {ReactView} from "../view/ReactView";
import {ClassType} from "../common";
import {Mediator} from "../view/Mediator";
import {Command} from "../command/Command";
import {Locatable} from "../locatable/Locatable";
import {ClassMapping} from "../locatable/InstanceStorage";

export interface IMapping {

    mapMediator<T extends ReactView>(viewClass: ClassType<T>, mediatorClass: ClassType<Mediator<T>>): void;

    mapCommand(eventName: string, cls: ClassType<Command>): void;

    mapLocatable(modelClass: typeof Locatable): ClassMapping;
}