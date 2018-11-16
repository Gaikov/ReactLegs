/**
 * Created by Roman.Gaikov
 */
import {IContext} from "../context/IContext";

export abstract class Command {
    abstract execute(context: IContext, data: any): void
}