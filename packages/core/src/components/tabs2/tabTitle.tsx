/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

import * as classNames from "classnames";
import * as React from "react";

import * as Classes from "../../common/classes";
import { IProps } from "../../common/props";

export interface ITabTitleProps extends IProps {
    /**
     * Element ID.
     */
    id?: string;

    /**
     * Whether the tab is disabled.
     */
    disabled: boolean;

    /**
     * Whether the tab is currently selected.
     */
    selected: boolean;

    title: string | JSX.Element;

    /**
     * The ID of the tab panel which this tab corresponds to.
     */
    panelId?: string;

    onClick: React.MouseEventHandler<HTMLLIElement>;
}

export const TabTitle: React.SFC<ITabTitleProps> = (props) => (
    <li
        aria-controls={props.panelId}
        aria-disabled={props.disabled}
        aria-expanded={props.selected}
        aria-selected={props.selected}
        className={classNames(Classes.TAB, props.className)}
        id={props.id}
        onClick={props.disabled ? null : props.onClick}
        role="tab"
        selected={props.selected ? true : null}
        tabIndex={props.disabled ? null : 0}
    >
        {props.title}
    </li>
);
TabTitle.displayName = "Blueprint.TabTitle";
