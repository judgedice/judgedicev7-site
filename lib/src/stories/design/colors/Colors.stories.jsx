var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Colors } from '../../components/Colors';
var meta = {
    title: 'Design System/Colors',
    component: Colors,
    parameters: {
        layout: 'fullscreen',
        controls: {
            expanded: true,
        },
        actions: {
            handles: ['colorChanged'],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        editable: {
            control: 'boolean',
            description: 'Enable color editing mode',
            defaultValue: false,
        },
        onColorChange: {
            action: 'colorChanged',
            description: 'Triggered when a color is changed or undone',
            table: {
                type: {
                    summary: '(change: ColorChange) => void',
                    detail: "{\n  colorName: string;    // Name of the color that changed\n  oldValue: string;     // Previous color value\n  newValue: string;     // New color value\n  timestamp: number;    // When the change occurred\n}",
                },
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        editable: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'View all available colors in the design system. Colors are displayed in their current state from CSS variables.',
            },
        },
    },
};
export var Editable = {
    args: {
        editable: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive mode where you can edit colors using the color picker. Changes are tracked in the Actions panel and can be undone using the Undo button.',
            },
        },
    },
};
export var WithCustomColors = {
    args: {
        editable: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates custom color changes and actions. Try changing colors and check the Actions panel to see detailed change logs.',
            },
        },
    },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var root;
        var step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    root = document.documentElement;
                    return [4 /*yield*/, step('Initialize highlight colors', function () {
                            root.style.setProperty('--vs-color-highlight', '#F6E05E');
                            root.style.setProperty('--vs-color-highlight-light', '#FEFCBF');
                            root.style.setProperty('--vs-color-highlight-dark', '#D69E2E');
                        })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, step('Update brand colors', function () {
                            root.style.setProperty('--vs-color-primary', '#2C5282');
                            root.style.setProperty('--vs-color-primary-dark', '#1A365D');
                            root.style.setProperty('--vs-color-secondary', '#4A5568');
                            root.style.setProperty('--vs-color-accent', '#48BB78');
                        })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, step('Adjust text colors', function () {
                            root.style.setProperty('--vs-color-text', '#1A202C');
                            root.style.setProperty('--vs-color-text-light', '#4A5568');
                            root.style.setProperty('--vs-color-text-lighter', '#718096');
                        })];
                case 3:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
