// Copyright 2023, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import * as React from "react";
import * as mobx from "mobx";

import "./cmdtext.less";

function renderCmdText(text: string): any {
    return <span>&#x2318;{text}</span>;
}

export { renderCmdText };
