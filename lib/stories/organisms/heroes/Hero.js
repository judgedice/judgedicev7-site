import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import '../hero-css-styles.css';
export var Hero = function (_a) {
    var imageUrl = _a.imageUrl, _b = _a.imageAlt, imageAlt = _b === void 0 ? '' : _b, imageHeading = _a.imageHeading, imageSubtext = _a.imageSubtext, contentHeading = _a.contentHeading, contentSubtext = _a.contentSubtext, ctaText = _a.ctaText, _c = _a.ctaBorder, ctaBorder = _c === void 0 ? true : _c, onCtaClick = _a.onCtaClick, _d = _a.layout, layout = _d === void 0 ? 'image-left' : _d, _e = _a.darkBgColor, darkBgColor = _e === void 0 ? '#1a3b3a' : _e;
    var heroClass = "hero ".concat(layout);
    var getImageStyle = function () {
        if (!imageUrl)
            return {};
        var backgroundImage = typeof imageUrl === 'string'
            ? "url(".concat(imageUrl, ")")
            : "url(".concat(imageUrl.toString(), ")");
        return { backgroundImage: backgroundImage };
    };
    return (_jsxs("div", { className: heroClass, children: [_jsx("div", { className: "hero-image-section", children: _jsx("div", { className: "hero-image", style: getImageStyle(), role: "img", "aria-label": imageAlt, children: _jsx("div", { className: "hero-image-overlay", children: _jsxs("div", { className: "hero-image-content", children: [_jsx("h1", { className: "hero-image-heading", children: imageHeading }), _jsx("p", { className: "hero-image-subtext", children: imageSubtext })] }) }) }) }), _jsx("div", { className: "hero-content-section", style: { backgroundColor: darkBgColor }, children: _jsxs("div", { className: "hero-content", children: [_jsx("h2", { className: "hero-content-heading", children: contentHeading }), _jsx("p", { className: "hero-content-subtext", children: contentSubtext }), ctaText && (_jsx("button", { className: "hero-cta ".concat(ctaBorder ? 'bordered' : 'filled'), onClick: onCtaClick, children: ctaText }))] }) })] }));
};
