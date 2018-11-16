/**
 * Created by Roman.Gaikov
 */
import {IMapping} from "./IMapping";

export interface IConfig {
    configure(context: IMapping): void;
}
