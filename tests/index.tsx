import * as React from "react";
import * as ReactDOM from "react-dom";

import {TestApp} from "./TestApp";
import {AppConfig} from "./AppConfig";
import {configure} from "../src/mvc/common";

configure(new AppConfig());

ReactDOM.render(
    <TestApp/>,
    document.body
);