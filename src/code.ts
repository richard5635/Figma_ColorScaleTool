/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
let space = require("color-space");

import { colorConverter } from "./color-converter";
const conv = new colorConverter();

let wWidth = 300;
let wHeight = 480;

figma.showUI(__html__, { width: wWidth, height: wHeight });

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  } 
  else if (msg.type === "create-colors") {
    const nodes = [];


    let cols = msg.colors;
    console.log(cols);

    // Convert colors inside, from hex to rgb objects
    cols.map((col, i) => {
      const rect = figma.createRectangle();
      rect.x = i*120;

      let colFigma = conv.hexrgb(col);
      rect.fills = [
        {
          type: "SOLID",
          color: {
            r: colFigma.r,
            g: colFigma.g,
            b: colFigma.b,
          },
        },
      ];
      // Positioning

      nodes.push(rect);
    });

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};

//// Calculate font sizes
// Input: base and scale -> Output: Object containing em, sizes
// Extra: add line height

//// View Font.
// Load list of fonts
// Take the wanted font
//
