/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-space/cmy.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/cmy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/cmy
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var cmy = module.exports = {
	name: 'cmy',
	min: [0,0,0],
	max: [100,100,100],
	channel: ['cyan', 'magenta', 'yellow'],
	alias: ['CMY']
};


/**
 * CMY to RGB
 *
 * @param {Array} cmy Channels
 *
 * @return {Array} RGB channels
 */
cmy.rgb = function(cmy) {
	var c = cmy[0] / 100,
		m = cmy[1] / 100,
		y = cmy[2] / 100;

	return [
		(1 - c) * 255,
		(1 - m) * 255,
		(1 - y) * 255
	];
};


/**
 * RGB to CMY
 *
 * @param {Array} rgb channels
 *
 * @return {Array} CMY channels
 */
rgb.cmy = function(rgb) {
	var r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255;

	return [
		(1-r) * 100 || 0,
		(1-g) * 100 || 0,
		(1-b) * 100 || 0
	];
};


/***/ }),

/***/ "./node_modules/color-space/cmyk.js":
/*!******************************************!*\
  !*** ./node_modules/color-space/cmyk.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/cmyk
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

module.exports = {
	name: 'cmyk',
	min: [0,0,0,0],
	max: [100,100,100,100],
	channel: ['cyan', 'magenta', 'yellow', 'black'],
	alias: ['CMYK'],

	rgb: function(cmyk) {
		var c = cmyk[0] / 100,
				m = cmyk[1] / 100,
				y = cmyk[2] / 100,
				k = cmyk[3] / 100,
				r, g, b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);
		return [r * 255, g * 255, b * 255];
	}
};


//extend rgb
rgb.cmyk = function(rgb) {
	var r = rgb[0] / 255,
			g = rgb[1] / 255,
			b = rgb[2] / 255,
			c, m, y, k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};


/***/ }),

/***/ "./node_modules/color-space/coloroid.js":
/*!**********************************************!*\
  !*** ./node_modules/color-space/coloroid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Architects and visual constructors hungarian color space.
 *
 * http://hej.sze.hu/ARC/ARC-030520-A/arc030520a.pdf
 *
 * @module  color-space/coloroid
 */


var xyy = __webpack_require__(/*! ./xyy */ "./node_modules/color-space/xyy.js");
var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");


/**
 * Main color space object
 */
var coloroid = {
	name: 'coloroid',
	alias: ['ATV'],

	//hue, saturation, luminosity
	//note that hue values are ids, not the numbers - not every value is possible
	//e.g. 38 will be rounded to 36
	channel: ['A','T','V'],
	min: [10, 0, 0],
	max: [76, 100, 100]
};


/**
 * Coloroid table
 * Regression of values is almost impossible, as hues don’t correlate
 * Even angle values are picked very inconsistently, based on aesthetical evaluation.
 *
 * - tgф, ctgф are removed, ф is searched instead
 * - eλ = xλ + yλ + zλ
 * - λ is removed as not used
 */
coloroid.table = [
	//A    angle  eλ        xλ       yλ
	[ 10,   59.0, 1.724349, 0.44987, 0.53641 ],
	[ 11,   55.3, 1.740844, 0.46248, 0.52444 ],
	[ 12,   51.7, 1.754985, 0.47451, 0.51298 ],
	[ 13,   48.2, 1.767087, 0.48601, 0.50325 ],
	[ 14,   44.8, 1.775953, 0.49578, 0.49052 ],
	[ 15,   41.5, 1.785073, 0.50790, 0.43035 ],
	[ 16,   38.2, 1.791104, 0.51874, 0.46934 ],
	[ 20,   34.9, 1.794831, 0.52980, 0.45783 ],
	[ 21,   31.5, 1.798664, 0.54137, 0.44559 ],
	[ 22,   28.0, 1.794819, 0.55367, 0.43253 ],
	[ 23,   24.4, 1.789610, 0.56680, 0.41811 ],
	[ 24,   20.6, 1.809483, 0.58128, 0.40176 ],
	[ 25,   16.6, 1.760983, 0.59766, 0.38300 ],
	[ 26,   12.3, 1.723443, 0.61653, 0.36061 ],
	[ 30,    7.7, 1.652891, 0.63896, 0.33358 ],
	[ 31,    2.8, 1.502607, 0.66619, 0.29930 ],
	[ 32,   -2.5, 1.072500, 0.70061, 0.26753 ],
	[ 33,   -8.4, 1.136637, 0.63925, 0.22631 ],
	[ 34,  -19.8, 1.232286, 0.53962, 0.19721 ],
	[ 35,  -31.6, 1.310120, 0.50340, 0.17495 ],
	[ 40,  -43.2, 1.376610, 0.46041, 0.15603 ],
	[ 41,  -54.6, 1.438692, 0.42386, 0.13846 ],
	[ 42,  -65.8, 1.501582, 0.38991, 0.12083 ],
	[ 43,  -76.8, 1.570447, 0.35586, 0.10328 ],
	[ 44,  -86.8, 1.645583, 0.32195, 0.08496 ],
	[ 45,  -95.8, 1.732083, 0.28657, 0.05155 ],
	[ 46, -108.4, 1.915753, 0.22202, 0.01771 ],
	[ 50, -117.2, 2.146310, 0.15664, 0.05227 ],
	[ 51, -124.7, 1.649939, 0.12736, 0.09020 ],
	[ 52, -131.8, 1.273415, 0.10813, 0.12506 ],
	[ 53, -138.5, 1.080809, 0.09414, 0.15741 ],
	[ 54, -145.1, 0.957076, 0.03249, 0.18958 ],
	[ 55, -152.0, 0.868976, 0.07206, 0.24109 ],
	[ 56, -163.4, 0.771731, 0.05787, 0.30378 ],
	[ 60, -177.2, 0.697108, 0.04353, 0.35696 ],
	[ 61,  171.6, 0.655803, 0.03291, 0.41971 ],
	[ 62,  152.4, 0.623958, 0.02240, 0.49954 ],
	[ 63,  148.4, 0.596037, 0.01196, 0.60321 ],
	[ 64,  136.8, 0.607413, 0.00425, 0.73542 ],
	[ 65,  125.4, 0.659923, 0.01099, 0.83391 ],
	[ 66,  114.2, 0.859517, 0.08050, 0.77474 ],
	[ 70,  103.2, 1.195683, 0.20259, 0.70460 ],
	[ 71,   93.2, 1.407534, 0.28807, 0.65230 ],
	[ 72,   84.2, 1.532829, 0.34422, 0.61930 ],
	[ 73,   77.3, 1.603792, 0.37838, 0.59533 ],
	[ 74,   71.6, 1.649448, 0.40290, 0.57716 ],
	[ 75,   66.9, 1.681080, 0.42141, 0.56222 ],
	[ 76,   62.8, 1.704979, 0.43647, 0.54895 ]
];


/**
Coloroid table source
Some negative angle typos are fixed.
Angle typo on the A=62 is fixed.
xλ typo on A=73 is fixed.


Beware, tg/ctg values don’t agree with angle.
Also don’t trust the calculated eλ = xλ + yλ + zλ.
Also, unfortunately, some values might be wrong, as coloroid range looks uneven.

A   λ       ф     tg ф    ctg ф   xλ       yλ       zλ       xλ      yλ      eλ

10  570.83   59.0          0.6009 0.775745 0.946572 0.002032 0.44987 0.54895 1.724349
11  572.64   55.3          0.6924 0.805130 0.933804 0.001910 0.46248 0.53641 1.740845
12  574.38   51.7          0.7898 0.832782 0.920395 0.001808 0.47451 0.52444 1.754986
13  576.06   48.2  1.1180  0.8941 0.858841 0.906482 0.001764 0.48601 0.51298 1.767088
14  577.50   44.8  0.9330  1.0070 0.880488 0.893741 0.001724 0.49578 0.50325 1.775953
15  579.31   41.5  0.8847         0.906652 0.876749 0.001672 0.50790 0.49052 1.785074
16  580.95   38.2  0.7869         0.929124 0.860368 0.001612 0.51874 0.43035 1.791104
20  582.65   34.9  0.6976         0.950909 0.842391 0.001531 0.52980 0.46934 1.794831
21  584.46   31.5  0.6128         0.972454 0.824779 0.001431 0.54137 0.45783 1.798665
22  586.43   28.0  0.5317         0.993753 0.799758 0.001308 0.55367 0.44559 1.794822
23  588.59   24.4  0.4536         1.014350 0.774090 0.001170 0.56680 0.43253 1.789610
24  591.06   20.6  0.3759         1.034402 0.774014 0.001067 0.58128 0.41811 1.779484
25  594.00   16.6  0.2974         1.052466 0.707496 0.001021 0.59766 0.40176 1.760984
26  597.74   12.3  0.2180         1.062544 0.660001 0.000898 0.61653 0.38300 1.723444
30  602.72    7.7  0.1352         1.056125 0.596070 0.000696 0.63896 0.36061 1.652892
31  610.14    2.8  0.0489         1.001027 0.501245 0.000335 0.66619 0.33358 1.502608
32  625.00   -2.5 -0.0435         0.751400 0.321000 0.000100 0.70061 0.29930 1.072500
33 -492.79   -8.4 -0.1477         0.726603 0.304093 0.105941 0.63925 0.26753 1.136638
34 -495.28  -19.8 -0.3600         0.689620 0.278886 0.263780 0.53962 0.22631 1.232286
35 -498.45  -31.6 -0.6152         0.659523 0.258373 0.392224 0.50340 0.19721 1.310122
40 -502.69  -43.2 -0.9391         0.633815 0.240851 0.501944 0.46041 0.17495 1.376610
41 -509.12  -54.6         -0.7107 0.609810 0.224490 0.604392 0.42386 0.15603 1.438692
42 -520.40  -65.8         -0.4494 0.585492 0.207915 0.708175 0.38991 0.13846 1.501583
43 -536.31  -76.8         -0.2345 0.558865 0.189767 0.821815 0.35586 0.12083 1.570447
44 -548.11  -86.8         -0.0559 0.529811 0.169965 0.945807 0.32195 0.10328 1.645584
45 -555.96  -95.8         -0.1016 0.496364 0.147168 1.088551 0.28657 0.08496 1.732085
46 -564.18 -108.4          0.3327 0.425346 0.098764 1.391643 0.22202 0.05155 1.915754
50  450.00 -117.2          0.5141 0.336200 0.038000 1.772110 0.15664 0.01771 2.146310
51  468.71 -124.7          0.6924 0.210174 0.086198 1.353567 0.12736 0.05227 1.649940
52  475.44 -131.8          0.8941 0.137734 0.114770 1.020911 0.10813 0.09020 1.273415
53  479.00 -138.5  0.8847         0.101787 0.135067 0.843955 0.09414 0.12506 1.080809
54  482.04 -145.1  0.6976         0.079004 0.150709 0.727363 0.03249 0.15741 0.957577
55  484.29 -152.0  0.5317         0.062658 0.164626 0.641692 0.07206 0.18958 0.868977
56  487.31 -163.4  0.2981         0.044691 0.185949 0.541091 0.05787 0.24109 0.771732
60  490.40 -177.2  0.0489         0.030372 0.211659 0.455077 0.04353 0.30378 0.697110
61  492.72  171.6 -0.1477         0.021655 0.234022 0.400126 0.03291 0.35696 0.655804
62  495.28  125.4 -0.3600         0.013989 0.261843 0.348126 0.02240 0.41971 0.623969
63  498.45  148.4 -0.6152         0.007215 0.301137 0.287685 0.01196 0.49954 0.596037
64  502.69  136.8 -0.9391 -1.0650 0.002586 0.366425 0.238402 0.00425 0.60321 0.607414
65  509.12  125.4 -1.4070 -0.7107 0.007260 0.485346 0.167317 0.01099 0.73542 0.659924
66  520.40  114.2         -0.4494 0.066010 0.717274 0.076233 0.08050 0.83391 0.859523
70  536.31  103.2         -0.2345 0.242272 0.926325 0.027086 0.20259 0.77474 1.195684
71  548.11   93.2         -0.0559 0.406663 0.990587 0.010284 0.28807 0.70460 1.410097
72  555.96   84.2          0.1016 0.527646 0.999862 0.005321 0.34422 0.65230 1.532830
73  560.74   77.3          0.2254 0.606873 0.993224 0.003695 0.37838 0.61930 1.603793
74  564.18   71.6          0.3327 0.664599 0.981981 0.002868 0.40290 0.59533 1.649449
75  566.78   66.9          0.4265 0.708358 0.970252 0.002470 0.42141 0.57716 1.681081
76  568.92   62.8          0.5140 0.744182 0.958592 0.002205 0.43647 0.56222 1.704981
*/




/** Create angle-sorted table */
var table = coloroid.table;
var angleTable = [].concat(table.slice(-13),table.slice(0, -13));


/**
 * Some precalculations
 * 2° D65 whitepoint is used
 */
var i = 'D65';
var o = 2;

var Xn = xyz.whitepoint[o][i][0];
var Yn = xyz.whitepoint[o][i][1];
var Zn = xyz.whitepoint[o][i][2];

var y0 = Xn / (Xn + Yn + Zn);
var x0 = Yn / (Xn + Yn + Zn);
var ew = (Xn + Yn + Zn) / 100;



/**
 * From xyY to coloroid
 *
 * @param {Array} arg xyY tuple
 *
 * @return {Array} ATV coloroid channels
 */
xyy.coloroid = function (arg) {
	var x = arg[0], y = arg[1], Y = arg[2];

	//coloroid luminocity is the same as hunter-lab lightness (the easier part)
	var V = 10 * Math.sqrt(Y);

	//get the hue angle, -π ... +π
	var angle = Math.atan2(y - y0, x - x0) * 180 / Math.PI;
	var row;

	//find the closest row in the table
	var prev = angleTable.length - 1;
	for (var i = 0; i < angleTable.length; i++) {
		if (angle > angleTable[i][1]) {
			break;
		}
		prev = i;
	}
	//round instead of ceil
	row = Math.abs(angleTable[i+1][1] - angle) > Math.abs(angleTable[prev][1] - angle) ? angleTable[i+1] : angleTable[prev];

	//get hue id
	var A = row[0];

	//calc saturation
	var yl = row[4], el = row[2], xl = row[3];

	//yl should be scaled to 0..100;
	var Yl = yl * el * 100;

	var T = 100 * Y*(x0*ew - x*ew) / (100*(x*el - xl*el) + Yl*(x0*ew - x*ew));
	// var T = 100 * Y*(1 - y*ew) / (100*(y*el - yl*el) + Yl*(1 - y*ew));

	return [A, T, V];
};





/**
 * Backwise - from coloroid to xyY
 *
 * @param {Array} arg Coloroid values
 *
 * @return {Array} xyY values
 */
coloroid.xyy = function (arg) {
	var A = arg[0], T = arg[1], V = arg[2];

	//find the closest row in the table
	var row;
	for (var i = 0; i < table.length; i++) {
		if (A <= table[i][0]) {
			row = table[i];
			break;
		}
	}

	var yl = row[4], el = row[2], xl = row[3];

	var Y = V*V / 100;

	var Yl = yl * el * 100;

	var x = (100*Y*x0*ew + 100*xl*el*T - Yl*T*x0*ew) / (100*T*el - Yl*T*ew + 100*Y*ew);
	var y = (100*Y + 100*T*yl*el - Yl*T) / (Y*ew*100 + T*100*el - T*Yl*ew);

	// var x = (100*Y*ew*x0 + 100*T*el*xl - T*Yl*ew*x0) / (100*T*el - T*Yl*ew + 100*Y*ew);
	// var y = 100*Y / (100*T*el + 100*T*ew*Yl + 100*ew*Y);

	// var x = (ew*x0*(V*V - 100*T*row[6]) + 100*T*el*xl) / (ew*(V*V - 100*T*row[6]) + 100*T*el);
	// var y = V*V/(ew*(V*V + 100*T*row[6]) + 100*T*el);

	return [x,y,Y];
};



/** Proper transformation to a XYZ (via xyY) */
xyz.coloroid = function (arg) {
	return xyy.coloroid(xyz.xyy(arg));
};
coloroid.xyz = function (arg) {
	return xyy.xyz(coloroid.xyy(arg));
};



module.exports = coloroid;






/***/ }),

/***/ "./node_modules/color-space/cubehelix.js":
/*!***********************************************!*\
  !*** ./node_modules/color-space/cubehelix.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Cubehelix http://astron-soc.in/bulletin/11June/289392011.pdf
 *
 * @module color-space/cubehelix
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var clamp = __webpack_require__(/*! mumath/clamp */ "./node_modules/mumath/clamp.js");


var cubehelix = module.exports = {
	name: 'cubehelix',
	channel: ['fraction'],
	min: [0],
	max: [1]
};


/** Default options for space */
var defaults = cubehelix.defaults = {
	//0..3
	start: 0,
	//-10..10
	rotation: 0.5,
	//0..1+
	hue: 1,
	//0..2
	gamma: 1
};


/**
 * Transform cubehelix level to RGB
 *
 * @param {Number} fraction 0..1 cubehelix level
 * @param {Object} options Mapping options, overrides defaults
 *
 * @return {Array} rgb tuple
 */
cubehelix.rgb = function(fraction, options) {
	options = options || {};

	if (fraction.length) fraction = fraction[0];

	var start = options.start !== undefined ? options.start : defaults.start;
	var rotation = options.rotation !== undefined ? options.rotation : defaults.rotation;
	var gamma = options.gamma !== undefined ? options.gamma : defaults.gamma;
	var hue = options.hue !== undefined ? options.hue : defaults.hue;

	var angle = 2 * Math.PI * (start/3 + 1.0 + rotation * fraction);

	fraction = Math.pow(fraction, gamma);

	var amp = hue * fraction * (1-fraction)/2.0;

	var r = fraction + amp*(-0.14861*Math.cos(angle)+1.78277*Math.sin(angle));
	var g = fraction + amp*(-0.29227*Math.cos(angle)-0.90649*Math.sin(angle));
	var b = fraction + amp*(+1.97294*Math.cos(angle));

	r = clamp(r, 0, 1);
	g = clamp(g, 0, 1);
	b = clamp(b, 0, 1);

	return [r * 255, g * 255, b * 255];
};


/**
 * RGB to cubehelix
 *
 * @param {Array} rgb RGB values
 *
 * @return {Array} cubehelix fraction(s)
 */
rgb.cubehelix = function(rgb) {
	//TODO - there is no backwise conversion yet
};


/***/ }),

/***/ "./node_modules/color-space/hcg.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hcg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hcg
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var hsl = __webpack_require__(/*! ./hsl */ "./node_modules/color-space/hsl.js");
var hsv = __webpack_require__(/*! ./hsv */ "./node_modules/color-space/hsv.js");
var hwb = __webpack_require__(/*! ./hwb */ "./node_modules/color-space/hwb.js");
var mod = __webpack_require__(/*! mumath/mod */ "./node_modules/mumath/mod.js");


module.exports = {
	name: 'hcg',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'chroma', 'gray'],
	alias: ['HCG', 'HSG'],

	rgb: function(hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}
		var hi = mod(h, 1) * 6;
		var v = mod(hi, 1);
		var pure = [0, 0, 0];
		var w = 1 - v;
		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
		var mg = (1.0 - c) * g;
		var rgb = [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
		return rgb;
	},

	hsl: function(hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;
		if (l < 1.0 && l > 0.0) {
			if (l < 0.5) {
				s = c / (2 * l);
			} else {
				s = c / (2 * (1 - l));
			}
		}
		return [hcg[0], s * 100, l * 100];
	},

	hsv: function(hcg){
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		var res;
		if (v > 0.0) {
			var f = c / v;
			res = [hcg[0], f * 100, v * 100];
		} else {
			res = [hcg[0], 0, v * 100];
		}
		return res;
	},

	hwb: function(hcg){
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	}
};


//append rgb
rgb.hcg = function(rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma > 0) {
		if (max === r) {
			hue = mod((g - b) / chroma, 6);
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma;
		}
		hue /= 6;
		hue = mod(hue, 1);
	} else {
		hue = 0;
	}
	return [hue * 360, chroma * 100, grayscale * 100];
};

//extend hsl
hsl.hcg = function(hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	var res;
	if (c < 1.0) {
		var f = (l - 0.5 * c) / (1.0 - c);
		res = [hsl[0], c * 100, f * 100];
	} else {
		res = [hsl[0], c * 100, 0];
	}
	return res;
};

//extend hsv
hsv.hcg = function(hsv){
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var res;
	if (c < 1.0) {
		var f = (v - c) / (1 - c);
		res = [hsv[0], c * 100, f * 100];
	} else {
		res = [hsv[0], c * 100, 0];
	}
	return res;
}


//extend hwb
hwb.hcg = function(hwb){
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
}


/***/ }),

/***/ "./node_modules/color-space/hcy.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hcy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * HSV optimized for shaders
 * http://chilliant.blogspot.ca/2012/08/rgbhcy-in-hlsl.html
 *
 * @module color-space/hcy
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var loop = __webpack_require__(/*! mumath/mod */ "./node_modules/mumath/mod.js");
var clamp = __webpack_require__(/*! mumath/clamp */ "./node_modules/mumath/clamp.js");


var hcy = module.exports = {
	name: 'hcy',
	min: [0,0,0],
	max: [360,100,255],
	channel: ['hue', 'chroma', 'luminance'],
	alias: ['HCY']
};


/**
 * HCY to RGB
 *
 * @param {Array} hcy Channel values
 *
 * @return {Array} RGB channel values
 */
hcy.rgb = function (hcy) {
	var h = loop(hcy[0], 0, 360) * Math.PI / 180;
	var s = clamp(hcy[1], 0, 100) / 100;
	var i = clamp(hcy[2], 0, 255) / 255;

	var pi3 = Math.PI / 3;

	var r, g, b;
	if (h < (2 * pi3) ) {
		b = i * ( 1 - s );
		r = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		g = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}
	else if (h < (4 * pi3) ) {
		h = h - 2 * pi3;
		r = i * ( 1 - s );
		g = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		b = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}
	else {
		h = h - 4 * pi3;
		g = i * ( 1 - s );
		b = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		r = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}

	return [r * 255, g * 255, b * 255];
};


/**
 * RGB to HCY
 *
 * @param {Array} rgb Channel values
 *
 * @return {Array} HCY channel values
 */
rgb.hcy = function (rgb) {
	var sum = rgb[0] + rgb[1] + rgb[2];

	var r = rgb[0] / sum;
	var g = rgb[1] / sum;
	var b = rgb[2] / sum;

	var h = Math.acos(
		( 0.5 * ((r - g) + (r - b)) ) /
		Math.sqrt( (r - g)*(r - g) + (r - b)*(g - b) )
	);
	if (b > g) {
		h = 2 * Math.PI - h;
	}

	var s = 1 - 3 * Math.min(r, g, b);

	var i = sum / 3;

	return [h * 180 / Math.PI, s * 100, i];
};


/***/ }),

/***/ "./node_modules/color-space/hpluv.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/hpluv.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * A uniform wrapper for hpluv.
 * // http://www.hsluv.org/
 *
 * @module color-space/hpluv
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");
var lchuv = __webpack_require__(/*! ./lchuv */ "./node_modules/color-space/lchuv.js");
var _hsluv = __webpack_require__(/*! hsluv */ "./node_modules/hsluv/hsluv.js");

module.exports = {
	name: 'hpluv',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HPLuv', 'HuSLp'],

	lchuv: _hsluv.hpluvToLch,
	xyz: function(arg){return lchuv.xyz(_hsluv.hpluvToLch(arg));},

	//a shorter way to convert to husl
	hsluv: function(arg){
		return _hsluv.lchToHsluv( _hsluv.hpluvToLch(arg));
	}

};

//extend lchuv, xyz
lchuv.hpluv = _hsluv.lchToHpluv;
xyz.hpluv = function(arg){return _hsluv.lchToHpluv(xyz.lchuv(arg));};


/***/ }),

/***/ "./node_modules/color-space/hsi.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsi.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * http://www.cse.usf.edu/~mshreve/rgb-to-hsi
 * http://web.archive.org/web/20130124054245/http://web2.clarkson.edu/class/image_process/RGB_to_HSI.pdf
 *
 * @module color-space/hsl
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var loop = __webpack_require__(/*! mumath/mod */ "./node_modules/mumath/mod.js");
var clamp = __webpack_require__(/*! mumath/clamp */ "./node_modules/mumath/clamp.js");


var hsi = module.exports = {
	name: 'hsi',
	min: [0,0,0],
	max: [360,100,255],
	channel: ['hue', 'saturation', 'intensity'],
	alias: ['HSI']
};


/**
 * HSI to RGB
 *
 * @param {Array} hsi Channel values
 *
 * @return {Array} RGB channel values
 */
hsi.rgb = function (hsi) {
	var h = loop(hsi[0], 0, 360) * Math.PI / 180;
	var s = clamp(hsi[1], 0, 100) / 100;
	var i = clamp(hsi[2], 0, 255) / 255;

	var pi3 = Math.PI / 3;

	var r, g, b;
	if (h < (2 * pi3) ) {
		b = i * ( 1 - s );
		r = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		g = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}
	else if (h < (4 * pi3) ) {
		h = h - 2 * pi3;
		r = i * ( 1 - s );
		g = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		b = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}
	else {
		h = h - 4 * pi3;
		g = i * ( 1 - s );
		b = i * (1 + ( s * Math.cos(h) / Math.cos(pi3 - h) ));
		r = i * (1 + ( s * ( 1 - Math.cos(h) / Math.cos(pi3 - h) )));
	}

	return [r * 255, g * 255, b * 255];
};


/**
 * RGB to HSI
 *
 * @param {Array} rgb Channel values
 *
 * @return {Array} HSI channel values
 */
rgb.hsi = function (rgb) {
	var sum = rgb[0] + rgb[1] + rgb[2];

	var r = rgb[0] / sum;
	var g = rgb[1] / sum;
	var b = rgb[2] / sum;

	var h = Math.acos(
		( 0.5 * ((r - g) + (r - b)) ) /
		Math.sqrt( (r - g)*(r - g) + (r - b)*(g - b) )
	);
	if (b > g) {
		h = 2 * Math.PI - h;
	}

	var s = 1 - 3 * Math.min(r, g, b);

	var i = sum / 3;

	return [h * 180 / Math.PI, s * 100, i];
};


/***/ }),

/***/ "./node_modules/color-space/hsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsl.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hsl
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

module.exports = {
	name: 'hsl',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSL'],

	rgb: function(hsl) {
		var h = hsl[0] / 360,
				s = hsl[1] / 100,
				l = hsl[2] / 100,
				t1, t2, t3, rgb, val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		}
		else {
			t2 = l + s - l * s;
		}
		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * - (i - 1);
			if (t3 < 0) {
				t3++;
			}
			else if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			}
			else if (2 * t3 < 1) {
				val = t2;
			}
			else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			}
			else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	}
};


//extend rgb
rgb.hsl = function(rgb) {
	var r = rgb[0]/255,
			g = rgb[1]/255,
			b = rgb[2]/255,
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			h, s, l;

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g)/ delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	}
	else if (l <= 0.5) {
		s = delta / (max + min);
	}
	else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


/***/ }),

/***/ "./node_modules/color-space/hsluv.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/hsluv.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * A uniform wrapper for hsluv.
 * // http://www.hsluv.org/
 *
 * @module color-space/hsluv
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");
var lchuv = __webpack_require__(/*! ./lchuv */ "./node_modules/color-space/lchuv.js");
var _hsluv = __webpack_require__(/*! hsluv */ "./node_modules/hsluv/hsluv.js");


module.exports = {
	name: 'hsluv',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSLuv', 'HuSL'],

	lchuv: _hsluv.hsluvToLch,

	xyz: function(arg){
		return lchuv.xyz(_hsluv.hsluvToLch(arg));
	},

	//a shorter way to convert to hpluv
	hpluv: function(arg){
		return _hsluv.lchToHpluv( _hsluv.hsluvToLch(arg));
	}
};

//extend lchuv, xyz
lchuv.hsluv = _hsluv.lchToHsluv;
xyz.hsluv = function(arg){
	return _hsluv.lchToHsluv(xyz.lchuv(arg));
};


/***/ }),

/***/ "./node_modules/color-space/hsp.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hsp
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js"),
  Pr = 0.299,
  Pg = 0.587,
  Pb = 0.114;

module.exports = {
  name: 'hsp',
  min: [0, 0, 0],
  max: [360, 100, 255],
  channel: ['hue', 'saturation', 'perceived_brightness'],
  alias: ['HSP'],

  rgb: function (hsp) {
    var h = hsp[0]/360.0,
      s = hsp[1]/100.0,
      p = hsp[2],
      r, g, b, part,
      minOverMax = 1.0 - s;

    if (minOverMax > 0.0) {
      if (h < 1.0 / 6.0) { //  R>G>B
        h = 6.0 * (h - 0.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        b = p / Math.sqrt(Pr / minOverMax / minOverMax + Pg * part * part + Pb);
        r = (b) / minOverMax;
        g = (b) + h * ((r) - (b));
      } else if (h < 2.0 / 6.0) { //  G>R>B
        h = 6.0 * (-h + 2.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        b = p / Math.sqrt(Pg / minOverMax / minOverMax + Pr * part * part + Pb);
        g = (b) / minOverMax;
        r = (b) + h * ((g) - (b));
      } else if (h < 3.0 / 6.0) { //  G>B>R
        h = 6.0 * (h - 2.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        r = p / Math.sqrt(Pg / minOverMax / minOverMax + Pb * part * part + Pr);
        g = (r) / minOverMax;
        b = (r) + h * ((g) - (r));
      } else if (h < 4.0 / 6.0) { //  B>G>R
        h = 6.0 * (-h + 4.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        r = p / Math.sqrt(Pb / minOverMax / minOverMax + Pg * part * part + Pr);
        b = (r) / minOverMax;
        g = (r) + h * ((b) - (r));
      } else if (h < 5.0 / 6.0) { //  B>R>G
        h = 6.0 * (h - 4.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        g = p / Math.sqrt(Pb / minOverMax / minOverMax + Pr * part * part + Pg);
        b = (g) / minOverMax;
        r = (g) + h * ((b) - (g));
      } else { //  R>B>G
        h = 6.0 * (-h + 6.0 / 6.0);
        part = 1.0 + h * (1.0 / minOverMax - 1.0);
        g = p / Math.sqrt(Pr / minOverMax / minOverMax + Pb * part * part + Pg);
        r = (g) / minOverMax;
        b = (g) + h * ((r) - (g));
      }
    } else {
      if (h < 1.0 / 6.0) { //  R>G>B
        h = 6.0 * (h - 0.0 / 6.0);
        r = Math.sqrt(p * p / (Pr + Pg * h * h));
        g = (r) * h;
        b = 0.0;
      } else if (h < 2.0 / 6.0) { //  G>R>B
        h = 6.0 * (-h + 2.0 / 6.0);
        g = Math.sqrt(p * p / (Pg + Pr * h * h));
        r = (g) * h;
        b = 0.0;
      } else if (h < 3.0 / 6.0) { //  G>B>R
        h = 6.0 * (h - 2.0 / 6.0);
        g = Math.sqrt(p * p / (Pg + Pb * h * h));
        b = (g) * h;
        r = 0.0;
      } else if (h < 4.0 / 6.0) { //  B>G>R
        h = 6.0 * (-h + 4.0 / 6.0);
        b = Math.sqrt(p * p / (Pb + Pg * h * h));
        g = (b) * h;
        r = 0.0;
      } else if (h < 5.0 / 6.0) { //  B>R>G
        h = 6.0 * (h - 4.0 / 6.0);
        b = Math.sqrt(p * p / (Pb + Pr * h * h));
        r = (b) * h;
        g = 0.0;
      } else { //  R>B>G
        h = 6.0 * (-h + 6.0 / 6.0);
        r = Math.sqrt(p * p / (Pr + Pb * h * h));
        b = (r) * h;
        g = 0.0;
      }
    }

	return [Math.round(r), Math.round(g), Math.round(b)];
  }

  
};


//append rgb
rgb.hsp = function (rgb) {
  var r = parseInt(rgb[0], 10),
    g = parseInt(rgb[1], 10),
    b = parseInt(rgb[2], 10),
    h, s, p;

  //  Calculate the Perceived brightness
  p = Math.sqrt(r * r * Pr + g * g * Pg + b * b * Pb);

  //  Calculate the Hue and Saturation
  if (r === g && r === b) {
    h = 0.0;
    s = 0.0;
  } else {    
    //  R is largest
    if (r >= g && r >= b) {
      if (b >= g) {
        h = 6.0 / 6.0 - 1.0 / 6.0 * (b - g) / (r - g);
        s = 1.0 - g / r;
      } else {
        h = 0.0 / 6.0 + 1.0 / 6.0 * (g - b) / (r - b);
        s = 1.0 - b / r;
      }
    }

    // G is largest
    if (g >= r && g >= b) {
      if (r >= b) {
        h = 2.0 / 6.0 - 1.0 / 6.0 * (r - b) / (g - b);
        s = 1 - b / g;
      } else {
        h = 2.0 / 6.0 + 1.0 / 6.0 * (b - r) / (g - r);
        s = 1.0 - r / g;
      }
    }

    // B is largest
    if (b >= r && b >= g) {
      if (g >= r) {
        h = 4.0 / 6.0 - 1.0 / 6.0 * (g - r) / (b - r);
        s = 1.0 - r / b;
      } else {
        h = 4.0 / 6.0 + 1.0 / 6.0 * (r - g) / (b - g);
        s = 1.0 - g / b;
      }
    }
  }
    
  return [Math.round(h*360.0), s*100.0, Math.round(p)];
};


/***/ }),

/***/ "./node_modules/color-space/hsv.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hsv
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var hsl = __webpack_require__(/*! ./hsl */ "./node_modules/color-space/hsl.js");

module.exports = {
	name: 'hsv',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'value'],
	alias: ['HSV', 'HSB'],

	rgb: function(hsv) {
		var h = hsv[0] / 60,
			s = hsv[1] / 100,
			v = hsv[2] / 100,
			hi = Math.floor(h) % 6;

		var f = h - Math.floor(h),
			p = 255 * v * (1 - s),
			q = 255 * v * (1 - (s * f)),
			t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch(hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	},

	hsl: function(hsv) {
		var h = hsv[0],
			s = hsv[1] / 100,
			v = hsv[2] / 100,
			sl, l;

		l = (2 - s) * v;
		sl = s * v;
		sl /= (l <= 1) ? l : 2 - l;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	}
};


//append rgb
rgb.hsv = function(rgb) {
	var r = rgb[0],
		g = rgb[1],
		b = rgb[2],
		min = Math.min(r, g, b),
		max = Math.max(r, g, b),
		delta = max - min,
		h, s, v;

	if (max === 0) {
		s = 0;
	}
	else {
		s = (delta/max * 100);
	}

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};



//extend hsl
hsl.hsv = function(hsl) {
	var h = hsl[0],
			s = hsl[1] / 100,
			l = hsl[2] / 100,
			sv, v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	v = (l + s) / 2;
	sv = (2 * s) / (l + s) || 0;

	return [h, sv * 100, v * 100];
};


/***/ }),

/***/ "./node_modules/color-space/hwb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hwb.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hwb
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var hsv = __webpack_require__(/*! ./hsv */ "./node_modules/color-space/hsv.js");
var hsl = __webpack_require__(/*! ./hsl */ "./node_modules/color-space/hsl.js");


var hwb = module.exports = {
	name: 'hwb',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'whiteness', 'blackness'],
	alias: ['HWB'],

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	rgb: function(hwb) {
		var h = hwb[0] / 360,
			wh = hwb[1] / 100,
			bl = hwb[2] / 100,
			ratio = wh + bl,
			i, v, f, n;

		var r, g, b;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		//if it is even
		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh);  // linear interpolation

		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}

		return [r * 255, g * 255, b * 255];
	},


	// http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
	hsv: function(arg){
		var h = arg[0], w = arg[1], b = arg[2], s, v;

		//if w+b > 100% - take proportion (how many times )
		if (w + b >= 100){
			s = 0;
			v = 100 * w/(w+b);
		}

		//by default - take wiki formula
		else {
			s = 100-(w/(1-b/100));
			v = 100-b;
		}


		return [h, s, v];
	},

	hsl: function(arg){
		return hsv.hsl(hwb.hsv(arg));
	}
};


//extend rgb
rgb.hwb = function(val) {
	var r = val[0],
			g = val[1],
			b = val[2],
			h = rgb.hsl(val)[0],
			w = 1/255 * Math.min(r, Math.min(g, b));

			b = 1 - 1/255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};



//keep proper hue on 0 values (conversion to rgb loses hue on zero-lightness)
hsv.hwb = function(arg){
	var h = arg[0], s = arg[1], v = arg[2];
	return [h, v === 0 ? 0 : (v * (1-s/100)), 100 - v];
};


//extend hsl with proper conversions
hsl.hwb = function(arg){
	return hsv.hwb(hsl.hsv(arg));
};


/***/ }),

/***/ "./node_modules/color-space/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Color space data and conversions
 *
 * @module color-space
 *
 */



