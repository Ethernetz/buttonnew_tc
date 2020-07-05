/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import * as TileCollectionFormatSettings from "./TilesCollection/FormatSettings"
import {State} from './TilesCollection/enums'
import { TileCollectionStatedFormatObject } from "./TilesCollection/FormatSettings";
import { StatesUsed } from "./TilesCollection/interfaces";

export class TileSettings extends TileCollectionFormatSettings.TileSettings{
}

export class TextSettings extends TileCollectionFormatSettings.TextSettings{
}

export class IconSettings extends TileCollectionFormatSettings.IconSettings{
}

export class LayoutSettings extends TileCollectionFormatSettings.LayoutSettings{
}

export class EffectSettings extends TileCollectionFormatSettings.EffectSettings{
}

export class ContentSettings implements TileCollectionStatedFormatObject{
  public state : State = State.all;
  statesUsed: StatesUsed = {
    selected: true,
    unselected: true,
    hover: false,
    disabled: false
  }
  public hover: boolean = false

  public n: number = 1
  public icons: boolean = false

  public textD: string = "Button Text"
  public textA: string = ""
  public textS: string = null
  public textU: string = null

  public iconD: string = ""
  public iconA: string = ""
  public iconS: string = null
  public iconU: string = null
}

export class BgImgSettings{
  public img: string = ""
}

export class VisualSettings extends DataViewObjectsParser {
  public tile: TileSettings = new TileSettings();
  public text: TextSettings = new TextSettings();
  public icon: IconSettings = new IconSettings();
  public layout: LayoutSettings = new LayoutSettings();
  public effects: EffectSettings = new EffectSettings();
  public content: ContentSettings = new ContentSettings();
  public bgimg: BgImgSettings = new BgImgSettings();
}