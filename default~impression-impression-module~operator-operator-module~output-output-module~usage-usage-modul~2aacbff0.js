(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~impression-impression-module~operator-operator-module~output-output-module~usage-usage-modul~2aacbff0"],{

/***/ "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license
 * chartjs-plugin-zoom
 * http://chartjs.org/
 * Version: 0.7.7
 *
 * Copyright 2020 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md
 */
(function (global, factory) {
 true ? module.exports = factory(__webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js"), __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js")) :
undefined;
}(this, (function (Chart, Hammer) { 'use strict';

Chart = Chart && Object.prototype.hasOwnProperty.call(Chart, 'default') ? Chart['default'] : Chart;
Hammer = Hammer && Object.prototype.hasOwnProperty.call(Hammer, 'default') ? Hammer['default'] : Hammer;

var helpers = Chart.helpers;

// Take the zoom namespace of Chart
var zoomNS = Chart.Zoom = Chart.Zoom || {};

// Where we store functions to handle different scale types
var zoomFunctions = zoomNS.zoomFunctions = zoomNS.zoomFunctions || {};
var panFunctions = zoomNS.panFunctions = zoomNS.panFunctions || {};

Chart.Zoom.defaults = Chart.defaults.global.plugins.zoom = {
	pan: {
		enabled: false,
		mode: 'xy',
		speed: 20,
		threshold: 10
	},
	zoom: {
		enabled: false,
		mode: 'xy',
		sensitivity: 3,
		speed: 0.1
	}
};

function resolveOptions(chart, options) {
	var deprecatedOptions = {};
	if (typeof chart.options.pan !== 'undefined') {
		deprecatedOptions.pan = chart.options.pan;
	}
	if (typeof chart.options.zoom !== 'undefined') {
		deprecatedOptions.zoom = chart.options.zoom;
	}
	var props = chart.$zoom;
	options = props._options = helpers.merge({}, [options, deprecatedOptions]);

	// Install listeners. Do this dynamically based on options so that we can turn zoom on and off
	// We also want to make sure listeners aren't always on. E.g. if you're scrolling down a page
	// and the mouse goes over a chart you don't want it intercepted unless the plugin is enabled
	var node = props._node;
	var zoomEnabled = options.zoom && options.zoom.enabled;
	var dragEnabled = options.zoom.drag;
	if (zoomEnabled && !dragEnabled) {
		node.addEventListener('wheel', props._wheelHandler);
	} else {
		node.removeEventListener('wheel', props._wheelHandler);
	}
	if (zoomEnabled && dragEnabled) {
		node.addEventListener('mousedown', props._mouseDownHandler);
		node.ownerDocument.addEventListener('mouseup', props._mouseUpHandler);
	} else {
		node.removeEventListener('mousedown', props._mouseDownHandler);
		node.removeEventListener('mousemove', props._mouseMoveHandler);
		node.ownerDocument.removeEventListener('mouseup', props._mouseUpHandler);
	}
}

function storeOriginalOptions(chart) {
	var originalOptions = chart.$zoom._originalOptions;
	helpers.each(chart.scales, function(scale) {
		if (!originalOptions[scale.id]) {
			originalOptions[scale.id] = helpers.clone(scale.options);
		}
	});
	helpers.each(originalOptions, function(opt, key) {
		if (!chart.scales[key]) {
			delete originalOptions[key];
		}
	});
}

/**
 * @param {string} mode can be 'x', 'y' or 'xy'
 * @param {string} dir can be 'x' or 'y'
 * @param {Chart} chart instance of the chart in question
 */
function directionEnabled(mode, dir, chart) {
	if (mode === undefined) {
		return true;
	} else if (typeof mode === 'string') {
		return mode.indexOf(dir) !== -1;
	} else if (typeof mode === 'function') {
		return mode({chart: chart}).indexOf(dir) !== -1;
	}

	return false;
}

function rangeMaxLimiter(zoomPanOptions, newMax) {
	if (zoomPanOptions.scaleAxes && zoomPanOptions.rangeMax &&
			!helpers.isNullOrUndef(zoomPanOptions.rangeMax[zoomPanOptions.scaleAxes])) {
		var rangeMax = zoomPanOptions.rangeMax[zoomPanOptions.scaleAxes];
		if (newMax > rangeMax) {
			newMax = rangeMax;
		}
	}
	return newMax;
}

function rangeMinLimiter(zoomPanOptions, newMin) {
	if (zoomPanOptions.scaleAxes && zoomPanOptions.rangeMin &&
			!helpers.isNullOrUndef(zoomPanOptions.rangeMin[zoomPanOptions.scaleAxes])) {
		var rangeMin = zoomPanOptions.rangeMin[zoomPanOptions.scaleAxes];
		if (newMin < rangeMin) {
			newMin = rangeMin;
		}
	}
	return newMin;
}

function zoomCategoryScale(scale, zoom, center, zoomOptions) {
	var labels = scale.chart.data.labels;
	var minIndex = scale.minIndex;
	var lastLabelIndex = labels.length - 1;
	var maxIndex = scale.maxIndex;
	var sensitivity = zoomOptions.sensitivity;
	var chartCenter = scale.isHorizontal() ? scale.left + (scale.width / 2) : scale.top + (scale.height / 2);
	var centerPointer = scale.isHorizontal() ? center.x : center.y;

	zoomNS.zoomCumulativeDelta = zoom > 1 ? zoomNS.zoomCumulativeDelta + 1 : zoomNS.zoomCumulativeDelta - 1;

	if (Math.abs(zoomNS.zoomCumulativeDelta) > sensitivity) {
		if (zoomNS.zoomCumulativeDelta < 0) {
			if (centerPointer >= chartCenter) {
				if (minIndex <= 0) {
					maxIndex = Math.min(lastLabelIndex, maxIndex + 1);
				} else {
					minIndex = Math.max(0, minIndex - 1);
				}
			} else if (centerPointer < chartCenter) {
				if (maxIndex >= lastLabelIndex) {
					minIndex = Math.max(0, minIndex - 1);
				} else {
					maxIndex = Math.min(lastLabelIndex, maxIndex + 1);
				}
			}
			zoomNS.zoomCumulativeDelta = 0;
		} else if (zoomNS.zoomCumulativeDelta > 0) {
			if (centerPointer >= chartCenter) {
				minIndex = minIndex < maxIndex ? minIndex = Math.min(maxIndex, minIndex + 1) : minIndex;
			} else if (centerPointer < chartCenter) {
				maxIndex = maxIndex > minIndex ? maxIndex = Math.max(minIndex, maxIndex - 1) : maxIndex;
			}
			zoomNS.zoomCumulativeDelta = 0;
		}
		scale.options.ticks.min = rangeMinLimiter(zoomOptions, labels[minIndex]);
		scale.options.ticks.max = rangeMaxLimiter(zoomOptions, labels[maxIndex]);
	}
}

function zoomNumericalScale(scale, zoom, center, zoomOptions) {
	var range = scale.max - scale.min;
	var newDiff = range * (zoom - 1);

	var centerPoint = scale.isHorizontal() ? center.x : center.y;
	var minPercent = (scale.getValueForPixel(centerPoint) - scale.min) / range;
	var maxPercent = 1 - minPercent;

	var minDelta = newDiff * minPercent;
	var maxDelta = newDiff * maxPercent;

	scale.options.ticks.min = rangeMinLimiter(zoomOptions, scale.min + minDelta);
	scale.options.ticks.max = rangeMaxLimiter(zoomOptions, scale.max - maxDelta);
}

function zoomTimeScale(scale, zoom, center, zoomOptions) {
	zoomNumericalScale(scale, zoom, center, zoomOptions);

	var options = scale.options;
	if (options.time) {
		if (options.time.min) {
			options.time.min = options.ticks.min;
		}
		if (options.time.max) {
			options.time.max = options.ticks.max;
		}
	}
}

function zoomScale(scale, zoom, center, zoomOptions) {
	var fn = zoomFunctions[scale.type];
	if (fn) {
		fn(scale, zoom, center, zoomOptions);
	}
}

/**
 * @param chart The chart instance
 * @param {number} percentZoomX The zoom percentage in the x direction
 * @param {number} percentZoomY The zoom percentage in the y direction
 * @param {{x: number, y: number}} focalPoint The x and y coordinates of zoom focal point. The point which doesn't change while zooming. E.g. the location of the mouse cursor when "drag: false"
 * @param {string} whichAxes `xy`, 'x', or 'y'
 * @param {number} animationDuration Duration of the animation of the redraw in milliseconds
 */
function doZoom(chart, percentZoomX, percentZoomY, focalPoint, whichAxes, animationDuration) {
	var ca = chart.chartArea;
	if (!focalPoint) {
		focalPoint = {
			x: (ca.left + ca.right) / 2,
			y: (ca.top + ca.bottom) / 2,
		};
	}

	var zoomOptions = chart.$zoom._options.zoom;

	if (zoomOptions.enabled) {
		storeOriginalOptions(chart);
		// Do the zoom here
		var zoomMode = typeof zoomOptions.mode === 'function' ? zoomOptions.mode({chart: chart}) : zoomOptions.mode;

		// Which axe should be modified when figers were used.
		var _whichAxes;
		if (zoomMode === 'xy' && whichAxes !== undefined) {
			// based on fingers positions
			_whichAxes = whichAxes;
		} else {
			// no effect
			_whichAxes = 'xy';
		}

		helpers.each(chart.scales, function(scale) {
			if (scale.isHorizontal() && directionEnabled(zoomMode, 'x', chart) && directionEnabled(_whichAxes, 'x', chart)) {
				zoomOptions.scaleAxes = 'x';
				zoomScale(scale, percentZoomX, focalPoint, zoomOptions);
			} else if (!scale.isHorizontal() && directionEnabled(zoomMode, 'y', chart) && directionEnabled(_whichAxes, 'y', chart)) {
				// Do Y zoom
				zoomOptions.scaleAxes = 'y';
				zoomScale(scale, percentZoomY, focalPoint, zoomOptions);
			}
		});

		if (animationDuration) {
			chart.update({
				duration: animationDuration,
				easing: 'easeOutQuad',
			});
		} else {
			chart.update(0);
		}

		if (typeof zoomOptions.onZoom === 'function') {
			zoomOptions.onZoom({chart: chart});
		}
	}
}

function panCategoryScale(scale, delta, panOptions) {
	var labels = scale.chart.data.labels;
	var lastLabelIndex = labels.length - 1;
	var offsetAmt = Math.max(scale.ticks.length, 1);
	var panSpeed = panOptions.speed;
	var minIndex = scale.minIndex;
	var step = Math.round(scale.width / (offsetAmt * panSpeed));
	var maxIndex;

	zoomNS.panCumulativeDelta += delta;

	minIndex = zoomNS.panCumulativeDelta > step ? Math.max(0, minIndex - 1) : zoomNS.panCumulativeDelta < -step ? Math.min(lastLabelIndex - offsetAmt + 1, minIndex + 1) : minIndex;
	zoomNS.panCumulativeDelta = minIndex !== scale.minIndex ? 0 : zoomNS.panCumulativeDelta;

	maxIndex = Math.min(lastLabelIndex, minIndex + offsetAmt - 1);

	scale.options.ticks.min = rangeMinLimiter(panOptions, labels[minIndex]);
	scale.options.ticks.max = rangeMaxLimiter(panOptions, labels[maxIndex]);
}

function panNumericalScale(scale, delta, panOptions) {
	var tickOpts = scale.options.ticks;
	var prevStart = scale.min;
	var prevEnd = scale.max;
	var newMin = scale.getValueForPixel(scale.getPixelForValue(prevStart) - delta);
	var newMax = scale.getValueForPixel(scale.getPixelForValue(prevEnd) - delta);
	// The time scale returns date objects so convert to numbers. Can remove at Chart.js v3
	newMin = newMin.valueOf ? newMin.valueOf() : newMin;
	newMax = newMax.valueOf ? newMax.valueOf() : newMax;
	var rangeMin = newMin;
	var rangeMax = newMax;
	var diff;

	if (panOptions.scaleAxes && panOptions.rangeMin &&
			!helpers.isNullOrUndef(panOptions.rangeMin[panOptions.scaleAxes])) {
		rangeMin = panOptions.rangeMin[panOptions.scaleAxes];
	}
	if (panOptions.scaleAxes && panOptions.rangeMax &&
			!helpers.isNullOrUndef(panOptions.rangeMax[panOptions.scaleAxes])) {
		rangeMax = panOptions.rangeMax[panOptions.scaleAxes];
	}

	if (newMin >= rangeMin && newMax <= rangeMax) {
		tickOpts.min = newMin;
		tickOpts.max = newMax;
	} else if (newMin < rangeMin) {
		diff = prevStart - rangeMin;
		tickOpts.min = rangeMin;
		tickOpts.max = prevEnd - diff;
	} else if (newMax > rangeMax) {
		diff = rangeMax - prevEnd;
		tickOpts.max = rangeMax;
		tickOpts.min = prevStart + diff;
	}
}

function panTimeScale(scale, delta, panOptions) {
	panNumericalScale(scale, delta, panOptions);

	var options = scale.options;
	if (options.time) {
		if (options.time.min) {
			options.time.min = options.ticks.min;
		}
		if (options.time.max) {
			options.time.max = options.ticks.max;
		}
	}
}

function panScale(scale, delta, panOptions) {
	var fn = panFunctions[scale.type];
	if (fn) {
		fn(scale, delta, panOptions);
	}
}

function doPan(chartInstance, deltaX, deltaY) {
	storeOriginalOptions(chartInstance);
	var panOptions = chartInstance.$zoom._options.pan;
	if (panOptions.enabled) {
		var panMode = typeof panOptions.mode === 'function' ? panOptions.mode({chart: chartInstance}) : panOptions.mode;

		helpers.each(chartInstance.scales, function(scale) {
			if (scale.isHorizontal() && directionEnabled(panMode, 'x', chartInstance) && deltaX !== 0) {
				panOptions.scaleAxes = 'x';
				panScale(scale, deltaX, panOptions);
			} else if (!scale.isHorizontal() && directionEnabled(panMode, 'y', chartInstance) && deltaY !== 0) {
				panOptions.scaleAxes = 'y';
				panScale(scale, deltaY, panOptions);
			}
		});

		chartInstance.update(0);

		if (typeof panOptions.onPan === 'function') {
			panOptions.onPan({chart: chartInstance});
		}
	}
}

function getXAxis(chartInstance) {
	var scales = chartInstance.scales;
	var scaleIds = Object.keys(scales);
	for (var i = 0; i < scaleIds.length; i++) {
		var scale = scales[scaleIds[i]];

		if (scale.isHorizontal()) {
			return scale;
		}
	}
}

function getYAxis(chartInstance) {
	var scales = chartInstance.scales;
	var scaleIds = Object.keys(scales);
	for (var i = 0; i < scaleIds.length; i++) {
		var scale = scales[scaleIds[i]];

		if (!scale.isHorizontal()) {
			return scale;
		}
	}
}

// Store these for later
zoomNS.zoomFunctions.category = zoomCategoryScale;
zoomNS.zoomFunctions.time = zoomTimeScale;
zoomNS.zoomFunctions.linear = zoomNumericalScale;
zoomNS.zoomFunctions.logarithmic = zoomNumericalScale;
zoomNS.panFunctions.category = panCategoryScale;
zoomNS.panFunctions.time = panTimeScale;
zoomNS.panFunctions.linear = panNumericalScale;
zoomNS.panFunctions.logarithmic = panNumericalScale;
// Globals for category pan and zoom
zoomNS.panCumulativeDelta = 0;
zoomNS.zoomCumulativeDelta = 0;

// Chartjs Zoom Plugin
var zoomPlugin = {
	id: 'zoom',

	afterInit: function(chartInstance) {

		chartInstance.resetZoom = function() {
			storeOriginalOptions(chartInstance);
			var originalOptions = chartInstance.$zoom._originalOptions;
			helpers.each(chartInstance.scales, function(scale) {

				var timeOptions = scale.options.time;
				var tickOptions = scale.options.ticks;

				if (originalOptions[scale.id]) {

					if (timeOptions) {
						timeOptions.min = originalOptions[scale.id].time.min;
						timeOptions.max = originalOptions[scale.id].time.max;
					}

					if (tickOptions) {
						tickOptions.min = originalOptions[scale.id].ticks.min;
						tickOptions.max = originalOptions[scale.id].ticks.max;
					}
				} else {

					if (timeOptions) {
						delete timeOptions.min;
						delete timeOptions.max;
					}

					if (tickOptions) {
						delete tickOptions.min;
						delete tickOptions.max;
					}
				}


			});

			chartInstance.update();
		};

	},

	beforeUpdate: function(chart, options) {
		resolveOptions(chart, options);
	},

	beforeInit: function(chartInstance, pluginOptions) {
		chartInstance.$zoom = {
			_originalOptions: {}
		};
		var node = chartInstance.$zoom._node = chartInstance.ctx.canvas;
		resolveOptions(chartInstance, pluginOptions);

		var options = chartInstance.$zoom._options;
		var panThreshold = options.pan && options.pan.threshold;

		chartInstance.$zoom._mouseDownHandler = function(event) {
			node.addEventListener('mousemove', chartInstance.$zoom._mouseMoveHandler);
			chartInstance.$zoom._dragZoomStart = event;
		};

		chartInstance.$zoom._mouseMoveHandler = function(event) {
			if (chartInstance.$zoom._dragZoomStart) {
				chartInstance.$zoom._dragZoomEnd = event;
				chartInstance.update(0);
			}
		};

		chartInstance.$zoom._mouseUpHandler = function(event) {
			if (!chartInstance.$zoom._dragZoomStart) {
				return;
			}

			node.removeEventListener('mousemove', chartInstance.$zoom._mouseMoveHandler);

			var beginPoint = chartInstance.$zoom._dragZoomStart;

			var offsetX = beginPoint.target.getBoundingClientRect().left;
			var startX = Math.min(beginPoint.clientX, event.clientX) - offsetX;
			var endX = Math.max(beginPoint.clientX, event.clientX) - offsetX;

			var offsetY = beginPoint.target.getBoundingClientRect().top;
			var startY = Math.min(beginPoint.clientY, event.clientY) - offsetY;
			var endY = Math.max(beginPoint.clientY, event.clientY) - offsetY;

			var dragDistanceX = endX - startX;
			var dragDistanceY = endY - startY;

			// Remove drag start and end before chart update to stop drawing selected area
			chartInstance.$zoom._dragZoomStart = null;
			chartInstance.$zoom._dragZoomEnd = null;

			var zoomThreshold = options.zoom && options.zoom.threshold || 0;
			if (dragDistanceX <= zoomThreshold && dragDistanceY <= zoomThreshold) {
				return;
			}

			var chartArea = chartInstance.chartArea;

			var zoomOptions = chartInstance.$zoom._options.zoom;
			var chartDistanceX = chartArea.right - chartArea.left;
			var xEnabled = directionEnabled(zoomOptions.mode, 'x', chartInstance);
			var zoomX = xEnabled && dragDistanceX ? 1 + ((chartDistanceX - dragDistanceX) / chartDistanceX) : 1;

			var chartDistanceY = chartArea.bottom - chartArea.top;
			var yEnabled = directionEnabled(zoomOptions.mode, 'y', chartInstance);
			var zoomY = yEnabled && dragDistanceY ? 1 + ((chartDistanceY - dragDistanceY) / chartDistanceY) : 1;

			doZoom(chartInstance, zoomX, zoomY, {
				x: (startX - chartArea.left) / (1 - dragDistanceX / chartDistanceX) + chartArea.left,
				y: (startY - chartArea.top) / (1 - dragDistanceY / chartDistanceY) + chartArea.top
			}, undefined, zoomOptions.drag.animationDuration);

			if (typeof zoomOptions.onZoomComplete === 'function') {
				zoomOptions.onZoomComplete({chart: chartInstance});
			}
		};

		var _scrollTimeout = null;
		chartInstance.$zoom._wheelHandler = function(event) {
			// Prevent the event from triggering the default behavior (eg. Content scrolling).
			if (event.cancelable) {
				event.preventDefault();
			}

			// Firefox always fires the wheel event twice:
			// First without the delta and right after that once with the delta properties.
			if (typeof event.deltaY === 'undefined') {
				return;
			}

			var rect = event.target.getBoundingClientRect();
			var offsetX = event.clientX - rect.left;
			var offsetY = event.clientY - rect.top;

			var center = {
				x: offsetX,
				y: offsetY
			};

			var zoomOptions = chartInstance.$zoom._options.zoom;
			var speedPercent = zoomOptions.speed;

			if (event.deltaY >= 0) {
				speedPercent = -speedPercent;
			}
			doZoom(chartInstance, 1 + speedPercent, 1 + speedPercent, center);

			clearTimeout(_scrollTimeout);
			_scrollTimeout = setTimeout(function() {
				if (typeof zoomOptions.onZoomComplete === 'function') {
					zoomOptions.onZoomComplete({chart: chartInstance});
				}
			}, 250);
		};

		if (Hammer) {
			var mc = new Hammer.Manager(node);
			mc.add(new Hammer.Pinch());
			mc.add(new Hammer.Pan({
				threshold: panThreshold
			}));

			// Hammer reports the total scaling. We need the incremental amount
			var currentPinchScaling;
			var handlePinch = function(e) {
				var diff = 1 / (currentPinchScaling) * e.scale;
				var rect = e.target.getBoundingClientRect();
				var offsetX = e.center.x - rect.left;
				var offsetY = e.center.y - rect.top;
				var center = {
					x: offsetX,
					y: offsetY
				};

				// fingers position difference
				var x = Math.abs(e.pointers[0].clientX - e.pointers[1].clientX);
				var y = Math.abs(e.pointers[0].clientY - e.pointers[1].clientY);

				// diagonal fingers will change both (xy) axes
				var p = x / y;
				var xy;
				if (p > 0.3 && p < 1.7) {
					xy = 'xy';
				} else if (x > y) {
					xy = 'x'; // x axis
				} else {
					xy = 'y'; // y axis
				}

				doZoom(chartInstance, diff, diff, center, xy);

				var zoomOptions = chartInstance.$zoom._options.zoom;
				if (typeof zoomOptions.onZoomComplete === 'function') {
					zoomOptions.onZoomComplete({chart: chartInstance});
				}

				// Keep track of overall scale
				currentPinchScaling = e.scale;
			};

			mc.on('pinchstart', function() {
				currentPinchScaling = 1; // reset tracker
			});
			mc.on('pinch', handlePinch);
			mc.on('pinchend', function(e) {
				handlePinch(e);
				currentPinchScaling = null; // reset
				zoomNS.zoomCumulativeDelta = 0;
			});

			var currentDeltaX = null;
			var currentDeltaY = null;
			var panning = false;
			var handlePan = function(e) {
				if (currentDeltaX !== null && currentDeltaY !== null) {
					panning = true;
					var deltaX = e.deltaX - currentDeltaX;
					var deltaY = e.deltaY - currentDeltaY;
					currentDeltaX = e.deltaX;
					currentDeltaY = e.deltaY;
					doPan(chartInstance, deltaX, deltaY);
				}
			};

			mc.on('panstart', function(e) {
				currentDeltaX = 0;
				currentDeltaY = 0;
				handlePan(e);
			});
			mc.on('panmove', handlePan);
			mc.on('panend', function() {
				currentDeltaX = null;
				currentDeltaY = null;
				zoomNS.panCumulativeDelta = 0;
				setTimeout(function() {
					panning = false;
				}, 500);

				var panOptions = chartInstance.$zoom._options.pan;
				if (typeof panOptions.onPanComplete === 'function') {
					panOptions.onPanComplete({chart: chartInstance});
				}
			});

			chartInstance.$zoom._ghostClickHandler = function(e) {
				if (panning && e.cancelable) {
					e.stopImmediatePropagation();
					e.preventDefault();
				}
			};
			node.addEventListener('click', chartInstance.$zoom._ghostClickHandler);

			chartInstance._mc = mc;
		}
	},

	beforeDatasetsDraw: function(chartInstance) {
		var ctx = chartInstance.ctx;

		if (chartInstance.$zoom._dragZoomEnd) {
			var xAxis = getXAxis(chartInstance);
			var yAxis = getYAxis(chartInstance);
			var beginPoint = chartInstance.$zoom._dragZoomStart;
			var endPoint = chartInstance.$zoom._dragZoomEnd;

			var startX = xAxis.left;
			var endX = xAxis.right;
			var startY = yAxis.top;
			var endY = yAxis.bottom;

			if (directionEnabled(chartInstance.$zoom._options.zoom.mode, 'x', chartInstance)) {
				var offsetX = beginPoint.target.getBoundingClientRect().left;
				startX = Math.min(beginPoint.clientX, endPoint.clientX) - offsetX;
				endX = Math.max(beginPoint.clientX, endPoint.clientX) - offsetX;
			}

			if (directionEnabled(chartInstance.$zoom._options.zoom.mode, 'y', chartInstance)) {
				var offsetY = beginPoint.target.getBoundingClientRect().top;
				startY = Math.min(beginPoint.clientY, endPoint.clientY) - offsetY;
				endY = Math.max(beginPoint.clientY, endPoint.clientY) - offsetY;
			}

			var rectWidth = endX - startX;
			var rectHeight = endY - startY;
			var dragOptions = chartInstance.$zoom._options.zoom.drag;

			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = dragOptions.backgroundColor || 'rgba(225,225,225,0.3)';
			ctx.fillRect(startX, startY, rectWidth, rectHeight);

			if (dragOptions.borderWidth > 0) {
				ctx.lineWidth = dragOptions.borderWidth;
				ctx.strokeStyle = dragOptions.borderColor || 'rgba(225,225,225)';
				ctx.strokeRect(startX, startY, rectWidth, rectHeight);
			}
			ctx.restore();
		}
	},

	destroy: function(chartInstance) {
		if (!chartInstance.$zoom) {
			return;
		}
		var props = chartInstance.$zoom;
		var node = props._node;

		node.removeEventListener('mousedown', props._mouseDownHandler);
		node.removeEventListener('mousemove', props._mouseMoveHandler);
		node.ownerDocument.removeEventListener('mouseup', props._mouseUpHandler);
		node.removeEventListener('wheel', props._wheelHandler);
		node.removeEventListener('click', props._ghostClickHandler);

		delete chartInstance.$zoom;

		var mc = chartInstance._mc;
		if (mc) {
			mc.remove('pinchstart');
			mc.remove('pinch');
			mc.remove('pinchend');
			mc.remove('panstart');
			mc.remove('pan');
			mc.remove('panend');
			mc.destroy();
		}
	}
};

Chart.plugins.register(zoomPlugin);

return zoomPlugin;

})));