/** Exported spaces */
var spaces = {
	rgb: __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js"),
	hsl: __webpack_require__(/*! ./hsl */ "./node_modules/color-space/hsl.js"),
	hsv: __webpack_require__(/*! ./hsv */ "./node_modules/color-space/hsv.js"),
	hsi: __webpack_require__(/*! ./hsi */ "./node_modules/color-space/hsi.js"),
	hwb: __webpack_require__(/*! ./hwb */ "./node_modules/color-space/hwb.js"),
	cmyk: __webpack_require__(/*! ./cmyk */ "./node_modules/color-space/cmyk.js"),
	cmy: __webpack_require__(/*! ./cmy */ "./node_modules/color-space/cmy.js"),
	xyz: __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js"),
	xyy: __webpack_require__(/*! ./xyy */ "./node_modules/color-space/xyy.js"),
	yiq: __webpack_require__(/*! ./yiq */ "./node_modules/color-space/yiq.js"),
	yuv: __webpack_require__(/*! ./yuv */ "./node_modules/color-space/yuv.js"),
	ydbdr: __webpack_require__(/*! ./ydbdr */ "./node_modules/color-space/ydbdr.js"),
	ycgco: __webpack_require__(/*! ./ycgco */ "./node_modules/color-space/ycgco.js"),
	ypbpr: __webpack_require__(/*! ./ypbpr */ "./node_modules/color-space/ypbpr.js"),
	ycbcr: __webpack_require__(/*! ./ycbcr */ "./node_modules/color-space/ycbcr.js"),
	xvycc: __webpack_require__(/*! ./xvycc */ "./node_modules/color-space/xvycc.js"),
	yccbccrc: __webpack_require__(/*! ./yccbccrc */ "./node_modules/color-space/yccbccrc.js"),
	ucs: __webpack_require__(/*! ./ucs */ "./node_modules/color-space/ucs.js"),
	uvw: __webpack_require__(/*! ./uvw */ "./node_modules/color-space/uvw.js"),
	jpeg: __webpack_require__(/*! ./jpeg */ "./node_modules/color-space/jpeg.js"),
	lab: __webpack_require__(/*! ./lab */ "./node_modules/color-space/lab.js"),
	labh: __webpack_require__(/*! ./labh */ "./node_modules/color-space/labh.js"),
	lms: __webpack_require__(/*! ./lms */ "./node_modules/color-space/lms.js"),
	lchab: __webpack_require__(/*! ./lchab */ "./node_modules/color-space/lchab.js"),
	luv: __webpack_require__(/*! ./luv */ "./node_modules/color-space/luv.js"),
	lchuv: __webpack_require__(/*! ./lchuv */ "./node_modules/color-space/lchuv.js"),
	hsluv: __webpack_require__(/*! ./hsluv */ "./node_modules/color-space/hsluv.js"),
	hpluv: __webpack_require__(/*! ./hpluv */ "./node_modules/color-space/hpluv.js"),
	cubehelix: __webpack_require__(/*! ./cubehelix */ "./node_modules/color-space/cubehelix.js"),
	coloroid: __webpack_require__(/*! ./coloroid */ "./node_modules/color-space/coloroid.js"),
	hcg: __webpack_require__(/*! ./hcg */ "./node_modules/color-space/hcg.js"),
	hcy: __webpack_require__(/*! ./hcy */ "./node_modules/color-space/hcy.js"),
	tsl: __webpack_require__(/*! ./tsl */ "./node_modules/color-space/tsl.js"),
	yes: __webpack_require__(/*! ./yes */ "./node_modules/color-space/yes.js"),
	osaucs: __webpack_require__(/*! ./osaucs */ "./node_modules/color-space/osaucs.js"),
	hsp: __webpack_require__(/*! ./hsp */ "./node_modules/color-space/hsp.js")
};



//build absent convertors from each to every space
var fromSpace;
for (var fromSpaceName in spaces) {
	fromSpace = spaces[fromSpaceName];
	for (var toSpaceName in spaces) {
		if (!fromSpace[toSpaceName]) fromSpace[toSpaceName] = getConvertor(fromSpaceName, toSpaceName);
	}
}


/** return converter through xyz/rgb space */
function getConvertor(fromSpaceName, toSpaceName){
	var fromSpace = spaces[fromSpaceName];

	//create straight converter
	if (fromSpaceName === toSpaceName) {
		return function (a) {
			return a;
		};
	}

	//create xyz converter, if available
	else if (fromSpace.xyz && spaces.xyz[toSpaceName]) {
		return function(arg){
			return spaces.xyz[toSpaceName](fromSpace.xyz(arg));
		};
	}
	//create rgb converter
	else if (fromSpace.rgb && spaces.rgb[toSpaceName]) {
		return function(arg){
			return spaces.rgb[toSpaceName](fromSpace.rgb(arg));
		};
	}
}


module.exports = spaces;


/***/ }),

/***/ "./node_modules/color-space/jpeg.js":
/*!******************************************!*\
  !*** ./node_modules/color-space/jpeg.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 *
 * JPEG conversion without head/footroom
 *
 * @module  color-space/jpeg
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var jpeg = module.exports = {
	name: 'jpeg',
	min: [0, 0, 0],
	max: [255, 255, 255],
	channel: ['Y','Cb','Cr'],
	alias: ['JPEG']
};


/**
 * JPEG to RGB
 * transform through analog form
 *
 * @param {Array} jpeg RGB values
 *
 * @return {Array} JPEG values
 */
jpeg.rgb = function (arr) {
	var y = arr[0], cb = arr[1], cr = arr[2];

	return [
		y + 1.402 * (cr - 128),
		y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128),
		y + 1.772 * (cb - 128)
	]
};


/**
 * RGB to JPEG
 * transform through analog form
 *
 * @param {Array} jpeg JPEG values
 *
 * @return {Array} RGB values
 */
rgb.jpeg = function(arr) {
	var r = arr[0], g = arr[1], b = arr[2];

	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		128 - 0.168736 * r  - 0.331264 * g + 0.5 * b,
		128 + 0.5 * r - 0.418688 * g - 0.081312 * b
	]
};


/***/ }),

/***/ "./node_modules/color-space/lab.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/lab.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * CIE LAB space model
 *
 * @module color-space/lab
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

module.exports = {
	name: 'lab',
	min: [0,-100,-100],
	max: [100,100,100],
	channel: ['lightness', 'a', 'b'],
	alias: ['LAB', 'cielab'],

	xyz: function(lab) {
		var l = lab[0],
				a = lab[1],
				b = lab[2],
				x, y, z, y2;

		if (l <= 8) {
			y = (l * 100) / 903.3;
			y2 = (7.787 * (y / 100)) + (16 / 116);
		} else {
			y = 100 * Math.pow((l + 16) / 116, 3);
			y2 = Math.pow(y / 100, 1/3);
		}

		x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

		z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

		return [x, y, z];
	}
};


//extend xyz
xyz.lab = function(xyz){
	var x = xyz[0],
			y = xyz[1],
			z = xyz[2],
			l, a, b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};


/***/ }),

/***/ "./node_modules/color-space/labh.js":
/*!******************************************!*\
  !*** ./node_modules/color-space/labh.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Hunter-lab space.
 *
 * @module  color-space/labh
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

module.exports = {
	name: 'labh',

	//mins/maxes are taken from colormine
	//FIXME: check whether mins/maxes correct
	min: [0,-128,-128],
	max: [100,128,128],
	channel: ['lightness', 'a', 'b'],
	alias: ['LABh', 'hunter-lab', 'hlab'],

	//maths are taken from EasyRGB
	xyz: function(lab) {
		var l = lab[0], a = lab[1], b = lab[2];

		var _y = l / 10;
		var _x = a / 17.5 * l / 10;
		var _z = b / 7 * l / 10;

		var y = _y * _y;
		var x = ( _x + y ) / 1.02;
		var z = -( _z - y ) / 0.847;

		return [x,y,z];
	}
};

//extend xyz
xyz.labh = function(xyz){
	var x = xyz[0], y = xyz[1], z = xyz[2];
	var l = 10 * Math.sqrt( y );
	var a = y === 0 ? 0 : 17.5 * ((( 1.02 * x ) - y ) / Math.sqrt( y ) );
	var b = y === 0 ? 0 : 7 * ( ( y - ( 0.847 * z ) ) / Math.sqrt( y ) );

	return [l, a, b];
};


/***/ }),

/***/ "./node_modules/color-space/lchab.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/lchab.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Cylindrical LAB
 *
 * @module color-space/lchab
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");
var lab = __webpack_require__(/*! ./lab */ "./node_modules/color-space/lab.js");


//cylindrical lab
var lchab = module.exports = {
	name: 'lchab',
	min: [0,0,0],
	max: [100,100,360],
	channel: ['lightness', 'chroma', 'hue'],
	alias: ['LCHab', 'cielch', 'LCH', 'HLC', 'LSH'],

	xyz: function(arg) {
		return lab.xyz(lchab.lab(arg));
	},

	lab: function(lch) {
		var l = lch[0],
				c = lch[1],
				h = lch[2],
				a, b, hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);
		return [l, a, b];
	}
};


//extend lab
lab.lchab = function(lab) {
	var l = lab[0],
			a = lab[1],
			b = lab[2],
			hr, h, c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};

xyz.lchab = function(arg){
	return lab.lchab(xyz.lab(arg));
};


/***/ }),

/***/ "./node_modules/color-space/lchuv.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/lchuv.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Cylindrical CIE LUV
 *
 * @module color-space/lchuv
 */


var luv = __webpack_require__(/*! ./luv */ "./node_modules/color-space/luv.js");
var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

//cylindrical luv
var lchuv = module.exports = {
	name: 'lchuv',
	channel: ['lightness', 'chroma', 'hue'],
	alias: ['LCHuv', 'cielchuv'],
	min: [0,0,0],
	max: [100,100,360],

	luv: function(luv){
		var l = luv[0],
		c = luv[1],
		h = luv[2],
		u, v, hr;

		hr = h / 360 * 2 * Math.PI;
		u = c * Math.cos(hr);
		v = c * Math.sin(hr);
		return [l, u, v];
	},

	xyz: function(arg) {
		return luv.xyz(lchuv.luv(arg));
	}
};

luv.lchuv = function(luv){
	var l = luv[0], u = luv[1], v = luv[2];

	var c = Math.sqrt(u*u + v*v);
	var hr = Math.atan2(v,u);
	var h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}

	return [l,c,h]
};

xyz.lchuv = function(arg){
  return luv.lchuv(xyz.luv(arg));
};


/***/ }),

/***/ "./node_modules/color-space/lms.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/lms.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * A responsivity of cones color space.
 * Used for CAT - chromatic adaptation transform.
 *
 * http://en.wikipedia.org/wiki/LMS_color_space
 * http://www.mathworks.com/matlabcentral/fileexchange/28790-colorspace-transformations
 *
 * @todo xyz -> lms
 * @todo  tests
 *
 * @module color-space/lms
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

var lms = module.exports = {
	name: 'lms',
	min: [0,0,0],
	max: [100,100,100],
	channel: ['long', 'medium', 'short'],


	//transform matrices
	matrix: {
		HPE: [
			0.38971, 0.68898,-0.07868,
		   -0.22981, 1.18340, 0.04641,
			0.00000, 0.00000, 1.00000],
		VONKRIES: [
			0.4002, 0.7076, -0.0808,
		   -0.2263, 1.1653,  0.0457,
			0.00000,0.00000, 0.9182],
		BFD: [
			0.8951, 0.2664,-0.1614,
		   -0.7502, 1.7135,	0.0367,
			0.0389,-0.0686, 1.0296],
		CAT97: [
			0.8562, 0.3372,-0.1934,
		   -0.8360, 1.8327, 0.0033,
			0.0357,-0.00469,1.0112],
		CAT00: [
			0.7982, 0.3389,-0.1371,
		   -0.5918, 1.5512, 0.0406,
			0.0008, 0.0239, 0.9753],
		CAT02: [
			0.7328, 0.4296,-0.1624,
		   -0.7036, 1.6975, 0.0061,
			0.0030, 0.0136, 0.9834]
	}
};


lms.xyz = function(arg, matrix){
	var l = arg[0], m = arg[1], s = arg[2];

	if (!matrix) {
		matrix = [
			1.096123820835514, -0.278869000218287, +0.182745179382773,
			0.454369041975359, + 0.473533154307412, +0.072097803717229,
			-0.009627608738429, -0.005698031216113, +1.015325639954543
		];
	}

	return [
		l * matrix[0] + m * matrix[1] + s * matrix[2],
		l * matrix[3] + m * matrix[4] + s * matrix[5],
		l * matrix[6] + m * matrix[7] + s * matrix[8]
	];
};

xyz.lms = function(arg, matrix) {
		var x = arg[0], y = arg[1], z = arg[2];

		if (!matrix) {
			matrix = lms.matrix.CAT02
		}

		return [
			x * matrix[0] + y * matrix[1] + z * matrix[2],
			x * matrix[3] + y * matrix[4] + z * matrix[5],
			x * matrix[6] + y * matrix[7] + z * matrix[8]
		];
};


/***/ }),

/***/ "./node_modules/color-space/luv.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/luv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * CIE LUV (C'est la vie)
 *
 * @module color-space/luv
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

module.exports = {
	name: 'luv',
	//NOTE: luv has no rigidly defined limits
	//easyrgb fails to get proper coords
	//boronine states no rigid limits
	//colorMine refers this ones:
	min: [0,-134,-140],
	max: [100,224,122],
	channel: ['lightness', 'u', 'v'],
	alias: ['LUV', 'cieluv', 'cie1976'],

	xyz: function(arg, i, o){
		var _u, _v, l, u, v, x, y, z, xn, yn, zn, un, vn;
		l = arg[0], u = arg[1], v = arg[2];

		if (l === 0) return [0,0,0];

		//get constants
		//var e = 0.008856451679035631; //(6/29)^3
		var k = 0.0011070564598794539; //(3/29)^3

		//get illuminant/observer
		i = i || 'D65';
		o = o || 2;

		xn = xyz.whitepoint[o][i][0];
		yn = xyz.whitepoint[o][i][1];
		zn = xyz.whitepoint[o][i][2];

		un = (4 * xn) / (xn + (15 * yn) + (3 * zn));
		vn = (9 * yn) / (xn + (15 * yn) + (3 * zn));
		// un = 0.19783000664283;
		// vn = 0.46831999493879;


		_u = u / (13 * l) + un || 0;
		_v = v / (13 * l) + vn || 0;

		y = l > 8 ? yn * Math.pow( (l + 16) / 116 , 3) : yn * l * k;

		//wikipedia method
		x = y * 9 * _u / (4 * _v) || 0;
		z = y * (12 - 3 * _u - 20 * _v) / (4 * _v) || 0;

		//boronine method
		//https://github.com/boronine/husl/blob/master/husl.coffee#L201
		// x = 0 - (9 * y * _u) / ((_u - 4) * _v - _u * _v);
		// z = (9 * y - (15 * _v * y) - (_v * x)) / (3 * _v);

		return [x, y, z];
	}
};

// http://www.brucelindbloom.com/index.html?Equations.html
// https://github.com/boronine/husl/blob/master/husl.coffee
//i - illuminant
//o - observer
xyz.luv = function(arg, i, o) {
	var _u, _v, l, u, v, x, y, z, xn, yn, zn, un, vn;

	//get constants
	var e = 0.008856451679035631; //(6/29)^3
	var k = 903.2962962962961; //(29/3)^3

	//get illuminant/observer coords
	i = i || 'D65';
	o = o || 2;

	xn = xyz.whitepoint[o][i][0];
	yn = xyz.whitepoint[o][i][1];
	zn = xyz.whitepoint[o][i][2];

	un = (4 * xn) / (xn + (15 * yn) + (3 * zn));
	vn = (9 * yn) / (xn + (15 * yn) + (3 * zn));


	x = arg[0], y = arg[1], z = arg[2];


	_u = (4 * x) / (x + (15 * y) + (3 * z)) || 0;
	_v = (9 * y) / (x + (15 * y) + (3 * z)) || 0;

	var yr = y/yn;

	l = yr <= e ? k * yr : 116 * Math.pow(yr, 1/3) - 16;

	u = 13 * l * (_u - un);
	v = 13 * l * (_v - vn);

	return [l, u, v];
};


/***/ }),

/***/ "./node_modules/color-space/osaucs.js":
/*!********************************************!*\
  !*** ./node_modules/color-space/osaucs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * OSA-UCS
 *
 * @module  color-space/osa-ucs
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");


var osaucs = {
	name: 'osaucs',
	alias: ['OSA-UCS'],
	channel: ['L', 'j', 'g'],
	min: [-10, -6, -10],
	max: [8, 12, 6]
};


/**
 * There’s no analytical solution to this
 */
osaucs.xyz = function (arg) {
	var x, y, z;

	throw 'Unimplemented';
	//http://www.researchgate.net/publication/259253763_Comparison_of_the_performance_of_inverse_transformation_methods_from_OSA-UCS_to_CIEXYZ

	return [x, y, z];
};


/**
 * Transform to xyz osaucs
 *
 * @param {Array} arg Input xyz array
 *
 * @return {Array} Ljg array
 */
xyz.osaucs = function (arg) {
	var X = arg[0], Y = arg[1], Z = arg[2];

	var x = X / (X + Y + Z);
	var y = Y / (X + Y + Z);

	//FIXME: there might be a typo, wiki states 1.8103 as a constant value
	var K = 4.4934*x*x + 4.3034*y*y - 4.276*x*y - 1.3744*x - 2.56439*y + 1.8103;
	var Y0 = K*Y;

	var L_ = 5.9*(Math.pow(Y0, 1/3) - 2/3 + 0.042*Math.pow(Math.max(Y0, 30) - 30, 1/3));
	var L = (L_ - 14.3993) / Math.sqrt(2);

	var C = L_ / (5.9 * (Math.pow(Y0, 1/3) - 2/3));

	var R = 0.7790*X + 0.4194*Y - 0.1648*Z;
	var G = -0.4493*X + 1.3265*Y + 0.0927*Z;
	var B = -0.1149*X + 0.3394*Y + 0.7170*Z;

	R = Math.pow(R, 1/3) || 0;
	G = Math.pow(G, 1/3) || 0;
	B = Math.pow(B, 1/3) || 0;

	var a = -13.7*R + 17.7*G - 4*B;
	var b = 1.7*R + 8*G - 9.7*B;

	var g = C*a;
	var j = C*b;

	//polar form
	// var p = Math.sqrt(j*j + g*g);
	// var phi = Math.atan2(j, g);

	return [L, j, g];
};


module.exports = osaucs;


/***/ }),

/***/ "./node_modules/color-space/rgb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/rgb.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * RGB space.
 *
 * @module  color-space/rgb
 */


module.exports = {
	name: 'rgb',
	min: [0,0,0],
	max: [255,255,255],
	channel: ['red', 'green', 'blue'],
	alias: ['RGB']
};


/***/ }),

/***/ "./node_modules/color-space/tsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/tsl.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/wiki/TSL_color_space
 * http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.6037&rep=rep1&type=pdf
 *
 * Tint, Saturation, Lightness
 *
 * @module  color-space/tsl
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var tsl = module.exports = {
	name: 'tsl',
	min: [0,0,0],
	max: [1, 1, 1],
	channel: ['tint','saturation','lightness']
};


/**
 * TSL to RGB
 *
 * @param {Array} tsl RGB values
 *
 * @return {Array} TSL values
 */
tsl.rgb = function(tsl) {
	var T = tsl[0],
		S = tsl[1],
		L = tsl[2];

	//wikipedia solution
	/*
	// var x = - 1 / Math.tan(Math.PI * 2 * T);
	var x = -Math.sin(2*Math.PI*T);
	if ( x != 0 ) x = Math.cos(2*Math.PI*T)/x;

	var g = T > .5 ? -S * Math.sqrt( 5 / (9 * (x*x + 1)) ) :
			T < .5 ? S * Math.sqrt( 5 / (9 * (x*x + 1)) ) : 0;
	var r = T === 0 ? 0.7453559 * S : (x * g + 1/3);

	var R = k * r, G = k * g, B = k * (1 - r - g);
	*/

	var x = Math.tan(2 * Math.PI * (T - 1/4));
	x *= x;

	var r = Math.sqrt(5 * S*S / (9 * (1/x + 1))) + 1/3;
	var g = Math.sqrt(5 * S*S / (9 * (x + 1))) + 1/3;

	var k = L / (.185 * r + .473 * g + .114);

	var B = k * (1 - r - g);
	var G = k * g;
	var R = k * r;

	return [
		R * 255, G * 255, B * 255
	];
};


/**
 * RGB to TSL
 *
 * @param {Array} tsl TSL values
 *
 * @return {Array} RGB values
 */
rgb.tsl = function(rgb) {
	var r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255;

	var r_ = (r / (r + g + b) || 0) - 1/3,
		g_ = (g / (r + g + b) || 0) - 1/3;
	var T = g_ > 0 ? .5 * Math.atan(r_/ g_) / Math.PI + .25 :
			g_ < 0 ? .5 * Math.atan(r_/ g_) / Math.PI + .75 : 0;

	var S = Math.sqrt(9/5 * (r_*r_ + g_*g_));

	var L = (r * 0.299) + (g * 0.587) + (b * 0.114);

	return [T, S, L];
};


/***/ }),

/***/ "./node_modules/color-space/ucs.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/ucs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/wiki/CIE_1960_color_space
 *
 * Obsolete color space
 *
 * @module  color-space/ucs
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

var ucs = module.exports = {
	name: 'ucs',
	min: [0,0,0],
	max: [100, 100, 100],
	channel: ['U','V','W'],
	alias: ['UCS', 'cie1960']
};


/**
 * UCS to XYZ
 *
 * @param {Array} ucs XYZ values
 *
 * @return {Array} UCS values
 */
ucs.xyz = function(ucs) {
	var u = ucs[0],
		v = ucs[1],
		w = ucs[2];

	return [
		1.5 * u,
		v,
		1.5 * u - 3 * v + 2 * w
	];
};


/**
 * XYZ to UCS
 *
 * @param {Array} ucs UCS values
 *
 * @return {Array} XYZ values
 */
xyz.ucs = function(xyz) {
	var x = xyz[0],
		y = xyz[1],
		z = xyz[2];

	return [
		x * 2/3,
		y,
		0.5 * (-x + 3*y + z)
	];
};


/***/ }),

/***/ "./node_modules/color-space/uvw.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/uvw.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/wiki/CIE_1964_color_space
 *
 * Very similar to LUV, but w and v are calculated a bit differently.
 *
 * @module  color-space/uvw
 */


var ucs = __webpack_require__(/*! ./ucs */ "./node_modules/color-space/ucs.js");
var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

var uvw = module.exports = {
	name: 'uvw',
	min: [-134, -140, 0],
	max: [224, 122, 100],
	channel: ['U','V','W'],
	alias: ['UVW', 'cieuvw', 'cie1964']
};


/**
 * UVW to XYZ
 */
uvw.xyz = function (arg, i, o) {
	var _u, _v, w, u, v, x, y, z, xn, yn, zn, un, vn;
	u = arg[0], v = arg[1], w = arg[2];

	if (w === 0) return [0,0,0];

	//get illuminant/observer
	i = i || 'D65';
	o = o || 2;

	xn = xyz.whitepoint[o][i][0];
	yn = xyz.whitepoint[o][i][1];
	zn = xyz.whitepoint[o][i][2];

	un = (4 * xn) / (xn + (15 * yn) + (3 * zn));
	vn = (6 * yn) / (xn + (15 * yn) + (3 * zn));

	y = Math.pow((w + 17) / 25, 3);

	_u = u / (13 * w) + un || 0;
	_v = v / (13 * w) + vn || 0;

	x = (6 / 4) * y * _u / _v;
	z = y * (2 / _v - 0.5 * _u / _v - 5);

	return [x, y, z];
};


/**
 * XYZ to UVW
 *
 * @return {Array} An UVW array
 */
xyz.uvw = function (arr, i, o) {
	var x = arr[0], y = arr[1], z = arr[2], xn, yn, zn, un, vn;

	//find out normal source u v
	i = i || 'D65';
	o = o || 2;

	xn = xyz.whitepoint[o][i][0];
	yn = xyz.whitepoint[o][i][1];
	zn = xyz.whitepoint[o][i][2];

	un = (4 * xn) / (xn + (15 * yn) + (3 * zn));
	vn = (6 * yn) / (xn + (15 * yn) + (3 * zn));

	var _u = 4 * x / (x + 15 * y + 3 * z) || 0;
	var _v = 6 * y / (x + 15 * y + 3 * z) || 0;

	//calc values
	var w = 25 * Math.pow(y, 1/3) - 17;
	var u = 13 * w * (_u - un);
	var v = 13 * w * (_v - vn);

	return [u, v, w];
};



/**
 * UVW to UCS
 *
 * @param {Array} uvw UCS values
 *
 * @return {Array} UVW values
 */
uvw.ucs = function(uvw) {
	//find chromacity variables
};


/**
 * UCS to UVW
 *
 * @param {Array} uvw UVW values
 *
 * @return {Array} UCS values
 */
ucs.uvw = function(ucs) {
	// //find chromacity variables
	// var u = U / (U + V + W);
	// var v = V / (U + V + W);

	// //find 1964 UVW
	// w = 25 * Math.pow(y, 1/3) - 17;
	// u = 13 * w * (u - un);
	// v = 13 * w * (v - vn);
};


/***/ }),

/***/ "./node_modules/color-space/xvycc.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/xvycc.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/wiki/XvYCC
 *
 * Sony xvYCC is extended YCbCr
 *
 * It uses same transformation as
 * SD: ITU-R BT.601
 * HD: ITU-R BT.709
 *
 * But have extended mins/maxes, which (may) result in negative rgb values
 *
 * https://web.archive.org/web/20130524104850/http://www.sony.net/SonyInfo/technology/technology/theme/xvycc_01.html
 *
 * //TODO: look for a spec (120$) - there are xvYCC ←→ XYZ conversion formulas
 *
 * @module  color-space/xvycc
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var ypbpr = __webpack_require__(/*! ./ypbpr */ "./node_modules/color-space/ypbpr.js");

var xvycc = module.exports = {
	name: 'xvycc',
	min: [0, 0, 0],
	max: [255, 255, 255],
	channel: ['Y','Cb','Cr'],
	alias: ['xvYCC']
};


/**
 * From analog to digital form.
 * Simple scale to min/max ranges
 *
 * @return {Array} Resulting digitized form
 */
ypbpr.xvycc = function (ypbpr) {
	var y = ypbpr[0], pb = ypbpr[1], pr = ypbpr[2];

	return [
		16 + 219 * y,
		128 + 224 * pb,
		128 + 224 * pr
	];
}


/**
 * From digital to analog form.
 * Scale to min/max ranges
 */
xvycc.ypbpr = function (xvycc) {
	var y = xvycc[0], cb = xvycc[1], cr = xvycc[2];

	return [
		(y - 16) / 219,
		(cb - 128) / 224,
		(cr - 128) / 224
	];
}


/**
 * xvYCC to RGB
 * transform through analog form
 *
 * @param {Array} xvycc RGB values
 *
 * @return {Array} xvYCC values
 */
xvycc.rgb = function (arr, kb, kr) {
	return ypbpr.rgb(xvycc.ypbpr(arr), kb, kr);
};


/**
 * RGB to xvYCC
 * transform through analog form
 *
 * @param {Array} xvycc xvYCC values
 *
 * @return {Array} RGB values
 */
rgb.xvycc = function(arr, kb, kr) {
	return ypbpr.xvycc(rgb.ypbpr(arr, kb, kr));
};


/***/ }),

/***/ "./node_modules/color-space/xyy.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/xyy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Additional xyY space, where xy are relative chromacity params
 *
 * @module color-space/xyy
 */


var xyz = __webpack_require__(/*! ./xyz */ "./node_modules/color-space/xyz.js");

var xyy = {
	name: 'xyy',
	min: [0,0,0],
	max: [1,1,100],
	channel: ['x','y','Y'],
	alias: ['xyY', 'Yxy', 'yxy']
};

xyy.xyz = function(arg) {
	var X, Y, Z, x, y;
	x = arg[0]; y = arg[1]; Y = arg[2];
	if (y === 0) {
		return [0, 0, 0];
	}
	X = x * Y / y;
	Z = (1 - x - y) * Y / y;
	return [X, Y, Z];
};

xyz.xyy = function(arg) {
	var sum, X, Y, Z;
	X = arg[0]; Y = arg[1]; Z = arg[2];
	sum = X + Y + Z;
	if (sum === 0) {
		return [0, 0, Y];
	}
	return [X / sum, Y / sum, Y];
};

module.exports = xyy;


/***/ }),

/***/ "./node_modules/color-space/xyz.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/xyz.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * CIE XYZ
 *
 * @module  color-space/xyz
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var xyz = {
	name: 'xyz',
	min: [0,0,0],
	channel: ['X','Y','Z'],
	alias: ['XYZ', 'ciexyz', 'cie1931']
};


/**
 * Whitepoint reference values with observer/illuminant
 *
 * http://en.wikipedia.org/wiki/Standard_illuminant
 */
xyz.whitepoint = {
	//1931 2°
	2: {
		//incadescent
		A:[109.85, 100, 35.585],
		// B:[],
		C: [98.074, 100, 118.232],
		D50: [96.422, 100, 82.521],
		D55: [95.682, 100, 92.149],
		//daylight
		D65: [95.045592705167, 100, 108.9057750759878],
		D75: [94.972, 100, 122.638],
		//flourescent
		// F1: [],
		F2: [99.187, 100, 67.395],
		// F3: [],
		// F4: [],
		// F5: [],
		// F6:[],
		F7: [95.044, 100, 108.755],
		// F8: [],
		// F9: [],
		// F10: [],
		F11: [100.966, 100, 64.370],
		// F12: [],
		E: [100,100,100]
	},

	//1964  10°
	10: {
		//incadescent
		A:[111.144, 100, 35.200],
		C: [97.285, 100, 116.145],
		D50: [96.720, 100, 81.427],
		D55: [95.799, 100, 90.926],
		//daylight
		D65: [94.811, 100, 107.304],
		D75: [94.416, 100, 120.641],
		//flourescent
		F2: [103.280, 100, 69.026],
		F7: [95.792, 100, 107.687],
		F11: [103.866, 100, 65.627],
		E: [100,100,100]
	}
};


/**
 * Top values are the whitepoint’s top values, default are D65
 */
xyz.max = xyz.whitepoint[2].D65;


/**
 * Transform xyz to rgb
 *
 * @param {Array} xyz Array of xyz values
 *
 * @return {Array} RGB values
 */
xyz.rgb = function (_xyz, white) {
	//FIXME: make sure we have to divide like this. Probably we have to replace matrix as well then
	white = white || xyz.whitepoint[2].E;

	var x = _xyz[0] / white[0],
		y = _xyz[1] / white[1],
		z = _xyz[2] / white[2],
		r, g, b;

	// assume sRGB
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	r = (x * 3.240969941904521) + (y * -1.537383177570093) + (z * -0.498610760293);
	g = (x * -0.96924363628087) + (y * 1.87596750150772) + (z * 0.041555057407175);
	b = (x * 0.055630079696993) + (y * -0.20397695888897) + (z * 1.056971514242878);

	r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r = (r * 12.92);

	g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g = (g * 12.92);

	b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b = (b * 12.92);

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
}



/**
 * RGB to XYZ
 *
 * @param {Array} rgb RGB channels
 *
 * @return {Array} XYZ channels
 */
rgb.xyz = function(rgb, white) {
	var r = rgb[0] / 255,
			g = rgb[1] / 255,
			b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.41239079926595) + (g * 0.35758433938387) + (b * 0.18048078840183);
	var y = (r * 0.21263900587151) + (g * 0.71516867876775) + (b * 0.072192315360733);
	var z = (r * 0.019330818715591) + (g * 0.11919477979462) + (b * 0.95053215224966);

	white = white || xyz.whitepoint[2].E;

	return [x * white[0], y * white[1], z * white[2]];
};



module.exports = xyz;


/***/ }),

/***/ "./node_modules/color-space/ycbcr.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/ycbcr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/?title=YCbCr
 *
 * YCbCr is a digital form of YPbPr conversion
 * Thence limits are [16...235], according to the ITU-R BT.709 or ITU-R BT.601
 *
 * @module  color-space/ycbcr
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var ypbpr = __webpack_require__(/*! ./ypbpr */ "./node_modules/color-space/ypbpr.js");

var ycbcr = module.exports = {
	name: 'ycbcr',
	min: [16, 16, 16],
	max: [235, 240, 240],
	channel: ['Y','Cb','Cr'],
	alias: ['YCbCr', 'YCC']
};


/**
 * From analog to digital form.
 * Simple scale to min/max ranges
 *
 * @return {Array} Resulting digitized form
 */
ypbpr.ycbcr = function (ypbpr) {
	var y = ypbpr[0], pb = ypbpr[1], pr = ypbpr[2];

	return [
		16 + 219 * y,
		128 + 224 * pb,
		128 + 224 * pr
	];
}


/**
 * From digital to analog form.
 * Scale to min/max ranges
 */
ycbcr.ypbpr = function (ycbcr) {
	var y = ycbcr[0], cb = ycbcr[1], cr = ycbcr[2];

	return [
		(y - 16) / 219,
		(cb - 128) / 224,
		(cr - 128) / 224
	];
}


/**
 * YCbCr to RGB
 * transform through analog form
 *
 * @param {Array} ycbcr RGB values
 *
 * @return {Array} YCbCr values
 */
ycbcr.rgb = function (arr, kb, kr) {
	return ypbpr.rgb(ycbcr.ypbpr(arr), kb, kr);
};


/**
 * RGB to YCbCr
 * transform through analog form
 *
 * @param {Array} ycbcr YCbCr values
 *
 * @return {Array} RGB values
 */
rgb.ycbcr = function(arr, kb, kr) {
	return ypbpr.ycbcr(rgb.ypbpr(arr, kb, kr));
};


/***/ }),

/***/ "./node_modules/color-space/yccbccrc.js":
/*!**********************************************!*\
  !*** ./node_modules/color-space/yccbccrc.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * YcCbcCrc is ITU-R BT.2020
 *
 * @module  color-space/yccbccrc
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var ypbpr = __webpack_require__(/*! ./ypbpr */ "./node_modules/color-space/ypbpr.js");

var yccbccrc = module.exports = {
	name: 'yccbccrc',
	min: [0, -0.5, -0.5],
	max: [1, 0.5, 0.5],
	channel: ['Yc','Cbc','Crc'],
	alias: ['YcCbcCrc']
};


/**
 * YcCbcCrc to RGB
 *
 * @param {Array} yccbccrc RGB values
 *
 * @return {Array} YcCbcCrc values
 */
yccbccrc.rgb = function(yccbccrc) {
	return ypbpr.rgb(yccbccrc, 0.0593, 0.2627);
};


/**
 * RGB to YcCbcCrc
 *
 * @param {Array} yccbccrc YcCbcCrc values
 *
 * @return {Array} RGB values
 */
rgb.yccbccrc = function(arr) {
	return rgb.ypbpr(arr, 0.0593, 0.2627);
};


/***/ }),

/***/ "./node_modules/color-space/ycgco.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/ycgco.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/?title=YCgCo
 *
 * @module  color-space/ycgco
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var ycgco = module.exports = {
	name: 'ycgco',
	min: [0, -0.5, -0.5],
	max: [1, 0.5, 0.5],
	channel: ['Y','Cg','Co'],
	alias: ['YCgCo']
};


/**
 * YCgCo to RGB
 * transform through analog form
 *
 * @param {Array} ycgco RGB values
 *
 * @return {Array} YCgCo values
 */
ycgco.rgb = function (arr) {
	var y = arr[0], cg = arr[1], co = arr[2];

	var tmp = y - cg;

	return [
		(tmp + co)*255,
		(y + cg)*255,
		(tmp - co)*255
	];
};


/**
 * RGB to YCgCo
 * transform through analog form
 *
 * @param {Array} ycgco YCgCo values
 *
 * @return {Array} RGB values
 */
rgb.ycgco = function(arr) {
	var r = arr[0]/255, g = arr[1]/255, b = arr[2]/255;

	return [
		0.25*r + 0.5*g + 0.25*b,
		-0.25*r + 0.5*g - 0.25*b,
		0.5*r - 0.5*b
	];
};


/***/ }),

/***/ "./node_modules/color-space/ydbdr.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/ydbdr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/?title=YDbDr
 *
 * @module  color-space/ydbdr
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");
var yuv = __webpack_require__(/*! ./yuv */ "./node_modules/color-space/yuv.js");

var ydbdr = module.exports = {
	name: 'ydbdr',
	min: [0,-1.333,-1.333],
	max: [1, 1.333, 1.333],
	channel: ['Y','Db','Dr'],
	alias: ['YDbDr']
};


/**
 * YDbDr to RGB
 *
 * @param {Array} ydbdr RGB values
 *
 * @return {Array} YDbDr values
 */
ydbdr.rgb = function(ydbdr) {
	var y = ydbdr[0], db = ydbdr[1], dr = ydbdr[2];

	var r = y + 0.000092303716148*db - 0.525912630661865*dr;
	var g = y - 0.129132898890509*db + 0.267899328207599*dr;
	var b = y + 0.664679059978955*db - 0.000079202543533*dr;

	return [r*255, g*255, b*255];
};


/**
 * RGB to YDbDr
 *
 * @param {Array} ydbdr YDbDr values
 *
 * @return {Array} RGB values
 */
rgb.ydbdr = function(rgb) {
	var r = rgb[0]/255, g = rgb[1]/255, b = rgb[2]/255;
	return [
		0.299*r + 0.587*g + 0.114*b,
		-0.450*r - 0.883*g + 1.333*b,
		-1.333*r + 1.116*g + 0.217*b
	];
};


