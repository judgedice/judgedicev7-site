import React from 'react';
import './hero-css-styles.css';
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
    return (<div className={heroClass}>
      <div className="hero-image-section">
        <div className="hero-image" style={getImageStyle()} role="img" aria-label={imageAlt}>
          <div className="hero-image-overlay">
            <div className="hero-image-content">
              <h1 className="hero-image-heading">{imageHeading}</h1>
              <p className="hero-image-subtext">{imageSubtext}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-content-section" style={{ backgroundColor: darkBgColor }}>
        <div className="hero-content">
          <h2 className="hero-content-heading">{contentHeading}</h2>
          <p className="hero-content-subtext">{contentSubtext}</p>
          {ctaText && (<button className={"hero-cta ".concat(ctaBorder ? 'bordered' : 'filled')} onClick={onCtaClick}>
              {ctaText}
            </button>)}
        </div>
      </div>
    </div>);
};