/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>{{title}}</ion-card-subtitle> -->\n      <ion-card-title>{{ data.device }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <div style=\"width: 100%; overflow-x: auto;overflow-y:hidden\">\n        <div style=\"width: 3000px; height: 100%\">\n          <canvas #canvas height=\"100%\" width=\"3000\"></canvas>\n        </div>\n      </div> -->\n      <!-- \n      <div class=\"chartWrapper\">\n        <div class=\"chartAreaWrapper\">\n          <div class=\"chartAreaWrapper2\">\n              <canvas id=\"myChart\"></canvas>\n          </div>\n        </div>\n          \n          <canvas id=\"myChartAxis\" height=\"300\" width=\"0\"></canvas>\n          \n      </div> -->\n\n      <!-- <div #scrollView class=\"scrolling-wrapper\">\n        <div class=\"card\">\n          <canvas #canvas height=\"400\" width=\"3000\" style=\"pointer-events: none;\"></canvas>\n        </div>\n      </div> -->\n\n      <canvas #canvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chartWrapper {\n  position: relative; }\n\n.chartWrapper > canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.chartAreaWrapper {\n  width: 600px;\n  overflow-x: scroll; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  pointer-events: auto; }\n\n.scrolling-wrapper .card {\n    display: inline-block; }\n\n.chart-top {\n  position: relative;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvc2hhcmVkL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixvQkFBb0I7RUFDcEIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUp4QjtJQU9NLHFCQUFxQixFQUFBOztBQUkzQjtFQUNJLGtCQUFrQjtFQUdsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydFdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYXJ0V3JhcHBlciA+IGNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY2hhcnRBcmVhV3JhcHBlciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgXG4gICAgLmNhcmQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxuXG4uY2hhcnQtdG9wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbGVmdDogMHB4O1xuICAgIC8vIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.ts ***!
  \***************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-zoom */ "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");






