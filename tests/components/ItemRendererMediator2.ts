/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../src/mvc/view/Mediator";
import {ItemRenderer} from "./ItemRenderer";

export class ItemRendererMediator2 extends Mediator<ItemRenderer> {


    initialize(): void {
        super.initialize();
        console.log("item mediator 2 created");
    }

    destroy(): void {
        super.destroy();
        console.log("item mediator 2 destroyed");
    }
}
