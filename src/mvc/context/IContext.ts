import {Locatable} from "../locatable/Locatable";
import {ClassType} from "../common";
import {EventBus} from "./EventBus";

/**
 * Created by Roman.Gaikov
 */

export interface IContext {
    eventBus: EventBus;

    locate<T extends Locatable>(modelClass: ClassType<T>): T;
}
