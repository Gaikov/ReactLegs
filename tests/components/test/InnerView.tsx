/**
 * Created by Roman.Gaikov
 */
import {ReactView} from "../../../src/mvc/view/ReactView";
import * as React from "react";

export class InnerView extends ReactView {

    render(): React.ReactNode {
        return <div>inner</div>;
    }
}
