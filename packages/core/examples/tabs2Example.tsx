/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

import * as React from "react";

import { Switch } from "@blueprintjs/core";
import { Tab } from "../src/components/tabs2/tab";
import { Tabs } from "../src/components/tabs2/tabs";
import BaseExample, { handleBooleanChange } from "./common/baseExample";

export class Tabs2Example extends BaseExample<{ isVertical?: boolean }> {
    public state = {
        isVertical: false,
    };

    private toggleIsVertical = handleBooleanChange((isVertical) => this.setState({ isVertical }));

    protected renderExample() {
        return (
            <Tabs
                key={this.state.isVertical ? "vertical" : "horizontal"}
                vertical={this.state.isVertical}
            >
                <Tab title="React">
                    <h3>Example panel: React</h3>
                    <p className="pt-running-text">
                        Lots of people use React as the V in MVC. Since React makes no assumptions about the
                        rest of your technology stack, it's easy to try it out on a small feature in an existing
                        project.
                    </p>
                </Tab>
                <Tab title="Angular">
                    <h3>Example panel: Angular</h3>
                    <p className="pt-running-text">
                        HTML is great for declaring static documents, but it falters when we try to use it for
                        declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary
                        for your application. The resulting environment is extraordinarily expressive, readable,
                        and quick to develop.
                    </p>
                </Tab>
                <Tab title="Ember">
                    <h3>Example panel: Ember</h3>
                    <p className="pt-running-text">
                        Ember.js is an open-source JavaScript application framework, based on the
                        model-view-controller (MVC) pattern. It allows developers to create scalable single-page
                        web applications by incorporating common idioms and best practices into the framework.
                        What is your favorite JS framework?
                    </p>
                    <input className="pt-input" type="text"/>
                </Tab>
                <Tab disabled title="Backbone">
                    <h3>Backbone</h3>
                </Tab>
                <input className="pt-input" type="text" placeholder="Search..." />
            </Tabs>
        );
    }

    protected renderOptions() {
        return [
            [
                <Switch
                    checked={this.state.isVertical}
                    label="Use vertical tabs"
                    key="Vertical"
                    onChange={this.toggleIsVertical}
                />,
            ],
        ];
    }
}
