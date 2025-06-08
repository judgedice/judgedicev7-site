var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect, useCallback } from 'react';
import './colors.css';
var ColorSwatch = function (_a) {
    var name = _a.name, value = _a.value, description = _a.description, _b = _a.className, className = _b === void 0 ? '' : _b, onColorChange = _a.onColorChange;
    var getComputedColorValue = function (cssVarOrColor) {
        if (cssVarOrColor.startsWith('var(--')) {
            var varName = cssVarOrColor.slice(4, -1);
            return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        }
        return cssVarOrColor;
    };
    var _c = useState(function () { return getComputedColorValue(value); }), currentValue = _c[0], setCurrentValue = _c[1];
    useEffect(function () {
        setCurrentValue(getComputedColorValue(value));
    }, [value]);
    var handleChange = function (e) {
        var newValue = e.target.value;
        setCurrentValue(newValue);
        onColorChange === null || onColorChange === void 0 ? void 0 : onColorChange(name, newValue);
    };
    return (<div className={"vs-color-swatch ".concat(className)}>
      <div className="vs-color-swatch__color" style={{ backgroundColor: currentValue }}/>
      <div className="vs-color-swatch__info">
        <h4 className="vs-color-swatch__name">{name}</h4>
        <p className="vs-color-swatch__value">{currentValue}</p>
        {description && <p className="vs-color-swatch__description">{description}</p>}
        {onColorChange && (<input type="color" value={currentValue} onChange={handleChange} className="vs-color-swatch__input" aria-label={"Change ".concat(name, " color")}/>)}
      </div>
    </div>);
};
export var Colors = function (_a) {
    var _b = _a.editable, editable = _b === void 0 ? false : _b, onColorChange = _a.onColorChange;
    var _c = useState([]), history = _c[0], setHistory = _c[1];
    var _d = useState({}), colors = _d[0], setColors = _d[1];
    useEffect(function () {
        var root = document.documentElement;
        var computedStyle = getComputedStyle(root);
        var newColors = {};
        colorGroups.forEach(function (group) {
            group.colors.forEach(function (color) {
                var cssValue = computedStyle.getPropertyValue(color.variable).trim();
                if (cssValue) {
                    newColors[color.name] = cssValue;
                }
            });
        });
        setColors(newColors);
    }, []);
    var handleColorChange = useCallback(function (colorName, newValue) {
        var oldValue = colors[colorName] || '';
        var change = {
            colorName: colorName,
            oldValue: oldValue,
            newValue: newValue,
            timestamp: Date.now(),
        };
        var root = document.documentElement;
        var colorGroup = colorGroups.find(function (group) {
            return group.colors.some(function (color) { return color.name === colorName; });
        });
        var colorDef = colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.colors.find(function (color) { return color.name === colorName; });
        if (colorDef) {
            root.style.setProperty(colorDef.variable, newValue);
            setColors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[colorName] = newValue, _a)));
            });
            setHistory(function (prev) { return __spreadArray(__spreadArray([], prev, true), [change], false); });
            onColorChange === null || onColorChange === void 0 ? void 0 : onColorChange(change);
        }
    }, [colors, onColorChange]);
    var handleUndo = useCallback(function () {
        if (history.length === 0)
            return;
        var lastChange = history[history.length - 1];
        var root = document.documentElement;
        var colorGroup = colorGroups.find(function (group) {
            return group.colors.some(function (color) { return color.name === lastChange.colorName; });
        });
        var colorDef = colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.colors.find(function (color) { return color.name === lastChange.colorName; });
        if (colorDef) {
            root.style.setProperty(colorDef.variable, lastChange.oldValue);
            setColors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[lastChange.colorName] = lastChange.oldValue, _a)));
            });
            setHistory(function (prev) { return prev.slice(0, -1); });
            onColorChange === null || onColorChange === void 0 ? void 0 : onColorChange(__assign(__assign({}, lastChange), { newValue: lastChange.oldValue, oldValue: lastChange.newValue, timestamp: Date.now() }));
        }
    }, [history, onColorChange]);
    var colorGroups = [
        {
            title: 'Brand Colors',
            colors: [
                { name: 'Primary', variable: '--vs-color-primary', description: 'Main brand color used for primary actions and key UI elements' },
                { name: 'Primary Dark', variable: '--vs-color-primary-dark', description: 'Darker shade of primary color for hover states' },
                { name: 'Secondary', variable: '--vs-color-secondary', description: 'Secondary brand color used for supporting elements' },
                { name: 'Accent', variable: '--vs-color-accent', description: 'Accent color used for highlights and special elements' },
            ],
        },
        {
            title: 'Text Colors',
            colors: [
                { name: 'Text', variable: '--vs-color-text', description: 'Main text color for body content' },
                { name: 'Text Light', variable: '--vs-color-text-light', description: 'Lighter text color for secondary content' },
                { name: 'Text Lighter', variable: '--vs-color-text-lighter', description: 'Very light text color for subtle content' },
            ],
        },
        {
            title: 'Status Colors',
            colors: [
                { name: 'Success', variable: '--vs-color-success', description: 'Color indicating successful actions or states' },
                { name: 'Error', variable: '--vs-color-error', description: 'Color indicating errors or destructive actions' },
                { name: 'Warning', variable: '--vs-color-warning', description: 'Color indicating warnings or cautionary states' },
                { name: 'Info', variable: '--vs-color-info', description: 'Color indicating informational states' },
            ],
        },
        {
            title: 'Background Colors',
            colors: [
                { name: 'Background', variable: '--vs-color-background', description: 'Main background color' },
                { name: 'Background Alt', variable: '--vs-color-background-alt', description: 'Alternative background color for contrast' },
                { name: 'Border', variable: '--vs-color-border', description: 'Border color for subtle separators' },
            ],
        },
        {
            title: 'Highlight Colors',
            colors: [
                { name: 'Highlight', variable: '--vs-color-highlight', description: 'Highlight color for emphasis and focus' },
                { name: 'Highlight Light', variable: '--vs-color-highlight-light', description: 'Light version of highlight color' },
                { name: 'Highlight Dark', variable: '--vs-color-highlight-dark', description: 'Dark version of highlight color' },
            ],
        },
    ];
    return (<div className="vs-colors">
      {editable && (<div className="vs-colors__controls">
          <button className="vs-colors__undo-button" onClick={handleUndo} disabled={history.length === 0} aria-label="Undo last color change">
            Undo Last Change
          </button>
        </div>)}
      {colorGroups.map(function (group) { return (<div key={group.title} className="vs-colors__group">
          <h3 className="vs-colors__group-title">{group.title}</h3>
          <div className="vs-colors__swatches">
            {group.colors.map(function (color) { return (<ColorSwatch key={color.name} name={color.name} value={colors[color.name] || "var(".concat(color.variable, ")")} description={color.description} className={color.name.toLowerCase().includes('light') || color.name.toLowerCase().includes('alt') ? 'vs-color-swatch--light' : ''} onColorChange={editable ? handleColorChange : undefined}/>); })}
          </div>
        </div>); })}
    </div>);
};