/**
 * To YUV
 */
yuv.ydbdr = function (yuv) {
	return [
		yuv[0], 3.059*yuv[1], -2.169*yuv[2]
	]
};

/**
 * From YUV
 */
ydbdr.yuv = function (ydbdr) {
	return [
		ydbdr[0], ydbdr[1] / 3.059, -ydbdr[2] / 2.169
	]
};


/***/ }),

/***/ "./node_modules/color-space/yes.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/yes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * YES color space
 * http://www.atlantis-press.com/php/download_paper.php?id=198
 *
 * @module color-space/yes
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var yes = module.exports = {
	name: 'yes',
	min: [0,0,0],
	max: [1,1,1],
	channel: ['luminance', 'e-factor', 's-factor']
};


yes.rgb = function(arg){
	var y = arg[0], e = arg[1], s = arg[2];

	var m = [
		1, 1.431, .126,
		1, -.569, .126,
		1, .431, -1.874
	];

	var r = y * m[0] + e * m[1] + s * m[2],
		g = y * m[3] + e * m[4] + s * m[5],
		b = y * m[6] + e * m[7] + s * m[8];

	return [r*255, g*255, b*255];
};

rgb.yes = function(arg) {
	var r = arg[0] / 255, g = arg[1] / 255, b = arg[2] / 255;

	var m = [
		.253, .684, .063,
		.500, -.50, .0,
		.250, .250, -.5
	];

	return [
		r * m[0] + g * m[1] + b * m[2],
		r * m[3] + g * m[4] + b * m[5],
		r * m[6] + g * m[7] + b * m[8]
	];
};


/***/ }),

/***/ "./node_modules/color-space/yiq.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/yiq.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * YIQ https://en.wikipedia.org/?title=YIQ
 *
 * @module  color-space/yiq
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var yiq = module.exports = {
	name: 'yiq',
	min: [0,-0.5957,-0.5226],
	max: [1, 0.5957, 0.5226],
	channel: ['Y','I','Q'],
	alias: ['YIQ']
};

yiq.rgb = function(yiq) {
	var y = yiq[0],
		i = yiq[1],
		q = yiq[2],
		r, g, b;

	r = (y * 1) + (i *  0.956) + (q * 0.621);
	g = (y * 1) + (i * -0.272) + (q * -0.647);
	b = (y * 1) + (i * -1.108) + (q * 1.705);

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};


//extend rgb
rgb.yiq = function(rgb) {
	var r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255;


	var y = (r * 0.299) + (g * 0.587) + (b * 0.114);
	var i = 0, q = 0;
	if (r !== g || g !== b) {
		i = (r * 0.596) + (g * -0.275) + (b * -0.321);
		q = (r * 0.212) + (g * -0.528) + (b * 0.311);
	}
	return [y, i, q];
};


/***/ }),

/***/ "./node_modules/color-space/ypbpr.js":
/*!*******************************************!*\
  !*** ./node_modules/color-space/ypbpr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://en.wikipedia.org/?title=YPbPr
 *
 * YPbPr is analog form of YCbCr
 * hence limits are [0..1]
 *
 * Default conversion is ITU-R BT.709
 *
 * @module  color-space/ypbpr
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var ypbpr = module.exports = {
	name: 'ypbpr',
	min: [0,-0.5,-0.5],
	max: [1, 0.5, 0.5],
	channel: ['Y','Pb','Pr'],
	alias: ['YPbPr', 'Y/PB/PR', 'YPRPB', 'PRPBY', 'PBPRY', 'Y/Pb/Pr', 'YPrPb', 'PrPbY', 'PbPrY', 'Y/R-Y/B-Y', 'Y(R-Y)(B-Y)', 'R-Y', 'B-Y']
};


/**
 * YPbPr to RGB
 *
 * @param {Array} ypbpr RGB values
 *
 * @return {Array} YPbPr values
 */
ypbpr.rgb = function(ypbpr, kb, kr) {
	var y = ypbpr[0], pb = ypbpr[1], pr = ypbpr[2];

	//default conversion is ITU-R BT.709
	kb = kb || 0.0722;
	kr = kr || 0.2126;

	var r = y + 2 * pr * (1 - kr);
	var b = y + 2 * pb * (1 - kb);
	var g = (y - kr * r - kb * b) / (1 - kr - kb);

	return [r*255,g*255,b*255];
};


/**
 * RGB to YPbPr
 *
 * @param {Array} ypbpr YPbPr values
 *
 * @return {Array} RGB values
 */
rgb.ypbpr = function(rgb, kb, kr) {
	var r = rgb[0]/255, g = rgb[1]/255, b = rgb[2]/255;

	//ITU-R BT.709
	kb = kb || 0.0722;
	kr = kr || 0.2126;

	var y = kr*r + (1 - kr - kb)*g + kb*b;
	var pb = 0.5 * (b - y) / (1 - kb);
	var pr = 0.5 * (r - y) / (1 - kr);

	return [y, pb, pr];
};


/***/ }),

/***/ "./node_modules/color-space/yuv.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/yuv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * YUV https://en.wikipedia.org/?title=YUV
 *
 * @module  color-space/yuv
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

var yuv = module.exports = {
	name: 'yuv',
	min: [0,-0.5,-0.5],
	max: [1, 0.5, 0.5],
	channel: ['Y','U','V'],
	alias: ['YUV', 'EBU'],

};

yuv.rgb = function(yuv) {
	var y = yuv[0],
		u = yuv[1],
		v = yuv[2],
		r, g, b;

	r = (y * 1) + (u *  0) + (v * 1.13983);
	g = (y * 1) + (u * -0.39465) + (v * -0.58060);
	b = (y * 1) + (u * 2.02311) + (v * 0);

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
}


//extend rgb
rgb.yuv = function(rgb) {
	var r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255;

	var y = (r * 0.299) + (g * 0.587) + (b * 0.114);
	var u = (r * -0.14713) + (g * -0.28886) + (b * 0.436);
	var v = (r * 0.615) + (g * -0.51499) + (b * -0.10001);

	return [y, u, v];
};


/***/ }),

/***/ "./node_modules/hsluv/hsluv.js":
/*!*************************************!*\
  !*** ./node_modules/hsluv/hsluv.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by Haxe 3.4.4
var hsluv = hsluv || {};
hsluv.Geometry = function() { };
hsluv.Geometry.intersectLineLine = function(a,b) {
	var x = (a.intercept - b.intercept) / (b.slope - a.slope);
	var y = a.slope * x + a.intercept;
	return { x : x, y : y};
};
hsluv.Geometry.distanceFromOrigin = function(point) {
	return Math.sqrt(Math.pow(point.x,2) + Math.pow(point.y,2));
};
hsluv.Geometry.distanceLineFromOrigin = function(line) {
	return Math.abs(line.intercept) / Math.sqrt(Math.pow(line.slope,2) + 1);
};
hsluv.Geometry.perpendicularThroughPoint = function(line,point) {
	var slope = -1 / line.slope;
	var intercept = point.y - slope * point.x;
	return { slope : slope, intercept : intercept};
};
hsluv.Geometry.angleFromOrigin = function(point) {
	return Math.atan2(point.y,point.x);
};
hsluv.Geometry.normalizeAngle = function(angle) {
	var m = 2 * Math.PI;
	return (angle % m + m) % m;
};
hsluv.Geometry.lengthOfRayUntilIntersect = function(theta,line) {
	return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
};
hsluv.Hsluv = function() { };
hsluv.Hsluv.getBounds = function(L) {
	var result = [];
	var sub1 = Math.pow(L + 16,3) / 1560896;
	var sub2 = sub1 > hsluv.Hsluv.epsilon ? sub1 : L / hsluv.Hsluv.kappa;
	var _g = 0;
	while(_g < 3) {
		var c = _g++;
		var m1 = hsluv.Hsluv.m[c][0];
		var m2 = hsluv.Hsluv.m[c][1];
		var m3 = hsluv.Hsluv.m[c][2];
		var _g1 = 0;
		while(_g1 < 2) {
			var t = _g1++;
			var top1 = (284517 * m1 - 94839 * m3) * sub2;
			var top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
			var bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
			result.push({ slope : top1 / bottom, intercept : top2 / bottom});
		}
	}
	return result;
};
hsluv.Hsluv.maxSafeChromaForL = function(L) {
	var bounds = hsluv.Hsluv.getBounds(L);
	var min = Infinity;
	var _g = 0;
	while(_g < bounds.length) {
		var bound = bounds[_g];
		++_g;
		var length = hsluv.Geometry.distanceLineFromOrigin(bound);
		min = Math.min(min,length);
	}
	return min;
};
hsluv.Hsluv.maxChromaForLH = function(L,H) {
	var hrad = H / 360 * Math.PI * 2;
	var bounds = hsluv.Hsluv.getBounds(L);
	var min = Infinity;
	var _g = 0;
	while(_g < bounds.length) {
		var bound = bounds[_g];
		++_g;
		var length = hsluv.Geometry.lengthOfRayUntilIntersect(hrad,bound);
		if(length >= 0) {
			min = Math.min(min,length);
		}
	}
	return min;
};
hsluv.Hsluv.dotProduct = function(a,b) {
	var sum = 0;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		sum += a[i] * b[i];
	}
	return sum;
};
hsluv.Hsluv.fromLinear = function(c) {
	if(c <= 0.0031308) {
		return 12.92 * c;
	} else {
		return 1.055 * Math.pow(c,0.416666666666666685) - 0.055;
	}
};
hsluv.Hsluv.toLinear = function(c) {
	if(c > 0.04045) {
		return Math.pow((c + 0.055) / 1.055,2.4);
	} else {
		return c / 12.92;
	}
};
hsluv.Hsluv.xyzToRgb = function(tuple) {
	return [hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[0],tuple)),hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[1],tuple)),hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[2],tuple))];
};
hsluv.Hsluv.rgbToXyz = function(tuple) {
	var rgbl = [hsluv.Hsluv.toLinear(tuple[0]),hsluv.Hsluv.toLinear(tuple[1]),hsluv.Hsluv.toLinear(tuple[2])];
	return [hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[0],rgbl),hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[1],rgbl),hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[2],rgbl)];
};
hsluv.Hsluv.yToL = function(Y) {
	if(Y <= hsluv.Hsluv.epsilon) {
		return Y / hsluv.Hsluv.refY * hsluv.Hsluv.kappa;
	} else {
		return 116 * Math.pow(Y / hsluv.Hsluv.refY,0.333333333333333315) - 16;
	}
};
hsluv.Hsluv.lToY = function(L) {
	if(L <= 8) {
		return hsluv.Hsluv.refY * L / hsluv.Hsluv.kappa;
	} else {
		return hsluv.Hsluv.refY * Math.pow((L + 16) / 116,3);
	}
};
hsluv.Hsluv.xyzToLuv = function(tuple) {
	var X = tuple[0];
	var Y = tuple[1];
	var Z = tuple[2];
	var divider = X + 15 * Y + 3 * Z;
	var varU = 4 * X;
	var varV = 9 * Y;
	if(divider != 0) {
		varU /= divider;
		varV /= divider;
	} else {
		varU = NaN;
		varV = NaN;
	}
	var L = hsluv.Hsluv.yToL(Y);
	if(L == 0) {
		return [0,0,0];
	}
	var U = 13 * L * (varU - hsluv.Hsluv.refU);
	var V = 13 * L * (varV - hsluv.Hsluv.refV);
	return [L,U,V];
};
hsluv.Hsluv.luvToXyz = function(tuple) {
	var L = tuple[0];
	var U = tuple[1];
	var V = tuple[2];
	if(L == 0) {
		return [0,0,0];
	}
	var varU = U / (13 * L) + hsluv.Hsluv.refU;
	var varV = V / (13 * L) + hsluv.Hsluv.refV;
	var Y = hsluv.Hsluv.lToY(L);
	var X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV);
	var Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV);
	return [X,Y,Z];
};
hsluv.Hsluv.luvToLch = function(tuple) {
	var L = tuple[0];
	var U = tuple[1];
	var V = tuple[2];
	var C = Math.sqrt(U * U + V * V);
	var H;
	if(C < 0.00000001) {
		H = 0;
	} else {
		var Hrad = Math.atan2(V,U);
		H = Hrad * 180.0 / Math.PI;
		if(H < 0) {
			H = 360 + H;
		}
	}
	return [L,C,H];
};
hsluv.Hsluv.lchToLuv = function(tuple) {
	var L = tuple[0];
	var C = tuple[1];
	var H = tuple[2];
	var Hrad = H / 360.0 * 2 * Math.PI;
	var U = Math.cos(Hrad) * C;
	var V = Math.sin(Hrad) * C;
	return [L,U,V];
};
hsluv.Hsluv.hsluvToLch = function(tuple) {
	var H = tuple[0];
	var S = tuple[1];
	var L = tuple[2];
	if(L > 99.9999999) {
		return [100,0,H];
	}
	if(L < 0.00000001) {
		return [0,0,H];
	}
	var max = hsluv.Hsluv.maxChromaForLH(L,H);
	var C = max / 100 * S;
	return [L,C,H];
};
hsluv.Hsluv.lchToHsluv = function(tuple) {
	var L = tuple[0];
	var C = tuple[1];
	var H = tuple[2];
	if(L > 99.9999999) {
		return [H,0,100];
	}
	if(L < 0.00000001) {
		return [H,0,0];
	}
	var max = hsluv.Hsluv.maxChromaForLH(L,H);
	var S = C / max * 100;
	return [H,S,L];
};
hsluv.Hsluv.hpluvToLch = function(tuple) {
	var H = tuple[0];
	var S = tuple[1];
	var L = tuple[2];
	if(L > 99.9999999) {
		return [100,0,H];
	}
	if(L < 0.00000001) {
		return [0,0,H];
	}
	var max = hsluv.Hsluv.maxSafeChromaForL(L);
	var C = max / 100 * S;
	return [L,C,H];
};
hsluv.Hsluv.lchToHpluv = function(tuple) {
	var L = tuple[0];
	var C = tuple[1];
	var H = tuple[2];
	if(L > 99.9999999) {
		return [H,0,100];
	}
	if(L < 0.00000001) {
		return [H,0,0];
	}
	var max = hsluv.Hsluv.maxSafeChromaForL(L);
	var S = C / max * 100;
	return [H,S,L];
};
hsluv.Hsluv.rgbToHex = function(tuple) {
	var h = "#";
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var chan = tuple[i];
		var c = Math.round(chan * 255);
		var digit2 = c % 16;
		var digit1 = (c - digit2) / 16 | 0;
		h += hsluv.Hsluv.hexChars.charAt(digit1) + hsluv.Hsluv.hexChars.charAt(digit2);
	}
	return h;
};
hsluv.Hsluv.hexToRgb = function(hex) {
	hex = hex.toLowerCase();
	var ret = [];
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var digit1 = hsluv.Hsluv.hexChars.indexOf(hex.charAt(i * 2 + 1));
		var digit2 = hsluv.Hsluv.hexChars.indexOf(hex.charAt(i * 2 + 2));
		var n = digit1 * 16 + digit2;
		ret.push(n / 255.0);
	}
	return ret;
};
hsluv.Hsluv.lchToRgb = function(tuple) {
	return hsluv.Hsluv.xyzToRgb(hsluv.Hsluv.luvToXyz(hsluv.Hsluv.lchToLuv(tuple)));
};
hsluv.Hsluv.rgbToLch = function(tuple) {
	return hsluv.Hsluv.luvToLch(hsluv.Hsluv.xyzToLuv(hsluv.Hsluv.rgbToXyz(tuple)));
};
hsluv.Hsluv.hsluvToRgb = function(tuple) {
	return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hsluvToLch(tuple));
};
hsluv.Hsluv.rgbToHsluv = function(tuple) {
	return hsluv.Hsluv.lchToHsluv(hsluv.Hsluv.rgbToLch(tuple));
};
hsluv.Hsluv.hpluvToRgb = function(tuple) {
	return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hpluvToLch(tuple));
};
hsluv.Hsluv.rgbToHpluv = function(tuple) {
	return hsluv.Hsluv.lchToHpluv(hsluv.Hsluv.rgbToLch(tuple));
};
hsluv.Hsluv.hsluvToHex = function(tuple) {
	return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hsluvToRgb(tuple));
};
hsluv.Hsluv.hpluvToHex = function(tuple) {
	return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hpluvToRgb(tuple));
};
hsluv.Hsluv.hexToHsluv = function(s) {
	return hsluv.Hsluv.rgbToHsluv(hsluv.Hsluv.hexToRgb(s));
};
hsluv.Hsluv.hexToHpluv = function(s) {
	return hsluv.Hsluv.rgbToHpluv(hsluv.Hsluv.hexToRgb(s));
};
hsluv.Hsluv.m = [[3.240969941904521,-1.537383177570093,-0.498610760293],[-0.96924363628087,1.87596750150772,0.041555057407175],[0.055630079696993,-0.20397695888897,1.056971514242878]];
hsluv.Hsluv.minv = [[0.41239079926595,0.35758433938387,0.18048078840183],[0.21263900587151,0.71516867876775,0.072192315360733],[0.019330818715591,0.11919477979462,0.95053215224966]];
hsluv.Hsluv.refY = 1.0;
hsluv.Hsluv.refU = 0.19783000664283;
hsluv.Hsluv.refV = 0.46831999493879;
hsluv.Hsluv.kappa = 903.2962962;
hsluv.Hsluv.epsilon = 0.0088564516;
hsluv.Hsluv.hexChars = "0123456789abcdef";
var root = {
    "hsluvToRgb": hsluv.Hsluv.hsluvToRgb,
    "rgbToHsluv": hsluv.Hsluv.rgbToHsluv,
    "hpluvToRgb": hsluv.Hsluv.hpluvToRgb,
    "rgbToHpluv": hsluv.Hsluv.rgbToHpluv,
    "hsluvToHex": hsluv.Hsluv.hsluvToHex,
    "hexToHsluv": hsluv.Hsluv.hexToHsluv,
    "hpluvToHex": hsluv.Hsluv.hpluvToHex,
    "hexToHpluv": hsluv.Hsluv.hexToHpluv,
    "lchToHpluv": hsluv.Hsluv.lchToHpluv,
    "hpluvToLch": hsluv.Hsluv.hpluvToLch,
    "lchToHsluv": hsluv.Hsluv.lchToHsluv,
    "hsluvToLch": hsluv.Hsluv.hsluvToLch,
    "lchToLuv": hsluv.Hsluv.lchToLuv,
    "luvToLch": hsluv.Hsluv.luvToLch,
    "xyzToLuv": hsluv.Hsluv.xyzToLuv,
    "luvToXyz": hsluv.Hsluv.luvToXyz,
    "xyzToRgb": hsluv.Hsluv.xyzToRgb,
    "rgbToXyz": hsluv.Hsluv.rgbToXyz,
    "lchToRgb": hsluv.Hsluv.lchToRgb,
    "rgbToLch": hsluv.Hsluv.rgbToLch
};

module.exports = root;


/***/ }),

/***/ "./node_modules/mumath/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/mumath/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Clamp value.
 * Detects proper clamp min/max.
 *
 * @param {number} a Current value to cut off
 * @param {number} min One side limit
 * @param {number} max Other side limit
 *
 * @return {number} Clamped value
 */

module.exports = function(a, min, max){
	return max > min ? Math.max(Math.min(a,max),min) : Math.max(Math.min(a,min),max);
};


/***/ }),

/***/ "./node_modules/mumath/mod.js":
/*!************************************!*\
  !*** ./node_modules/mumath/mod.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Looping function for any framesize.
 * Like fmod.
 *
 * @module  mumath/loop
 *
 */


module.exports = function (value, left, right) {
	//detect single-arg case, like mod-loop or fmod
	if (right === undefined) {
		right = left;
		left = 0;
	}

	//swap frame order
	if (left > right) {
		var tmp = right;
		right = left;
		left = tmp;
	}

	var frame = right - left;

	value = ((value + left) % frame) - left;
	if (value < left) value += frame;
	if (value > right) value -= frame;

	return value;
};


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converter */ "./src/color-converter.tsx");
/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
let space = __webpack_require__(/*! color-space */ "./node_modules/color-space/index.js");

const conv = new _color_converter__WEBPACK_IMPORTED_MODULE_0__["colorConverter"]();
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
            rect.x = i * 120;
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


/***/ }),

/***/ "./src/color-converter.tsx":
/*!*********************************!*\
  !*** ./src/color-converter.tsx ***!
  \*********************************/