var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(service) {
        this.service = service;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        //https://github.com/chartjs/Chart.js/issues/2958#issuecomment-261949718
        // var canvas: any = document.getElementById("myChart");
        // var ctx = canvas.getContext("2d");
        // var chart = {
        //   options: {
        //     responsive: true,
        //     maintainAspectRatio: false,
        //     animation: {
        //       onComplete: function (animation) {
        //         var sourceCanvas = myLiveChart.chart.canvas;
        //         var copyWidth = myLiveChart.scales['y-axis-0'].width - 10;
        //         var copyHeight = myLiveChart.scales['y-axis-0'].height + myLiveChart.scales['y-axis-0'].top + 10;
        //         var canvass: any = document.getElementById("myChartAxis");
        //         var targetCtx = canvass.getContext("2d");
        //         targetCtx.canvas.width = copyWidth;
        //         targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
        //       }
        //     }
        //   },
        //   type: 'bar',
        //   data: {
        //     labels: ["January", "February", "March", "April", "May", "June", "July"],
        //     datasets: [
        //       {
        //         label: "My First dataset",
        //         fillColor: "rgba(220,220,220,0.2)",
        //         strokeColor: "rgba(220,220,220,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: [65, 59, 80, 81, 56, 55, 40]
        //       }
        //     ]
        //   }
        // };
        // var myLiveChart = new Chart(ctx, chart);
        // for(var x=0;x<100;x++) {
        // myLiveChart.data.datasets[0].data.push(Math.random() * 100);
        // myLiveChart.data.labels.push("Test");
        // var newwidth = $('.chartAreaWrapper2').width() +60;
        // $('.chartAreaWrapper2').width(newwidth);
        // }
        this.createBarChart(this.data);
    };
    CanvasComponent.prototype.createBarChart = function (dataInput) {
        //register custom positioner
        chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].Tooltip.positioners.custom = function (elements, position) {
            //debugger;
            return {
                x: position.x,
                y: elements[0]._view.base - (elements[0].height() + elements[1].height())
            };
        };
        var usageChart = {
            scales: {
                xAxes: [{
                        barPercentage: 0.9,
                        gridLines: {
                            offsetGridLines: true
                        },
                        stacked: true
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true
                    }]
            },
            plugins: {
                zoom: {
                    // Container for pan options
                    pan: {
                        // Boolean to enable panning
                        enabled: true,
                        // Panning directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow panning in the y direction
                        // A function that is called as the user is panning and returns the
                        // available directions can also be used:
                        //   mode: function({ chart }) {
                        //     return 'xy';
                        //   },
                        mode: 'xy',
                        rangeMin: {
                            // Format of min pan range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max pan range depends on scale type
                            x: null,
                            y: null
                        },
                        // Function called while the user is panning
                        onPan: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I'm panning!!!");
                        },
                        // Function called once panning is completed
                        onPanComplete: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I was panned!!!");
                        }
                    },
                    // Container for zoom options
                    zoom: {
                        // Boolean to enable zooming
                        enabled: true,
                        // Enable drag-to-zoom behavior
                        drag: true,
                        // Drag-to-zoom effect can be customized
                        // drag: {
                        // 	 borderColor: 'rgba(225,225,225,0.3)'
                        // 	 borderWidth: 5,
                        // 	 backgroundColor: 'rgb(225,225,225)',
                        // 	 animationDuration: 0
                        // },
                        // Zooming directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow zooming in the y direction
                        // A function that is called as the user is zooming and returns the
                        // available directions can also be used:
                        //   mode: function({ chart }) {
                        //     return 'xy';
                        //   },
                        mode: 'xy',
                        rangeMin: {
                            // Format of min zoom range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max zoom range depends on scale type
                            x: null,
                            y: null
                        },
                        // Speed of zoom via mouse wheel
                        // (percentage of zoom on a wheel event)
                        speed: 0.1,
                        // Function called while the user is zooming
                        onZoom: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I'm zooming!!!");
                        },
                        // Function called once zooming is completed
                        onZoomComplete: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I was zoomed!!!");
                        }
                    }
                }
            }
        };
        var impressionChart = {
            scales: {
                xAxes: [{
                        barPercentage: 0.9,
                        gridLines: {
                            offsetGridLines: true
                        },
                        stacked: true
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        stacked: true
                    }]
            },
            tooltips: {
                caretY: 0,
                yAlign: 'bottom',
                mode: 'label',
                position: 'nearest',
                callbacks: {
                    afterTitle: function () {
                        window.total = 0;
                    },
                    label: function (tooltipItem, data) {
                        var corporation = data.datasets[tooltipItem.datasetIndex].label;
                        var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        window.total += valor;
                        return corporation + ": " + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    },
                    footer: function () {
                        return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    }
                },
            },
            plugins: {
                zoom: {
                    // Container for pan options
                    pan: {
                        // Boolean to enable panning
                        enabled: true,
                        // Panning directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow panning in the y direction
                        // A function that is called as the user is panning and returns the
                        // available directions can also be used:
                        //   mode: function({ chart }) {
                        //     return 'xy';
                        //   },
                        mode: 'xy',
                        rangeMin: {
                            // Format of min pan range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max pan range depends on scale type
                            x: null,
                            y: null
                        },
                        // Function called while the user is panning
                        onPan: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I'm panning!!!");
                        },
                        // Function called once panning is completed
                        onPanComplete: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I was panned!!!");
                        }
                    },
                    // Container for zoom options
                    zoom: {
                        // Boolean to enable zooming
                        enabled: true,
                        // Enable drag-to-zoom behavior
                        drag: true,
                        // Drag-to-zoom effect can be customized
                        // drag: {
                        // 	 borderColor: 'rgba(225,225,225,0.3)'
                        // 	 borderWidth: 5,
                        // 	 backgroundColor: 'rgb(225,225,225)',
                        // 	 animationDuration: 0
                        // },
                        // Zooming directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow zooming in the y direction
                        // A function that is called as the user is zooming and returns the
                        // available directions can also be used:
                        //   mode: function({ chart }) {
                        //     return 'xy';
                        //   },
                        mode: 'xy',
                        rangeMin: {
                            // Format of min zoom range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max zoom range depends on scale type
                            x: null,
                            y: null
                        },
                        // Speed of zoom via mouse wheel
                        // (percentage of zoom on a wheel event)
                        speed: 0.1,
                        // Function called while the user is zooming
                        onZoom: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I'm zooming!!!");
                        },
                        // Function called once zooming is completed
                        onZoomComplete: function (_a) {
                            var chart = _a.chart;
                            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("I was zoomed!!!");
                        }
                    }
                }
            }
        };
        var strTitle = String(this.title);
        var ctx = this.canvas.nativeElement;
        var weight = this.service.isDesktop() ? 0.25 : 0.52;
        ctx.height = this.service.screenSize()['screenHeight'] * weight;
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'bar',
            data: {
                labels: JSON.parse(dataInput["data"]).labels,
                datasets: JSON.parse(dataInput["data"]).datasets
            },
            options: strTitle.includes('impression') || strTitle.includes('wip') || strTitle.includes('output') ? impressionChart : usageChart
            // {
            // plugins: {
            //   stacked100: { enable: true }
            // },
            //   scales: {
            //     yAxes: [{
            //         ticks: {
            //             min: 0,
            //             max: 100,
            //             callback: function(value) {
            //                 return value + "%"
            //             }
            //         },
            //         stacked: true,
            //         scaleLabel: {
            //             display: true,
            //             labelString: "Percentage"
            //         }
            //     }],
            //     xAxes: [{
            //       stacked: true
            //     }]
            //  }
            // }
        });
        // Chart.defaults.global.showTooltips = false;
    };
    CanvasComponent.prototype.myFunction = function () {
        src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("Hello world!");
    };
    CanvasComponent.prototype.yHandler = function () {
        src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["config"].log("123 123 123");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chart-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/shared/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/shared/canvas/canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{modalTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\"\n        (click)=\"checkMaster()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item *ngFor=\"let item of checkBoxList\">\n      <ion-label>{{item.machine.name}}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button color=\"danger\" (click)=\"cancelModal()\">Cancel</ion-button>\n        <ion-button (click)=\"closeModal()\">Select</ion-button>\n      </ion-col>\n    </ion-row>\n\t</ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWxlY3QtbWFjaGluZS9zZWxlY3QtbWFjaGluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMachineComponent", function() { return SelectMachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SelectMachineComponent = /** @class */ (function () {
    function SelectMachineComponent(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        // modelId:number;
        this.isSelectMachine = false;
    }
    SelectMachineComponent.prototype.ngOnInit = function () {
        this.checkBoxList = this.navParams.data.checkBoxList;
        this.modalTitle = this.navParams.data.paramTitle;
        this.checkEvent();
    };
    SelectMachineComponent.prototype.cancelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectMachineComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalController.dismiss(this.checkBoxList)];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectMachineComponent.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    SelectMachineComponent.prototype.checkEvent = function () {
        var totalItems = this.checkBoxList.length;
        var checked = 0;
        this.checkBoxList.map(function (obj) {
            if (obj.isChecked)
                checked++;
        });
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    };
    SelectMachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-machine',
            template: __webpack_require__(/*! ./select-machine.component.html */ "./src/app/shared/select-machine/select-machine.component.html"),
            styles: [__webpack_require__(/*! ./select-machine.component.scss */ "./src/app/shared/select-machine/select-machine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], SelectMachineComponent);
    return SelectMachineComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/shared/canvas/canvas.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-machine/select-machine.component */ "./src/app/shared/select-machine/select-machine.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__["CanvasComponent"], _select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__["SelectMachineComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            entryComponents: [_select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__["SelectMachineComponent"]],
            exports: [_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__["CanvasComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~impression-impression-module~operator-operator-module~output-output-module~usage-usage-modul~2aacbff0.js.map