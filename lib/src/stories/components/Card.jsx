'use client';
import React from 'react';
import './card.css';
export var Card = function (_a) {
    var title = _a.title, description = _a.description, features = _a.features, ctaText = _a.ctaText, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, backgroundImage = _a.backgroundImage, onCtaClick = _a.onCtaClick;
    var cardClass = "card ".concat(variant !== 'default' ? variant : '');
    var backgroundStyle = backgroundImage
        ? { backgroundImage: "url(".concat(backgroundImage, ")") }
        : {};
    return (<div className={cardClass}>
      <div className="card-image" style={backgroundStyle}>
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-details">
        <h3 className="detail-title">{title}</h3>
        <p className="detail-description">{description}</p>
        <ul className="detail-features">
          {features.map(function (feature, index) { return (<li key={index}>{feature}</li>); })}
        </ul>
        <button className="detail-cta" onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </div>);
};
