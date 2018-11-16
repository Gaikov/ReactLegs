/**
 * Created by Roman.Gaikov
 */
import {EventEmitter} from "events";

export class EventBus extends EventEmitter {

    emit(event: string | symbol, ...args: any): boolean {
        console.log("%cevent > " + (event as any), "font-weight:bold; color: #ff0088", args);
        return super.emit(event, ...args);
    }
}