/*! exports provided: colorConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorConverter", function() { return colorConverter; });
class colorConverter {
    hexrgb(hex) {
        // Figma friendly.
        // Returns object r, g, b. From 0 to 1. Map from hex 00 to ff.
        let rgb = { r: 0, g: 0, b: 0 };
        // console.log("Checking this hex:" +hex);
        // Check if hex. Need to use catch
        if (this.isHexadecimal(hex.substring(1))) {
            hex = hex.substring(1);
            rgb.r = this.map(parseInt(hex.substring(0, 2), 16), 0, 255, 0, 1);
            rgb.g = this.map(parseInt(hex.substring(2, 4), 16), 0, 255, 0, 1);
            rgb.b = this.map(parseInt(hex.substring(4), 16), 0, 255, 0, 1);
            // console.log("Color converted: "+rgb);
        }
        return rgb;
    }
    hexrgb256(hex) {
        let rgb = [0, 0, 0];
        if (this.isHexadecimal(hex.substring(1))) {
            hex = hex.substring(1);
            rgb[0] = parseInt(hex.substring(0, 2), 16);
            rgb[1] = parseInt(hex.substring(2, 4), 16);
            rgb[2] = parseInt(hex.substring(4), 16);
        }
        return rgb;
    }
    rgb256hex(rgb) {
        // RGB 0-256
        let hex = "#" +
            rgb[0].toString(16).padStart(2, 0) +
            rgb[1].toString(16).padStart(2, 0) +
            rgb[2].toString(16).padStart(2, 0);
        return hex;
    }
    rgbhex(rgb) {
        // Figma friendly RGB 0-1 to hex
        let hex = "#" +
            this.map(rgb.r, 0, 1, 0, 255).toString(16).padStart(2, 0) +
            this.map(rgb.g, 0, 1, 0, 255).toString(16).padStart(2, 0) +
            this.map(rgb.b, 0, 1, 0, 255).toString(16).padStart(2, 0);
        return hex;
    }
    isHexadecimal(hex) {
        let regexp = /^[0-9a-fA-F]+$/;
        if (regexp.test(hex))
            return true;
        return false;
    }
    map(value, x1, y1, x2, y2) {
        return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2NteS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvY215ay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvY29sb3JvaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2N1YmVoZWxpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvaGNnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9oY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2hwbHV2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9oc2kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2hzbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvaHNsdXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2hzcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvaHN2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9od2IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9qcGVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9sYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2xhYmguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL2xjaGFiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9sY2h1di5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvbG1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS9sdXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL29zYXVjcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvcmdiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS90c2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL3Vjcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UvdXZ3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS94dnljYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UveHl5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS94eXouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL3ljYmNyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS95Y2NiY2NyYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UveWNnY28uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL3lkYmRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zcGFjZS95ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL3lpcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3Itc3BhY2UveXBicHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXNwYWNlL3l1di5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHNsdXYvaHNsdXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL211bWF0aC9jbGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVtYXRoL21vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3ItY29udmVydGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNZOztBQUVaLFVBQVUsbUJBQU8sQ0FBQyxnREFBTzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDYTtBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFDQSxZQUFZLG1CQUFPLENBQUMsd0RBQWE7QUFDa0I7QUFDbkQsaUJBQWlCLCtEQUFjO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCLHFCQUFxQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbG9yLXNwYWNlL2NteVxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBjbXkgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ2NteScsXG5cdG1pbjogWzAsMCwwXSxcblx0bWF4OiBbMTAwLDEwMCwxMDBdLFxuXHRjaGFubmVsOiBbJ2N5YW4nLCAnbWFnZW50YScsICd5ZWxsb3cnXSxcblx0YWxpYXM6IFsnQ01ZJ11cbn07XG5cblxuLyoqXG4gKiBDTVkgdG8gUkdCXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY215IENoYW5uZWxzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFJHQiBjaGFubmVsc1xuICovXG5jbXkucmdiID0gZnVuY3Rpb24oY215KSB7XG5cdHZhciBjID0gY215WzBdIC8gMTAwLFxuXHRcdG0gPSBjbXlbMV0gLyAxMDAsXG5cdFx0eSA9IGNteVsyXSAvIDEwMDtcblxuXHRyZXR1cm4gW1xuXHRcdCgxIC0gYykgKiAyNTUsXG5cdFx0KDEgLSBtKSAqIDI1NSxcblx0XHQoMSAtIHkpICogMjU1XG5cdF07XG59O1xuXG5cbi8qKlxuICogUkdCIHRvIENNWVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHJnYiBjaGFubmVsc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBDTVkgY2hhbm5lbHNcbiAqL1xucmdiLmNteSA9IGZ1bmN0aW9uKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NSxcblx0XHRnID0gcmdiWzFdIC8gMjU1LFxuXHRcdGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0cmV0dXJuIFtcblx0XHQoMS1yKSAqIDEwMCB8fCAwLFxuXHRcdCgxLWcpICogMTAwIHx8IDAsXG5cdFx0KDEtYikgKiAxMDAgfHwgMFxuXHRdO1xufTtcbiIsIi8qKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9jbXlrXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICdjbXlrJyxcblx0bWluOiBbMCwwLDAsMF0sXG5cdG1heDogWzEwMCwxMDAsMTAwLDEwMF0sXG5cdGNoYW5uZWw6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddLFxuXHRhbGlhczogWydDTVlLJ10sXG5cblx0cmdiOiBmdW5jdGlvbihjbXlrKSB7XG5cdFx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwLFxuXHRcdFx0XHRtID0gY215a1sxXSAvIDEwMCxcblx0XHRcdFx0eSA9IGNteWtbMl0gLyAxMDAsXG5cdFx0XHRcdGsgPSBjbXlrWzNdIC8gMTAwLFxuXHRcdFx0XHRyLCBnLCBiO1xuXG5cdFx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRcdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0XHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cdFx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcblx0fVxufTtcblxuXG4vL2V4dGVuZCByZ2JcbnJnYi5jbXlrID0gZnVuY3Rpb24ocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1LFxuXHRcdFx0ZyA9IHJnYlsxXSAvIDI1NSxcblx0XHRcdGIgPSByZ2JbMl0gLyAyNTUsXG5cdFx0XHRjLCBtLCB5LCBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG4iLCJcclxuLyoqXHJcbiAqIEFyY2hpdGVjdHMgYW5kIHZpc3VhbCBjb25zdHJ1Y3RvcnMgaHVuZ2FyaWFuIGNvbG9yIHNwYWNlLlxyXG4gKlxyXG4gKiBodHRwOi8vaGVqLnN6ZS5odS9BUkMvQVJDLTAzMDUyMC1BL2FyYzAzMDUyMGEucGRmXHJcbiAqXHJcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL2NvbG9yb2lkXHJcbiAqL1xyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciB4eXkgPSByZXF1aXJlKCcuL3h5eScpO1xyXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcclxuXHJcblxyXG4vKipcclxuICogTWFpbiBjb2xvciBzcGFjZSBvYmplY3RcclxuICovXHJcbnZhciBjb2xvcm9pZCA9IHtcclxuXHRuYW1lOiAnY29sb3JvaWQnLFxyXG5cdGFsaWFzOiBbJ0FUViddLFxyXG5cclxuXHQvL2h1ZSwgc2F0dXJhdGlvbiwgbHVtaW5vc2l0eVxyXG5cdC8vbm90ZSB0aGF0IGh1ZSB2YWx1ZXMgYXJlIGlkcywgbm90IHRoZSBudW1iZXJzIC0gbm90IGV2ZXJ5IHZhbHVlIGlzIHBvc3NpYmxlXHJcblx0Ly9lLmcuIDM4IHdpbGwgYmUgcm91bmRlZCB0byAzNlxyXG5cdGNoYW5uZWw6IFsnQScsJ1QnLCdWJ10sXHJcblx0bWluOiBbMTAsIDAsIDBdLFxyXG5cdG1heDogWzc2LCAxMDAsIDEwMF1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogQ29sb3JvaWQgdGFibGVcclxuICogUmVncmVzc2lvbiBvZiB2YWx1ZXMgaXMgYWxtb3N0IGltcG9zc2libGUsIGFzIGh1ZXMgZG9u4oCZdCBjb3JyZWxhdGVcclxuICogRXZlbiBhbmdsZSB2YWx1ZXMgYXJlIHBpY2tlZCB2ZXJ5IGluY29uc2lzdGVudGx5LCBiYXNlZCBvbiBhZXN0aGV0aWNhbCBldmFsdWF0aW9uLlxyXG4gKlxyXG4gKiAtIHRn0YQsIGN0Z9GEIGFyZSByZW1vdmVkLCDRhCBpcyBzZWFyY2hlZCBpbnN0ZWFkXHJcbiAqIC0gZc67ID0geM67ICsgec67ICsges67XHJcbiAqIC0gzrsgaXMgcmVtb3ZlZCBhcyBub3QgdXNlZFxyXG4gKi9cclxuY29sb3JvaWQudGFibGUgPSBbXHJcblx0Ly9BICAgIGFuZ2xlICBlzrsgICAgICAgIHjOuyAgICAgICB5zrtcclxuXHRbIDEwLCAgIDU5LjAsIDEuNzI0MzQ5LCAwLjQ0OTg3LCAwLjUzNjQxIF0sXHJcblx0WyAxMSwgICA1NS4zLCAxLjc0MDg0NCwgMC40NjI0OCwgMC41MjQ0NCBdLFxyXG5cdFsgMTIsICAgNTEuNywgMS43NTQ5ODUsIDAuNDc0NTEsIDAuNTEyOTggXSxcclxuXHRbIDEzLCAgIDQ4LjIsIDEuNzY3MDg3LCAwLjQ4NjAxLCAwLjUwMzI1IF0sXHJcblx0WyAxNCwgICA0NC44LCAxLjc3NTk1MywgMC40OTU3OCwgMC40OTA1MiBdLFxyXG5cdFsgMTUsICAgNDEuNSwgMS43ODUwNzMsIDAuNTA3OTAsIDAuNDMwMzUgXSxcclxuXHRbIDE2LCAgIDM4LjIsIDEuNzkxMTA0LCAwLjUxODc0LCAwLjQ2OTM0IF0sXHJcblx0WyAyMCwgICAzNC45LCAxLjc5NDgzMSwgMC41Mjk4MCwgMC40NTc4MyBdLFxyXG5cdFsgMjEsICAgMzEuNSwgMS43OTg2NjQsIDAuNTQxMzcsIDAuNDQ1NTkgXSxcclxuXHRbIDIyLCAgIDI4LjAsIDEuNzk0ODE5LCAwLjU1MzY3LCAwLjQzMjUzIF0sXHJcblx0WyAyMywgICAyNC40LCAxLjc4OTYxMCwgMC41NjY4MCwgMC40MTgxMSBdLFxyXG5cdFsgMjQsICAgMjAuNiwgMS44MDk0ODMsIDAuNTgxMjgsIDAuNDAxNzYgXSxcclxuXHRbIDI1LCAgIDE2LjYsIDEuNzYwOTgzLCAwLjU5NzY2LCAwLjM4MzAwIF0sXHJcblx0WyAyNiwgICAxMi4zLCAxLjcyMzQ0MywgMC42MTY1MywgMC4zNjA2MSBdLFxyXG5cdFsgMzAsICAgIDcuNywgMS42NTI4OTEsIDAuNjM4OTYsIDAuMzMzNTggXSxcclxuXHRbIDMxLCAgICAyLjgsIDEuNTAyNjA3LCAwLjY2NjE5LCAwLjI5OTMwIF0sXHJcblx0WyAzMiwgICAtMi41LCAxLjA3MjUwMCwgMC43MDA2MSwgMC4yNjc1MyBdLFxyXG5cdFsgMzMsICAgLTguNCwgMS4xMzY2MzcsIDAuNjM5MjUsIDAuMjI2MzEgXSxcclxuXHRbIDM0LCAgLTE5LjgsIDEuMjMyMjg2LCAwLjUzOTYyLCAwLjE5NzIxIF0sXHJcblx0WyAzNSwgIC0zMS42LCAxLjMxMDEyMCwgMC41MDM0MCwgMC4xNzQ5NSBdLFxyXG5cdFsgNDAsICAtNDMuMiwgMS4zNzY2MTAsIDAuNDYwNDEsIDAuMTU2MDMgXSxcclxuXHRbIDQxLCAgLTU0LjYsIDEuNDM4NjkyLCAwLjQyMzg2LCAwLjEzODQ2IF0sXHJcblx0WyA0MiwgIC02NS44LCAxLjUwMTU4MiwgMC4zODk5MSwgMC4xMjA4MyBdLFxyXG5cdFsgNDMsICAtNzYuOCwgMS41NzA0NDcsIDAuMzU1ODYsIDAuMTAzMjggXSxcclxuXHRbIDQ0LCAgLTg2LjgsIDEuNjQ1NTgzLCAwLjMyMTk1LCAwLjA4NDk2IF0sXHJcblx0WyA0NSwgIC05NS44LCAxLjczMjA4MywgMC4yODY1NywgMC4wNTE1NSBdLFxyXG5cdFsgNDYsIC0xMDguNCwgMS45MTU3NTMsIDAuMjIyMDIsIDAuMDE3NzEgXSxcclxuXHRbIDUwLCAtMTE3LjIsIDIuMTQ2MzEwLCAwLjE1NjY0LCAwLjA1MjI3IF0sXHJcblx0WyA1MSwgLTEyNC43LCAxLjY0OTkzOSwgMC4xMjczNiwgMC4wOTAyMCBdLFxyXG5cdFsgNTIsIC0xMzEuOCwgMS4yNzM0MTUsIDAuMTA4MTMsIDAuMTI1MDYgXSxcclxuXHRbIDUzLCAtMTM4LjUsIDEuMDgwODA5LCAwLjA5NDE0LCAwLjE1NzQxIF0sXHJcblx0WyA1NCwgLTE0NS4xLCAwLjk1NzA3NiwgMC4wMzI0OSwgMC4xODk1OCBdLFxyXG5cdFsgNTUsIC0xNTIuMCwgMC44Njg5NzYsIDAuMDcyMDYsIDAuMjQxMDkgXSxcclxuXHRbIDU2LCAtMTYzLjQsIDAuNzcxNzMxLCAwLjA1Nzg3LCAwLjMwMzc4IF0sXHJcblx0WyA2MCwgLTE3Ny4yLCAwLjY5NzEwOCwgMC4wNDM1MywgMC4zNTY5NiBdLFxyXG5cdFsgNjEsICAxNzEuNiwgMC42NTU4MDMsIDAuMDMyOTEsIDAuNDE5NzEgXSxcclxuXHRbIDYyLCAgMTUyLjQsIDAuNjIzOTU4LCAwLjAyMjQwLCAwLjQ5OTU0IF0sXHJcblx0WyA2MywgIDE0OC40LCAwLjU5NjAzNywgMC4wMTE5NiwgMC42MDMyMSBdLFxyXG5cdFsgNjQsICAxMzYuOCwgMC42MDc0MTMsIDAuMDA0MjUsIDAuNzM1NDIgXSxcclxuXHRbIDY1LCAgMTI1LjQsIDAuNjU5OTIzLCAwLjAxMDk5LCAwLjgzMzkxIF0sXHJcblx0WyA2NiwgIDExNC4yLCAwLjg1OTUxNywgMC4wODA1MCwgMC43NzQ3NCBdLFxyXG5cdFsgNzAsICAxMDMuMiwgMS4xOTU2ODMsIDAuMjAyNTksIDAuNzA0NjAgXSxcclxuXHRbIDcxLCAgIDkzLjIsIDEuNDA3NTM0LCAwLjI4ODA3LCAwLjY1MjMwIF0sXHJcblx0WyA3MiwgICA4NC4yLCAxLjUzMjgyOSwgMC4zNDQyMiwgMC42MTkzMCBdLFxyXG5cdFsgNzMsICAgNzcuMywgMS42MDM3OTIsIDAuMzc4MzgsIDAuNTk1MzMgXSxcclxuXHRbIDc0LCAgIDcxLjYsIDEuNjQ5NDQ4LCAwLjQwMjkwLCAwLjU3NzE2IF0sXHJcblx0WyA3NSwgICA2Ni45LCAxLjY4MTA4MCwgMC40MjE0MSwgMC41NjIyMiBdLFxyXG5cdFsgNzYsICAgNjIuOCwgMS43MDQ5NzksIDAuNDM2NDcsIDAuNTQ4OTUgXVxyXG5dO1xyXG5cclxuXHJcbi8qKlxyXG5Db2xvcm9pZCB0YWJsZSBzb3VyY2VcclxuU29tZSBuZWdhdGl2ZSBhbmdsZSB0eXBvcyBhcmUgZml4ZWQuXHJcbkFuZ2xlIHR5cG8gb24gdGhlIEE9NjIgaXMgZml4ZWQuXHJcbnjOuyB0eXBvIG9uIEE9NzMgaXMgZml4ZWQuXHJcblxyXG5cclxuQmV3YXJlLCB0Zy9jdGcgdmFsdWVzIGRvbuKAmXQgYWdyZWUgd2l0aCBhbmdsZS5cclxuQWxzbyBkb27igJl0IHRydXN0IHRoZSBjYWxjdWxhdGVkIGXOuyA9IHjOuyArIHnOuyArIHrOuy5cclxuQWxzbywgdW5mb3J0dW5hdGVseSwgc29tZSB2YWx1ZXMgbWlnaHQgYmUgd3JvbmcsIGFzIGNvbG9yb2lkIHJhbmdlIGxvb2tzIHVuZXZlbi5cclxuXHJcbkEgICDOuyAgICAgICDRhCAgICAgdGcg0YQgICAgY3RnINGEICAgeM67ICAgICAgIHnOuyAgICAgICB6zrsgICAgICAgeM67ICAgICAgec67ICAgICAgZc67XHJcblxyXG4xMCAgNTcwLjgzICAgNTkuMCAgICAgICAgICAwLjYwMDkgMC43NzU3NDUgMC45NDY1NzIgMC4wMDIwMzIgMC40NDk4NyAwLjU0ODk1IDEuNzI0MzQ5XHJcbjExICA1NzIuNjQgICA1NS4zICAgICAgICAgIDAuNjkyNCAwLjgwNTEzMCAwLjkzMzgwNCAwLjAwMTkxMCAwLjQ2MjQ4IDAuNTM2NDEgMS43NDA4NDVcclxuMTIgIDU3NC4zOCAgIDUxLjcgICAgICAgICAgMC43ODk4IDAuODMyNzgyIDAuOTIwMzk1IDAuMDAxODA4IDAuNDc0NTEgMC41MjQ0NCAxLjc1NDk4NlxyXG4xMyAgNTc2LjA2ICAgNDguMiAgMS4xMTgwICAwLjg5NDEgMC44NTg4NDEgMC45MDY0ODIgMC4wMDE3NjQgMC40ODYwMSAwLjUxMjk4IDEuNzY3MDg4XHJcbjE0ICA1NzcuNTAgICA0NC44ICAwLjkzMzAgIDEuMDA3MCAwLjg4MDQ4OCAwLjg5Mzc0MSAwLjAwMTcyNCAwLjQ5NTc4IDAuNTAzMjUgMS43NzU5NTNcclxuMTUgIDU3OS4zMSAgIDQxLjUgIDAuODg0NyAgICAgICAgIDAuOTA2NjUyIDAuODc2NzQ5IDAuMDAxNjcyIDAuNTA3OTAgMC40OTA1MiAxLjc4NTA3NFxyXG4xNiAgNTgwLjk1ICAgMzguMiAgMC43ODY5ICAgICAgICAgMC45MjkxMjQgMC44NjAzNjggMC4wMDE2MTIgMC41MTg3NCAwLjQzMDM1IDEuNzkxMTA0XHJcbjIwICA1ODIuNjUgICAzNC45ICAwLjY5NzYgICAgICAgICAwLjk1MDkwOSAwLjg0MjM5MSAwLjAwMTUzMSAwLjUyOTgwIDAuNDY5MzQgMS43OTQ4MzFcclxuMjEgIDU4NC40NiAgIDMxLjUgIDAuNjEyOCAgICAgICAgIDAuOTcyNDU0IDAuODI0Nzc5IDAuMDAxNDMxIDAuNTQxMzcgMC40NTc4MyAxLjc5ODY2NVxyXG4yMiAgNTg2LjQzICAgMjguMCAgMC41MzE3ICAgICAgICAgMC45OTM3NTMgMC43OTk3NTggMC4wMDEzMDggMC41NTM2NyAwLjQ0NTU5IDEuNzk0ODIyXHJcbjIzICA1ODguNTkgICAyNC40ICAwLjQ1MzYgICAgICAgICAxLjAxNDM1MCAwLjc3NDA5MCAwLjAwMTE3MCAwLjU2NjgwIDAuNDMyNTMgMS43ODk2MTBcclxuMjQgIDU5MS4wNiAgIDIwLjYgIDAuMzc1OSAgICAgICAgIDEuMDM0NDAyIDAuNzc0MDE0IDAuMDAxMDY3IDAuNTgxMjggMC40MTgxMSAxLjc3OTQ4NFxyXG4yNSAgNTk0LjAwICAgMTYuNiAgMC4yOTc0ICAgICAgICAgMS4wNTI0NjYgMC43MDc0OTYgMC4wMDEwMjEgMC41OTc2NiAwLjQwMTc2IDEuNzYwOTg0XHJcbjI2ICA1OTcuNzQgICAxMi4zICAwLjIxODAgICAgICAgICAxLjA2MjU0NCAwLjY2MDAwMSAwLjAwMDg5OCAwLjYxNjUzIDAuMzgzMDAgMS43MjM0NDRcclxuMzAgIDYwMi43MiAgICA3LjcgIDAuMTM1MiAgICAgICAgIDEuMDU2MTI1IDAuNTk2MDcwIDAuMDAwNjk2IDAuNjM4OTYgMC4zNjA2MSAxLjY1Mjg5MlxyXG4zMSAgNjEwLjE0ICAgIDIuOCAgMC4wNDg5ICAgICAgICAgMS4wMDEwMjcgMC41MDEyNDUgMC4wMDAzMzUgMC42NjYxOSAwLjMzMzU4IDEuNTAyNjA4XHJcbjMyICA2MjUuMDAgICAtMi41IC0wLjA0MzUgICAgICAgICAwLjc1MTQwMCAwLjMyMTAwMCAwLjAwMDEwMCAwLjcwMDYxIDAuMjk5MzAgMS4wNzI1MDBcclxuMzMgLTQ5Mi43OSAgIC04LjQgLTAuMTQ3NyAgICAgICAgIDAuNzI2NjAzIDAuMzA0MDkzIDAuMTA1OTQxIDAuNjM5MjUgMC4yNjc1MyAxLjEzNjYzOFxyXG4zNCAtNDk1LjI4ICAtMTkuOCAtMC4zNjAwICAgICAgICAgMC42ODk2MjAgMC4yNzg4ODYgMC4yNjM3ODAgMC41Mzk2MiAwLjIyNjMxIDEuMjMyMjg2XHJcbjM1IC00OTguNDUgIC0zMS42IC0wLjYxNTIgICAgICAgICAwLjY1OTUyMyAwLjI1ODM3MyAwLjM5MjIyNCAwLjUwMzQwIDAuMTk3MjEgMS4zMTAxMjJcclxuNDAgLTUwMi42OSAgLTQzLjIgLTAuOTM5MSAgICAgICAgIDAuNjMzODE1IDAuMjQwODUxIDAuNTAxOTQ0IDAuNDYwNDEgMC4xNzQ5NSAxLjM3NjYxMFxyXG40MSAtNTA5LjEyICAtNTQuNiAgICAgICAgIC0wLjcxMDcgMC42MDk4MTAgMC4yMjQ0OTAgMC42MDQzOTIgMC40MjM4NiAwLjE1NjAzIDEuNDM4NjkyXHJcbjQyIC01MjAuNDAgIC02NS44ICAgICAgICAgLTAuNDQ5NCAwLjU4NTQ5MiAwLjIwNzkxNSAwLjcwODE3NSAwLjM4OTkxIDAuMTM4NDYgMS41MDE1ODNcclxuNDMgLTUzNi4zMSAgLTc2LjggICAgICAgICAtMC4yMzQ1IDAuNTU4ODY1IDAuMTg5NzY3IDAuODIxODE1IDAuMzU1ODYgMC4xMjA4MyAxLjU3MDQ0N1xyXG40NCAtNTQ4LjExICAtODYuOCAgICAgICAgIC0wLjA1NTkgMC41Mjk4MTEgMC4xNjk5NjUgMC45NDU4MDcgMC4zMjE5NSAwLjEwMzI4IDEuNjQ1NTg0XHJcbjQ1IC01NTUuOTYgIC05NS44ICAgICAgICAgLTAuMTAxNiAwLjQ5NjM2NCAwLjE0NzE2OCAxLjA4ODU1MSAwLjI4NjU3IDAuMDg0OTYgMS43MzIwODVcclxuNDYgLTU2NC4xOCAtMTA4LjQgICAgICAgICAgMC4zMzI3IDAuNDI1MzQ2IDAuMDk4NzY0IDEuMzkxNjQzIDAuMjIyMDIgMC4wNTE1NSAxLjkxNTc1NFxyXG41MCAgNDUwLjAwIC0xMTcuMiAgICAgICAgICAwLjUxNDEgMC4zMzYyMDAgMC4wMzgwMDAgMS43NzIxMTAgMC4xNTY2NCAwLjAxNzcxIDIuMTQ2MzEwXHJcbjUxICA0NjguNzEgLTEyNC43ICAgICAgICAgIDAuNjkyNCAwLjIxMDE3NCAwLjA4NjE5OCAxLjM1MzU2NyAwLjEyNzM2IDAuMDUyMjcgMS42NDk5NDBcclxuNTIgIDQ3NS40NCAtMTMxLjggICAgICAgICAgMC44OTQxIDAuMTM3NzM0IDAuMTE0NzcwIDEuMDIwOTExIDAuMTA4MTMgMC4wOTAyMCAxLjI3MzQxNVxyXG41MyAgNDc5LjAwIC0xMzguNSAgMC44ODQ3ICAgICAgICAgMC4xMDE3ODcgMC4xMzUwNjcgMC44NDM5NTUgMC4wOTQxNCAwLjEyNTA2IDEuMDgwODA5XHJcbjU0ICA0ODIuMDQgLTE0NS4xICAwLjY5NzYgICAgICAgICAwLjA3OTAwNCAwLjE1MDcwOSAwLjcyNzM2MyAwLjAzMjQ5IDAuMTU3NDEgMC45NTc1NzdcclxuNTUgIDQ4NC4yOSAtMTUyLjAgIDAuNTMxNyAgICAgICAgIDAuMDYyNjU4IDAuMTY0NjI2IDAuNjQxNjkyIDAuMDcyMDYgMC4xODk1OCAwLjg2ODk3N1xyXG41NiAgNDg3LjMxIC0xNjMuNCAgMC4yOTgxICAgICAgICAgMC4wNDQ2OTEgMC4xODU5NDkgMC41NDEwOTEgMC4wNTc4NyAwLjI0MTA5IDAuNzcxNzMyXHJcbjYwICA0OTAuNDAgLTE3Ny4yICAwLjA0ODkgICAgICAgICAwLjAzMDM3MiAwLjIxMTY1OSAwLjQ1NTA3NyAwLjA0MzUzIDAuMzAzNzggMC42OTcxMTBcclxuNjEgIDQ5Mi43MiAgMTcxLjYgLTAuMTQ3NyAgICAgICAgIDAuMDIxNjU1IDAuMjM0MDIyIDAuNDAwMTI2IDAuMDMyOTEgMC4zNTY5NiAwLjY1NTgwNFxyXG42MiAgNDk1LjI4ICAxMjUuNCAtMC4zNjAwICAgICAgICAgMC4wMTM5ODkgMC4yNjE4NDMgMC4zNDgxMjYgMC4wMjI0MCAwLjQxOTcxIDAuNjIzOTY5XHJcbjYzICA0OTguNDUgIDE0OC40IC0wLjYxNTIgICAgICAgICAwLjAwNzIxNSAwLjMwMTEzNyAwLjI4NzY4NSAwLjAxMTk2IDAuNDk5NTQgMC41OTYwMzdcclxuNjQgIDUwMi42OSAgMTM2LjggLTAuOTM5MSAtMS4wNjUwIDAuMDAyNTg2IDAuMzY2NDI1IDAuMjM4NDAyIDAuMDA0MjUgMC42MDMyMSAwLjYwNzQxNFxyXG42NSAgNTA5LjEyICAxMjUuNCAtMS40MDcwIC0wLjcxMDcgMC4wMDcyNjAgMC40ODUzNDYgMC4xNjczMTcgMC4wMTA5OSAwLjczNTQyIDAuNjU5OTI0XHJcbjY2ICA1MjAuNDAgIDExNC4yICAgICAgICAgLTAuNDQ5NCAwLjA2NjAxMCAwLjcxNzI3NCAwLjA3NjIzMyAwLjA4MDUwIDAuODMzOTEgMC44NTk1MjNcclxuNzAgIDUzNi4zMSAgMTAzLjIgICAgICAgICAtMC4yMzQ1IDAuMjQyMjcyIDAuOTI2MzI1IDAuMDI3MDg2IDAuMjAyNTkgMC43NzQ3NCAxLjE5NTY4NFxyXG43MSAgNTQ4LjExICAgOTMuMiAgICAgICAgIC0wLjA1NTkgMC40MDY2NjMgMC45OTA1ODcgMC4wMTAyODQgMC4yODgwNyAwLjcwNDYwIDEuNDEwMDk3XHJcbjcyICA1NTUuOTYgICA4NC4yICAgICAgICAgIDAuMTAxNiAwLjUyNzY0NiAwLjk5OTg2MiAwLjAwNTMyMSAwLjM0NDIyIDAuNjUyMzAgMS41MzI4MzBcclxuNzMgIDU2MC43NCAgIDc3LjMgICAgICAgICAgMC4yMjU0IDAuNjA2ODczIDAuOTkzMjI0IDAuMDAzNjk1IDAuMzc4MzggMC42MTkzMCAxLjYwMzc5M1xyXG43NCAgNTY0LjE4ICAgNzEuNiAgICAgICAgICAwLjMzMjcgMC42NjQ1OTkgMC45ODE5ODEgMC4wMDI4NjggMC40MDI5MCAwLjU5NTMzIDEuNjQ5NDQ5XHJcbjc1ICA1NjYuNzggICA2Ni45ICAgICAgICAgIDAuNDI2NSAwLjcwODM1OCAwLjk3MDI1MiAwLjAwMjQ3MCAwLjQyMTQxIDAuNTc3MTYgMS42ODEwODFcclxuNzYgIDU2OC45MiAgIDYyLjggICAgICAgICAgMC41MTQwIDAuNzQ0MTgyIDAuOTU4NTkyIDAuMDAyMjA1IDAuNDM2NDcgMC41NjIyMiAxLjcwNDk4MVxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZSBhbmdsZS1zb3J0ZWQgdGFibGUgKi9cclxudmFyIHRhYmxlID0gY29sb3JvaWQudGFibGU7XHJcbnZhciBhbmdsZVRhYmxlID0gW10uY29uY2F0KHRhYmxlLnNsaWNlKC0xMyksdGFibGUuc2xpY2UoMCwgLTEzKSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNvbWUgcHJlY2FsY3VsYXRpb25zXHJcbiAqIDLCsCBENjUgd2hpdGVwb2ludCBpcyB1c2VkXHJcbiAqL1xyXG52YXIgaSA9ICdENjUnO1xyXG52YXIgbyA9IDI7XHJcblxyXG52YXIgWG4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVswXTtcclxudmFyIFluID0geHl6LndoaXRlcG9pbnRbb11baV1bMV07XHJcbnZhciBabiA9IHh5ei53aGl0ZXBvaW50W29dW2ldWzJdO1xyXG5cclxudmFyIHkwID0gWG4gLyAoWG4gKyBZbiArIFpuKTtcclxudmFyIHgwID0gWW4gLyAoWG4gKyBZbiArIFpuKTtcclxudmFyIGV3ID0gKFhuICsgWW4gKyBabikgLyAxMDA7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGcm9tIHh5WSB0byBjb2xvcm9pZFxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcmcgeHlZIHR1cGxlXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSBBVFYgY29sb3JvaWQgY2hhbm5lbHNcclxuICovXHJcbnh5eS5jb2xvcm9pZCA9IGZ1bmN0aW9uIChhcmcpIHtcclxuXHR2YXIgeCA9IGFyZ1swXSwgeSA9IGFyZ1sxXSwgWSA9IGFyZ1syXTtcclxuXHJcblx0Ly9jb2xvcm9pZCBsdW1pbm9jaXR5IGlzIHRoZSBzYW1lIGFzIGh1bnRlci1sYWIgbGlnaHRuZXNzICh0aGUgZWFzaWVyIHBhcnQpXHJcblx0dmFyIFYgPSAxMCAqIE1hdGguc3FydChZKTtcclxuXHJcblx0Ly9nZXQgdGhlIGh1ZSBhbmdsZSwgLc+AIC4uLiArz4BcclxuXHR2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHkgLSB5MCwgeCAtIHgwKSAqIDE4MCAvIE1hdGguUEk7XHJcblx0dmFyIHJvdztcclxuXHJcblx0Ly9maW5kIHRoZSBjbG9zZXN0IHJvdyBpbiB0aGUgdGFibGVcclxuXHR2YXIgcHJldiA9IGFuZ2xlVGFibGUubGVuZ3RoIC0gMTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFuZ2xlVGFibGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChhbmdsZSA+IGFuZ2xlVGFibGVbaV1bMV0pIHtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRwcmV2ID0gaTtcclxuXHR9XHJcblx0Ly9yb3VuZCBpbnN0ZWFkIG9mIGNlaWxcclxuXHRyb3cgPSBNYXRoLmFicyhhbmdsZVRhYmxlW2krMV1bMV0gLSBhbmdsZSkgPiBNYXRoLmFicyhhbmdsZVRhYmxlW3ByZXZdWzFdIC0gYW5nbGUpID8gYW5nbGVUYWJsZVtpKzFdIDogYW5nbGVUYWJsZVtwcmV2XTtcclxuXHJcblx0Ly9nZXQgaHVlIGlkXHJcblx0dmFyIEEgPSByb3dbMF07XHJcblxyXG5cdC8vY2FsYyBzYXR1cmF0aW9uXHJcblx0dmFyIHlsID0gcm93WzRdLCBlbCA9IHJvd1syXSwgeGwgPSByb3dbM107XHJcblxyXG5cdC8veWwgc2hvdWxkIGJlIHNjYWxlZCB0byAwLi4xMDA7XHJcblx0dmFyIFlsID0geWwgKiBlbCAqIDEwMDtcclxuXHJcblx0dmFyIFQgPSAxMDAgKiBZKih4MCpldyAtIHgqZXcpIC8gKDEwMCooeCplbCAtIHhsKmVsKSArIFlsKih4MCpldyAtIHgqZXcpKTtcclxuXHQvLyB2YXIgVCA9IDEwMCAqIFkqKDEgLSB5KmV3KSAvICgxMDAqKHkqZWwgLSB5bCplbCkgKyBZbCooMSAtIHkqZXcpKTtcclxuXHJcblx0cmV0dXJuIFtBLCBULCBWXTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFja3dpc2UgLSBmcm9tIGNvbG9yb2lkIHRvIHh5WVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcmcgQ29sb3JvaWQgdmFsdWVzXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSB4eVkgdmFsdWVzXHJcbiAqL1xyXG5jb2xvcm9pZC54eXkgPSBmdW5jdGlvbiAoYXJnKSB7XHJcblx0dmFyIEEgPSBhcmdbMF0sIFQgPSBhcmdbMV0sIFYgPSBhcmdbMl07XHJcblxyXG5cdC8vZmluZCB0aGUgY2xvc2VzdCByb3cgaW4gdGhlIHRhYmxlXHJcblx0dmFyIHJvdztcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoQSA8PSB0YWJsZVtpXVswXSkge1xyXG5cdFx0XHRyb3cgPSB0YWJsZVtpXTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgeWwgPSByb3dbNF0sIGVsID0gcm93WzJdLCB4bCA9IHJvd1szXTtcclxuXHJcblx0dmFyIFkgPSBWKlYgLyAxMDA7XHJcblxyXG5cdHZhciBZbCA9IHlsICogZWwgKiAxMDA7XHJcblxyXG5cdHZhciB4ID0gKDEwMCpZKngwKmV3ICsgMTAwKnhsKmVsKlQgLSBZbCpUKngwKmV3KSAvICgxMDAqVCplbCAtIFlsKlQqZXcgKyAxMDAqWSpldyk7XHJcblx0dmFyIHkgPSAoMTAwKlkgKyAxMDAqVCp5bCplbCAtIFlsKlQpIC8gKFkqZXcqMTAwICsgVCoxMDAqZWwgLSBUKllsKmV3KTtcclxuXHJcblx0Ly8gdmFyIHggPSAoMTAwKlkqZXcqeDAgKyAxMDAqVCplbCp4bCAtIFQqWWwqZXcqeDApIC8gKDEwMCpUKmVsIC0gVCpZbCpldyArIDEwMCpZKmV3KTtcclxuXHQvLyB2YXIgeSA9IDEwMCpZIC8gKDEwMCpUKmVsICsgMTAwKlQqZXcqWWwgKyAxMDAqZXcqWSk7XHJcblxyXG5cdC8vIHZhciB4ID0gKGV3KngwKihWKlYgLSAxMDAqVCpyb3dbNl0pICsgMTAwKlQqZWwqeGwpIC8gKGV3KihWKlYgLSAxMDAqVCpyb3dbNl0pICsgMTAwKlQqZWwpO1xyXG5cdC8vIHZhciB5ID0gVipWLyhldyooVipWICsgMTAwKlQqcm93WzZdKSArIDEwMCpUKmVsKTtcclxuXHJcblx0cmV0dXJuIFt4LHksWV07XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKiBQcm9wZXIgdHJhbnNmb3JtYXRpb24gdG8gYSBYWVogKHZpYSB4eVkpICovXHJcbnh5ei5jb2xvcm9pZCA9IGZ1bmN0aW9uIChhcmcpIHtcclxuXHRyZXR1cm4geHl5LmNvbG9yb2lkKHh5ei54eXkoYXJnKSk7XHJcbn07XHJcbmNvbG9yb2lkLnh5eiA9IGZ1bmN0aW9uIChhcmcpIHtcclxuXHRyZXR1cm4geHl5Lnh5eihjb2xvcm9pZC54eXkoYXJnKSk7XHJcbn07XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29sb3JvaWQ7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcbiAqIEN1YmVoZWxpeCBodHRwOi8vYXN0cm9uLXNvYy5pbi9idWxsZXRpbi8xMUp1bmUvMjg5MzkyMDExLnBkZlxuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvY3ViZWhlbGl4XG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcbnZhciBjbGFtcCA9IHJlcXVpcmUoJ211bWF0aC9jbGFtcCcpO1xuXG5cbnZhciBjdWJlaGVsaXggPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ2N1YmVoZWxpeCcsXG5cdGNoYW5uZWw6IFsnZnJhY3Rpb24nXSxcblx0bWluOiBbMF0sXG5cdG1heDogWzFdXG59O1xuXG5cbi8qKiBEZWZhdWx0IG9wdGlvbnMgZm9yIHNwYWNlICovXG52YXIgZGVmYXVsdHMgPSBjdWJlaGVsaXguZGVmYXVsdHMgPSB7XG5cdC8vMC4uM1xuXHRzdGFydDogMCxcblx0Ly8tMTAuLjEwXG5cdHJvdGF0aW9uOiAwLjUsXG5cdC8vMC4uMStcblx0aHVlOiAxLFxuXHQvLzAuLjJcblx0Z2FtbWE6IDFcbn07XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm0gY3ViZWhlbGl4IGxldmVsIHRvIFJHQlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmcmFjdGlvbiAwLi4xIGN1YmVoZWxpeCBsZXZlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgTWFwcGluZyBvcHRpb25zLCBvdmVycmlkZXMgZGVmYXVsdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gcmdiIHR1cGxlXG4gKi9cbmN1YmVoZWxpeC5yZ2IgPSBmdW5jdGlvbihmcmFjdGlvbiwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRpZiAoZnJhY3Rpb24ubGVuZ3RoKSBmcmFjdGlvbiA9IGZyYWN0aW9uWzBdO1xuXG5cdHZhciBzdGFydCA9IG9wdGlvbnMuc3RhcnQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuc3RhcnQgOiBkZWZhdWx0cy5zdGFydDtcblx0dmFyIHJvdGF0aW9uID0gb3B0aW9ucy5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5yb3RhdGlvbiA6IGRlZmF1bHRzLnJvdGF0aW9uO1xuXHR2YXIgZ2FtbWEgPSBvcHRpb25zLmdhbW1hICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmdhbW1hIDogZGVmYXVsdHMuZ2FtbWE7XG5cdHZhciBodWUgPSBvcHRpb25zLmh1ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5odWUgOiBkZWZhdWx0cy5odWU7XG5cblx0dmFyIGFuZ2xlID0gMiAqIE1hdGguUEkgKiAoc3RhcnQvMyArIDEuMCArIHJvdGF0aW9uICogZnJhY3Rpb24pO1xuXG5cdGZyYWN0aW9uID0gTWF0aC5wb3coZnJhY3Rpb24sIGdhbW1hKTtcblxuXHR2YXIgYW1wID0gaHVlICogZnJhY3Rpb24gKiAoMS1mcmFjdGlvbikvMi4wO1xuXG5cdHZhciByID0gZnJhY3Rpb24gKyBhbXAqKC0wLjE0ODYxKk1hdGguY29zKGFuZ2xlKSsxLjc4Mjc3Kk1hdGguc2luKGFuZ2xlKSk7XG5cdHZhciBnID0gZnJhY3Rpb24gKyBhbXAqKC0wLjI5MjI3Kk1hdGguY29zKGFuZ2xlKS0wLjkwNjQ5Kk1hdGguc2luKGFuZ2xlKSk7XG5cdHZhciBiID0gZnJhY3Rpb24gKyBhbXAqKCsxLjk3Mjk0Kk1hdGguY29zKGFuZ2xlKSk7XG5cblx0ciA9IGNsYW1wKHIsIDAsIDEpO1xuXHRnID0gY2xhbXAoZywgMCwgMSk7XG5cdGIgPSBjbGFtcChiLCAwLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuXG4vKipcbiAqIFJHQiB0byBjdWJlaGVsaXhcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSByZ2IgUkdCIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBjdWJlaGVsaXggZnJhY3Rpb24ocylcbiAqL1xucmdiLmN1YmVoZWxpeCA9IGZ1bmN0aW9uKHJnYikge1xuXHQvL1RPRE8gLSB0aGVyZSBpcyBubyBiYWNrd2lzZSBjb252ZXJzaW9uIHlldFxufTtcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIGNvbG9yLXNwYWNlL2hjZ1xyXG4gKi9cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcclxudmFyIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XHJcbnZhciBoc3YgPSByZXF1aXJlKCcuL2hzdicpO1xyXG52YXIgaHdiID0gcmVxdWlyZSgnLi9od2InKTtcclxudmFyIG1vZCA9IHJlcXVpcmUoJ211bWF0aC9tb2QnKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRuYW1lOiAnaGNnJyxcclxuXHRtaW46IFswLDAsMF0sXHJcblx0bWF4OiBbMzYwLDEwMCwxMDBdLFxyXG5cdGNoYW5uZWw6IFsnaHVlJywgJ2Nocm9tYScsICdncmF5J10sXHJcblx0YWxpYXM6IFsnSENHJywgJ0hTRyddLFxyXG5cclxuXHRyZ2I6IGZ1bmN0aW9uKGhjZykge1xyXG5cdFx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XHJcblx0XHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcclxuXHRcdHZhciBnID0gaGNnWzJdIC8gMTAwO1xyXG5cdFx0aWYgKGMgPT09IDAuMCkge1xyXG5cdFx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGhpID0gbW9kKGgsIDEpICogNjtcclxuXHRcdHZhciB2ID0gbW9kKGhpLCAxKTtcclxuXHRcdHZhciBwdXJlID0gWzAsIDAsIDBdO1xyXG5cdFx0dmFyIHcgPSAxIC0gdjtcclxuXHRcdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcclxuXHRcdH1cclxuXHRcdHZhciBtZyA9ICgxLjAgLSBjKSAqIGc7XHJcblx0XHR2YXIgcmdiID0gW1xyXG5cdFx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXHJcblx0XHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcclxuXHRcdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XHJcblx0XHRdO1xyXG5cdFx0cmV0dXJuIHJnYjtcclxuXHR9LFxyXG5cclxuXHRoc2w6IGZ1bmN0aW9uKGhjZykge1xyXG5cdFx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XHJcblx0XHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcclxuXHRcdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XHJcblx0XHR2YXIgcyA9IDA7XHJcblx0XHRpZiAobCA8IDEuMCAmJiBsID4gMC4wKSB7XHJcblx0XHRcdGlmIChsIDwgMC41KSB7XHJcblx0XHRcdFx0cyA9IGMgLyAoMiAqIGwpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xyXG5cdH0sXHJcblxyXG5cdGhzdjogZnVuY3Rpb24oaGNnKXtcclxuXHRcdHZhciBjID0gaGNnWzFdIC8gMTAwO1xyXG5cdFx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XHJcblx0XHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xyXG5cdFx0dmFyIHJlcztcclxuXHRcdGlmICh2ID4gMC4wKSB7XHJcblx0XHRcdHZhciBmID0gYyAvIHY7XHJcblx0XHRcdHJlcyA9IFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVzID0gW2hjZ1swXSwgMCwgdiAqIDEwMF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH0sXHJcblxyXG5cdGh3YjogZnVuY3Rpb24oaGNnKXtcclxuXHRcdHZhciBjID0gaGNnWzFdIC8gMTAwO1xyXG5cdFx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XHJcblx0XHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xyXG5cdFx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vL2FwcGVuZCByZ2JcclxucmdiLmhjZyA9IGZ1bmN0aW9uKHJnYikge1xyXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xyXG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xyXG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xyXG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XHJcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcclxuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XHJcblx0dmFyIGdyYXlzY2FsZTtcclxuXHR2YXIgaHVlO1xyXG5cdGlmIChjaHJvbWEgPCAxKSB7XHJcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGdyYXlzY2FsZSA9IDA7XHJcblx0fVxyXG5cdGlmIChjaHJvbWEgPiAwKSB7XHJcblx0XHRpZiAobWF4ID09PSByKSB7XHJcblx0XHRcdGh1ZSA9IG1vZCgoZyAtIGIpIC8gY2hyb21hLCA2KTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0aWYgKG1heCA9PT0gZykge1xyXG5cdFx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hO1xyXG5cdFx0fVxyXG5cdFx0aHVlIC89IDY7XHJcblx0XHRodWUgPSBtb2QoaHVlLCAxKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aHVlID0gMDtcclxuXHR9XHJcblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcclxufTtcclxuXHJcbi8vZXh0ZW5kIGhzbFxyXG5oc2wuaGNnID0gZnVuY3Rpb24oaHNsKSB7XHJcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XHJcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XHJcblx0dmFyIGMgPSAwO1xyXG5cdGlmIChsIDwgMC41KSB7XHJcblx0XHRjID0gMi4wICogcyAqIGw7XHJcblx0fSBlbHNlIHtcclxuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xyXG5cdH1cclxuXHR2YXIgcmVzO1xyXG5cdGlmIChjIDwgMS4wKSB7XHJcblx0XHR2YXIgZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XHJcblx0XHRyZXMgPSBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzID0gW2hzbFswXSwgYyAqIDEwMCwgMF07XHJcblx0fVxyXG5cdHJldHVybiByZXM7XHJcbn07XHJcblxyXG4vL2V4dGVuZCBoc3ZcclxuaHN2LmhjZyA9IGZ1bmN0aW9uKGhzdil7XHJcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XHJcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XHJcblx0dmFyIGMgPSBzICogdjtcclxuXHR2YXIgcmVzO1xyXG5cdGlmIChjIDwgMS4wKSB7XHJcblx0XHR2YXIgZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xyXG5cdFx0cmVzID0gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XHJcblx0fSBlbHNlIHtcclxuXHRcdHJlcyA9IFtoc3ZbMF0sIGMgKiAxMDAsIDBdO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuLy9leHRlbmQgaHdiXHJcbmh3Yi5oY2cgPSBmdW5jdGlvbihod2Ipe1xyXG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xyXG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xyXG5cdHZhciB2ID0gMSAtIGI7XHJcblx0dmFyIGMgPSB2IC0gdztcclxuXHR2YXIgZyA9IDA7XHJcblx0aWYgKGMgPCAxKSB7XHJcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XHJcblx0fVxyXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcclxufVxyXG4iLCIvKipcbiAqIEhTViBvcHRpbWl6ZWQgZm9yIHNoYWRlcnNcbiAqIGh0dHA6Ly9jaGlsbGlhbnQuYmxvZ3Nwb3QuY2EvMjAxMi8wOC9yZ2JoY3ktaW4taGxzbC5odG1sXG4gKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9oY3lcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgbG9vcCA9IHJlcXVpcmUoJ211bWF0aC9tb2QnKTtcbnZhciBjbGFtcCA9IHJlcXVpcmUoJ211bWF0aC9jbGFtcCcpO1xuXG5cbnZhciBoY3kgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ2hjeScsXG5cdG1pbjogWzAsMCwwXSxcblx0bWF4OiBbMzYwLDEwMCwyNTVdLFxuXHRjaGFubmVsOiBbJ2h1ZScsICdjaHJvbWEnLCAnbHVtaW5hbmNlJ10sXG5cdGFsaWFzOiBbJ0hDWSddXG59O1xuXG5cbi8qKlxuICogSENZIHRvIFJHQlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGhjeSBDaGFubmVsIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgY2hhbm5lbCB2YWx1ZXNcbiAqL1xuaGN5LnJnYiA9IGZ1bmN0aW9uIChoY3kpIHtcblx0dmFyIGggPSBsb29wKGhjeVswXSwgMCwgMzYwKSAqIE1hdGguUEkgLyAxODA7XG5cdHZhciBzID0gY2xhbXAoaGN5WzFdLCAwLCAxMDApIC8gMTAwO1xuXHR2YXIgaSA9IGNsYW1wKGhjeVsyXSwgMCwgMjU1KSAvIDI1NTtcblxuXHR2YXIgcGkzID0gTWF0aC5QSSAvIDM7XG5cblx0dmFyIHIsIGcsIGI7XG5cdGlmIChoIDwgKDIgKiBwaTMpICkge1xuXHRcdGIgPSBpICogKCAxIC0gcyApO1xuXHRcdHIgPSBpICogKDEgKyAoIHMgKiBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpO1xuXHRcdGcgPSBpICogKDEgKyAoIHMgKiAoIDEgLSBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpKTtcblx0fVxuXHRlbHNlIGlmIChoIDwgKDQgKiBwaTMpICkge1xuXHRcdGggPSBoIC0gMiAqIHBpMztcblx0XHRyID0gaSAqICggMSAtIHMgKTtcblx0XHRnID0gaSAqICgxICsgKCBzICogTWF0aC5jb3MoaCkgLyBNYXRoLmNvcyhwaTMgLSBoKSApKTtcblx0XHRiID0gaSAqICgxICsgKCBzICogKCAxIC0gTWF0aC5jb3MoaCkgLyBNYXRoLmNvcyhwaTMgLSBoKSApKSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0aCA9IGggLSA0ICogcGkzO1xuXHRcdGcgPSBpICogKCAxIC0gcyApO1xuXHRcdGIgPSBpICogKDEgKyAoIHMgKiBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpO1xuXHRcdHIgPSBpICogKDEgKyAoIHMgKiAoIDEgLSBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpKTtcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5cbi8qKlxuICogUkdCIHRvIEhDWVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHJnYiBDaGFubmVsIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBIQ1kgY2hhbm5lbCB2YWx1ZXNcbiAqL1xucmdiLmhjeSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHN1bSA9IHJnYlswXSArIHJnYlsxXSArIHJnYlsyXTtcblxuXHR2YXIgciA9IHJnYlswXSAvIHN1bTtcblx0dmFyIGcgPSByZ2JbMV0gLyBzdW07XG5cdHZhciBiID0gcmdiWzJdIC8gc3VtO1xuXG5cdHZhciBoID0gTWF0aC5hY29zKFxuXHRcdCggMC41ICogKChyIC0gZykgKyAociAtIGIpKSApIC9cblx0XHRNYXRoLnNxcnQoIChyIC0gZykqKHIgLSBnKSArIChyIC0gYikqKGcgLSBiKSApXG5cdCk7XG5cdGlmIChiID4gZykge1xuXHRcdGggPSAyICogTWF0aC5QSSAtIGg7XG5cdH1cblxuXHR2YXIgcyA9IDEgLSAzICogTWF0aC5taW4ociwgZywgYik7XG5cblx0dmFyIGkgPSBzdW0gLyAzO1xuXG5cdHJldHVybiBbaCAqIDE4MCAvIE1hdGguUEksIHMgKiAxMDAsIGldO1xufTtcbiIsIi8qKlxyXG4gKiBBIHVuaWZvcm0gd3JhcHBlciBmb3IgaHBsdXYuXHJcbiAqIC8vIGh0dHA6Ly93d3cuaHNsdXYub3JnL1xyXG4gKlxyXG4gKiBAbW9kdWxlIGNvbG9yLXNwYWNlL2hwbHV2XHJcbiAqL1xyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xyXG52YXIgbGNodXYgPSByZXF1aXJlKCcuL2xjaHV2Jyk7XHJcbnZhciBfaHNsdXYgPSByZXF1aXJlKCdoc2x1dicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0bmFtZTogJ2hwbHV2JyxcclxuXHRtaW46IFswLDAsMF0sXHJcblx0bWF4OiBbMzYwLDEwMCwxMDBdLFxyXG5cdGNoYW5uZWw6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJ10sXHJcblx0YWxpYXM6IFsnSFBMdXYnLCAnSHVTTHAnXSxcclxuXHJcblx0bGNodXY6IF9oc2x1di5ocGx1dlRvTGNoLFxyXG5cdHh5ejogZnVuY3Rpb24oYXJnKXtyZXR1cm4gbGNodXYueHl6KF9oc2x1di5ocGx1dlRvTGNoKGFyZykpO30sXHJcblxyXG5cdC8vYSBzaG9ydGVyIHdheSB0byBjb252ZXJ0IHRvIGh1c2xcclxuXHRoc2x1djogZnVuY3Rpb24oYXJnKXtcclxuXHRcdHJldHVybiBfaHNsdXYubGNoVG9Ic2x1diggX2hzbHV2LmhwbHV2VG9MY2goYXJnKSk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbi8vZXh0ZW5kIGxjaHV2LCB4eXpcclxubGNodXYuaHBsdXYgPSBfaHNsdXYubGNoVG9IcGx1djtcclxueHl6LmhwbHV2ID0gZnVuY3Rpb24oYXJnKXtyZXR1cm4gX2hzbHV2LmxjaFRvSHBsdXYoeHl6LmxjaHV2KGFyZykpO307XHJcbiIsIi8qKlxuICogaHR0cDovL3d3dy5jc2UudXNmLmVkdS9+bXNocmV2ZS9yZ2ItdG8taHNpXG4gKiBodHRwOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEzMDEyNDA1NDI0NS9odHRwOi8vd2ViMi5jbGFya3Nvbi5lZHUvY2xhc3MvaW1hZ2VfcHJvY2Vzcy9SR0JfdG9fSFNJLnBkZlxuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvaHNsXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIGxvb3AgPSByZXF1aXJlKCdtdW1hdGgvbW9kJyk7XG52YXIgY2xhbXAgPSByZXF1aXJlKCdtdW1hdGgvY2xhbXAnKTtcblxuXG52YXIgaHNpID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICdoc2knLFxuXHRtaW46IFswLDAsMF0sXG5cdG1heDogWzM2MCwxMDAsMjU1XSxcblx0Y2hhbm5lbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdpbnRlbnNpdHknXSxcblx0YWxpYXM6IFsnSFNJJ11cbn07XG5cblxuLyoqXG4gKiBIU0kgdG8gUkdCXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaHNpIENoYW5uZWwgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFJHQiBjaGFubmVsIHZhbHVlc1xuICovXG5oc2kucmdiID0gZnVuY3Rpb24gKGhzaSkge1xuXHR2YXIgaCA9IGxvb3AoaHNpWzBdLCAwLCAzNjApICogTWF0aC5QSSAvIDE4MDtcblx0dmFyIHMgPSBjbGFtcChoc2lbMV0sIDAsIDEwMCkgLyAxMDA7XG5cdHZhciBpID0gY2xhbXAoaHNpWzJdLCAwLCAyNTUpIC8gMjU1O1xuXG5cdHZhciBwaTMgPSBNYXRoLlBJIC8gMztcblxuXHR2YXIgciwgZywgYjtcblx0aWYgKGggPCAoMiAqIHBpMykgKSB7XG5cdFx0YiA9IGkgKiAoIDEgLSBzICk7XG5cdFx0ciA9IGkgKiAoMSArICggcyAqIE1hdGguY29zKGgpIC8gTWF0aC5jb3MocGkzIC0gaCkgKSk7XG5cdFx0ZyA9IGkgKiAoMSArICggcyAqICggMSAtIE1hdGguY29zKGgpIC8gTWF0aC5jb3MocGkzIC0gaCkgKSkpO1xuXHR9XG5cdGVsc2UgaWYgKGggPCAoNCAqIHBpMykgKSB7XG5cdFx0aCA9IGggLSAyICogcGkzO1xuXHRcdHIgPSBpICogKCAxIC0gcyApO1xuXHRcdGcgPSBpICogKDEgKyAoIHMgKiBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpO1xuXHRcdGIgPSBpICogKDEgKyAoIHMgKiAoIDEgLSBNYXRoLmNvcyhoKSAvIE1hdGguY29zKHBpMyAtIGgpICkpKTtcblx0fVxuXHRlbHNlIHtcblx0XHRoID0gaCAtIDQgKiBwaTM7XG5cdFx0ZyA9IGkgKiAoIDEgLSBzICk7XG5cdFx0YiA9IGkgKiAoMSArICggcyAqIE1hdGguY29zKGgpIC8gTWF0aC5jb3MocGkzIC0gaCkgKSk7XG5cdFx0ciA9IGkgKiAoMSArICggcyAqICggMSAtIE1hdGguY29zKGgpIC8gTWF0aC5jb3MocGkzIC0gaCkgKSkpO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cblxuLyoqXG4gKiBSR0IgdG8gSFNJXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcmdiIENoYW5uZWwgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEhTSSBjaGFubmVsIHZhbHVlc1xuICovXG5yZ2IuaHNpID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgc3VtID0gcmdiWzBdICsgcmdiWzFdICsgcmdiWzJdO1xuXG5cdHZhciByID0gcmdiWzBdIC8gc3VtO1xuXHR2YXIgZyA9IHJnYlsxXSAvIHN1bTtcblx0dmFyIGIgPSByZ2JbMl0gLyBzdW07XG5cblx0dmFyIGggPSBNYXRoLmFjb3MoXG5cdFx0KCAwLjUgKiAoKHIgLSBnKSArIChyIC0gYikpICkgL1xuXHRcdE1hdGguc3FydCggKHIgLSBnKSoociAtIGcpICsgKHIgLSBiKSooZyAtIGIpIClcblx0KTtcblx0aWYgKGIgPiBnKSB7XG5cdFx0aCA9IDIgKiBNYXRoLlBJIC0gaDtcblx0fVxuXG5cdHZhciBzID0gMSAtIDMgKiBNYXRoLm1pbihyLCBnLCBiKTtcblxuXHR2YXIgaSA9IHN1bSAvIDM7XG5cblx0cmV0dXJuIFtoICogMTgwIC8gTWF0aC5QSSwgcyAqIDEwMCwgaV07XG59O1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbG9yLXNwYWNlL2hzbFxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnaHNsJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFszNjAsMTAwLDEwMF0sXG5cdGNoYW5uZWw6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJ10sXG5cdGFsaWFzOiBbJ0hTTCddLFxuXG5cdHJnYjogZnVuY3Rpb24oaHNsKSB7XG5cdFx0dmFyIGggPSBoc2xbMF0gLyAzNjAsXG5cdFx0XHRcdHMgPSBoc2xbMV0gLyAxMDAsXG5cdFx0XHRcdGwgPSBoc2xbMl0gLyAxMDAsXG5cdFx0XHRcdHQxLCB0MiwgdDMsIHJnYiwgdmFsO1xuXG5cdFx0aWYgKHMgPT09IDApIHtcblx0XHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHRcdH1cblxuXHRcdGlmIChsIDwgMC41KSB7XG5cdFx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHQyID0gbCArIHMgLSBsICogcztcblx0XHR9XG5cdFx0dDEgPSAyICogbCAtIHQyO1xuXG5cdFx0cmdiID0gWzAsIDAsIDBdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHR0MyA9IGggKyAxIC8gMyAqIC0gKGkgLSAxKTtcblx0XHRcdGlmICh0MyA8IDApIHtcblx0XHRcdFx0dDMrKztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHQzID4gMSkge1xuXHRcdFx0XHR0My0tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdFx0dmFsID0gdDI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB0MTtcblx0XHRcdH1cblxuXHRcdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH1cbn07XG5cblxuLy9leHRlbmQgcmdiXG5yZ2IuaHNsID0gZnVuY3Rpb24ocmdiKSB7XG5cdHZhciByID0gcmdiWzBdLzI1NSxcblx0XHRcdGcgPSByZ2JbMV0vMjU1LFxuXHRcdFx0YiA9IHJnYlsyXS8yNTUsXG5cdFx0XHRtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcblx0XHRcdG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuXHRcdFx0ZGVsdGEgPSBtYXggLSBtaW4sXG5cdFx0XHRoLCBzLCBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9XG5cdGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH1cblx0ZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH1cblx0ZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9XG5cdGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH1cblx0ZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG4iLCIvKipcclxuICogQSB1bmlmb3JtIHdyYXBwZXIgZm9yIGhzbHV2LlxyXG4gKiAvLyBodHRwOi8vd3d3LmhzbHV2Lm9yZy9cclxuICpcclxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9oc2x1dlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcclxudmFyIGxjaHV2ID0gcmVxdWlyZSgnLi9sY2h1dicpO1xyXG52YXIgX2hzbHV2ID0gcmVxdWlyZSgnaHNsdXYnKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRuYW1lOiAnaHNsdXYnLFxyXG5cdG1pbjogWzAsMCwwXSxcclxuXHRtYXg6IFszNjAsMTAwLDEwMF0sXHJcblx0Y2hhbm5lbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnXSxcclxuXHRhbGlhczogWydIU0x1dicsICdIdVNMJ10sXHJcblxyXG5cdGxjaHV2OiBfaHNsdXYuaHNsdXZUb0xjaCxcclxuXHJcblx0eHl6OiBmdW5jdGlvbihhcmcpe1xyXG5cdFx0cmV0dXJuIGxjaHV2Lnh5eihfaHNsdXYuaHNsdXZUb0xjaChhcmcpKTtcclxuXHR9LFxyXG5cclxuXHQvL2Egc2hvcnRlciB3YXkgdG8gY29udmVydCB0byBocGx1dlxyXG5cdGhwbHV2OiBmdW5jdGlvbihhcmcpe1xyXG5cdFx0cmV0dXJuIF9oc2x1di5sY2hUb0hwbHV2KCBfaHNsdXYuaHNsdXZUb0xjaChhcmcpKTtcclxuXHR9XHJcbn07XHJcblxyXG4vL2V4dGVuZCBsY2h1diwgeHl6XHJcbmxjaHV2LmhzbHV2ID0gX2hzbHV2LmxjaFRvSHNsdXY7XHJcbnh5ei5oc2x1diA9IGZ1bmN0aW9uKGFyZyl7XHJcblx0cmV0dXJuIF9oc2x1di5sY2hUb0hzbHV2KHh5ei5sY2h1dihhcmcpKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvaHNwXHJcbiAqL1xyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpLFxyXG4gIFByID0gMC4yOTksXHJcbiAgUGcgPSAwLjU4NyxcclxuICBQYiA9IDAuMTE0O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbmFtZTogJ2hzcCcsXHJcbiAgbWluOiBbMCwgMCwgMF0sXHJcbiAgbWF4OiBbMzYwLCAxMDAsIDI1NV0sXHJcbiAgY2hhbm5lbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdwZXJjZWl2ZWRfYnJpZ2h0bmVzcyddLFxyXG4gIGFsaWFzOiBbJ0hTUCddLFxyXG5cclxuICByZ2I6IGZ1bmN0aW9uIChoc3ApIHtcclxuICAgIHZhciBoID0gaHNwWzBdLzM2MC4wLFxyXG4gICAgICBzID0gaHNwWzFdLzEwMC4wLFxyXG4gICAgICBwID0gaHNwWzJdLFxyXG4gICAgICByLCBnLCBiLCBwYXJ0LFxyXG4gICAgICBtaW5PdmVyTWF4ID0gMS4wIC0gcztcclxuXHJcbiAgICBpZiAobWluT3Zlck1heCA+IDAuMCkge1xyXG4gICAgICBpZiAoaCA8IDEuMCAvIDYuMCkgeyAvLyAgUj5HPkJcclxuICAgICAgICBoID0gNi4wICogKGggLSAwLjAgLyA2LjApO1xyXG4gICAgICAgIHBhcnQgPSAxLjAgKyBoICogKDEuMCAvIG1pbk92ZXJNYXggLSAxLjApO1xyXG4gICAgICAgIGIgPSBwIC8gTWF0aC5zcXJ0KFByIC8gbWluT3Zlck1heCAvIG1pbk92ZXJNYXggKyBQZyAqIHBhcnQgKiBwYXJ0ICsgUGIpO1xyXG4gICAgICAgIHIgPSAoYikgLyBtaW5PdmVyTWF4O1xyXG4gICAgICAgIGcgPSAoYikgKyBoICogKChyKSAtIChiKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaCA8IDIuMCAvIDYuMCkgeyAvLyAgRz5SPkJcclxuICAgICAgICBoID0gNi4wICogKC1oICsgMi4wIC8gNi4wKTtcclxuICAgICAgICBwYXJ0ID0gMS4wICsgaCAqICgxLjAgLyBtaW5PdmVyTWF4IC0gMS4wKTtcclxuICAgICAgICBiID0gcCAvIE1hdGguc3FydChQZyAvIG1pbk92ZXJNYXggLyBtaW5PdmVyTWF4ICsgUHIgKiBwYXJ0ICogcGFydCArIFBiKTtcclxuICAgICAgICBnID0gKGIpIC8gbWluT3Zlck1heDtcclxuICAgICAgICByID0gKGIpICsgaCAqICgoZykgLSAoYikpO1xyXG4gICAgICB9IGVsc2UgaWYgKGggPCAzLjAgLyA2LjApIHsgLy8gIEc+Qj5SXHJcbiAgICAgICAgaCA9IDYuMCAqIChoIC0gMi4wIC8gNi4wKTtcclxuICAgICAgICBwYXJ0ID0gMS4wICsgaCAqICgxLjAgLyBtaW5PdmVyTWF4IC0gMS4wKTtcclxuICAgICAgICByID0gcCAvIE1hdGguc3FydChQZyAvIG1pbk92ZXJNYXggLyBtaW5PdmVyTWF4ICsgUGIgKiBwYXJ0ICogcGFydCArIFByKTtcclxuICAgICAgICBnID0gKHIpIC8gbWluT3Zlck1heDtcclxuICAgICAgICBiID0gKHIpICsgaCAqICgoZykgLSAocikpO1xyXG4gICAgICB9IGVsc2UgaWYgKGggPCA0LjAgLyA2LjApIHsgLy8gIEI+Rz5SXHJcbiAgICAgICAgaCA9IDYuMCAqICgtaCArIDQuMCAvIDYuMCk7XHJcbiAgICAgICAgcGFydCA9IDEuMCArIGggKiAoMS4wIC8gbWluT3Zlck1heCAtIDEuMCk7XHJcbiAgICAgICAgciA9IHAgLyBNYXRoLnNxcnQoUGIgLyBtaW5PdmVyTWF4IC8gbWluT3Zlck1heCArIFBnICogcGFydCAqIHBhcnQgKyBQcik7XHJcbiAgICAgICAgYiA9IChyKSAvIG1pbk92ZXJNYXg7XHJcbiAgICAgICAgZyA9IChyKSArIGggKiAoKGIpIC0gKHIpKTtcclxuICAgICAgfSBlbHNlIGlmIChoIDwgNS4wIC8gNi4wKSB7IC8vICBCPlI+R1xyXG4gICAgICAgIGggPSA2LjAgKiAoaCAtIDQuMCAvIDYuMCk7XHJcbiAgICAgICAgcGFydCA9IDEuMCArIGggKiAoMS4wIC8gbWluT3Zlck1heCAtIDEuMCk7XHJcbiAgICAgICAgZyA9IHAgLyBNYXRoLnNxcnQoUGIgLyBtaW5PdmVyTWF4IC8gbWluT3Zlck1heCArIFByICogcGFydCAqIHBhcnQgKyBQZyk7XHJcbiAgICAgICAgYiA9IChnKSAvIG1pbk92ZXJNYXg7XHJcbiAgICAgICAgciA9IChnKSArIGggKiAoKGIpIC0gKGcpKTtcclxuICAgICAgfSBlbHNlIHsgLy8gIFI+Qj5HXHJcbiAgICAgICAgaCA9IDYuMCAqICgtaCArIDYuMCAvIDYuMCk7XHJcbiAgICAgICAgcGFydCA9IDEuMCArIGggKiAoMS4wIC8gbWluT3Zlck1heCAtIDEuMCk7XHJcbiAgICAgICAgZyA9IHAgLyBNYXRoLnNxcnQoUHIgLyBtaW5PdmVyTWF4IC8gbWluT3Zlck1heCArIFBiICogcGFydCAqIHBhcnQgKyBQZyk7XHJcbiAgICAgICAgciA9IChnKSAvIG1pbk92ZXJNYXg7XHJcbiAgICAgICAgYiA9IChnKSArIGggKiAoKHIpIC0gKGcpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGggPCAxLjAgLyA2LjApIHsgLy8gIFI+Rz5CXHJcbiAgICAgICAgaCA9IDYuMCAqIChoIC0gMC4wIC8gNi4wKTtcclxuICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwIC8gKFByICsgUGcgKiBoICogaCkpO1xyXG4gICAgICAgIGcgPSAocikgKiBoO1xyXG4gICAgICAgIGIgPSAwLjA7XHJcbiAgICAgIH0gZWxzZSBpZiAoaCA8IDIuMCAvIDYuMCkgeyAvLyAgRz5SPkJcclxuICAgICAgICBoID0gNi4wICogKC1oICsgMi4wIC8gNi4wKTtcclxuICAgICAgICBnID0gTWF0aC5zcXJ0KHAgKiBwIC8gKFBnICsgUHIgKiBoICogaCkpO1xyXG4gICAgICAgIHIgPSAoZykgKiBoO1xyXG4gICAgICAgIGIgPSAwLjA7XHJcbiAgICAgIH0gZWxzZSBpZiAoaCA8IDMuMCAvIDYuMCkgeyAvLyAgRz5CPlJcclxuICAgICAgICBoID0gNi4wICogKGggLSAyLjAgLyA2LjApO1xyXG4gICAgICAgIGcgPSBNYXRoLnNxcnQocCAqIHAgLyAoUGcgKyBQYiAqIGggKiBoKSk7XHJcbiAgICAgICAgYiA9IChnKSAqIGg7XHJcbiAgICAgICAgciA9IDAuMDtcclxuICAgICAgfSBlbHNlIGlmIChoIDwgNC4wIC8gNi4wKSB7IC8vICBCPkc+UlxyXG4gICAgICAgIGggPSA2LjAgKiAoLWggKyA0LjAgLyA2LjApO1xyXG4gICAgICAgIGIgPSBNYXRoLnNxcnQocCAqIHAgLyAoUGIgKyBQZyAqIGggKiBoKSk7XHJcbiAgICAgICAgZyA9IChiKSAqIGg7XHJcbiAgICAgICAgciA9IDAuMDtcclxuICAgICAgfSBlbHNlIGlmIChoIDwgNS4wIC8gNi4wKSB7IC8vICBCPlI+R1xyXG4gICAgICAgIGggPSA2LjAgKiAoaCAtIDQuMCAvIDYuMCk7XHJcbiAgICAgICAgYiA9IE1hdGguc3FydChwICogcCAvIChQYiArIFByICogaCAqIGgpKTtcclxuICAgICAgICByID0gKGIpICogaDtcclxuICAgICAgICBnID0gMC4wO1xyXG4gICAgICB9IGVsc2UgeyAvLyAgUj5CPkdcclxuICAgICAgICBoID0gNi4wICogKC1oICsgNi4wIC8gNi4wKTtcclxuICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwIC8gKFByICsgUGIgKiBoICogaCkpO1xyXG4gICAgICAgIGIgPSAocikgKiBoO1xyXG4gICAgICAgIGcgPSAwLjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblx0cmV0dXJuIFtNYXRoLnJvdW5kKHIpLCBNYXRoLnJvdW5kKGcpLCBNYXRoLnJvdW5kKGIpXTtcclxuICB9XHJcblxyXG4gIFxyXG59O1xyXG5cclxuXHJcbi8vYXBwZW5kIHJnYlxyXG5yZ2IuaHNwID0gZnVuY3Rpb24gKHJnYikge1xyXG4gIHZhciByID0gcGFyc2VJbnQocmdiWzBdLCAxMCksXHJcbiAgICBnID0gcGFyc2VJbnQocmdiWzFdLCAxMCksXHJcbiAgICBiID0gcGFyc2VJbnQocmdiWzJdLCAxMCksXHJcbiAgICBoLCBzLCBwO1xyXG5cclxuICAvLyAgQ2FsY3VsYXRlIHRoZSBQZXJjZWl2ZWQgYnJpZ2h0bmVzc1xyXG4gIHAgPSBNYXRoLnNxcnQociAqIHIgKiBQciArIGcgKiBnICogUGcgKyBiICogYiAqIFBiKTtcclxuXHJcbiAgLy8gIENhbGN1bGF0ZSB0aGUgSHVlIGFuZCBTYXR1cmF0aW9uXHJcbiAgaWYgKHIgPT09IGcgJiYgciA9PT0gYikge1xyXG4gICAgaCA9IDAuMDtcclxuICAgIHMgPSAwLjA7XHJcbiAgfSBlbHNlIHsgICAgXHJcbiAgICAvLyAgUiBpcyBsYXJnZXN0XHJcbiAgICBpZiAociA+PSBnICYmIHIgPj0gYikge1xyXG4gICAgICBpZiAoYiA+PSBnKSB7XHJcbiAgICAgICAgaCA9IDYuMCAvIDYuMCAtIDEuMCAvIDYuMCAqIChiIC0gZykgLyAociAtIGcpO1xyXG4gICAgICAgIHMgPSAxLjAgLSBnIC8gcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoID0gMC4wIC8gNi4wICsgMS4wIC8gNi4wICogKGcgLSBiKSAvIChyIC0gYik7XHJcbiAgICAgICAgcyA9IDEuMCAtIGIgLyByO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRyBpcyBsYXJnZXN0XHJcbiAgICBpZiAoZyA+PSByICYmIGcgPj0gYikge1xyXG4gICAgICBpZiAociA+PSBiKSB7XHJcbiAgICAgICAgaCA9IDIuMCAvIDYuMCAtIDEuMCAvIDYuMCAqIChyIC0gYikgLyAoZyAtIGIpO1xyXG4gICAgICAgIHMgPSAxIC0gYiAvIGc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaCA9IDIuMCAvIDYuMCArIDEuMCAvIDYuMCAqIChiIC0gcikgLyAoZyAtIHIpO1xyXG4gICAgICAgIHMgPSAxLjAgLSByIC8gZztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEIgaXMgbGFyZ2VzdFxyXG4gICAgaWYgKGIgPj0gciAmJiBiID49IGcpIHtcclxuICAgICAgaWYgKGcgPj0gcikge1xyXG4gICAgICAgIGggPSA0LjAgLyA2LjAgLSAxLjAgLyA2LjAgKiAoZyAtIHIpIC8gKGIgLSByKTtcclxuICAgICAgICBzID0gMS4wIC0gciAvIGI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaCA9IDQuMCAvIDYuMCArIDEuMCAvIDYuMCAqIChyIC0gZykgLyAoYiAtIGcpO1xyXG4gICAgICAgIHMgPSAxLjAgLSBnIC8gYjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG4gIHJldHVybiBbTWF0aC5yb3VuZChoKjM2MC4wKSwgcyoxMDAuMCwgTWF0aC5yb3VuZChwKV07XHJcbn07XHJcbiIsIi8qKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9oc3ZcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xudmFyIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnaHN2Jyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFszNjAsMTAwLDEwMF0sXG5cdGNoYW5uZWw6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAndmFsdWUnXSxcblx0YWxpYXM6IFsnSFNWJywgJ0hTQiddLFxuXG5cdHJnYjogZnVuY3Rpb24oaHN2KSB7XG5cdFx0dmFyIGggPSBoc3ZbMF0gLyA2MCxcblx0XHRcdHMgPSBoc3ZbMV0gLyAxMDAsXG5cdFx0XHR2ID0gaHN2WzJdIC8gMTAwLFxuXHRcdFx0aGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHRcdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCksXG5cdFx0XHRwID0gMjU1ICogdiAqICgxIC0gcyksXG5cdFx0XHRxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSksXG5cdFx0XHR0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdFx0diAqPSAyNTU7XG5cblx0XHRzd2l0Y2goaGkpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0XHR9XG5cdH0sXG5cblx0aHNsOiBmdW5jdGlvbihoc3YpIHtcblx0XHR2YXIgaCA9IGhzdlswXSxcblx0XHRcdHMgPSBoc3ZbMV0gLyAxMDAsXG5cdFx0XHR2ID0gaHN2WzJdIC8gMTAwLFxuXHRcdFx0c2wsIGw7XG5cblx0XHRsID0gKDIgLSBzKSAqIHY7XG5cdFx0c2wgPSBzICogdjtcblx0XHRzbCAvPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0XHRzbCA9IHNsIHx8IDA7XG5cdFx0bCAvPSAyO1xuXG5cdFx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG5cdH1cbn07XG5cblxuLy9hcHBlbmQgcmdiXG5yZ2IuaHN2ID0gZnVuY3Rpb24ocmdiKSB7XG5cdHZhciByID0gcmdiWzBdLFxuXHRcdGcgPSByZ2JbMV0sXG5cdFx0YiA9IHJnYlsyXSxcblx0XHRtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcblx0XHRtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcblx0XHRkZWx0YSA9IG1heCAtIG1pbixcblx0XHRoLCBzLCB2O1xuXG5cdGlmIChtYXggPT09IDApIHtcblx0XHRzID0gMDtcblx0fVxuXHRlbHNlIHtcblx0XHRzID0gKGRlbHRhL21heCAqIDEwMCk7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fVxuXHRlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9XG5cdGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9XG5cdGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5cblxuLy9leHRlbmQgaHNsXG5oc2wuaHN2ID0gZnVuY3Rpb24oaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdLFxuXHRcdFx0cyA9IGhzbFsxXSAvIDEwMCxcblx0XHRcdGwgPSBoc2xbMl0gLyAxMDAsXG5cdFx0XHRzdiwgdjtcblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gKDIgKiBzKSAvIChsICsgcykgfHwgMDtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG4iLCIvKipcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvaHdiXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcbnZhciBoc3YgPSByZXF1aXJlKCcuL2hzdicpO1xudmFyIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cblxudmFyIGh3YiA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnaHdiJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFszNjAsMTAwLDEwMF0sXG5cdGNoYW5uZWw6IFsnaHVlJywgJ3doaXRlbmVzcycsICdibGFja25lc3MnXSxcblx0YWxpYXM6IFsnSFdCJ10sXG5cblx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5cdHJnYjogZnVuY3Rpb24oaHdiKSB7XG5cdFx0dmFyIGggPSBod2JbMF0gLyAzNjAsXG5cdFx0XHR3aCA9IGh3YlsxXSAvIDEwMCxcblx0XHRcdGJsID0gaHdiWzJdIC8gMTAwLFxuXHRcdFx0cmF0aW8gPSB3aCArIGJsLFxuXHRcdFx0aSwgdiwgZiwgbjtcblxuXHRcdHZhciByLCBnLCBiO1xuXG5cdFx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRcdGlmIChyYXRpbyA+IDEpIHtcblx0XHRcdHdoIC89IHJhdGlvO1xuXHRcdFx0YmwgLz0gcmF0aW87XG5cdFx0fVxuXG5cdFx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHRcdHYgPSAxIC0gYmw7XG5cdFx0ZiA9IDYgKiBoIC0gaTtcblxuXHRcdC8vaWYgaXQgaXMgZXZlblxuXHRcdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0XHRmID0gMSAtIGY7XG5cdFx0fVxuXG5cdFx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHRcdHN3aXRjaCAoaSkge1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdGNhc2UgNjpcblx0XHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xuXHR9LFxuXG5cblx0Ly8gaHR0cDovL2FsdnlyYXkuY29tL1BhcGVycy9DRy9IV0JfSkdUdjIwOC5wZGZcblx0aHN2OiBmdW5jdGlvbihhcmcpe1xuXHRcdHZhciBoID0gYXJnWzBdLCB3ID0gYXJnWzFdLCBiID0gYXJnWzJdLCBzLCB2O1xuXG5cdFx0Ly9pZiB3K2IgPiAxMDAlIC0gdGFrZSBwcm9wb3J0aW9uIChob3cgbWFueSB0aW1lcyApXG5cdFx0aWYgKHcgKyBiID49IDEwMCl7XG5cdFx0XHRzID0gMDtcblx0XHRcdHYgPSAxMDAgKiB3Lyh3K2IpO1xuXHRcdH1cblxuXHRcdC8vYnkgZGVmYXVsdCAtIHRha2Ugd2lraSBmb3JtdWxhXG5cdFx0ZWxzZSB7XG5cdFx0XHRzID0gMTAwLSh3LygxLWIvMTAwKSk7XG5cdFx0XHR2ID0gMTAwLWI7XG5cdFx0fVxuXG5cblx0XHRyZXR1cm4gW2gsIHMsIHZdO1xuXHR9LFxuXG5cdGhzbDogZnVuY3Rpb24oYXJnKXtcblx0XHRyZXR1cm4gaHN2LmhzbChod2IuaHN2KGFyZykpO1xuXHR9XG59O1xuXG5cbi8vZXh0ZW5kIHJnYlxucmdiLmh3YiA9IGZ1bmN0aW9uKHZhbCkge1xuXHR2YXIgciA9IHZhbFswXSxcblx0XHRcdGcgPSB2YWxbMV0sXG5cdFx0XHRiID0gdmFsWzJdLFxuXHRcdFx0aCA9IHJnYi5oc2wodmFsKVswXSxcblx0XHRcdHcgPSAxLzI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRcdFx0YiA9IDEgLSAxLzI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuXG5cbi8va2VlcCBwcm9wZXIgaHVlIG9uIDAgdmFsdWVzIChjb252ZXJzaW9uIHRvIHJnYiBsb3NlcyBodWUgb24gemVyby1saWdodG5lc3MpXG5oc3YuaHdiID0gZnVuY3Rpb24oYXJnKXtcblx0dmFyIGggPSBhcmdbMF0sIHMgPSBhcmdbMV0sIHYgPSBhcmdbMl07XG5cdHJldHVybiBbaCwgdiA9PT0gMCA/IDAgOiAodiAqICgxLXMvMTAwKSksIDEwMCAtIHZdO1xufTtcblxuXG4vL2V4dGVuZCBoc2wgd2l0aCBwcm9wZXIgY29udmVyc2lvbnNcbmhzbC5od2IgPSBmdW5jdGlvbihhcmcpe1xuXHRyZXR1cm4gaHN2Lmh3Yihoc2wuaHN2KGFyZykpO1xufTtcbiIsIi8qKlxyXG4gKiBDb2xvciBzcGFjZSBkYXRhIGFuZCBjb252ZXJzaW9uc1xyXG4gKlxyXG4gKiBAbW9kdWxlIGNvbG9yLXNwYWNlXHJcbiAqXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5cclxuLyoqIEV4cG9ydGVkIHNwYWNlcyAqL1xyXG52YXIgc3BhY2VzID0ge1xyXG5cdHJnYjogcmVxdWlyZSgnLi9yZ2InKSxcclxuXHRoc2w6IHJlcXVpcmUoJy4vaHNsJyksXHJcblx0aHN2OiByZXF1aXJlKCcuL2hzdicpLFxyXG5cdGhzaTogcmVxdWlyZSgnLi9oc2knKSxcclxuXHRod2I6IHJlcXVpcmUoJy4vaHdiJyksXHJcblx0Y215azogcmVxdWlyZSgnLi9jbXlrJyksXHJcblx0Y215OiByZXF1aXJlKCcuL2NteScpLFxyXG5cdHh5ejogcmVxdWlyZSgnLi94eXonKSxcclxuXHR4eXk6IHJlcXVpcmUoJy4veHl5JyksXHJcblx0eWlxOiByZXF1aXJlKCcuL3lpcScpLFxyXG5cdHl1djogcmVxdWlyZSgnLi95dXYnKSxcclxuXHR5ZGJkcjogcmVxdWlyZSgnLi95ZGJkcicpLFxyXG5cdHljZ2NvOiByZXF1aXJlKCcuL3ljZ2NvJyksXHJcblx0eXBicHI6IHJlcXVpcmUoJy4veXBicHInKSxcclxuXHR5Y2JjcjogcmVxdWlyZSgnLi95Y2JjcicpLFxyXG5cdHh2eWNjOiByZXF1aXJlKCcuL3h2eWNjJyksXHJcblx0eWNjYmNjcmM6IHJlcXVpcmUoJy4veWNjYmNjcmMnKSxcclxuXHR1Y3M6IHJlcXVpcmUoJy4vdWNzJyksXHJcblx0dXZ3OiByZXF1aXJlKCcuL3V2dycpLFxyXG5cdGpwZWc6IHJlcXVpcmUoJy4vanBlZycpLFxyXG5cdGxhYjogcmVxdWlyZSgnLi9sYWInKSxcclxuXHRsYWJoOiByZXF1aXJlKCcuL2xhYmgnKSxcclxuXHRsbXM6IHJlcXVpcmUoJy4vbG1zJyksXHJcblx0bGNoYWI6IHJlcXVpcmUoJy4vbGNoYWInKSxcclxuXHRsdXY6IHJlcXVpcmUoJy4vbHV2JyksXHJcblx0bGNodXY6IHJlcXVpcmUoJy4vbGNodXYnKSxcclxuXHRoc2x1djogcmVxdWlyZSgnLi9oc2x1dicpLFxyXG5cdGhwbHV2OiByZXF1aXJlKCcuL2hwbHV2JyksXHJcblx0Y3ViZWhlbGl4OiByZXF1aXJlKCcuL2N1YmVoZWxpeCcpLFxyXG5cdGNvbG9yb2lkOiByZXF1aXJlKCcuL2NvbG9yb2lkJyksXHJcblx0aGNnOiByZXF1aXJlKCcuL2hjZycpLFxyXG5cdGhjeTogcmVxdWlyZSgnLi9oY3knKSxcclxuXHR0c2w6IHJlcXVpcmUoJy4vdHNsJyksXHJcblx0eWVzOiByZXF1aXJlKCcuL3llcycpLFxyXG5cdG9zYXVjczogcmVxdWlyZSgnLi9vc2F1Y3MnKSxcclxuXHRoc3A6IHJlcXVpcmUoJy4vaHNwJylcclxufTtcclxuXHJcblxyXG5cclxuLy9idWlsZCBhYnNlbnQgY29udmVydG9ycyBmcm9tIGVhY2ggdG8gZXZlcnkgc3BhY2VcclxudmFyIGZyb21TcGFjZTtcclxuZm9yICh2YXIgZnJvbVNwYWNlTmFtZSBpbiBzcGFjZXMpIHtcclxuXHRmcm9tU3BhY2UgPSBzcGFjZXNbZnJvbVNwYWNlTmFtZV07XHJcblx0Zm9yICh2YXIgdG9TcGFjZU5hbWUgaW4gc3BhY2VzKSB7XHJcblx0XHRpZiAoIWZyb21TcGFjZVt0b1NwYWNlTmFtZV0pIGZyb21TcGFjZVt0b1NwYWNlTmFtZV0gPSBnZXRDb252ZXJ0b3IoZnJvbVNwYWNlTmFtZSwgdG9TcGFjZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKiByZXR1cm4gY29udmVydGVyIHRocm91Z2ggeHl6L3JnYiBzcGFjZSAqL1xyXG5mdW5jdGlvbiBnZXRDb252ZXJ0b3IoZnJvbVNwYWNlTmFtZSwgdG9TcGFjZU5hbWUpe1xyXG5cdHZhciBmcm9tU3BhY2UgPSBzcGFjZXNbZnJvbVNwYWNlTmFtZV07XHJcblxyXG5cdC8vY3JlYXRlIHN0cmFpZ2h0IGNvbnZlcnRlclxyXG5cdGlmIChmcm9tU3BhY2VOYW1lID09PSB0b1NwYWNlTmFtZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8vY3JlYXRlIHh5eiBjb252ZXJ0ZXIsIGlmIGF2YWlsYWJsZVxyXG5cdGVsc2UgaWYgKGZyb21TcGFjZS54eXogJiYgc3BhY2VzLnh5elt0b1NwYWNlTmFtZV0pIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbihhcmcpe1xyXG5cdFx0XHRyZXR1cm4gc3BhY2VzLnh5elt0b1NwYWNlTmFtZV0oZnJvbVNwYWNlLnh5eihhcmcpKTtcclxuXHRcdH07XHJcblx0fVxyXG5cdC8vY3JlYXRlIHJnYiBjb252ZXJ0ZXJcclxuXHRlbHNlIGlmIChmcm9tU3BhY2UucmdiICYmIHNwYWNlcy5yZ2JbdG9TcGFjZU5hbWVdKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oYXJnKXtcclxuXHRcdFx0cmV0dXJuIHNwYWNlcy5yZ2JbdG9TcGFjZU5hbWVdKGZyb21TcGFjZS5yZ2IoYXJnKSk7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3BhY2VzO1xyXG4iLCIvKipcclxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWUNiQ3IjSlBFR19jb252ZXJzaW9uXHJcbiAqXHJcbiAqIEpQRUcgY29udmVyc2lvbiB3aXRob3V0IGhlYWQvZm9vdHJvb21cclxuICpcclxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UvanBlZ1xyXG4gKi9cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcclxuXHJcbnZhciBqcGVnID0gbW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0bmFtZTogJ2pwZWcnLFxyXG5cdG1pbjogWzAsIDAsIDBdLFxyXG5cdG1heDogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdGNoYW5uZWw6IFsnWScsJ0NiJywnQ3InXSxcclxuXHRhbGlhczogWydKUEVHJ11cclxufTtcclxuXHJcblxyXG4vKipcclxuICogSlBFRyB0byBSR0JcclxuICogdHJhbnNmb3JtIHRocm91Z2ggYW5hbG9nIGZvcm1cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0ganBlZyBSR0IgdmFsdWVzXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSBKUEVHIHZhbHVlc1xyXG4gKi9cclxuanBlZy5yZ2IgPSBmdW5jdGlvbiAoYXJyKSB7XHJcblx0dmFyIHkgPSBhcnJbMF0sIGNiID0gYXJyWzFdLCBjciA9IGFyclsyXTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdHkgKyAxLjQwMiAqIChjciAtIDEyOCksXHJcblx0XHR5IC0gMC4zNDQxNCAqIChjYiAtIDEyOCkgLSAwLjcxNDE0ICogKGNyIC0gMTI4KSxcclxuXHRcdHkgKyAxLjc3MiAqIChjYiAtIDEyOClcclxuXHRdXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFJHQiB0byBKUEVHXHJcbiAqIHRyYW5zZm9ybSB0aHJvdWdoIGFuYWxvZyBmb3JtXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGpwZWcgSlBFRyB2YWx1ZXNcclxuICpcclxuICogQHJldHVybiB7QXJyYXl9IFJHQiB2YWx1ZXNcclxuICovXHJcbnJnYi5qcGVnID0gZnVuY3Rpb24oYXJyKSB7XHJcblx0dmFyIHIgPSBhcnJbMF0sIGcgPSBhcnJbMV0sIGIgPSBhcnJbMl07XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQwLjI5OSAqIHIgKyAwLjU4NyAqIGcgKyAwLjExNCAqIGIsXHJcblx0XHQxMjggLSAwLjE2ODczNiAqIHIgIC0gMC4zMzEyNjQgKiBnICsgMC41ICogYixcclxuXHRcdDEyOCArIDAuNSAqIHIgLSAwLjQxODY4OCAqIGcgLSAwLjA4MTMxMiAqIGJcclxuXHRdXHJcbn07XHJcbiIsIi8qKlxuICogQ0lFIExBQiBzcGFjZSBtb2RlbFxuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvbGFiXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICdsYWInLFxuXHRtaW46IFswLC0xMDAsLTEwMF0sXG5cdG1heDogWzEwMCwxMDAsMTAwXSxcblx0Y2hhbm5lbDogWydsaWdodG5lc3MnLCAnYScsICdiJ10sXG5cdGFsaWFzOiBbJ0xBQicsICdjaWVsYWInXSxcblxuXHR4eXo6IGZ1bmN0aW9uKGxhYikge1xuXHRcdHZhciBsID0gbGFiWzBdLFxuXHRcdFx0XHRhID0gbGFiWzFdLFxuXHRcdFx0XHRiID0gbGFiWzJdLFxuXHRcdFx0XHR4LCB5LCB6LCB5MjtcblxuXHRcdGlmIChsIDw9IDgpIHtcblx0XHRcdHkgPSAobCAqIDEwMCkgLyA5MDMuMztcblx0XHRcdHkyID0gKDcuNzg3ICogKHkgLyAxMDApKSArICgxNiAvIDExNik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHkgPSAxMDAgKiBNYXRoLnBvdygobCArIDE2KSAvIDExNiwgMyk7XG5cdFx0XHR5MiA9IE1hdGgucG93KHkgLyAxMDAsIDEvMyk7XG5cdFx0fVxuXG5cdFx0eCA9IHggLyA5NS4wNDcgPD0gMC4wMDg4NTYgPyB4ID0gKDk1LjA0NyAqICgoYSAvIDUwMCkgKyB5MiAtICgxNiAvIDExNikpKSAvIDcuNzg3IDogOTUuMDQ3ICogTWF0aC5wb3coKGEgLyA1MDApICsgeTIsIDMpO1xuXG5cdFx0eiA9IHogLyAxMDguODgzIDw9IDAuMDA4ODU5ID8geiA9ICgxMDguODgzICogKHkyIC0gKGIgLyAyMDApIC0gKDE2IC8gMTE2KSkpIC8gNy43ODcgOiAxMDguODgzICogTWF0aC5wb3coeTIgLSAoYiAvIDIwMCksIDMpO1xuXG5cdFx0cmV0dXJuIFt4LCB5LCB6XTtcblx0fVxufTtcblxuXG4vL2V4dGVuZCB4eXpcbnh5ei5sYWIgPSBmdW5jdGlvbih4eXope1xuXHR2YXIgeCA9IHh5elswXSxcblx0XHRcdHkgPSB4eXpbMV0sXG5cdFx0XHR6ID0geHl6WzJdLFxuXHRcdFx0bCwgYSwgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMS8zKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEvMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxLzMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuIiwiLyoqXG4gKiBIdW50ZXItbGFiIHNwYWNlLlxuICpcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL2xhYmhcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ2xhYmgnLFxuXG5cdC8vbWlucy9tYXhlcyBhcmUgdGFrZW4gZnJvbSBjb2xvcm1pbmVcblx0Ly9GSVhNRTogY2hlY2sgd2hldGhlciBtaW5zL21heGVzIGNvcnJlY3Rcblx0bWluOiBbMCwtMTI4LC0xMjhdLFxuXHRtYXg6IFsxMDAsMTI4LDEyOF0sXG5cdGNoYW5uZWw6IFsnbGlnaHRuZXNzJywgJ2EnLCAnYiddLFxuXHRhbGlhczogWydMQUJoJywgJ2h1bnRlci1sYWInLCAnaGxhYiddLFxuXG5cdC8vbWF0aHMgYXJlIHRha2VuIGZyb20gRWFzeVJHQlxuXHR4eXo6IGZ1bmN0aW9uKGxhYikge1xuXHRcdHZhciBsID0gbGFiWzBdLCBhID0gbGFiWzFdLCBiID0gbGFiWzJdO1xuXG5cdFx0dmFyIF95ID0gbCAvIDEwO1xuXHRcdHZhciBfeCA9IGEgLyAxNy41ICogbCAvIDEwO1xuXHRcdHZhciBfeiA9IGIgLyA3ICogbCAvIDEwO1xuXG5cdFx0dmFyIHkgPSBfeSAqIF95O1xuXHRcdHZhciB4ID0gKCBfeCArIHkgKSAvIDEuMDI7XG5cdFx0dmFyIHogPSAtKCBfeiAtIHkgKSAvIDAuODQ3O1xuXG5cdFx0cmV0dXJuIFt4LHksel07XG5cdH1cbn07XG5cbi8vZXh0ZW5kIHh5elxueHl6LmxhYmggPSBmdW5jdGlvbih4eXope1xuXHR2YXIgeCA9IHh5elswXSwgeSA9IHh5elsxXSwgeiA9IHh5elsyXTtcblx0dmFyIGwgPSAxMCAqIE1hdGguc3FydCggeSApO1xuXHR2YXIgYSA9IHkgPT09IDAgPyAwIDogMTcuNSAqICgoKCAxLjAyICogeCApIC0geSApIC8gTWF0aC5zcXJ0KCB5ICkgKTtcblx0dmFyIGIgPSB5ID09PSAwID8gMCA6IDcgKiAoICggeSAtICggMC44NDcgKiB6ICkgKSAvIE1hdGguc3FydCggeSApICk7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG4iLCIvKipcbiAqIEN5bGluZHJpY2FsIExBQlxuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvbGNoYWJcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xudmFyIGxhYiA9IHJlcXVpcmUoJy4vbGFiJyk7XG5cblxuLy9jeWxpbmRyaWNhbCBsYWJcbnZhciBsY2hhYiA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnbGNoYWInLFxuXHRtaW46IFswLDAsMF0sXG5cdG1heDogWzEwMCwxMDAsMzYwXSxcblx0Y2hhbm5lbDogWydsaWdodG5lc3MnLCAnY2hyb21hJywgJ2h1ZSddLFxuXHRhbGlhczogWydMQ0hhYicsICdjaWVsY2gnLCAnTENIJywgJ0hMQycsICdMU0gnXSxcblxuXHR4eXo6IGZ1bmN0aW9uKGFyZykge1xuXHRcdHJldHVybiBsYWIueHl6KGxjaGFiLmxhYihhcmcpKTtcblx0fSxcblxuXHRsYWI6IGZ1bmN0aW9uKGxjaCkge1xuXHRcdHZhciBsID0gbGNoWzBdLFxuXHRcdFx0XHRjID0gbGNoWzFdLFxuXHRcdFx0XHRoID0gbGNoWzJdLFxuXHRcdFx0XHRhLCBiLCBocjtcblxuXHRcdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRcdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRcdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXHRcdHJldHVybiBbbCwgYSwgYl07XG5cdH1cbn07XG5cblxuLy9leHRlbmQgbGFiXG5sYWIubGNoYWIgPSBmdW5jdGlvbihsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF0sXG5cdFx0XHRhID0gbGFiWzFdLFxuXHRcdFx0YiA9IGxhYlsyXSxcblx0XHRcdGhyLCBoLCBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG54eXoubGNoYWIgPSBmdW5jdGlvbihhcmcpe1xuXHRyZXR1cm4gbGFiLmxjaGFiKHh5ei5sYWIoYXJnKSk7XG59O1xuIiwiLyoqXG4gKiBDeWxpbmRyaWNhbCBDSUUgTFVWXG4gKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9sY2h1dlxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIGx1diA9IHJlcXVpcmUoJy4vbHV2Jyk7XG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcblxuLy9jeWxpbmRyaWNhbCBsdXZcbnZhciBsY2h1diA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnbGNodXYnLFxuXHRjaGFubmVsOiBbJ2xpZ2h0bmVzcycsICdjaHJvbWEnLCAnaHVlJ10sXG5cdGFsaWFzOiBbJ0xDSHV2JywgJ2NpZWxjaHV2J10sXG5cdG1pbjogWzAsMCwwXSxcblx0bWF4OiBbMTAwLDEwMCwzNjBdLFxuXG5cdGx1djogZnVuY3Rpb24obHV2KXtcblx0XHR2YXIgbCA9IGx1dlswXSxcblx0XHRjID0gbHV2WzFdLFxuXHRcdGggPSBsdXZbMl0sXG5cdFx0dSwgdiwgaHI7XG5cblx0XHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0XHR1ID0gYyAqIE1hdGguY29zKGhyKTtcblx0XHR2ID0gYyAqIE1hdGguc2luKGhyKTtcblx0XHRyZXR1cm4gW2wsIHUsIHZdO1xuXHR9LFxuXG5cdHh5ejogZnVuY3Rpb24oYXJnKSB7XG5cdFx0cmV0dXJuIGx1di54eXoobGNodXYubHV2KGFyZykpO1xuXHR9XG59O1xuXG5sdXYubGNodXYgPSBmdW5jdGlvbihsdXYpe1xuXHR2YXIgbCA9IGx1dlswXSwgdSA9IGx1dlsxXSwgdiA9IGx1dlsyXTtcblxuXHR2YXIgYyA9IE1hdGguc3FydCh1KnUgKyB2KnYpO1xuXHR2YXIgaHIgPSBNYXRoLmF0YW4yKHYsdSk7XG5cdHZhciBoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRyZXR1cm4gW2wsYyxoXVxufTtcblxueHl6LmxjaHV2ID0gZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGx1di5sY2h1dih4eXoubHV2KGFyZykpO1xufTtcbiIsIi8qKlxuICogQSByZXNwb25zaXZpdHkgb2YgY29uZXMgY29sb3Igc3BhY2UuXG4gKiBVc2VkIGZvciBDQVQgLSBjaHJvbWF0aWMgYWRhcHRhdGlvbiB0cmFuc2Zvcm0uXG4gKlxuICogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MTVNfY29sb3Jfc3BhY2VcbiAqIGh0dHA6Ly93d3cubWF0aHdvcmtzLmNvbS9tYXRsYWJjZW50cmFsL2ZpbGVleGNoYW5nZS8yODc5MC1jb2xvcnNwYWNlLXRyYW5zZm9ybWF0aW9uc1xuICpcbiAqIEB0b2RvIHh5eiAtPiBsbXNcbiAqIEB0b2RvICB0ZXN0c1xuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UvbG1zXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcblxudmFyIGxtcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAnbG1zJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFsxMDAsMTAwLDEwMF0sXG5cdGNoYW5uZWw6IFsnbG9uZycsICdtZWRpdW0nLCAnc2hvcnQnXSxcblxuXG5cdC8vdHJhbnNmb3JtIG1hdHJpY2VzXG5cdG1hdHJpeDoge1xuXHRcdEhQRTogW1xuXHRcdFx0MC4zODk3MSwgMC42ODg5OCwtMC4wNzg2OCxcblx0XHQgICAtMC4yMjk4MSwgMS4xODM0MCwgMC4wNDY0MSxcblx0XHRcdDAuMDAwMDAsIDAuMDAwMDAsIDEuMDAwMDBdLFxuXHRcdFZPTktSSUVTOiBbXG5cdFx0XHQwLjQwMDIsIDAuNzA3NiwgLTAuMDgwOCxcblx0XHQgICAtMC4yMjYzLCAxLjE2NTMsICAwLjA0NTcsXG5cdFx0XHQwLjAwMDAwLDAuMDAwMDAsIDAuOTE4Ml0sXG5cdFx0QkZEOiBbXG5cdFx0XHQwLjg5NTEsIDAuMjY2NCwtMC4xNjE0LFxuXHRcdCAgIC0wLjc1MDIsIDEuNzEzNSxcdDAuMDM2Nyxcblx0XHRcdDAuMDM4OSwtMC4wNjg2LCAxLjAyOTZdLFxuXHRcdENBVDk3OiBbXG5cdFx0XHQwLjg1NjIsIDAuMzM3MiwtMC4xOTM0LFxuXHRcdCAgIC0wLjgzNjAsIDEuODMyNywgMC4wMDMzLFxuXHRcdFx0MC4wMzU3LC0wLjAwNDY5LDEuMDExMl0sXG5cdFx0Q0FUMDA6IFtcblx0XHRcdDAuNzk4MiwgMC4zMzg5LC0wLjEzNzEsXG5cdFx0ICAgLTAuNTkxOCwgMS41NTEyLCAwLjA0MDYsXG5cdFx0XHQwLjAwMDgsIDAuMDIzOSwgMC45NzUzXSxcblx0XHRDQVQwMjogW1xuXHRcdFx0MC43MzI4LCAwLjQyOTYsLTAuMTYyNCxcblx0XHQgICAtMC43MDM2LCAxLjY5NzUsIDAuMDA2MSxcblx0XHRcdDAuMDAzMCwgMC4wMTM2LCAwLjk4MzRdXG5cdH1cbn07XG5cblxubG1zLnh5eiA9IGZ1bmN0aW9uKGFyZywgbWF0cml4KXtcblx0dmFyIGwgPSBhcmdbMF0sIG0gPSBhcmdbMV0sIHMgPSBhcmdbMl07XG5cblx0aWYgKCFtYXRyaXgpIHtcblx0XHRtYXRyaXggPSBbXG5cdFx0XHQxLjA5NjEyMzgyMDgzNTUxNCwgLTAuMjc4ODY5MDAwMjE4Mjg3LCArMC4xODI3NDUxNzkzODI3NzMsXG5cdFx0XHQwLjQ1NDM2OTA0MTk3NTM1OSwgKyAwLjQ3MzUzMzE1NDMwNzQxMiwgKzAuMDcyMDk3ODAzNzE3MjI5LFxuXHRcdFx0LTAuMDA5NjI3NjA4NzM4NDI5LCAtMC4wMDU2OTgwMzEyMTYxMTMsICsxLjAxNTMyNTYzOTk1NDU0M1xuXHRcdF07XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGwgKiBtYXRyaXhbMF0gKyBtICogbWF0cml4WzFdICsgcyAqIG1hdHJpeFsyXSxcblx0XHRsICogbWF0cml4WzNdICsgbSAqIG1hdHJpeFs0XSArIHMgKiBtYXRyaXhbNV0sXG5cdFx0bCAqIG1hdHJpeFs2XSArIG0gKiBtYXRyaXhbN10gKyBzICogbWF0cml4WzhdXG5cdF07XG59O1xuXG54eXoubG1zID0gZnVuY3Rpb24oYXJnLCBtYXRyaXgpIHtcblx0XHR2YXIgeCA9IGFyZ1swXSwgeSA9IGFyZ1sxXSwgeiA9IGFyZ1syXTtcblxuXHRcdGlmICghbWF0cml4KSB7XG5cdFx0XHRtYXRyaXggPSBsbXMubWF0cml4LkNBVDAyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHggKiBtYXRyaXhbMF0gKyB5ICogbWF0cml4WzFdICsgeiAqIG1hdHJpeFsyXSxcblx0XHRcdHggKiBtYXRyaXhbM10gKyB5ICogbWF0cml4WzRdICsgeiAqIG1hdHJpeFs1XSxcblx0XHRcdHggKiBtYXRyaXhbNl0gKyB5ICogbWF0cml4WzddICsgeiAqIG1hdHJpeFs4XVxuXHRcdF07XG59O1xuIiwiLyoqXG4gKiBDSUUgTFVWIChDJ2VzdCBsYSB2aWUpXG4gKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS9sdXZcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ2x1dicsXG5cdC8vTk9URTogbHV2IGhhcyBubyByaWdpZGx5IGRlZmluZWQgbGltaXRzXG5cdC8vZWFzeXJnYiBmYWlscyB0byBnZXQgcHJvcGVyIGNvb3Jkc1xuXHQvL2Jvcm9uaW5lIHN0YXRlcyBubyByaWdpZCBsaW1pdHNcblx0Ly9jb2xvck1pbmUgcmVmZXJzIHRoaXMgb25lczpcblx0bWluOiBbMCwtMTM0LC0xNDBdLFxuXHRtYXg6IFsxMDAsMjI0LDEyMl0sXG5cdGNoYW5uZWw6IFsnbGlnaHRuZXNzJywgJ3UnLCAndiddLFxuXHRhbGlhczogWydMVVYnLCAnY2llbHV2JywgJ2NpZTE5NzYnXSxcblxuXHR4eXo6IGZ1bmN0aW9uKGFyZywgaSwgbyl7XG5cdFx0dmFyIF91LCBfdiwgbCwgdSwgdiwgeCwgeSwgeiwgeG4sIHluLCB6biwgdW4sIHZuO1xuXHRcdGwgPSBhcmdbMF0sIHUgPSBhcmdbMV0sIHYgPSBhcmdbMl07XG5cblx0XHRpZiAobCA9PT0gMCkgcmV0dXJuIFswLDAsMF07XG5cblx0XHQvL2dldCBjb25zdGFudHNcblx0XHQvL3ZhciBlID0gMC4wMDg4NTY0NTE2NzkwMzU2MzE7IC8vKDYvMjkpXjNcblx0XHR2YXIgayA9IDAuMDAxMTA3MDU2NDU5ODc5NDUzOTsgLy8oMy8yOSleM1xuXG5cdFx0Ly9nZXQgaWxsdW1pbmFudC9vYnNlcnZlclxuXHRcdGkgPSBpIHx8ICdENjUnO1xuXHRcdG8gPSBvIHx8IDI7XG5cblx0XHR4biA9IHh5ei53aGl0ZXBvaW50W29dW2ldWzBdO1xuXHRcdHluID0geHl6LndoaXRlcG9pbnRbb11baV1bMV07XG5cdFx0em4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsyXTtcblxuXHRcdHVuID0gKDQgKiB4bikgLyAoeG4gKyAoMTUgKiB5bikgKyAoMyAqIHpuKSk7XG5cdFx0dm4gPSAoOSAqIHluKSAvICh4biArICgxNSAqIHluKSArICgzICogem4pKTtcblx0XHQvLyB1biA9IDAuMTk3ODMwMDA2NjQyODM7XG5cdFx0Ly8gdm4gPSAwLjQ2ODMxOTk5NDkzODc5O1xuXG5cblx0XHRfdSA9IHUgLyAoMTMgKiBsKSArIHVuIHx8IDA7XG5cdFx0X3YgPSB2IC8gKDEzICogbCkgKyB2biB8fCAwO1xuXG5cdFx0eSA9IGwgPiA4ID8geW4gKiBNYXRoLnBvdyggKGwgKyAxNikgLyAxMTYgLCAzKSA6IHluICogbCAqIGs7XG5cblx0XHQvL3dpa2lwZWRpYSBtZXRob2Rcblx0XHR4ID0geSAqIDkgKiBfdSAvICg0ICogX3YpIHx8IDA7XG5cdFx0eiA9IHkgKiAoMTIgLSAzICogX3UgLSAyMCAqIF92KSAvICg0ICogX3YpIHx8IDA7XG5cblx0XHQvL2Jvcm9uaW5lIG1ldGhvZFxuXHRcdC8vaHR0cHM6Ly9naXRodWIuY29tL2Jvcm9uaW5lL2h1c2wvYmxvYi9tYXN0ZXIvaHVzbC5jb2ZmZWUjTDIwMVxuXHRcdC8vIHggPSAwIC0gKDkgKiB5ICogX3UpIC8gKChfdSAtIDQpICogX3YgLSBfdSAqIF92KTtcblx0XHQvLyB6ID0gKDkgKiB5IC0gKDE1ICogX3YgKiB5KSAtIChfdiAqIHgpKSAvICgzICogX3YpO1xuXG5cdFx0cmV0dXJuIFt4LCB5LCB6XTtcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcXVhdGlvbnMuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jvcm9uaW5lL2h1c2wvYmxvYi9tYXN0ZXIvaHVzbC5jb2ZmZWVcbi8vaSAtIGlsbHVtaW5hbnRcbi8vbyAtIG9ic2VydmVyXG54eXoubHV2ID0gZnVuY3Rpb24oYXJnLCBpLCBvKSB7XG5cdHZhciBfdSwgX3YsIGwsIHUsIHYsIHgsIHksIHosIHhuLCB5biwgem4sIHVuLCB2bjtcblxuXHQvL2dldCBjb25zdGFudHNcblx0dmFyIGUgPSAwLjAwODg1NjQ1MTY3OTAzNTYzMTsgLy8oNi8yOSleM1xuXHR2YXIgayA9IDkwMy4yOTYyOTYyOTYyOTYxOyAvLygyOS8zKV4zXG5cblx0Ly9nZXQgaWxsdW1pbmFudC9vYnNlcnZlciBjb29yZHNcblx0aSA9IGkgfHwgJ0Q2NSc7XG5cdG8gPSBvIHx8IDI7XG5cblx0eG4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVswXTtcblx0eW4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsxXTtcblx0em4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsyXTtcblxuXHR1biA9ICg0ICogeG4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXHR2biA9ICg5ICogeW4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXG5cblx0eCA9IGFyZ1swXSwgeSA9IGFyZ1sxXSwgeiA9IGFyZ1syXTtcblxuXG5cdF91ID0gKDQgKiB4KSAvICh4ICsgKDE1ICogeSkgKyAoMyAqIHopKSB8fCAwO1xuXHRfdiA9ICg5ICogeSkgLyAoeCArICgxNSAqIHkpICsgKDMgKiB6KSkgfHwgMDtcblxuXHR2YXIgeXIgPSB5L3luO1xuXG5cdGwgPSB5ciA8PSBlID8gayAqIHlyIDogMTE2ICogTWF0aC5wb3coeXIsIDEvMykgLSAxNjtcblxuXHR1ID0gMTMgKiBsICogKF91IC0gdW4pO1xuXHR2ID0gMTMgKiBsICogKF92IC0gdm4pO1xuXG5cdHJldHVybiBbbCwgdSwgdl07XG59O1xuIiwiLyoqXHJcbiAqIE9TQS1VQ1NcclxuICpcclxuICogQG1vZHVsZSAgY29sb3Itc3BhY2Uvb3NhLXVjc1xyXG4gKi9cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcclxuXHJcblxyXG52YXIgb3NhdWNzID0ge1xyXG5cdG5hbWU6ICdvc2F1Y3MnLFxyXG5cdGFsaWFzOiBbJ09TQS1VQ1MnXSxcclxuXHRjaGFubmVsOiBbJ0wnLCAnaicsICdnJ10sXHJcblx0bWluOiBbLTEwLCAtNiwgLTEwXSxcclxuXHRtYXg6IFs4LCAxMiwgNl1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogVGhlcmXigJlzIG5vIGFuYWx5dGljYWwgc29sdXRpb24gdG8gdGhpc1xyXG4gKi9cclxub3NhdWNzLnh5eiA9IGZ1bmN0aW9uIChhcmcpIHtcclxuXHR2YXIgeCwgeSwgejtcclxuXHJcblx0dGhyb3cgJ1VuaW1wbGVtZW50ZWQnO1xyXG5cdC8vaHR0cDovL3d3dy5yZXNlYXJjaGdhdGUubmV0L3B1YmxpY2F0aW9uLzI1OTI1Mzc2M19Db21wYXJpc29uX29mX3RoZV9wZXJmb3JtYW5jZV9vZl9pbnZlcnNlX3RyYW5zZm9ybWF0aW9uX21ldGhvZHNfZnJvbV9PU0EtVUNTX3RvX0NJRVhZWlxyXG5cclxuXHRyZXR1cm4gW3gsIHksIHpdO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm0gdG8geHl6IG9zYXVjc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcmcgSW5wdXQgeHl6IGFycmF5XHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSBMamcgYXJyYXlcclxuICovXHJcbnh5ei5vc2F1Y3MgPSBmdW5jdGlvbiAoYXJnKSB7XHJcblx0dmFyIFggPSBhcmdbMF0sIFkgPSBhcmdbMV0sIFogPSBhcmdbMl07XHJcblxyXG5cdHZhciB4ID0gWCAvIChYICsgWSArIFopO1xyXG5cdHZhciB5ID0gWSAvIChYICsgWSArIFopO1xyXG5cclxuXHQvL0ZJWE1FOiB0aGVyZSBtaWdodCBiZSBhIHR5cG8sIHdpa2kgc3RhdGVzIDEuODEwMyBhcyBhIGNvbnN0YW50IHZhbHVlXHJcblx0dmFyIEsgPSA0LjQ5MzQqeCp4ICsgNC4zMDM0KnkqeSAtIDQuMjc2KngqeSAtIDEuMzc0NCp4IC0gMi41NjQzOSp5ICsgMS44MTAzO1xyXG5cdHZhciBZMCA9IEsqWTtcclxuXHJcblx0dmFyIExfID0gNS45KihNYXRoLnBvdyhZMCwgMS8zKSAtIDIvMyArIDAuMDQyKk1hdGgucG93KE1hdGgubWF4KFkwLCAzMCkgLSAzMCwgMS8zKSk7XHJcblx0dmFyIEwgPSAoTF8gLSAxNC4zOTkzKSAvIE1hdGguc3FydCgyKTtcclxuXHJcblx0dmFyIEMgPSBMXyAvICg1LjkgKiAoTWF0aC5wb3coWTAsIDEvMykgLSAyLzMpKTtcclxuXHJcblx0dmFyIFIgPSAwLjc3OTAqWCArIDAuNDE5NCpZIC0gMC4xNjQ4Klo7XHJcblx0dmFyIEcgPSAtMC40NDkzKlggKyAxLjMyNjUqWSArIDAuMDkyNypaO1xyXG5cdHZhciBCID0gLTAuMTE0OSpYICsgMC4zMzk0KlkgKyAwLjcxNzAqWjtcclxuXHJcblx0UiA9IE1hdGgucG93KFIsIDEvMykgfHwgMDtcclxuXHRHID0gTWF0aC5wb3coRywgMS8zKSB8fCAwO1xyXG5cdEIgPSBNYXRoLnBvdyhCLCAxLzMpIHx8IDA7XHJcblxyXG5cdHZhciBhID0gLTEzLjcqUiArIDE3LjcqRyAtIDQqQjtcclxuXHR2YXIgYiA9IDEuNypSICsgOCpHIC0gOS43KkI7XHJcblxyXG5cdHZhciBnID0gQyphO1xyXG5cdHZhciBqID0gQypiO1xyXG5cclxuXHQvL3BvbGFyIGZvcm1cclxuXHQvLyB2YXIgcCA9IE1hdGguc3FydChqKmogKyBnKmcpO1xyXG5cdC8vIHZhciBwaGkgPSBNYXRoLmF0YW4yKGosIGcpO1xyXG5cclxuXHRyZXR1cm4gW0wsIGosIGddO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gb3NhdWNzO1xyXG4iLCIvKipcbiAqIFJHQiBzcGFjZS5cbiAqXG4gKiBAbW9kdWxlICBjb2xvci1zcGFjZS9yZ2JcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAncmdiJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFsyNTUsMjU1LDI1NV0sXG5cdGNoYW5uZWw6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSxcblx0YWxpYXM6IFsnUkdCJ11cbn07XG4iLCIvKipcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RTTF9jb2xvcl9zcGFjZVxuICogaHR0cDovL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL2Rvd25sb2FkP2RvaT0xMC4xLjEuODYuNjAzNyZyZXA9cmVwMSZ0eXBlPXBkZlxuICpcbiAqIFRpbnQsIFNhdHVyYXRpb24sIExpZ2h0bmVzc1xuICpcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL3RzbFxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciB0c2wgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ3RzbCcsXG5cdG1pbjogWzAsMCwwXSxcblx0bWF4OiBbMSwgMSwgMV0sXG5cdGNoYW5uZWw6IFsndGludCcsJ3NhdHVyYXRpb24nLCdsaWdodG5lc3MnXVxufTtcblxuXG4vKipcbiAqIFRTTCB0byBSR0JcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0c2wgUkdCIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBUU0wgdmFsdWVzXG4gKi9cbnRzbC5yZ2IgPSBmdW5jdGlvbih0c2wpIHtcblx0dmFyIFQgPSB0c2xbMF0sXG5cdFx0UyA9IHRzbFsxXSxcblx0XHRMID0gdHNsWzJdO1xuXG5cdC8vd2lraXBlZGlhIHNvbHV0aW9uXG5cdC8qXG5cdC8vIHZhciB4ID0gLSAxIC8gTWF0aC50YW4oTWF0aC5QSSAqIDIgKiBUKTtcblx0dmFyIHggPSAtTWF0aC5zaW4oMipNYXRoLlBJKlQpO1xuXHRpZiAoIHggIT0gMCApIHggPSBNYXRoLmNvcygyKk1hdGguUEkqVCkveDtcblxuXHR2YXIgZyA9IFQgPiAuNSA/IC1TICogTWF0aC5zcXJ0KCA1IC8gKDkgKiAoeCp4ICsgMSkpICkgOlxuXHRcdFx0VCA8IC41ID8gUyAqIE1hdGguc3FydCggNSAvICg5ICogKHgqeCArIDEpKSApIDogMDtcblx0dmFyIHIgPSBUID09PSAwID8gMC43NDUzNTU5ICogUyA6ICh4ICogZyArIDEvMyk7XG5cblx0dmFyIFIgPSBrICogciwgRyA9IGsgKiBnLCBCID0gayAqICgxIC0gciAtIGcpO1xuXHQqL1xuXG5cdHZhciB4ID0gTWF0aC50YW4oMiAqIE1hdGguUEkgKiAoVCAtIDEvNCkpO1xuXHR4ICo9IHg7XG5cblx0dmFyIHIgPSBNYXRoLnNxcnQoNSAqIFMqUyAvICg5ICogKDEveCArIDEpKSkgKyAxLzM7XG5cdHZhciBnID0gTWF0aC5zcXJ0KDUgKiBTKlMgLyAoOSAqICh4ICsgMSkpKSArIDEvMztcblxuXHR2YXIgayA9IEwgLyAoLjE4NSAqIHIgKyAuNDczICogZyArIC4xMTQpO1xuXG5cdHZhciBCID0gayAqICgxIC0gciAtIGcpO1xuXHR2YXIgRyA9IGsgKiBnO1xuXHR2YXIgUiA9IGsgKiByO1xuXG5cdHJldHVybiBbXG5cdFx0UiAqIDI1NSwgRyAqIDI1NSwgQiAqIDI1NVxuXHRdO1xufTtcblxuXG4vKipcbiAqIFJHQiB0byBUU0xcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0c2wgVFNMIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgdmFsdWVzXG4gKi9cbnJnYi50c2wgPSBmdW5jdGlvbihyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTUsXG5cdFx0ZyA9IHJnYlsxXSAvIDI1NSxcblx0XHRiID0gcmdiWzJdIC8gMjU1O1xuXG5cdHZhciByXyA9IChyIC8gKHIgKyBnICsgYikgfHwgMCkgLSAxLzMsXG5cdFx0Z18gPSAoZyAvIChyICsgZyArIGIpIHx8IDApIC0gMS8zO1xuXHR2YXIgVCA9IGdfID4gMCA/IC41ICogTWF0aC5hdGFuKHJfLyBnXykgLyBNYXRoLlBJICsgLjI1IDpcblx0XHRcdGdfIDwgMCA/IC41ICogTWF0aC5hdGFuKHJfLyBnXykgLyBNYXRoLlBJICsgLjc1IDogMDtcblxuXHR2YXIgUyA9IE1hdGguc3FydCg5LzUgKiAocl8qcl8gKyBnXypnXykpO1xuXG5cdHZhciBMID0gKHIgKiAwLjI5OSkgKyAoZyAqIDAuNTg3KSArIChiICogMC4xMTQpO1xuXG5cdHJldHVybiBbVCwgUywgTF07XG59O1xuIiwiLyoqXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DSUVfMTk2MF9jb2xvcl9zcGFjZVxuICpcbiAqIE9ic29sZXRlIGNvbG9yIHNwYWNlXG4gKlxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UvdWNzXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgeHl6ID0gcmVxdWlyZSgnLi94eXonKTtcblxudmFyIHVjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAndWNzJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFsxMDAsIDEwMCwgMTAwXSxcblx0Y2hhbm5lbDogWydVJywnVicsJ1cnXSxcblx0YWxpYXM6IFsnVUNTJywgJ2NpZTE5NjAnXVxufTtcblxuXG4vKipcbiAqIFVDUyB0byBYWVpcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB1Y3MgWFlaIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBVQ1MgdmFsdWVzXG4gKi9cbnVjcy54eXogPSBmdW5jdGlvbih1Y3MpIHtcblx0dmFyIHUgPSB1Y3NbMF0sXG5cdFx0diA9IHVjc1sxXSxcblx0XHR3ID0gdWNzWzJdO1xuXG5cdHJldHVybiBbXG5cdFx0MS41ICogdSxcblx0XHR2LFxuXHRcdDEuNSAqIHUgLSAzICogdiArIDIgKiB3XG5cdF07XG59O1xuXG5cbi8qKlxuICogWFlaIHRvIFVDU1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHVjcyBVQ1MgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFhZWiB2YWx1ZXNcbiAqL1xueHl6LnVjcyA9IGZ1bmN0aW9uKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSxcblx0XHR5ID0geHl6WzFdLFxuXHRcdHogPSB4eXpbMl07XG5cblx0cmV0dXJuIFtcblx0XHR4ICogMi8zLFxuXHRcdHksXG5cdFx0MC41ICogKC14ICsgMyp5ICsgeilcblx0XTtcbn07XG4iLCIvKipcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NJRV8xOTY0X2NvbG9yX3NwYWNlXG4gKlxuICogVmVyeSBzaW1pbGFyIHRvIExVViwgYnV0IHcgYW5kIHYgYXJlIGNhbGN1bGF0ZWQgYSBiaXQgZGlmZmVyZW50bHkuXG4gKlxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UvdXZ3XG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgdWNzID0gcmVxdWlyZSgnLi91Y3MnKTtcbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xuXG52YXIgdXZ3ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICd1dncnLFxuXHRtaW46IFstMTM0LCAtMTQwLCAwXSxcblx0bWF4OiBbMjI0LCAxMjIsIDEwMF0sXG5cdGNoYW5uZWw6IFsnVScsJ1YnLCdXJ10sXG5cdGFsaWFzOiBbJ1VWVycsICdjaWV1dncnLCAnY2llMTk2NCddXG59O1xuXG5cbi8qKlxuICogVVZXIHRvIFhZWlxuICovXG51dncueHl6ID0gZnVuY3Rpb24gKGFyZywgaSwgbykge1xuXHR2YXIgX3UsIF92LCB3LCB1LCB2LCB4LCB5LCB6LCB4biwgeW4sIHpuLCB1biwgdm47XG5cdHUgPSBhcmdbMF0sIHYgPSBhcmdbMV0sIHcgPSBhcmdbMl07XG5cblx0aWYgKHcgPT09IDApIHJldHVybiBbMCwwLDBdO1xuXG5cdC8vZ2V0IGlsbHVtaW5hbnQvb2JzZXJ2ZXJcblx0aSA9IGkgfHwgJ0Q2NSc7XG5cdG8gPSBvIHx8IDI7XG5cblx0eG4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVswXTtcblx0eW4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsxXTtcblx0em4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsyXTtcblxuXHR1biA9ICg0ICogeG4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXHR2biA9ICg2ICogeW4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXG5cdHkgPSBNYXRoLnBvdygodyArIDE3KSAvIDI1LCAzKTtcblxuXHRfdSA9IHUgLyAoMTMgKiB3KSArIHVuIHx8IDA7XG5cdF92ID0gdiAvICgxMyAqIHcpICsgdm4gfHwgMDtcblxuXHR4ID0gKDYgLyA0KSAqIHkgKiBfdSAvIF92O1xuXHR6ID0geSAqICgyIC8gX3YgLSAwLjUgKiBfdSAvIF92IC0gNSk7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cblxuLyoqXG4gKiBYWVogdG8gVVZXXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFuIFVWVyBhcnJheVxuICovXG54eXoudXZ3ID0gZnVuY3Rpb24gKGFyciwgaSwgbykge1xuXHR2YXIgeCA9IGFyclswXSwgeSA9IGFyclsxXSwgeiA9IGFyclsyXSwgeG4sIHluLCB6biwgdW4sIHZuO1xuXG5cdC8vZmluZCBvdXQgbm9ybWFsIHNvdXJjZSB1IHZcblx0aSA9IGkgfHwgJ0Q2NSc7XG5cdG8gPSBvIHx8IDI7XG5cblx0eG4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVswXTtcblx0eW4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsxXTtcblx0em4gPSB4eXoud2hpdGVwb2ludFtvXVtpXVsyXTtcblxuXHR1biA9ICg0ICogeG4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXHR2biA9ICg2ICogeW4pIC8gKHhuICsgKDE1ICogeW4pICsgKDMgKiB6bikpO1xuXG5cdHZhciBfdSA9IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeikgfHwgMDtcblx0dmFyIF92ID0gNiAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KSB8fCAwO1xuXG5cdC8vY2FsYyB2YWx1ZXNcblx0dmFyIHcgPSAyNSAqIE1hdGgucG93KHksIDEvMykgLSAxNztcblx0dmFyIHUgPSAxMyAqIHcgKiAoX3UgLSB1bik7XG5cdHZhciB2ID0gMTMgKiB3ICogKF92IC0gdm4pO1xuXG5cdHJldHVybiBbdSwgdiwgd107XG59O1xuXG5cblxuLyoqXG4gKiBVVlcgdG8gVUNTXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdXZ3IFVDUyB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gVVZXIHZhbHVlc1xuICovXG51dncudWNzID0gZnVuY3Rpb24odXZ3KSB7XG5cdC8vZmluZCBjaHJvbWFjaXR5IHZhcmlhYmxlc1xufTtcblxuXG4vKipcbiAqIFVDUyB0byBVVldcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB1dncgVVZXIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBVQ1MgdmFsdWVzXG4gKi9cbnVjcy51dncgPSBmdW5jdGlvbih1Y3MpIHtcblx0Ly8gLy9maW5kIGNocm9tYWNpdHkgdmFyaWFibGVzXG5cdC8vIHZhciB1ID0gVSAvIChVICsgViArIFcpO1xuXHQvLyB2YXIgdiA9IFYgLyAoVSArIFYgKyBXKTtcblxuXHQvLyAvL2ZpbmQgMTk2NCBVVldcblx0Ly8gdyA9IDI1ICogTWF0aC5wb3coeSwgMS8zKSAtIDE3O1xuXHQvLyB1ID0gMTMgKiB3ICogKHUgLSB1bik7XG5cdC8vIHYgPSAxMyAqIHcgKiAodiAtIHZuKTtcbn07XG4iLCIvKipcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1h2WUNDXG4gKlxuICogU29ueSB4dllDQyBpcyBleHRlbmRlZCBZQ2JDclxuICpcbiAqIEl0IHVzZXMgc2FtZSB0cmFuc2Zvcm1hdGlvbiBhc1xuICogU0Q6IElUVS1SIEJULjYwMVxuICogSEQ6IElUVS1SIEJULjcwOVxuICpcbiAqIEJ1dCBoYXZlIGV4dGVuZGVkIG1pbnMvbWF4ZXMsIHdoaWNoIChtYXkpIHJlc3VsdCBpbiBuZWdhdGl2ZSByZ2IgdmFsdWVzXG4gKlxuICogaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTMwNTI0MTA0ODUwL2h0dHA6Ly93d3cuc29ueS5uZXQvU29ueUluZm8vdGVjaG5vbG9neS90ZWNobm9sb2d5L3RoZW1lL3h2eWNjXzAxLmh0bWxcbiAqXG4gKiAvL1RPRE86IGxvb2sgZm9yIGEgc3BlYyAoMTIwJCkgLSB0aGVyZSBhcmUgeHZZQ0Mg4oaQ4oaSIFhZWiBjb252ZXJzaW9uIGZvcm11bGFzXG4gKlxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UveHZ5Y2NcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xudmFyIHlwYnByID0gcmVxdWlyZSgnLi95cGJwcicpO1xuXG52YXIgeHZ5Y2MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ3h2eWNjJyxcblx0bWluOiBbMCwgMCwgMF0sXG5cdG1heDogWzI1NSwgMjU1LCAyNTVdLFxuXHRjaGFubmVsOiBbJ1knLCdDYicsJ0NyJ10sXG5cdGFsaWFzOiBbJ3h2WUNDJ11cbn07XG5cblxuLyoqXG4gKiBGcm9tIGFuYWxvZyB0byBkaWdpdGFsIGZvcm0uXG4gKiBTaW1wbGUgc2NhbGUgdG8gbWluL21heCByYW5nZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gUmVzdWx0aW5nIGRpZ2l0aXplZCBmb3JtXG4gKi9cbnlwYnByLnh2eWNjID0gZnVuY3Rpb24gKHlwYnByKSB7XG5cdHZhciB5ID0geXBicHJbMF0sIHBiID0geXBicHJbMV0sIHByID0geXBicHJbMl07XG5cblx0cmV0dXJuIFtcblx0XHQxNiArIDIxOSAqIHksXG5cdFx0MTI4ICsgMjI0ICogcGIsXG5cdFx0MTI4ICsgMjI0ICogcHJcblx0XTtcbn1cblxuXG4vKipcbiAqIEZyb20gZGlnaXRhbCB0byBhbmFsb2cgZm9ybS5cbiAqIFNjYWxlIHRvIG1pbi9tYXggcmFuZ2VzXG4gKi9cbnh2eWNjLnlwYnByID0gZnVuY3Rpb24gKHh2eWNjKSB7XG5cdHZhciB5ID0geHZ5Y2NbMF0sIGNiID0geHZ5Y2NbMV0sIGNyID0geHZ5Y2NbMl07XG5cblx0cmV0dXJuIFtcblx0XHQoeSAtIDE2KSAvIDIxOSxcblx0XHQoY2IgLSAxMjgpIC8gMjI0LFxuXHRcdChjciAtIDEyOCkgLyAyMjRcblx0XTtcbn1cblxuXG4vKipcbiAqIHh2WUNDIHRvIFJHQlxuICogdHJhbnNmb3JtIHRocm91Z2ggYW5hbG9nIGZvcm1cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB4dnljYyBSR0IgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IHh2WUNDIHZhbHVlc1xuICovXG54dnljYy5yZ2IgPSBmdW5jdGlvbiAoYXJyLCBrYiwga3IpIHtcblx0cmV0dXJuIHlwYnByLnJnYih4dnljYy55cGJwcihhcnIpLCBrYiwga3IpO1xufTtcblxuXG4vKipcbiAqIFJHQiB0byB4dllDQ1xuICogdHJhbnNmb3JtIHRocm91Z2ggYW5hbG9nIGZvcm1cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB4dnljYyB4dllDQyB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gUkdCIHZhbHVlc1xuICovXG5yZ2IueHZ5Y2MgPSBmdW5jdGlvbihhcnIsIGtiLCBrcikge1xuXHRyZXR1cm4geXBicHIueHZ5Y2MocmdiLnlwYnByKGFyciwga2IsIGtyKSk7XG59O1xuIiwiLyoqXG4gKiBBZGRpdGlvbmFsIHh5WSBzcGFjZSwgd2hlcmUgeHkgYXJlIHJlbGF0aXZlIGNocm9tYWNpdHkgcGFyYW1zXG4gKlxuICogQG1vZHVsZSBjb2xvci1zcGFjZS94eXlcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciB4eXogPSByZXF1aXJlKCcuL3h5eicpO1xuXG52YXIgeHl5ID0ge1xuXHRuYW1lOiAneHl5Jyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFsxLDEsMTAwXSxcblx0Y2hhbm5lbDogWyd4JywneScsJ1knXSxcblx0YWxpYXM6IFsneHlZJywgJ1l4eScsICd5eHknXVxufTtcblxueHl5Lnh5eiA9IGZ1bmN0aW9uKGFyZykge1xuXHR2YXIgWCwgWSwgWiwgeCwgeTtcblx0eCA9IGFyZ1swXTsgeSA9IGFyZ1sxXTsgWSA9IGFyZ1syXTtcblx0aWYgKHkgPT09IDApIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cdFggPSB4ICogWSAvIHk7XG5cdFogPSAoMSAtIHggLSB5KSAqIFkgLyB5O1xuXHRyZXR1cm4gW1gsIFksIFpdO1xufTtcblxueHl6Lnh5eSA9IGZ1bmN0aW9uKGFyZykge1xuXHR2YXIgc3VtLCBYLCBZLCBaO1xuXHRYID0gYXJnWzBdOyBZID0gYXJnWzFdOyBaID0gYXJnWzJdO1xuXHRzdW0gPSBYICsgWSArIFo7XG5cdGlmIChzdW0gPT09IDApIHtcblx0XHRyZXR1cm4gWzAsIDAsIFldO1xuXHR9XG5cdHJldHVybiBbWCAvIHN1bSwgWSAvIHN1bSwgWV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHh5eTtcbiIsIi8qKlxuICogQ0lFIFhZWlxuICpcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL3h5elxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciB4eXogPSB7XG5cdG5hbWU6ICd4eXonLFxuXHRtaW46IFswLDAsMF0sXG5cdGNoYW5uZWw6IFsnWCcsJ1knLCdaJ10sXG5cdGFsaWFzOiBbJ1hZWicsICdjaWV4eXonLCAnY2llMTkzMSddXG59O1xuXG5cbi8qKlxuICogV2hpdGVwb2ludCByZWZlcmVuY2UgdmFsdWVzIHdpdGggb2JzZXJ2ZXIvaWxsdW1pbmFudFxuICpcbiAqIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3RhbmRhcmRfaWxsdW1pbmFudFxuICovXG54eXoud2hpdGVwb2ludCA9IHtcblx0Ly8xOTMxIDLCsFxuXHQyOiB7XG5cdFx0Ly9pbmNhZGVzY2VudFxuXHRcdEE6WzEwOS44NSwgMTAwLCAzNS41ODVdLFxuXHRcdC8vIEI6W10sXG5cdFx0QzogWzk4LjA3NCwgMTAwLCAxMTguMjMyXSxcblx0XHRENTA6IFs5Ni40MjIsIDEwMCwgODIuNTIxXSxcblx0XHRENTU6IFs5NS42ODIsIDEwMCwgOTIuMTQ5XSxcblx0XHQvL2RheWxpZ2h0XG5cdFx0RDY1OiBbOTUuMDQ1NTkyNzA1MTY3LCAxMDAsIDEwOC45MDU3NzUwNzU5ODc4XSxcblx0XHRENzU6IFs5NC45NzIsIDEwMCwgMTIyLjYzOF0sXG5cdFx0Ly9mbG91cmVzY2VudFxuXHRcdC8vIEYxOiBbXSxcblx0XHRGMjogWzk5LjE4NywgMTAwLCA2Ny4zOTVdLFxuXHRcdC8vIEYzOiBbXSxcblx0XHQvLyBGNDogW10sXG5cdFx0Ly8gRjU6IFtdLFxuXHRcdC8vIEY2OltdLFxuXHRcdEY3OiBbOTUuMDQ0LCAxMDAsIDEwOC43NTVdLFxuXHRcdC8vIEY4OiBbXSxcblx0XHQvLyBGOTogW10sXG5cdFx0Ly8gRjEwOiBbXSxcblx0XHRGMTE6IFsxMDAuOTY2LCAxMDAsIDY0LjM3MF0sXG5cdFx0Ly8gRjEyOiBbXSxcblx0XHRFOiBbMTAwLDEwMCwxMDBdXG5cdH0sXG5cblx0Ly8xOTY0ICAxMMKwXG5cdDEwOiB7XG5cdFx0Ly9pbmNhZGVzY2VudFxuXHRcdEE6WzExMS4xNDQsIDEwMCwgMzUuMjAwXSxcblx0XHRDOiBbOTcuMjg1LCAxMDAsIDExNi4xNDVdLFxuXHRcdEQ1MDogWzk2LjcyMCwgMTAwLCA4MS40MjddLFxuXHRcdEQ1NTogWzk1Ljc5OSwgMTAwLCA5MC45MjZdLFxuXHRcdC8vZGF5bGlnaHRcblx0XHRENjU6IFs5NC44MTEsIDEwMCwgMTA3LjMwNF0sXG5cdFx0RDc1OiBbOTQuNDE2LCAxMDAsIDEyMC42NDFdLFxuXHRcdC8vZmxvdXJlc2NlbnRcblx0XHRGMjogWzEwMy4yODAsIDEwMCwgNjkuMDI2XSxcblx0XHRGNzogWzk1Ljc5MiwgMTAwLCAxMDcuNjg3XSxcblx0XHRGMTE6IFsxMDMuODY2LCAxMDAsIDY1LjYyN10sXG5cdFx0RTogWzEwMCwxMDAsMTAwXVxuXHR9XG59O1xuXG5cbi8qKlxuICogVG9wIHZhbHVlcyBhcmUgdGhlIHdoaXRlcG9pbnTigJlzIHRvcCB2YWx1ZXMsIGRlZmF1bHQgYXJlIEQ2NVxuICovXG54eXoubWF4ID0geHl6LndoaXRlcG9pbnRbMl0uRDY1O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtIHh5eiB0byByZ2JcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB4eXogQXJyYXkgb2YgeHl6IHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgdmFsdWVzXG4gKi9cbnh5ei5yZ2IgPSBmdW5jdGlvbiAoX3h5eiwgd2hpdGUpIHtcblx0Ly9GSVhNRTogbWFrZSBzdXJlIHdlIGhhdmUgdG8gZGl2aWRlIGxpa2UgdGhpcy4gUHJvYmFibHkgd2UgaGF2ZSB0byByZXBsYWNlIG1hdHJpeCBhcyB3ZWxsIHRoZW5cblx0d2hpdGUgPSB3aGl0ZSB8fCB4eXoud2hpdGVwb2ludFsyXS5FO1xuXG5cdHZhciB4ID0gX3h5elswXSAvIHdoaXRlWzBdLFxuXHRcdHkgPSBfeHl6WzFdIC8gd2hpdGVbMV0sXG5cdFx0eiA9IF94eXpbMl0gLyB3aGl0ZVsyXSxcblx0XHRyLCBnLCBiO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdC8vIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXFuX1JHQl9YWVpfTWF0cml4Lmh0bWxcblx0ciA9ICh4ICogMy4yNDA5Njk5NDE5MDQ1MjEpICsgKHkgKiAtMS41MzczODMxNzc1NzAwOTMpICsgKHogKiAtMC40OTg2MTA3NjAyOTMpO1xuXHRnID0gKHggKiAtMC45NjkyNDM2MzYyODA4NykgKyAoeSAqIDEuODc1OTY3NTAxNTA3NzIpICsgKHogKiAwLjA0MTU1NTA1NzQwNzE3NSk7XG5cdGIgPSAoeCAqIDAuMDU1NjMwMDc5Njk2OTkzKSArICh5ICogLTAuMjAzOTc2OTU4ODg4OTcpICsgKHogKiAxLjA1Njk3MTUxNDI0Mjg3OCk7XG5cblx0ciA9IHIgPiAwLjAwMzEzMDggPyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgPSAociAqIDEyLjkyKTtcblxuXHRnID0gZyA+IDAuMDAzMTMwOCA/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyA9IChnICogMTIuOTIpO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4ID8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiID0gKGIgKiAxMi45Mik7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufVxuXG5cblxuLyoqXG4gKiBSR0IgdG8gWFlaXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcmdiIFJHQiBjaGFubmVsc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBYWVogY2hhbm5lbHNcbiAqL1xucmdiLnh5eiA9IGZ1bmN0aW9uKHJnYiwgd2hpdGUpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTUsXG5cdFx0XHRnID0gcmdiWzFdIC8gMjU1LFxuXHRcdFx0YiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjM5MDc5OTI2NTk1KSArIChnICogMC4zNTc1ODQzMzkzODM4NykgKyAoYiAqIDAuMTgwNDgwNzg4NDAxODMpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2MzkwMDU4NzE1MSkgKyAoZyAqIDAuNzE1MTY4Njc4NzY3NzUpICsgKGIgKiAwLjA3MjE5MjMxNTM2MDczMyk7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMzMDgxODcxNTU5MSkgKyAoZyAqIDAuMTE5MTk0Nzc5Nzk0NjIpICsgKGIgKiAwLjk1MDUzMjE1MjI0OTY2KTtcblxuXHR3aGl0ZSA9IHdoaXRlIHx8IHh5ei53aGl0ZXBvaW50WzJdLkU7XG5cblx0cmV0dXJuIFt4ICogd2hpdGVbMF0sIHkgKiB3aGl0ZVsxXSwgeiAqIHdoaXRlWzJdXTtcbn07XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHh5ejtcbiIsIi8qKlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz90aXRsZT1ZQ2JDclxuICpcbiAqIFlDYkNyIGlzIGEgZGlnaXRhbCBmb3JtIG9mIFlQYlByIGNvbnZlcnNpb25cbiAqIFRoZW5jZSBsaW1pdHMgYXJlIFsxNi4uLjIzNV0sIGFjY29yZGluZyB0byB0aGUgSVRVLVIgQlQuNzA5IG9yIElUVS1SIEJULjYwMVxuICpcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL3ljYmNyXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcbnZhciB5cGJwciA9IHJlcXVpcmUoJy4veXBicHInKTtcblxudmFyIHljYmNyID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICd5Y2JjcicsXG5cdG1pbjogWzE2LCAxNiwgMTZdLFxuXHRtYXg6IFsyMzUsIDI0MCwgMjQwXSxcblx0Y2hhbm5lbDogWydZJywnQ2InLCdDciddLFxuXHRhbGlhczogWydZQ2JDcicsICdZQ0MnXVxufTtcblxuXG4vKipcbiAqIEZyb20gYW5hbG9nIHRvIGRpZ2l0YWwgZm9ybS5cbiAqIFNpbXBsZSBzY2FsZSB0byBtaW4vbWF4IHJhbmdlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSZXN1bHRpbmcgZGlnaXRpemVkIGZvcm1cbiAqL1xueXBicHIueWNiY3IgPSBmdW5jdGlvbiAoeXBicHIpIHtcblx0dmFyIHkgPSB5cGJwclswXSwgcGIgPSB5cGJwclsxXSwgcHIgPSB5cGJwclsyXTtcblxuXHRyZXR1cm4gW1xuXHRcdDE2ICsgMjE5ICogeSxcblx0XHQxMjggKyAyMjQgKiBwYixcblx0XHQxMjggKyAyMjQgKiBwclxuXHRdO1xufVxuXG5cbi8qKlxuICogRnJvbSBkaWdpdGFsIHRvIGFuYWxvZyBmb3JtLlxuICogU2NhbGUgdG8gbWluL21heCByYW5nZXNcbiAqL1xueWNiY3IueXBicHIgPSBmdW5jdGlvbiAoeWNiY3IpIHtcblx0dmFyIHkgPSB5Y2JjclswXSwgY2IgPSB5Y2JjclsxXSwgY3IgPSB5Y2JjclsyXTtcblxuXHRyZXR1cm4gW1xuXHRcdCh5IC0gMTYpIC8gMjE5LFxuXHRcdChjYiAtIDEyOCkgLyAyMjQsXG5cdFx0KGNyIC0gMTI4KSAvIDIyNFxuXHRdO1xufVxuXG5cbi8qKlxuICogWUNiQ3IgdG8gUkdCXG4gKiB0cmFuc2Zvcm0gdGhyb3VnaCBhbmFsb2cgZm9ybVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHljYmNyIFJHQiB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gWUNiQ3IgdmFsdWVzXG4gKi9cbnljYmNyLnJnYiA9IGZ1bmN0aW9uIChhcnIsIGtiLCBrcikge1xuXHRyZXR1cm4geXBicHIucmdiKHljYmNyLnlwYnByKGFyciksIGtiLCBrcik7XG59O1xuXG5cbi8qKlxuICogUkdCIHRvIFlDYkNyXG4gKiB0cmFuc2Zvcm0gdGhyb3VnaCBhbmFsb2cgZm9ybVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHljYmNyIFlDYkNyIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgdmFsdWVzXG4gKi9cbnJnYi55Y2JjciA9IGZ1bmN0aW9uKGFyciwga2IsIGtyKSB7XG5cdHJldHVybiB5cGJwci55Y2JjcihyZ2IueXBicHIoYXJyLCBrYiwga3IpKTtcbn07XG4iLCIvKipcbiAqIFljQ2JjQ3JjIGlzIElUVS1SIEJULjIwMjBcbiAqXG4gKiBAbW9kdWxlICBjb2xvci1zcGFjZS95Y2NiY2NyY1xuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG52YXIgeXBicHIgPSByZXF1aXJlKCcuL3lwYnByJyk7XG5cbnZhciB5Y2NiY2NyYyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAneWNjYmNjcmMnLFxuXHRtaW46IFswLCAtMC41LCAtMC41XSxcblx0bWF4OiBbMSwgMC41LCAwLjVdLFxuXHRjaGFubmVsOiBbJ1ljJywnQ2JjJywnQ3JjJ10sXG5cdGFsaWFzOiBbJ1ljQ2JjQ3JjJ11cbn07XG5cblxuLyoqXG4gKiBZY0NiY0NyYyB0byBSR0JcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB5Y2NiY2NyYyBSR0IgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFljQ2JjQ3JjIHZhbHVlc1xuICovXG55Y2NiY2NyYy5yZ2IgPSBmdW5jdGlvbih5Y2NiY2NyYykge1xuXHRyZXR1cm4geXBicHIucmdiKHljY2JjY3JjLCAwLjA1OTMsIDAuMjYyNyk7XG59O1xuXG5cbi8qKlxuICogUkdCIHRvIFljQ2JjQ3JjXG4gKlxuICogQHBhcmFtIHtBcnJheX0geWNjYmNjcmMgWWNDYmNDcmMgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFJHQiB2YWx1ZXNcbiAqL1xucmdiLnljY2JjY3JjID0gZnVuY3Rpb24oYXJyKSB7XG5cdHJldHVybiByZ2IueXBicHIoYXJyLCAwLjA1OTMsIDAuMjYyNyk7XG59O1xuIiwiLyoqXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvP3RpdGxlPVlDZ0NvXG4gKlxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UveWNnY29cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgeWNnY28gPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ3ljZ2NvJyxcblx0bWluOiBbMCwgLTAuNSwgLTAuNV0sXG5cdG1heDogWzEsIDAuNSwgMC41XSxcblx0Y2hhbm5lbDogWydZJywnQ2cnLCdDbyddLFxuXHRhbGlhczogWydZQ2dDbyddXG59O1xuXG5cbi8qKlxuICogWUNnQ28gdG8gUkdCXG4gKiB0cmFuc2Zvcm0gdGhyb3VnaCBhbmFsb2cgZm9ybVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHljZ2NvIFJHQiB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gWUNnQ28gdmFsdWVzXG4gKi9cbnljZ2NvLnJnYiA9IGZ1bmN0aW9uIChhcnIpIHtcblx0dmFyIHkgPSBhcnJbMF0sIGNnID0gYXJyWzFdLCBjbyA9IGFyclsyXTtcblxuXHR2YXIgdG1wID0geSAtIGNnO1xuXG5cdHJldHVybiBbXG5cdFx0KHRtcCArIGNvKSoyNTUsXG5cdFx0KHkgKyBjZykqMjU1LFxuXHRcdCh0bXAgLSBjbykqMjU1XG5cdF07XG59O1xuXG5cbi8qKlxuICogUkdCIHRvIFlDZ0NvXG4gKiB0cmFuc2Zvcm0gdGhyb3VnaCBhbmFsb2cgZm9ybVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHljZ2NvIFlDZ0NvIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgdmFsdWVzXG4gKi9cbnJnYi55Y2djbyA9IGZ1bmN0aW9uKGFycikge1xuXHR2YXIgciA9IGFyclswXS8yNTUsIGcgPSBhcnJbMV0vMjU1LCBiID0gYXJyWzJdLzI1NTtcblxuXHRyZXR1cm4gW1xuXHRcdDAuMjUqciArIDAuNSpnICsgMC4yNSpiLFxuXHRcdC0wLjI1KnIgKyAwLjUqZyAtIDAuMjUqYixcblx0XHQwLjUqciAtIDAuNSpiXG5cdF07XG59O1xuIiwiLyoqXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvP3RpdGxlPVlEYkRyXG4gKlxuICogQG1vZHVsZSAgY29sb3Itc3BhY2UveWRiZHJcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xudmFyIHl1diA9IHJlcXVpcmUoJy4veXV2Jyk7XG5cbnZhciB5ZGJkciA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAneWRiZHInLFxuXHRtaW46IFswLC0xLjMzMywtMS4zMzNdLFxuXHRtYXg6IFsxLCAxLjMzMywgMS4zMzNdLFxuXHRjaGFubmVsOiBbJ1knLCdEYicsJ0RyJ10sXG5cdGFsaWFzOiBbJ1lEYkRyJ11cbn07XG5cblxuLyoqXG4gKiBZRGJEciB0byBSR0JcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB5ZGJkciBSR0IgdmFsdWVzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IFlEYkRyIHZhbHVlc1xuICovXG55ZGJkci5yZ2IgPSBmdW5jdGlvbih5ZGJkcikge1xuXHR2YXIgeSA9IHlkYmRyWzBdLCBkYiA9IHlkYmRyWzFdLCBkciA9IHlkYmRyWzJdO1xuXG5cdHZhciByID0geSArIDAuMDAwMDkyMzAzNzE2MTQ4KmRiIC0gMC41MjU5MTI2MzA2NjE4NjUqZHI7XG5cdHZhciBnID0geSAtIDAuMTI5MTMyODk4ODkwNTA5KmRiICsgMC4yNjc4OTkzMjgyMDc1OTkqZHI7XG5cdHZhciBiID0geSArIDAuNjY0Njc5MDU5OTc4OTU1KmRiIC0gMC4wMDAwNzkyMDI1NDM1MzMqZHI7XG5cblx0cmV0dXJuIFtyKjI1NSwgZyoyNTUsIGIqMjU1XTtcbn07XG5cblxuLyoqXG4gKiBSR0IgdG8gWURiRHJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB5ZGJkciBZRGJEciB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gUkdCIHZhbHVlc1xuICovXG5yZ2IueWRiZHIgPSBmdW5jdGlvbihyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0vMjU1LCBnID0gcmdiWzFdLzI1NSwgYiA9IHJnYlsyXS8yNTU7XG5cdHJldHVybiBbXG5cdFx0MC4yOTkqciArIDAuNTg3KmcgKyAwLjExNCpiLFxuXHRcdC0wLjQ1MCpyIC0gMC44ODMqZyArIDEuMzMzKmIsXG5cdFx0LTEuMzMzKnIgKyAxLjExNipnICsgMC4yMTcqYlxuXHRdO1xufTtcblxuXG4vKipcbiAqIFRvIFlVVlxuICovXG55dXYueWRiZHIgPSBmdW5jdGlvbiAoeXV2KSB7XG5cdHJldHVybiBbXG5cdFx0eXV2WzBdLCAzLjA1OSp5dXZbMV0sIC0yLjE2OSp5dXZbMl1cblx0XVxufTtcblxuLyoqXG4gKiBGcm9tIFlVVlxuICovXG55ZGJkci55dXYgPSBmdW5jdGlvbiAoeWRiZHIpIHtcblx0cmV0dXJuIFtcblx0XHR5ZGJkclswXSwgeWRiZHJbMV0gLyAzLjA1OSwgLXlkYmRyWzJdIC8gMi4xNjlcblx0XVxufTtcbiIsIi8qKlxuICogWUVTIGNvbG9yIHNwYWNlXG4gKiBodHRwOi8vd3d3LmF0bGFudGlzLXByZXNzLmNvbS9waHAvZG93bmxvYWRfcGFwZXIucGhwP2lkPTE5OFxuICpcbiAqIEBtb2R1bGUgY29sb3Itc3BhY2UveWVzXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIHllcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAneWVzJyxcblx0bWluOiBbMCwwLDBdLFxuXHRtYXg6IFsxLDEsMV0sXG5cdGNoYW5uZWw6IFsnbHVtaW5hbmNlJywgJ2UtZmFjdG9yJywgJ3MtZmFjdG9yJ11cbn07XG5cblxueWVzLnJnYiA9IGZ1bmN0aW9uKGFyZyl7XG5cdHZhciB5ID0gYXJnWzBdLCBlID0gYXJnWzFdLCBzID0gYXJnWzJdO1xuXG5cdHZhciBtID0gW1xuXHRcdDEsIDEuNDMxLCAuMTI2LFxuXHRcdDEsIC0uNTY5LCAuMTI2LFxuXHRcdDEsIC40MzEsIC0xLjg3NFxuXHRdO1xuXG5cdHZhciByID0geSAqIG1bMF0gKyBlICogbVsxXSArIHMgKiBtWzJdLFxuXHRcdGcgPSB5ICogbVszXSArIGUgKiBtWzRdICsgcyAqIG1bNV0sXG5cdFx0YiA9IHkgKiBtWzZdICsgZSAqIG1bN10gKyBzICogbVs4XTtcblxuXHRyZXR1cm4gW3IqMjU1LCBnKjI1NSwgYioyNTVdO1xufTtcblxucmdiLnllcyA9IGZ1bmN0aW9uKGFyZykge1xuXHR2YXIgciA9IGFyZ1swXSAvIDI1NSwgZyA9IGFyZ1sxXSAvIDI1NSwgYiA9IGFyZ1syXSAvIDI1NTtcblxuXHR2YXIgbSA9IFtcblx0XHQuMjUzLCAuNjg0LCAuMDYzLFxuXHRcdC41MDAsIC0uNTAsIC4wLFxuXHRcdC4yNTAsIC4yNTAsIC0uNVxuXHRdO1xuXG5cdHJldHVybiBbXG5cdFx0ciAqIG1bMF0gKyBnICogbVsxXSArIGIgKiBtWzJdLFxuXHRcdHIgKiBtWzNdICsgZyAqIG1bNF0gKyBiICogbVs1XSxcblx0XHRyICogbVs2XSArIGcgKiBtWzddICsgYiAqIG1bOF1cblx0XTtcbn07XG4iLCIvKipcbiAqIFlJUSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvP3RpdGxlPVlJUVxuICpcbiAqIEBtb2R1bGUgIGNvbG9yLXNwYWNlL3lpcVxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciB5aXEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bmFtZTogJ3lpcScsXG5cdG1pbjogWzAsLTAuNTk1NywtMC41MjI2XSxcblx0bWF4OiBbMSwgMC41OTU3LCAwLjUyMjZdLFxuXHRjaGFubmVsOiBbJ1knLCdJJywnUSddLFxuXHRhbGlhczogWydZSVEnXVxufTtcblxueWlxLnJnYiA9IGZ1bmN0aW9uKHlpcSkge1xuXHR2YXIgeSA9IHlpcVswXSxcblx0XHRpID0geWlxWzFdLFxuXHRcdHEgPSB5aXFbMl0sXG5cdFx0ciwgZywgYjtcblxuXHRyID0gKHkgKiAxKSArIChpICogIDAuOTU2KSArIChxICogMC42MjEpO1xuXHRnID0gKHkgKiAxKSArIChpICogLTAuMjcyKSArIChxICogLTAuNjQ3KTtcblx0YiA9ICh5ICogMSkgKyAoaSAqIC0xLjEwOCkgKyAocSAqIDEuNzA1KTtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5cbi8vZXh0ZW5kIHJnYlxucmdiLnlpcSA9IGZ1bmN0aW9uKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NSxcblx0XHRnID0gcmdiWzFdIC8gMjU1LFxuXHRcdGIgPSByZ2JbMl0gLyAyNTU7XG5cblxuXHR2YXIgeSA9IChyICogMC4yOTkpICsgKGcgKiAwLjU4NykgKyAoYiAqIDAuMTE0KTtcblx0dmFyIGkgPSAwLCBxID0gMDtcblx0aWYgKHIgIT09IGcgfHwgZyAhPT0gYikge1xuXHRcdGkgPSAociAqIDAuNTk2KSArIChnICogLTAuMjc1KSArIChiICogLTAuMzIxKTtcblx0XHRxID0gKHIgKiAwLjIxMikgKyAoZyAqIC0wLjUyOCkgKyAoYiAqIDAuMzExKTtcblx0fVxuXHRyZXR1cm4gW3ksIGksIHFdO1xufTtcbiIsIi8qKlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz90aXRsZT1ZUGJQclxuICpcbiAqIFlQYlByIGlzIGFuYWxvZyBmb3JtIG9mIFlDYkNyXG4gKiBoZW5jZSBsaW1pdHMgYXJlIFswLi4xXVxuICpcbiAqIERlZmF1bHQgY29udmVyc2lvbiBpcyBJVFUtUiBCVC43MDlcbiAqXG4gKiBAbW9kdWxlICBjb2xvci1zcGFjZS95cGJwclxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciB5cGJwciA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRuYW1lOiAneXBicHInLFxuXHRtaW46IFswLC0wLjUsLTAuNV0sXG5cdG1heDogWzEsIDAuNSwgMC41XSxcblx0Y2hhbm5lbDogWydZJywnUGInLCdQciddLFxuXHRhbGlhczogWydZUGJQcicsICdZL1BCL1BSJywgJ1lQUlBCJywgJ1BSUEJZJywgJ1BCUFJZJywgJ1kvUGIvUHInLCAnWVByUGInLCAnUHJQYlknLCAnUGJQclknLCAnWS9SLVkvQi1ZJywgJ1koUi1ZKShCLVkpJywgJ1ItWScsICdCLVknXVxufTtcblxuXG4vKipcbiAqIFlQYlByIHRvIFJHQlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHlwYnByIFJHQiB2YWx1ZXNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gWVBiUHIgdmFsdWVzXG4gKi9cbnlwYnByLnJnYiA9IGZ1bmN0aW9uKHlwYnByLCBrYiwga3IpIHtcblx0dmFyIHkgPSB5cGJwclswXSwgcGIgPSB5cGJwclsxXSwgcHIgPSB5cGJwclsyXTtcblxuXHQvL2RlZmF1bHQgY29udmVyc2lvbiBpcyBJVFUtUiBCVC43MDlcblx0a2IgPSBrYiB8fCAwLjA3MjI7XG5cdGtyID0ga3IgfHwgMC4yMTI2O1xuXG5cdHZhciByID0geSArIDIgKiBwciAqICgxIC0ga3IpO1xuXHR2YXIgYiA9IHkgKyAyICogcGIgKiAoMSAtIGtiKTtcblx0dmFyIGcgPSAoeSAtIGtyICogciAtIGtiICogYikgLyAoMSAtIGtyIC0ga2IpO1xuXG5cdHJldHVybiBbcioyNTUsZyoyNTUsYioyNTVdO1xufTtcblxuXG4vKipcbiAqIFJHQiB0byBZUGJQclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHlwYnByIFlQYlByIHZhbHVlc1xuICpcbiAqIEByZXR1cm4ge0FycmF5fSBSR0IgdmFsdWVzXG4gKi9cbnJnYi55cGJwciA9IGZ1bmN0aW9uKHJnYiwga2IsIGtyKSB7XG5cdHZhciByID0gcmdiWzBdLzI1NSwgZyA9IHJnYlsxXS8yNTUsIGIgPSByZ2JbMl0vMjU1O1xuXG5cdC8vSVRVLVIgQlQuNzA5XG5cdGtiID0ga2IgfHwgMC4wNzIyO1xuXHRrciA9IGtyIHx8IDAuMjEyNjtcblxuXHR2YXIgeSA9IGtyKnIgKyAoMSAtIGtyIC0ga2IpKmcgKyBrYipiO1xuXHR2YXIgcGIgPSAwLjUgKiAoYiAtIHkpIC8gKDEgLSBrYik7XG5cdHZhciBwciA9IDAuNSAqIChyIC0geSkgLyAoMSAtIGtyKTtcblxuXHRyZXR1cm4gW3ksIHBiLCBwcl07XG59O1xuIiwiLyoqXG4gKiBZVVYgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz90aXRsZT1ZVVZcbiAqXG4gKiBAbW9kdWxlICBjb2xvci1zcGFjZS95dXZcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgeXV2ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5hbWU6ICd5dXYnLFxuXHRtaW46IFswLC0wLjUsLTAuNV0sXG5cdG1heDogWzEsIDAuNSwgMC41XSxcblx0Y2hhbm5lbDogWydZJywnVScsJ1YnXSxcblx0YWxpYXM6IFsnWVVWJywgJ0VCVSddLFxuXG59O1xuXG55dXYucmdiID0gZnVuY3Rpb24oeXV2KSB7XG5cdHZhciB5ID0geXV2WzBdLFxuXHRcdHUgPSB5dXZbMV0sXG5cdFx0diA9IHl1dlsyXSxcblx0XHRyLCBnLCBiO1xuXG5cdHIgPSAoeSAqIDEpICsgKHUgKiAgMCkgKyAodiAqIDEuMTM5ODMpO1xuXHRnID0gKHkgKiAxKSArICh1ICogLTAuMzk0NjUpICsgKHYgKiAtMC41ODA2MCk7XG5cdGIgPSAoeSAqIDEpICsgKHUgKiAyLjAyMzExKSArICh2ICogMCk7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufVxuXG5cbi8vZXh0ZW5kIHJnYlxucmdiLnl1diA9IGZ1bmN0aW9uKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NSxcblx0XHRnID0gcmdiWzFdIC8gMjU1LFxuXHRcdGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0dmFyIHkgPSAociAqIDAuMjk5KSArIChnICogMC41ODcpICsgKGIgKiAwLjExNCk7XG5cdHZhciB1ID0gKHIgKiAtMC4xNDcxMykgKyAoZyAqIC0wLjI4ODg2KSArIChiICogMC40MzYpO1xuXHR2YXIgdiA9IChyICogMC42MTUpICsgKGcgKiAtMC41MTQ5OSkgKyAoYiAqIC0wLjEwMDAxKTtcblxuXHRyZXR1cm4gW3ksIHUsIHZdO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBIYXhlIDMuNC40XG52YXIgaHNsdXYgPSBoc2x1diB8fCB7fTtcbmhzbHV2Lkdlb21ldHJ5ID0gZnVuY3Rpb24oKSB7IH07XG5oc2x1di5HZW9tZXRyeS5pbnRlcnNlY3RMaW5lTGluZSA9IGZ1bmN0aW9uKGEsYikge1xuXHR2YXIgeCA9IChhLmludGVyY2VwdCAtIGIuaW50ZXJjZXB0KSAvIChiLnNsb3BlIC0gYS5zbG9wZSk7XG5cdHZhciB5ID0gYS5zbG9wZSAqIHggKyBhLmludGVyY2VwdDtcblx0cmV0dXJuIHsgeCA6IHgsIHkgOiB5fTtcbn07XG5oc2x1di5HZW9tZXRyeS5kaXN0YW5jZUZyb21PcmlnaW4gPSBmdW5jdGlvbihwb2ludCkge1xuXHRyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50LngsMikgKyBNYXRoLnBvdyhwb2ludC55LDIpKTtcbn07XG5oc2x1di5HZW9tZXRyeS5kaXN0YW5jZUxpbmVGcm9tT3JpZ2luID0gZnVuY3Rpb24obGluZSkge1xuXHRyZXR1cm4gTWF0aC5hYnMobGluZS5pbnRlcmNlcHQpIC8gTWF0aC5zcXJ0KE1hdGgucG93KGxpbmUuc2xvcGUsMikgKyAxKTtcbn07XG5oc2x1di5HZW9tZXRyeS5wZXJwZW5kaWN1bGFyVGhyb3VnaFBvaW50ID0gZnVuY3Rpb24obGluZSxwb2ludCkge1xuXHR2YXIgc2xvcGUgPSAtMSAvIGxpbmUuc2xvcGU7XG5cdHZhciBpbnRlcmNlcHQgPSBwb2ludC55IC0gc2xvcGUgKiBwb2ludC54O1xuXHRyZXR1cm4geyBzbG9wZSA6IHNsb3BlLCBpbnRlcmNlcHQgOiBpbnRlcmNlcHR9O1xufTtcbmhzbHV2Lkdlb21ldHJ5LmFuZ2xlRnJvbU9yaWdpbiA9IGZ1bmN0aW9uKHBvaW50KSB7XG5cdHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnkscG9pbnQueCk7XG59O1xuaHNsdXYuR2VvbWV0cnkubm9ybWFsaXplQW5nbGUgPSBmdW5jdGlvbihhbmdsZSkge1xuXHR2YXIgbSA9IDIgKiBNYXRoLlBJO1xuXHRyZXR1cm4gKGFuZ2xlICUgbSArIG0pICUgbTtcbn07XG5oc2x1di5HZW9tZXRyeS5sZW5ndGhPZlJheVVudGlsSW50ZXJzZWN0ID0gZnVuY3Rpb24odGhldGEsbGluZSkge1xuXHRyZXR1cm4gbGluZS5pbnRlcmNlcHQgLyAoTWF0aC5zaW4odGhldGEpIC0gbGluZS5zbG9wZSAqIE1hdGguY29zKHRoZXRhKSk7XG59O1xuaHNsdXYuSHNsdXYgPSBmdW5jdGlvbigpIHsgfTtcbmhzbHV2LkhzbHV2LmdldEJvdW5kcyA9IGZ1bmN0aW9uKEwpIHtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXHR2YXIgc3ViMSA9IE1hdGgucG93KEwgKyAxNiwzKSAvIDE1NjA4OTY7XG5cdHZhciBzdWIyID0gc3ViMSA+IGhzbHV2LkhzbHV2LmVwc2lsb24gPyBzdWIxIDogTCAvIGhzbHV2LkhzbHV2LmthcHBhO1xuXHR2YXIgX2cgPSAwO1xuXHR3aGlsZShfZyA8IDMpIHtcblx0XHR2YXIgYyA9IF9nKys7XG5cdFx0dmFyIG0xID0gaHNsdXYuSHNsdXYubVtjXVswXTtcblx0XHR2YXIgbTIgPSBoc2x1di5Ic2x1di5tW2NdWzFdO1xuXHRcdHZhciBtMyA9IGhzbHV2LkhzbHV2Lm1bY11bMl07XG5cdFx0dmFyIF9nMSA9IDA7XG5cdFx0d2hpbGUoX2cxIDwgMikge1xuXHRcdFx0dmFyIHQgPSBfZzErKztcblx0XHRcdHZhciB0b3AxID0gKDI4NDUxNyAqIG0xIC0gOTQ4MzkgKiBtMykgKiBzdWIyO1xuXHRcdFx0dmFyIHRvcDIgPSAoODM4NDIyICogbTMgKyA3Njk4NjAgKiBtMiArIDczMTcxOCAqIG0xKSAqIEwgKiBzdWIyIC0gNzY5ODYwICogdCAqIEw7XG5cdFx0XHR2YXIgYm90dG9tID0gKDYzMjI2MCAqIG0zIC0gMTI2NDUyICogbTIpICogc3ViMiArIDEyNjQ1MiAqIHQ7XG5cdFx0XHRyZXN1bHQucHVzaCh7IHNsb3BlIDogdG9wMSAvIGJvdHRvbSwgaW50ZXJjZXB0IDogdG9wMiAvIGJvdHRvbX0pO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbmhzbHV2LkhzbHV2Lm1heFNhZmVDaHJvbWFGb3JMID0gZnVuY3Rpb24oTCkge1xuXHR2YXIgYm91bmRzID0gaHNsdXYuSHNsdXYuZ2V0Qm91bmRzKEwpO1xuXHR2YXIgbWluID0gSW5maW5pdHk7XG5cdHZhciBfZyA9IDA7XG5cdHdoaWxlKF9nIDwgYm91bmRzLmxlbmd0aCkge1xuXHRcdHZhciBib3VuZCA9IGJvdW5kc1tfZ107XG5cdFx0KytfZztcblx0XHR2YXIgbGVuZ3RoID0gaHNsdXYuR2VvbWV0cnkuZGlzdGFuY2VMaW5lRnJvbU9yaWdpbihib3VuZCk7XG5cdFx0bWluID0gTWF0aC5taW4obWluLGxlbmd0aCk7XG5cdH1cblx0cmV0dXJuIG1pbjtcbn07XG5oc2x1di5Ic2x1di5tYXhDaHJvbWFGb3JMSCA9IGZ1bmN0aW9uKEwsSCkge1xuXHR2YXIgaHJhZCA9IEggLyAzNjAgKiBNYXRoLlBJICogMjtcblx0dmFyIGJvdW5kcyA9IGhzbHV2LkhzbHV2LmdldEJvdW5kcyhMKTtcblx0dmFyIG1pbiA9IEluZmluaXR5O1xuXHR2YXIgX2cgPSAwO1xuXHR3aGlsZShfZyA8IGJvdW5kcy5sZW5ndGgpIHtcblx0XHR2YXIgYm91bmQgPSBib3VuZHNbX2ddO1xuXHRcdCsrX2c7XG5cdFx0dmFyIGxlbmd0aCA9IGhzbHV2Lkdlb21ldHJ5Lmxlbmd0aE9mUmF5VW50aWxJbnRlcnNlY3QoaHJhZCxib3VuZCk7XG5cdFx0aWYobGVuZ3RoID49IDApIHtcblx0XHRcdG1pbiA9IE1hdGgubWluKG1pbixsZW5ndGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWluO1xufTtcbmhzbHV2LkhzbHV2LmRvdFByb2R1Y3QgPSBmdW5jdGlvbihhLGIpIHtcblx0dmFyIHN1bSA9IDA7XG5cdHZhciBfZzEgPSAwO1xuXHR2YXIgX2cgPSBhLmxlbmd0aDtcblx0d2hpbGUoX2cxIDwgX2cpIHtcblx0XHR2YXIgaSA9IF9nMSsrO1xuXHRcdHN1bSArPSBhW2ldICogYltpXTtcblx0fVxuXHRyZXR1cm4gc3VtO1xufTtcbmhzbHV2LkhzbHV2LmZyb21MaW5lYXIgPSBmdW5jdGlvbihjKSB7XG5cdGlmKGMgPD0gMC4wMDMxMzA4KSB7XG5cdFx0cmV0dXJuIDEyLjkyICogYztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gMS4wNTUgKiBNYXRoLnBvdyhjLDAuNDE2NjY2NjY2NjY2NjY2Njg1KSAtIDAuMDU1O1xuXHR9XG59O1xuaHNsdXYuSHNsdXYudG9MaW5lYXIgPSBmdW5jdGlvbihjKSB7XG5cdGlmKGMgPiAwLjA0MDQ1KSB7XG5cdFx0cmV0dXJuIE1hdGgucG93KChjICsgMC4wNTUpIC8gMS4wNTUsMi40KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gYyAvIDEyLjkyO1xuXHR9XG59O1xuaHNsdXYuSHNsdXYueHl6VG9SZ2IgPSBmdW5jdGlvbih0dXBsZSkge1xuXHRyZXR1cm4gW2hzbHV2LkhzbHV2LmZyb21MaW5lYXIoaHNsdXYuSHNsdXYuZG90UHJvZHVjdChoc2x1di5Ic2x1di5tWzBdLHR1cGxlKSksaHNsdXYuSHNsdXYuZnJvbUxpbmVhcihoc2x1di5Ic2x1di5kb3RQcm9kdWN0KGhzbHV2LkhzbHV2Lm1bMV0sdHVwbGUpKSxoc2x1di5Ic2x1di5mcm9tTGluZWFyKGhzbHV2LkhzbHV2LmRvdFByb2R1Y3QoaHNsdXYuSHNsdXYubVsyXSx0dXBsZSkpXTtcbn07XG5oc2x1di5Ic2x1di5yZ2JUb1h5eiA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHZhciByZ2JsID0gW2hzbHV2LkhzbHV2LnRvTGluZWFyKHR1cGxlWzBdKSxoc2x1di5Ic2x1di50b0xpbmVhcih0dXBsZVsxXSksaHNsdXYuSHNsdXYudG9MaW5lYXIodHVwbGVbMl0pXTtcblx0cmV0dXJuIFtoc2x1di5Ic2x1di5kb3RQcm9kdWN0KGhzbHV2LkhzbHV2Lm1pbnZbMF0scmdibCksaHNsdXYuSHNsdXYuZG90UHJvZHVjdChoc2x1di5Ic2x1di5taW52WzFdLHJnYmwpLGhzbHV2LkhzbHV2LmRvdFByb2R1Y3QoaHNsdXYuSHNsdXYubWludlsyXSxyZ2JsKV07XG59O1xuaHNsdXYuSHNsdXYueVRvTCA9IGZ1bmN0aW9uKFkpIHtcblx0aWYoWSA8PSBoc2x1di5Ic2x1di5lcHNpbG9uKSB7XG5cdFx0cmV0dXJuIFkgLyBoc2x1di5Ic2x1di5yZWZZICogaHNsdXYuSHNsdXYua2FwcGE7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDExNiAqIE1hdGgucG93KFkgLyBoc2x1di5Ic2x1di5yZWZZLDAuMzMzMzMzMzMzMzMzMzMzMzE1KSAtIDE2O1xuXHR9XG59O1xuaHNsdXYuSHNsdXYubFRvWSA9IGZ1bmN0aW9uKEwpIHtcblx0aWYoTCA8PSA4KSB7XG5cdFx0cmV0dXJuIGhzbHV2LkhzbHV2LnJlZlkgKiBMIC8gaHNsdXYuSHNsdXYua2FwcGE7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGhzbHV2LkhzbHV2LnJlZlkgKiBNYXRoLnBvdygoTCArIDE2KSAvIDExNiwzKTtcblx0fVxufTtcbmhzbHV2LkhzbHV2Lnh5elRvTHV2ID0gZnVuY3Rpb24odHVwbGUpIHtcblx0dmFyIFggPSB0dXBsZVswXTtcblx0dmFyIFkgPSB0dXBsZVsxXTtcblx0dmFyIFogPSB0dXBsZVsyXTtcblx0dmFyIGRpdmlkZXIgPSBYICsgMTUgKiBZICsgMyAqIFo7XG5cdHZhciB2YXJVID0gNCAqIFg7XG5cdHZhciB2YXJWID0gOSAqIFk7XG5cdGlmKGRpdmlkZXIgIT0gMCkge1xuXHRcdHZhclUgLz0gZGl2aWRlcjtcblx0XHR2YXJWIC89IGRpdmlkZXI7XG5cdH0gZWxzZSB7XG5cdFx0dmFyVSA9IE5hTjtcblx0XHR2YXJWID0gTmFOO1xuXHR9XG5cdHZhciBMID0gaHNsdXYuSHNsdXYueVRvTChZKTtcblx0aWYoTCA9PSAwKSB7XG5cdFx0cmV0dXJuIFswLDAsMF07XG5cdH1cblx0dmFyIFUgPSAxMyAqIEwgKiAodmFyVSAtIGhzbHV2LkhzbHV2LnJlZlUpO1xuXHR2YXIgViA9IDEzICogTCAqICh2YXJWIC0gaHNsdXYuSHNsdXYucmVmVik7XG5cdHJldHVybiBbTCxVLFZdO1xufTtcbmhzbHV2LkhzbHV2Lmx1dlRvWHl6ID0gZnVuY3Rpb24odHVwbGUpIHtcblx0dmFyIEwgPSB0dXBsZVswXTtcblx0dmFyIFUgPSB0dXBsZVsxXTtcblx0dmFyIFYgPSB0dXBsZVsyXTtcblx0aWYoTCA9PSAwKSB7XG5cdFx0cmV0dXJuIFswLDAsMF07XG5cdH1cblx0dmFyIHZhclUgPSBVIC8gKDEzICogTCkgKyBoc2x1di5Ic2x1di5yZWZVO1xuXHR2YXIgdmFyViA9IFYgLyAoMTMgKiBMKSArIGhzbHV2LkhzbHV2LnJlZlY7XG5cdHZhciBZID0gaHNsdXYuSHNsdXYubFRvWShMKTtcblx0dmFyIFggPSAwIC0gOSAqIFkgKiB2YXJVIC8gKCh2YXJVIC0gNCkgKiB2YXJWIC0gdmFyVSAqIHZhclYpO1xuXHR2YXIgWiA9ICg5ICogWSAtIDE1ICogdmFyViAqIFkgLSB2YXJWICogWCkgLyAoMyAqIHZhclYpO1xuXHRyZXR1cm4gW1gsWSxaXTtcbn07XG5oc2x1di5Ic2x1di5sdXZUb0xjaCA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHZhciBMID0gdHVwbGVbMF07XG5cdHZhciBVID0gdHVwbGVbMV07XG5cdHZhciBWID0gdHVwbGVbMl07XG5cdHZhciBDID0gTWF0aC5zcXJ0KFUgKiBVICsgViAqIFYpO1xuXHR2YXIgSDtcblx0aWYoQyA8IDAuMDAwMDAwMDEpIHtcblx0XHRIID0gMDtcblx0fSBlbHNlIHtcblx0XHR2YXIgSHJhZCA9IE1hdGguYXRhbjIoVixVKTtcblx0XHRIID0gSHJhZCAqIDE4MC4wIC8gTWF0aC5QSTtcblx0XHRpZihIIDwgMCkge1xuXHRcdFx0SCA9IDM2MCArIEg7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBbTCxDLEhdO1xufTtcbmhzbHV2LkhzbHV2LmxjaFRvTHV2ID0gZnVuY3Rpb24odHVwbGUpIHtcblx0dmFyIEwgPSB0dXBsZVswXTtcblx0dmFyIEMgPSB0dXBsZVsxXTtcblx0dmFyIEggPSB0dXBsZVsyXTtcblx0dmFyIEhyYWQgPSBIIC8gMzYwLjAgKiAyICogTWF0aC5QSTtcblx0dmFyIFUgPSBNYXRoLmNvcyhIcmFkKSAqIEM7XG5cdHZhciBWID0gTWF0aC5zaW4oSHJhZCkgKiBDO1xuXHRyZXR1cm4gW0wsVSxWXTtcbn07XG5oc2x1di5Ic2x1di5oc2x1dlRvTGNoID0gZnVuY3Rpb24odHVwbGUpIHtcblx0dmFyIEggPSB0dXBsZVswXTtcblx0dmFyIFMgPSB0dXBsZVsxXTtcblx0dmFyIEwgPSB0dXBsZVsyXTtcblx0aWYoTCA+IDk5Ljk5OTk5OTkpIHtcblx0XHRyZXR1cm4gWzEwMCwwLEhdO1xuXHR9XG5cdGlmKEwgPCAwLjAwMDAwMDAxKSB7XG5cdFx0cmV0dXJuIFswLDAsSF07XG5cdH1cblx0dmFyIG1heCA9IGhzbHV2LkhzbHV2Lm1heENocm9tYUZvckxIKEwsSCk7XG5cdHZhciBDID0gbWF4IC8gMTAwICogUztcblx0cmV0dXJuIFtMLEMsSF07XG59O1xuaHNsdXYuSHNsdXYubGNoVG9Ic2x1diA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHZhciBMID0gdHVwbGVbMF07XG5cdHZhciBDID0gdHVwbGVbMV07XG5cdHZhciBIID0gdHVwbGVbMl07XG5cdGlmKEwgPiA5OS45OTk5OTk5KSB7XG5cdFx0cmV0dXJuIFtILDAsMTAwXTtcblx0fVxuXHRpZihMIDwgMC4wMDAwMDAwMSkge1xuXHRcdHJldHVybiBbSCwwLDBdO1xuXHR9XG5cdHZhciBtYXggPSBoc2x1di5Ic2x1di5tYXhDaHJvbWFGb3JMSChMLEgpO1xuXHR2YXIgUyA9IEMgLyBtYXggKiAxMDA7XG5cdHJldHVybiBbSCxTLExdO1xufTtcbmhzbHV2LkhzbHV2LmhwbHV2VG9MY2ggPSBmdW5jdGlvbih0dXBsZSkge1xuXHR2YXIgSCA9IHR1cGxlWzBdO1xuXHR2YXIgUyA9IHR1cGxlWzFdO1xuXHR2YXIgTCA9IHR1cGxlWzJdO1xuXHRpZihMID4gOTkuOTk5OTk5OSkge1xuXHRcdHJldHVybiBbMTAwLDAsSF07XG5cdH1cblx0aWYoTCA8IDAuMDAwMDAwMDEpIHtcblx0XHRyZXR1cm4gWzAsMCxIXTtcblx0fVxuXHR2YXIgbWF4ID0gaHNsdXYuSHNsdXYubWF4U2FmZUNocm9tYUZvckwoTCk7XG5cdHZhciBDID0gbWF4IC8gMTAwICogUztcblx0cmV0dXJuIFtMLEMsSF07XG59O1xuaHNsdXYuSHNsdXYubGNoVG9IcGx1diA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHZhciBMID0gdHVwbGVbMF07XG5cdHZhciBDID0gdHVwbGVbMV07XG5cdHZhciBIID0gdHVwbGVbMl07XG5cdGlmKEwgPiA5OS45OTk5OTk5KSB7XG5cdFx0cmV0dXJuIFtILDAsMTAwXTtcblx0fVxuXHRpZihMIDwgMC4wMDAwMDAwMSkge1xuXHRcdHJldHVybiBbSCwwLDBdO1xuXHR9XG5cdHZhciBtYXggPSBoc2x1di5Ic2x1di5tYXhTYWZlQ2hyb21hRm9yTChMKTtcblx0dmFyIFMgPSBDIC8gbWF4ICogMTAwO1xuXHRyZXR1cm4gW0gsUyxMXTtcbn07XG5oc2x1di5Ic2x1di5yZ2JUb0hleCA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHZhciBoID0gXCIjXCI7XG5cdHZhciBfZyA9IDA7XG5cdHdoaWxlKF9nIDwgMykge1xuXHRcdHZhciBpID0gX2crKztcblx0XHR2YXIgY2hhbiA9IHR1cGxlW2ldO1xuXHRcdHZhciBjID0gTWF0aC5yb3VuZChjaGFuICogMjU1KTtcblx0XHR2YXIgZGlnaXQyID0gYyAlIDE2O1xuXHRcdHZhciBkaWdpdDEgPSAoYyAtIGRpZ2l0MikgLyAxNiB8IDA7XG5cdFx0aCArPSBoc2x1di5Ic2x1di5oZXhDaGFycy5jaGFyQXQoZGlnaXQxKSArIGhzbHV2LkhzbHV2LmhleENoYXJzLmNoYXJBdChkaWdpdDIpO1xuXHR9XG5cdHJldHVybiBoO1xufTtcbmhzbHV2LkhzbHV2LmhleFRvUmdiID0gZnVuY3Rpb24oaGV4KSB7XG5cdGhleCA9IGhleC50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgcmV0ID0gW107XG5cdHZhciBfZyA9IDA7XG5cdHdoaWxlKF9nIDwgMykge1xuXHRcdHZhciBpID0gX2crKztcblx0XHR2YXIgZGlnaXQxID0gaHNsdXYuSHNsdXYuaGV4Q2hhcnMuaW5kZXhPZihoZXguY2hhckF0KGkgKiAyICsgMSkpO1xuXHRcdHZhciBkaWdpdDIgPSBoc2x1di5Ic2x1di5oZXhDaGFycy5pbmRleE9mKGhleC5jaGFyQXQoaSAqIDIgKyAyKSk7XG5cdFx0dmFyIG4gPSBkaWdpdDEgKiAxNiArIGRpZ2l0Mjtcblx0XHRyZXQucHVzaChuIC8gMjU1LjApO1xuXHR9XG5cdHJldHVybiByZXQ7XG59O1xuaHNsdXYuSHNsdXYubGNoVG9SZ2IgPSBmdW5jdGlvbih0dXBsZSkge1xuXHRyZXR1cm4gaHNsdXYuSHNsdXYueHl6VG9SZ2IoaHNsdXYuSHNsdXYubHV2VG9YeXooaHNsdXYuSHNsdXYubGNoVG9MdXYodHVwbGUpKSk7XG59O1xuaHNsdXYuSHNsdXYucmdiVG9MY2ggPSBmdW5jdGlvbih0dXBsZSkge1xuXHRyZXR1cm4gaHNsdXYuSHNsdXYubHV2VG9MY2goaHNsdXYuSHNsdXYueHl6VG9MdXYoaHNsdXYuSHNsdXYucmdiVG9YeXoodHVwbGUpKSk7XG59O1xuaHNsdXYuSHNsdXYuaHNsdXZUb1JnYiA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5sY2hUb1JnYihoc2x1di5Ic2x1di5oc2x1dlRvTGNoKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYucmdiVG9Ic2x1diA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5sY2hUb0hzbHV2KGhzbHV2LkhzbHV2LnJnYlRvTGNoKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYuaHBsdXZUb1JnYiA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5sY2hUb1JnYihoc2x1di5Ic2x1di5ocGx1dlRvTGNoKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYucmdiVG9IcGx1diA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5sY2hUb0hwbHV2KGhzbHV2LkhzbHV2LnJnYlRvTGNoKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYuaHNsdXZUb0hleCA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5yZ2JUb0hleChoc2x1di5Ic2x1di5oc2x1dlRvUmdiKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYuaHBsdXZUb0hleCA9IGZ1bmN0aW9uKHR1cGxlKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5yZ2JUb0hleChoc2x1di5Ic2x1di5ocGx1dlRvUmdiKHR1cGxlKSk7XG59O1xuaHNsdXYuSHNsdXYuaGV4VG9Ic2x1diA9IGZ1bmN0aW9uKHMpIHtcblx0cmV0dXJuIGhzbHV2LkhzbHV2LnJnYlRvSHNsdXYoaHNsdXYuSHNsdXYuaGV4VG9SZ2IocykpO1xufTtcbmhzbHV2LkhzbHV2LmhleFRvSHBsdXYgPSBmdW5jdGlvbihzKSB7XG5cdHJldHVybiBoc2x1di5Ic2x1di5yZ2JUb0hwbHV2KGhzbHV2LkhzbHV2LmhleFRvUmdiKHMpKTtcbn07XG5oc2x1di5Ic2x1di5tID0gW1szLjI0MDk2OTk0MTkwNDUyMSwtMS41MzczODMxNzc1NzAwOTMsLTAuNDk4NjEwNzYwMjkzXSxbLTAuOTY5MjQzNjM2MjgwODcsMS44NzU5Njc1MDE1MDc3MiwwLjA0MTU1NTA1NzQwNzE3NV0sWzAuMDU1NjMwMDc5Njk2OTkzLC0wLjIwMzk3Njk1ODg4ODk3LDEuMDU2OTcxNTE0MjQyODc4XV07XG5oc2x1di5Ic2x1di5taW52ID0gW1swLjQxMjM5MDc5OTI2NTk1LDAuMzU3NTg0MzM5MzgzODcsMC4xODA0ODA3ODg0MDE4M10sWzAuMjEyNjM5MDA1ODcxNTEsMC43MTUxNjg2Nzg3Njc3NSwwLjA3MjE5MjMxNTM2MDczM10sWzAuMDE5MzMwODE4NzE1NTkxLDAuMTE5MTk0Nzc5Nzk0NjIsMC45NTA1MzIxNTIyNDk2Nl1dO1xuaHNsdXYuSHNsdXYucmVmWSA9IDEuMDtcbmhzbHV2LkhzbHV2LnJlZlUgPSAwLjE5NzgzMDAwNjY0MjgzO1xuaHNsdXYuSHNsdXYucmVmViA9IDAuNDY4MzE5OTk0OTM4Nzk7XG5oc2x1di5Ic2x1di5rYXBwYSA9IDkwMy4yOTYyOTYyO1xuaHNsdXYuSHNsdXYuZXBzaWxvbiA9IDAuMDA4ODU2NDUxNjtcbmhzbHV2LkhzbHV2LmhleENoYXJzID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG52YXIgcm9vdCA9IHtcbiAgICBcImhzbHV2VG9SZ2JcIjogaHNsdXYuSHNsdXYuaHNsdXZUb1JnYixcbiAgICBcInJnYlRvSHNsdXZcIjogaHNsdXYuSHNsdXYucmdiVG9Ic2x1dixcbiAgICBcImhwbHV2VG9SZ2JcIjogaHNsdXYuSHNsdXYuaHBsdXZUb1JnYixcbiAgICBcInJnYlRvSHBsdXZcIjogaHNsdXYuSHNsdXYucmdiVG9IcGx1dixcbiAgICBcImhzbHV2VG9IZXhcIjogaHNsdXYuSHNsdXYuaHNsdXZUb0hleCxcbiAgICBcImhleFRvSHNsdXZcIjogaHNsdXYuSHNsdXYuaGV4VG9Ic2x1dixcbiAgICBcImhwbHV2VG9IZXhcIjogaHNsdXYuSHNsdXYuaHBsdXZUb0hleCxcbiAgICBcImhleFRvSHBsdXZcIjogaHNsdXYuSHNsdXYuaGV4VG9IcGx1dixcbiAgICBcImxjaFRvSHBsdXZcIjogaHNsdXYuSHNsdXYubGNoVG9IcGx1dixcbiAgICBcImhwbHV2VG9MY2hcIjogaHNsdXYuSHNsdXYuaHBsdXZUb0xjaCxcbiAgICBcImxjaFRvSHNsdXZcIjogaHNsdXYuSHNsdXYubGNoVG9Ic2x1dixcbiAgICBcImhzbHV2VG9MY2hcIjogaHNsdXYuSHNsdXYuaHNsdXZUb0xjaCxcbiAgICBcImxjaFRvTHV2XCI6IGhzbHV2LkhzbHV2LmxjaFRvTHV2LFxuICAgIFwibHV2VG9MY2hcIjogaHNsdXYuSHNsdXYubHV2VG9MY2gsXG4gICAgXCJ4eXpUb0x1dlwiOiBoc2x1di5Ic2x1di54eXpUb0x1dixcbiAgICBcImx1dlRvWHl6XCI6IGhzbHV2LkhzbHV2Lmx1dlRvWHl6LFxuICAgIFwieHl6VG9SZ2JcIjogaHNsdXYuSHNsdXYueHl6VG9SZ2IsXG4gICAgXCJyZ2JUb1h5elwiOiBoc2x1di5Ic2x1di5yZ2JUb1h5eixcbiAgICBcImxjaFRvUmdiXCI6IGhzbHV2LkhzbHV2LmxjaFRvUmdiLFxuICAgIFwicmdiVG9MY2hcIjogaHNsdXYuSHNsdXYucmdiVG9MY2hcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKlxyXG4gKiBDbGFtcCB2YWx1ZS5cclxuICogRGV0ZWN0cyBwcm9wZXIgY2xhbXAgbWluL21heC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGEgQ3VycmVudCB2YWx1ZSB0byBjdXQgb2ZmXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gT25lIHNpZGUgbGltaXRcclxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBPdGhlciBzaWRlIGxpbWl0XHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gQ2xhbXBlZCB2YWx1ZVxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIG1pbiwgbWF4KXtcclxuXHRyZXR1cm4gbWF4ID4gbWluID8gTWF0aC5tYXgoTWF0aC5taW4oYSxtYXgpLG1pbikgOiBNYXRoLm1heChNYXRoLm1pbihhLG1pbiksbWF4KTtcclxufTtcclxuIiwiLyoqXHJcbiAqIExvb3BpbmcgZnVuY3Rpb24gZm9yIGFueSBmcmFtZXNpemUuXHJcbiAqIExpa2UgZm1vZC5cclxuICpcclxuICogQG1vZHVsZSAgbXVtYXRoL2xvb3BcclxuICpcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsZWZ0LCByaWdodCkge1xyXG5cdC8vZGV0ZWN0IHNpbmdsZS1hcmcgY2FzZSwgbGlrZSBtb2QtbG9vcCBvciBmbW9kXHJcblx0aWYgKHJpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJpZ2h0ID0gbGVmdDtcclxuXHRcdGxlZnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Ly9zd2FwIGZyYW1lIG9yZGVyXHJcblx0aWYgKGxlZnQgPiByaWdodCkge1xyXG5cdFx0dmFyIHRtcCA9IHJpZ2h0O1xyXG5cdFx0cmlnaHQgPSBsZWZ0O1xyXG5cdFx0bGVmdCA9IHRtcDtcclxuXHR9XHJcblxyXG5cdHZhciBmcmFtZSA9IHJpZ2h0IC0gbGVmdDtcclxuXHJcblx0dmFsdWUgPSAoKHZhbHVlICsgbGVmdCkgJSBmcmFtZSkgLSBsZWZ0O1xyXG5cdGlmICh2YWx1ZSA8IGxlZnQpIHZhbHVlICs9IGZyYW1lO1xyXG5cdGlmICh2YWx1ZSA+IHJpZ2h0KSB2YWx1ZSAtPSBmcmFtZTtcclxuXHJcblx0cmV0dXJuIHZhbHVlO1xyXG59O1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL0BmaWdtYS9wbHVnaW4tdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cbmxldCBzcGFjZSA9IHJlcXVpcmUoXCJjb2xvci1zcGFjZVwiKTtcbmltcG9ydCB7IGNvbG9yQ29udmVydGVyIH0gZnJvbSBcIi4vY29sb3ItY29udmVydGVyXCI7XG5jb25zdCBjb252ID0gbmV3IGNvbG9yQ29udmVydGVyKCk7XG5sZXQgd1dpZHRoID0gMzAwO1xubGV0IHdIZWlnaHQgPSA0ODA7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IHdXaWR0aCwgaGVpZ2h0OiB3SGVpZ2h0IH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjcmVhdGUtcmVjdGFuZ2xlc1wiKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIHJlY3QueCA9IGkgKiAxNTA7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAwLjUsIGI6IDAgfSB9XTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY3JlYXRlLWNvbG9yc1wiKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIGxldCBjb2xzID0gbXNnLmNvbG9ycztcbiAgICAgICAgY29uc29sZS5sb2coY29scyk7XG4gICAgICAgIC8vIENvbnZlcnQgY29sb3JzIGluc2lkZSwgZnJvbSBoZXggdG8gcmdiIG9iamVjdHNcbiAgICAgICAgY29scy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAgICAgcmVjdC54ID0gaSAqIDEyMDtcbiAgICAgICAgICAgIGxldCBjb2xGaWdtYSA9IGNvbnYuaGV4cmdiKGNvbCk7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcjogY29sRmlnbWEucixcbiAgICAgICAgICAgICAgICAgICAgICAgIGc6IGNvbEZpZ21hLmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBjb2xGaWdtYS5iLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4vLy8vIENhbGN1bGF0ZSBmb250IHNpemVzXG4vLyBJbnB1dDogYmFzZSBhbmQgc2NhbGUgLT4gT3V0cHV0OiBPYmplY3QgY29udGFpbmluZyBlbSwgc2l6ZXNcbi8vIEV4dHJhOiBhZGQgbGluZSBoZWlnaHRcbi8vLy8gVmlldyBGb250LlxuLy8gTG9hZCBsaXN0IG9mIGZvbnRzXG4vLyBUYWtlIHRoZSB3YW50ZWQgZm9udFxuLy9cbiIsImNsYXNzIGNvbG9yQ29udmVydGVyIHtcbiAgICBoZXhyZ2IoaGV4KSB7XG4gICAgICAgIC8vIEZpZ21hIGZyaWVuZGx5LlxuICAgICAgICAvLyBSZXR1cm5zIG9iamVjdCByLCBnLCBiLiBGcm9tIDAgdG8gMS4gTWFwIGZyb20gaGV4IDAwIHRvIGZmLlxuICAgICAgICBsZXQgcmdiID0geyByOiAwLCBnOiAwLCBiOiAwIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgdGhpcyBoZXg6XCIgK2hleCk7XG4gICAgICAgIC8vIENoZWNrIGlmIGhleC4gTmVlZCB0byB1c2UgY2F0Y2hcbiAgICAgICAgaWYgKHRoaXMuaXNIZXhhZGVjaW1hbChoZXguc3Vic3RyaW5nKDEpKSkge1xuICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIHJnYi5yID0gdGhpcy5tYXAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpLCAwLCAyNTUsIDAsIDEpO1xuICAgICAgICAgICAgcmdiLmcgPSB0aGlzLm1hcChwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNiksIDAsIDI1NSwgMCwgMSk7XG4gICAgICAgICAgICByZ2IuYiA9IHRoaXMubWFwKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCksIDE2KSwgMCwgMjU1LCAwLCAxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29sb3IgY29udmVydGVkOiBcIityZ2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuICAgIGhleHJnYjI1NihoZXgpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAwLCAwXTtcbiAgICAgICAgaWYgKHRoaXMuaXNIZXhhZGVjaW1hbChoZXguc3Vic3RyaW5nKDEpKSkge1xuICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIHJnYlswXSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICAgICAgICAgIHJnYlsxXSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICAgICAgICAgIHJnYlsyXSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCksIDE2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH1cbiAgICByZ2IyNTZoZXgocmdiKSB7XG4gICAgICAgIC8vIFJHQiAwLTI1NlxuICAgICAgICBsZXQgaGV4ID0gXCIjXCIgK1xuICAgICAgICAgICAgcmdiWzBdLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAwKSArXG4gICAgICAgICAgICByZ2JbMV0udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIDApICtcbiAgICAgICAgICAgIHJnYlsyXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgMCk7XG4gICAgICAgIHJldHVybiBoZXg7XG4gICAgfVxuICAgIHJnYmhleChyZ2IpIHtcbiAgICAgICAgLy8gRmlnbWEgZnJpZW5kbHkgUkdCIDAtMSB0byBoZXhcbiAgICAgICAgbGV0IGhleCA9IFwiI1wiICtcbiAgICAgICAgICAgIHRoaXMubWFwKHJnYi5yLCAwLCAxLCAwLCAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAwKSArXG4gICAgICAgICAgICB0aGlzLm1hcChyZ2IuZywgMCwgMSwgMCwgMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgMCkgK1xuICAgICAgICAgICAgdGhpcy5tYXAocmdiLmIsIDAsIDEsIDAsIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIDApO1xuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH1cbiAgICBpc0hleGFkZWNpbWFsKGhleCkge1xuICAgICAgICBsZXQgcmVnZXhwID0gL15bMC05YS1mQS1GXSskLztcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KGhleCkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBtYXAodmFsdWUsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgLSB4MSkgKiAoeTIgLSB4MikgLyAoeTEgLSB4MSkgKyB4MjtcbiAgICB9XG59XG5leHBvcnQgeyBjb2xvckNvbnZlcnRlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==