/**
 * Created by Roman.Gaikov
 */
import {Context} from "../context/Context";
import {ClassType} from "../common";
import {Mediator} from "./Mediator";
import {ReactView} from "./ReactView";

export class MediatorsBundle {
    private readonly _mediators: Mediator<ReactView>[] = [];

    constructor(mediators: Mediator<ReactView>[]) {
        this._mediators = mediators;
    }

    public destroy(): void {
        for (const m of this._mediators.reverse()) {
            m.destroy();
        }
    }
}

export class MediatorMapping {
    private readonly _context: Context;
    private readonly _mediatorClasses: ClassType<Mediator<ReactView>>[] = [];

    constructor(context: Context) {
        this._context = context;
    }

    map(cls: ClassType<Mediator<ReactView>>):void {
        if (this._mediatorClasses.indexOf(cls) >= 0) {
            console.warn("mediator class already mapped: ", cls.name);
        } else {
            this._mediatorClasses.push(cls);
        }
    }

    createMediators(view: ReactView): MediatorsBundle {

        const list: Mediator<ReactView>[] = [];
        for (const cls of this._mediatorClasses) {
            const m = new cls(view, this._context);
            list.push(m);
            m.initialize();
        }
        return new MediatorsBundle(list);
    }
}
