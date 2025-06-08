'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../card.css';
export var Card = function (_a) {
    var title = _a.title, description = _a.description, features = _a.features, ctaText = _a.ctaText, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, backgroundImage = _a.backgroundImage, onCtaClick = _a.onCtaClick;
    var cardClass = "card ".concat(variant !== 'default' ? variant : '');
    var backgroundStyle = backgroundImage
        ? { backgroundImage: "url(".concat(backgroundImage, ")") }
        : {};
    return (_jsxs("div", { className: cardClass, children: [_jsx("div", { className: "card-image", style: backgroundStyle, children: _jsx("h2", { className: "card-title", children: title }) }), _jsxs("div", { className: "card-details", children: [_jsx("h3", { className: "detail-title", children: title }), _jsx("p", { className: "detail-description", children: description }), _jsx("ul", { className: "detail-features", children: features.map(function (feature, index) { return (_jsx("li", { children: feature }, index)); }) }), _jsx("button", { className: "detail-cta", onClick: onCtaClick, children: ctaText })] })] }));
};
