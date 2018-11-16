/**
 * Created by Roman.Gaikov
 */
import {Mediator} from "../../../src/mvc/view/Mediator";
import {InnerView} from "./InnerView";

export class InnerMediator extends Mediator<InnerView> {


    initialize(): void {
        super.initialize();
        console.log("inner created");
    }

    destroy(): void {
        console.log("inner destroyed");
        super.destroy();
    }
}
