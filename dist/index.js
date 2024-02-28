/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");





const {
  generateDimensionsAttributes,
  generateTypographyAttributes,
  generateBackgroundAttributes,
  generateBorderShadowAttributes,
  generateResponsiveRangeAttributes
} = window.EBInfoboxControls;
const attributes = {
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    default: "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    default: "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // isOverlay is to check if a overlay on the block's background should exist ⬇
  isOverlay: {
    type: "boolean",
    default: false
  },
  // this attribute is for selecting the desired design preset from the layout design presets options ⬇
  layoutPreset: {
    type: "string",
    default: "preset1"
  },
  // media attribute is for checking which of these (image / icon / number) is chosen for head top media ⬇
  media: {
    type: "string",
    default: "icon"
  },
  //
  numIconColor: {
    type: "string"
  },
  // should icon number background
  useNumIconBg: {
    type: "boolean",
    default: true
  },
  //
  numIconBgType: {
    type: "string",
    default: "fill"
  },
  //
  numIconBgColor: {
    type: "string",
    default: "#0003"
  },
  //
  numIconBgGradient: {
    type: "string",
    default: "linear-gradient(45deg,#ffc2de,#ff46a1)"
  },
  //
  imageUrl: {
    source: "attribute",
    selector: ".eb-infobox-image",
    attribute: "src"
    // default: "https://source.unsplash.com/user/cristofer",
  },
  //
  imageId: {
    type: "string"
  },
  imageAlt: {
    type: "string"
  },
  //
  mediaImgWidthUnit: {
    type: "string",
    default: "px"
  },
  mediaImgWidth: {
    type: "number",
    default: 300
  },
  TABmediaImgWidth: {
    type: "number"
  },
  MOBmediaImgWidth: {
    type: "number"
  },
  //
  isMediaImgHeightAuto: {
    type: "boolean",
    default: true
  },
  mediaImgHeightUnit: {
    type: "string",
    default: "px"
  },
  mediaImgHeight: {
    type: "number"
  },
  TABmediaImgHeight: {
    type: "number"
  },
  MOBmediaImgHeight: {
    type: "number"
  },
  // cant delete it as we migrate it to infoboxIcon attribute
  selectedIcon: {
    type: "string",
    source: "attribute",
    selector: ".eb-infobox-icon-data-selector",
    attribute: "data-icon",
    default: "far fa-gem"
    // default: "far fa-sun",
  },
  infoboxIcon: {
    type: "string",
    default: "far fa-gem"
  },
  //
  number: {
    type: "string"
  },
  // this attribute is for checking whether subtitle should be shown or not ⬇
  enableSubTitle: {
    type: "boolean",
    default: false
  },
  //  this attribute is for checking whether content should be shown or not ⬇
  enableDescription: {
    type: "boolean",
    default: true
  },
  // this attribute is for checking whether a button should be shown or not ⬇
  enableButton: {
    type: "boolean",
    default: true
  },
  //
  isInfoClick: {
    type: "boolean",
    default: false
  },
  //
  buttonText: {
    type: "string",
    default: "Learn More"
  },
  //
  buttonTextColor: {
    type: "string"
  },
  //
  buttonHvrTextColor: {
    type: "string"
  },
  // //
  // buttonBgColor: {
  // 	type: "string",
  // },

  //
  btnEffect: {
    type: "string"
  },
  //
  infoboxLink: {
    type: "string"
  },
  linkNewTab: {
    type: "boolean",
    default: false
  },
  //
  title: {
    type: "text",
    selector: ".title",
    default: "This is an info box"
  },
  //
  titleColor: {
    type: "string"
  },
  //
  subTitle: {
    type: "text",
    selector: ".subtitle",
    default: "This is a Sub title"
  },
  //
  subTitleColor: {
    type: "string"
  },
  //
  description: {
    type: "text",
    selector: ".description",
    default: "Write a short description, that will describe the title or something informational and useful"
  },
  //
  descriptionColor: {
    type: "string"
  },
  //
  iconSize: {
    type: "number",
    default: 50
  },
  TABiconSize: {
    type: "number"
  },
  MOBiconSize: {
    type: "number"
  },
  // .infobox-wrapper-inner flex-direction
  flexDirection: {
    type: "string"
  },
  // .icon-img-wrapper align-self property
  mediaAlignSelf: {
    type: "string"
  },
  // .contents-wrapper text-alignment
  contentAlignment: {
    type: "string"
  },
  //
  titleTag: {
    type: "string",
    default: "h2"
  },
  subTitleTag: {
    type: "string",
    default: "h3"
  },
  //
  mediaAlignment: {
    type: "string"
  },
  //
  contentsAlignment: {
    type: "string"
  },
  btnAlignment: {
    type: "string"
  },
  // Responsive Range Controller attributes
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaIconSize, {
    defaultRange: 50
  }),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageWidth, {
    defaultRange: 300
  }),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageHeight),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaContentGap, {
    defaultRange: 20,
    noUnits: true
  }),
  // typography attributes
  ...generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__)),
  // dimensions Control related Attributes
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBackground, {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgRadius, {
    top: 20,
    bottom: 20,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgMargin, {
    top: 15,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.buttonPadding, {
    top: 15,
    bottom: 15,
    right: 30,
    left: 30,
    isLinked: false
  }),
  // ...generateDimensionsAttributes(buttonRadius, {
  // 	top: 10,
  // 	bottom: 10,
  // 	right: 10,
  // 	left: 10,
  // }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.titlePadding, {
    top: 10,
    bottom: 10,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.subTitlePadding, {
    top: 10,
    bottom: 10,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.contentPadding, {
    top: 10,
    bottom: 50,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperMargin),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperPadding, {
    top: 50,
    bottom: 70,
    right: 30,
    left: 30,
    isLinked: false
  }),
  // ...generateDimensionsAttributes(wrp_border, {
  // 	top: 0,
  // 	bottom: 0,
  // 	right: 0,
  // 	left: 0,
  // }),
  // ...generateDimensionsAttributes(wrp_radius),

  ...generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.btnBdShd, {
    // bdrDefaults: {
    // 	top: 10,
    // 	bottom: 10,
    // 	right: 10,
    // 	left: 10,
    // },
    rdsDefaults: {
      top: 10,
      bottom: 10,
      right: 10,
      left: 10
    }
    // noShadow: true,
    // noBorder: true,
  }),
  ...generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.wrpBdShadow, {
    // bdrDefaults: {
    // 	top: 10,
    // 	bottom: 0,
    // 	right: 10,
    // 	left: 0,
    // 	isLinked: false,
    // },
    // rdsDefaults: {
    // 	top: 0,
    // 	bottom: 50,
    // 	right: 500,
    // 	left: 1000,
    // 	isLinked: false,
    // },
    // noShadow: true,
    // noBorder: true,
    // defaultBdrColor: "#f2f",
    // defaultBdrStyle: "solid",
  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.infoWrapBg, {
    isBgDefaultGradient: true,
    defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
    // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.infoBtnBg, {
    defaultFillColor: "#E1D8FF",
    defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
    // defaultHovFillColor: "var(--eb-global-secondary-color)",
    forButton: true
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/components/infobox-edit.js":
/*!****************************************!*\
  !*** ./src/components/infobox-edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Internal dependencies
 */
const {
  DynamicInputValueHandler,
  EBDisplayIcon
} = window.EBInfoboxControls;
function InfoboxContainer({
  attributes,
  setAttributes
}) {
  const {
    blockId,
    media,
    infoboxIcon,
    number,
    imageUrl,
    imageId,
    imageAlt,
    titleTag,
    title,
    enableSubTitle,
    subTitleTag,
    subTitle,
    enableDescription,
    description,
    enableButton,
    isInfoClick,
    infoboxLink,
    buttonText,
    btnEffect,
    classHook
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: infoboxIcon,
    className: `eb-infobox-icon-data-selector`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: ({
      id,
      url,
      alt
    }) => setAttributes({
      imageUrl: url,
      imageId: id,
      imageAlt: alt
    }),
    type: "image",
    value: imageId,
    render: ({
      open
    }) => {
      if (!imageUrl) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-infobox-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "eb-infobox-image",
          src: imageUrl
        });
      }
    }
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: titleTag,
    className: "title",
    value: title,
    onChange: title => setAttributes({
      title
    })
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle,
    onChange: subTitle => setAttributes({
      subTitle
    })
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "description",
    value: description,
    onChange: description => setAttributes({
      description
    })
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputValueHandler, {
    tagName: "a",
    className: `infobox-btn ${btnEffect || " "}`,
    value: buttonText,
    allowedFormats: ["core/bold", "core/italic", "core/strikethrough", "core/underline"],
    onChange: text => setAttributes({
      buttonText: text
    })
  })) : null))));
}

/***/ }),

/***/ "./src/components/infobox-save-depricated-2.js":
/*!*****************************************************!*\
  !*** ./src/components/infobox-save-depricated-2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer2)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function InfoboxContainer2({
  requiredProps
}) {
  const {
    blockId,
    selectedIcon,
    media,
    number,
    imageUrl,
    infoboxLink,
    enableSubTitle,
    enableDescription,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-icon": selectedIcon,
    className: `eb-infobox-icon-data-selector  ${selectedIcon}`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null))));
}

/***/ }),

/***/ "./src/components/infobox-save-depricated-3.js":
/*!*****************************************************!*\
  !*** ./src/components/infobox-save-depricated-3.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer3)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function InfoboxContainer3({
  requiredProps
}) {
  const {
    blockId,
    selectedIcon,
    media,
    number,
    imageUrl,
    infoboxLink,
    linkNewTab,
    enableSubTitle,
    enableDescription,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-icon": selectedIcon,
    className: `eb-infobox-icon-data-selector  ${selectedIcon}`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    target: linkNewTab ? "_blank" : "_self",
    rel: "noopener noreferrer",
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null))));
}

/***/ }),

/***/ "./src/components/infobox-save-depricated-4.js":
/*!*****************************************************!*\
  !*** ./src/components/infobox-save-depricated-4.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer4)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const {
  EBDisplayIcon
} = window.EBInfoboxControls;
function InfoboxContainer4({
  requiredProps
}) {
  const {
    blockId,
    selectedIcon,
    infoboxIcon,
    media,
    number,
    imageUrl,
    imageAlt,
    infoboxLink,
    linkNewTab,
    enableSubTitle,
    enableDescription,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: infoboxIcon,
    className: `eb-infobox-icon-data-selector`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: imageAlt
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    target: linkNewTab ? "_blank" : "_self",
    rel: "noopener noreferrer",
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null))));
}

/***/ }),

/***/ "./src/components/infobox-save-depricated.js":
/*!***************************************************!*\
  !*** ./src/components/infobox-save-depricated.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function InfoboxContainer({
  requiredProps
}) {
  const {
    blockId,
    selectedIcon,
    media,
    number,
    imageUrl,
    infoboxLink,
    enableSubTitle,
    enableDescription,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-icon": selectedIcon,
    className: `eb-infobox-icon-data-selector  ${selectedIcon}`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null)));
}

/***/ }),

/***/ "./src/components/infobox-save.js":
/*!****************************************!*\
  !*** ./src/components/infobox-save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoboxContainer)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const {
  EBDisplayIcon
} = window.EBInfoboxControls;
function InfoboxContainer({
  requiredProps
}) {
  const {
    blockId,
    infoboxIcon,
    media,
    number,
    imageUrl,
    imageAlt,
    infoboxLink,
    linkNewTab,
    enableSubTitle,
    enableDescription,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: infoboxIcon,
    className: `eb-infobox-icon-data-selector`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: imageAlt
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    target: linkNewTab ? "_blank" : "_self",
    rel: "noopener noreferrer",
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null))));
}

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   infoBtnBg: () => (/* binding */ infoBtnBg),
/* harmony export */   infoWrapBg: () => (/* binding */ infoWrapBg)
/* harmony export */ });
// each and every const here has to be totally unique from one another
const infoWrapBg = "wrp_";
const infoBtnBg = "btbg_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnBdShd: () => (/* binding */ btnBdShd),
/* harmony export */   wrpBdShadow: () => (/* binding */ wrpBdShadow)
/* harmony export */ });
const wrpBdShadow = "wrp_";
const btnBdShd = "btbds_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonPadding: () => (/* binding */ buttonPadding),
/* harmony export */   buttonRadius: () => (/* binding */ buttonRadius),
/* harmony export */   contentPadding: () => (/* binding */ contentPadding),
/* harmony export */   mediaBackground: () => (/* binding */ mediaBackground),
/* harmony export */   mediaBgMargin: () => (/* binding */ mediaBgMargin),
/* harmony export */   mediaBgRadius: () => (/* binding */ mediaBgRadius),
/* harmony export */   subTitlePadding: () => (/* binding */ subTitlePadding),
/* harmony export */   titlePadding: () => (/* binding */ titlePadding),
/* harmony export */   wrapperMargin: () => (/* binding */ wrapperMargin),
/* harmony export */   wrapperPadding: () => (/* binding */ wrapperPadding)
/* harmony export */ });
// each and every const here has to be totally unique from one another

const mediaBackground = "mediaBgSize";
const mediaBgRadius = "mediaBgRadius";
const mediaBgMargin = "mediaBgMargin";
const buttonPadding = "buttonPadding";
// export const buttonRadius = "buttonRadius";

// 
const buttonRadius = "buttonRadius";

// 

const titlePadding = "titlePadding";
const subTitlePadding = "subTitlePadding";
const contentPadding = "contentPadding";
const wrapperMargin = "wrapperMargin";
const wrapperPadding = "wrapperPadding";
// export const wrp_border = "WRPborder";
// export const wrp_radius = "WRPradius";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACKGROUND_SIZES: () => (/* binding */ BACKGROUND_SIZES),
/* harmony export */   BACKGROUND_TYPES: () => (/* binding */ BACKGROUND_TYPES),
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   CONTENTS_ALIGNMENTS: () => (/* binding */ CONTENTS_ALIGNMENTS),
/* harmony export */   HEADER_TAGS: () => (/* binding */ HEADER_TAGS),
/* harmony export */   HOVER_EFFECT: () => (/* binding */ HOVER_EFFECT),
/* harmony export */   ICON_IMAGE_BG_TYPES: () => (/* binding */ ICON_IMAGE_BG_TYPES),
/* harmony export */   LAYOUT_TYPES: () => (/* binding */ LAYOUT_TYPES),
/* harmony export */   LETTER_SPACING_LINE_HEIGHT_UNITS: () => (/* binding */ LETTER_SPACING_LINE_HEIGHT_UNITS),
/* harmony export */   MEDIA_ALIGNMENTS_ON_FLEX_COLUMN: () => (/* binding */ MEDIA_ALIGNMENTS_ON_FLEX_COLUMN),
/* harmony export */   MEDIA_ALIGNMENTS_ON_FLEX_ROW: () => (/* binding */ MEDIA_ALIGNMENTS_ON_FLEX_ROW),
/* harmony export */   MEDIA_TYPES: () => (/* binding */ MEDIA_TYPES),
/* harmony export */   SHADOW_HOVER_OPTIONS: () => (/* binding */ SHADOW_HOVER_OPTIONS),
/* harmony export */   imgHeightUnits: () => (/* binding */ imgHeightUnits),
/* harmony export */   sizeUnitTypes: () => (/* binding */ sizeUnitTypes)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const LAYOUT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "essential-blocks"),
  value: "preset2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "preset3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "preset4"
}];

// export const MEDIA_TYPES = ["image", "icon", "number", "none"];
const MEDIA_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("image", "essential-blocks"),
  value: "image"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("icon", "essential-blocks"),
  value: "icon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "essential-blocks"),
  value: "number"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("none", "essential-blocks"),
  value: "none"
}];
const CONTENTS_ALIGNMENTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "flex-end"
}];
const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "flex-end"
}];
const ICON_IMAGE_BG_TYPES = [{
  label: "Fill",
  value: "fill"
}, {
  label: "Gradient",
  value: "gradient"
}];
const sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
const imgHeightUnits = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "vh",
  value: "vh"
}];
const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
const BACKGROUND_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
const BACKGROUND_SIZES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "essential-blocks"),
  value: "contain"
}];
const BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
const SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
const LETTER_SPACING_LINE_HEIGHT_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
const HOVER_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Hover Effect", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow", "essential-blocks"),
  value: "hvr-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrink", "essential-blocks"),
  value: "hvr-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse", "essential-blocks"),
  value: "hvr-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Grow", "essential-blocks"),
  value: "hvr-pulse-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Shrink", "essential-blocks"),
  value: "hvr-pulse-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Push", "essential-blocks"),
  value: "hvr-push"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pop", "essential-blocks"),
  value: "hvr-pop"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce In", "essential-blocks"),
  value: "hvr-bounce-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce Out", "essential-blocks"),
  value: "hvr-bounce-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rotate", "essential-blocks"),
  value: "hvr-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow Rotate", "essential-blocks"),
  value: "hvr-grow-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Float", "essential-blocks"),
  value: "hvr-float"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sink", "essential-blocks"),
  value: "hvr-sink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bob", "essential-blocks"),
  value: "hvr-bob"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hang", "essential-blocks"),
  value: "hvr-hang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew", "essential-blocks"),
  value: "hvr-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Forward", "essential-blocks"),
  value: "hvr-skew-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Backward", "essential-blocks"),
  value: "hvr-skew-backward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Horizontal", "essential-blocks"),
  value: "hvr-wobble-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Vertical", "essential-blocks"),
  value: "hvr-wobble-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Bottom Right", "essential-blocks"),
  value: "hvr-wobble-to-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Top Right", "essential-blocks"),
  value: "hvr-wobble-to-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Top", "essential-blocks"),
  value: "hvr-wobble-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Bottom", "essential-blocks"),
  value: "hvr-wobble-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Skew", "essential-blocks"),
  value: "hvr-wobble-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz", "essential-blocks"),
  value: "hvr-buzz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz Out", "essential-blocks"),
  value: "hvr-buzz-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forward", "essential-blocks"),
  value: "hvr-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "essential-blocks"),
  value: "hvr-fade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Pulse", "essential-blocks"),
  value: "hvr-back-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Right", "essential-blocks"),
  value: "hvr-sweep-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Left", "essential-blocks"),
  value: "hvr-sweep-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Bottom", "essential-blocks"),
  value: "hvr-sweep-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Top", "essential-blocks"),
  value: "hvr-sweep-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Right", "essential-blocks"),
  value: "hvr-bounce-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Left", "essential-blocks"),
  value: "hvr-bounce-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Bottom", "essential-blocks"),
  value: "hvr-bounce-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Top", "essential-blocks"),
  value: "hvr-bounce-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial Out", "essential-blocks"),
  value: "hvr-radial-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial In", "essential-blocks"),
  value: "hvr-radial-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle In", "essential-blocks"),
  value: "hvr-rectangle-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle Out", "essential-blocks"),
  value: "hvr-rectangle-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Horizontal", "essential-blocks"),
  value: "hvr-shutter-in-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Horizontal", "essential-blocks"),
  value: "hvr-shutter-out-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Vertical", "essential-blocks"),
  value: "hvr-shutter-in-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Vertical", "essential-blocks"),
  value: "hvr-shutter-out-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Left", "essential-blocks"),
  value: "hvr-curl-top-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Right", "essential-blocks"),
  value: "hvr-curl-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Right", "essential-blocks"),
  value: "hvr-curl-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Left", "essential-blocks"),
  value: "hvr-curl-bottom-left"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mediaContentGap: () => (/* binding */ mediaContentGap),
/* harmony export */   mediaIconSize: () => (/* binding */ mediaIconSize),
/* harmony export */   mediaImageHeight: () => (/* binding */ mediaImageHeight),
/* harmony export */   mediaImageWidth: () => (/* binding */ mediaImageWidth)
/* harmony export */ });
const mediaIconSize = "mIconZ";
const mediaImageWidth = "mImgW";
const mediaImageHeight = "mImgH";
const mediaContentGap = "mcSp";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typoPrefix_buttonText: () => (/* binding */ typoPrefix_buttonText),
/* harmony export */   typoPrefix_content: () => (/* binding */ typoPrefix_content),
/* harmony export */   typoPrefix_number: () => (/* binding */ typoPrefix_number),
/* harmony export */   typoPrefix_subTitle: () => (/* binding */ typoPrefix_subTitle),
/* harmony export */   typoPrefix_title: () => (/* binding */ typoPrefix_title)
/* harmony export */ });
// each and every const here has to be totally unique from one another

const typoPrefix_number = "number";
const typoPrefix_title = "title";
const typoPrefix_subTitle = "subTitle";
const typoPrefix_content = "content";
const typoPrefix_buttonText = "buttonText";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infobox_save_depricated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/infobox-save-depricated */ "./src/components/infobox-save-depricated.js");
/* harmony import */ var _components_infobox_save_depricated_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/infobox-save-depricated-2 */ "./src/components/infobox-save-depricated-2.js");
/* harmony import */ var _components_infobox_save_depricated_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/infobox-save-depricated-3 */ "./src/components/infobox-save-depricated-3.js");
/* harmony import */ var _components_infobox_save_depricated_4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/infobox-save-depricated-4 */ "./src/components/infobox-save-depricated-4.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");

/**
 * WordPress dependencies
 */







const deprecated = [{
  attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.omit)({
    ..._attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, ["infoboxIcon"]),
  migrate(attributes) {
    const {
      selectedIcon
    } = attributes;
    const newAttributes = {
      ...attributes
    };
    delete newAttributes.selectedIcon;
    return {
      ...newAttributes,
      infoboxIcon: selectedIcon
    };
  },
  supports: {
    align: ["wide", "full"]
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      selectedIcon,
      infoboxIcon,
      number = 0,
      media,
      imageUrl,
      imageAlt,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    } = attributes;
    const requiredProps = {
      selectedIcon,
      infoboxIcon,
      blockId,
      number,
      media,
      imageUrl,
      imageAlt,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: infoboxLink,
      target: linkNewTab ? "_blank" : "_self",
      rel: "noopener noreferrer",
      className: "info-click-link info-wrap-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_4__WEBPACK_IMPORTED_MODULE_5__["default"], {
      requiredProps: requiredProps
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_4__WEBPACK_IMPORTED_MODULE_5__["default"], {
      requiredProps: requiredProps
    }));
  }
}, {
  attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.omit)({
    ..._attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, ["imageAlt"]),
  supports: {
    align: ["wide", "full"]
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      selectedIcon,
      number = 0,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    } = attributes;
    const requiredProps = {
      selectedIcon,
      blockId,
      number,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: infoboxLink,
      rel: "noopener noreferrer",
      className: "info-click-link info-wrap-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      requiredProps: requiredProps
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      requiredProps: requiredProps
    }));
  }
}, {
  attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.omit)({
    ..._attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, ["linkNewTab"]),
  supports: {
    align: ["wide", "full"]
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      selectedIcon,
      number = 0,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    } = attributes;
    const requiredProps = {
      selectedIcon,
      blockId,
      number,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      linkNewTab,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect,
      classHook
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: infoboxLink,
      rel: "noopener noreferrer",
      className: "info-click-link info-wrap-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      requiredProps: requiredProps
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated_2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      requiredProps: requiredProps
    }));
  }
}, {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  supports: {
    align: ["wide", "full"]
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      selectedIcon,
      number = 0,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect
    } = attributes;
    const requiredProps = {
      selectedIcon,
      blockId,
      number,
      media,
      imageUrl,
      enableSubTitle,
      enableDescription,
      infoboxLink,
      enableButton,
      isInfoClick,
      buttonText,
      title,
      subTitle,
      description,
      titleTag,
      subTitleTag,
      btnEffect
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: infoboxLink,
      rel: "noopener noreferrer",
      className: "info-click-link info-wrap-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated__WEBPACK_IMPORTED_MODULE_2__["default"], {
      requiredProps: requiredProps
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save_depricated__WEBPACK_IMPORTED_MODULE_2__["default"], {
      requiredProps: requiredProps
    }));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_infobox_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/infobox-edit */ "./src/components/infobox-edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/style.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const {
  duplicateBlockIdFix
} = window.EBInfoboxControls;




const Edit = props => {
  const {
    attributes,
    setAttributes,
    className,
    isSelected,
    clientId,
    name
  } = props;
  const {
    // responsive control attributes ⬇
    resOption,
    // blockMeta is for keeping all the styles
    blockMeta,
    // blockId attribute for making unique className and other uniqueness
    blockId,
    number,
    enableButton,
    isInfoClick
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // this codes is for creating a unique blockId for each block's unique className
    const BLOCK_PREFIX = "eb-infobox";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId
    });

    //
    if (number === undefined) {
      setAttributes({
        number: "01"
      });
    }
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, `eb-guten-block-main-parent-wrapper`)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_7__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes,
    attributes: attributes
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const example = {
  attributes: {
    layoutPreset: "preset2",
    flexDirection: "column",
    contentAlignment: "center"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoboxIcon: () => (/* binding */ InfoboxIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const InfoboxIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "66",
    height: "60",
    fill: "none",
    viewBox: "0 0 66 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C3BFF",
    d: "M16.1 39.9h34.4c.7 0 1.3-.5 1.3-1.3V21.4c0-.7-.5-1.3-1.3-1.3H16.1c-.7 0-1.3.5-1.3 1.3v17.2c0 .8.6 1.3 1.3 1.3zm1.1-17.2H49v14.6H17.2V22.7z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C3BFF",
    d: "M20.9 28.8h7.3c.7 0 1.3-.5 1.3-1.3 0-.7-.5-1.1-1.1-1.1H21c-.7 0-1.3.5-1.3 1.3.1.6.6 1.1 1.2 1.1zM33.1 28.8c.4 0 .5-.2.9-.4.2-.2.4-.5.4-.9s-.2-.5-.4-.9c-.5-.4-1.3-.4-1.8 0-.2.2-.4.5-.4.9s.2.5.4.9c.4.4.7.4.9.4zM45.5 31.3H25.8c-.7 0-1.3.5-1.3 1.3 0 .7.5 1.3 1.3 1.3h19.6c.7 0 1.3-.5 1.3-1.3-.1-.8-.6-1.3-1.2-1.3zM20.1 31.7c-.2.2-.4.5-.4.9s.2.5.4.9c.2.2.5.4.9.4s.5-.2.9-.4c.2-.2.4-.5.4-.9s-.2-.5-.4-.9c-.5-.7-1.4-.7-1.8 0zM33.1.6c-3.3 0-6.2 2.7-6.2 6.2s2.7 6.2 6.2 6.2c3.3 0 6.2-2.7 6.2-6.2S36.6.6 33.1.6zm0 9.8c-2 0-3.7-1.6-3.7-3.7S31 3 33.1 3c2 0 3.7 1.6 3.7 3.7s-1.5 3.7-3.7 3.7z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C3BFF",
    d: "M63.5 55.5c0 .7-.2 1.3-1 1.3H3.9c-.7 0-1.3-.5-1.3-1.3V11.7c0-.8-.6-1.3-1.3-1.3-.7 0-1.3.5-1.3 1.3V57c0 1.3 1.1 2.4 2.4 2.4h61.2c1.3 0 2.4-1.1 2.4-2.4V11.8c0-.7-.5-1.3-1.3-1.3-.7 0-1.3.5-1.3 1.3v39.1l.1 4.6z"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./example */ "./src/example.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */








const {
  ebConditionalRegisterBlockType
} = EBInfoboxControls;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__.InfoboxIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB infobox", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("info box", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("infobox block", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_9__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");

/**
 * WordPress dependencies
 */







const {
  BackgroundControl,
  BorderShadowControl,
  GradientColorControl,
  ColorControl,
  ImageAvatar,
  ResponsiveRangeController,
  ResponsiveDimensionsControl,
  TypographyDropdown,
  faIcons,
  AdvancedControls,
  DynamicInputControl,
  EBIconPicker
} = window.EBInfoboxControls;




function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    blockId,
    // responsive control attributes ⬇
    resOption,
    //
    layoutPreset,
    //
    media,
    //
    enableSubTitle,
    //
    number,
    //
    imageUrl,
    imageAlt,
    //
    infoboxIcon,
    //
    flexDirection,
    //
    enableDescription,
    //
    useNumIconBg,
    //
    numIconColor,
    //
    numIconBgType,
    //
    numIconBgColor,
    //
    numIconBgGradient,
    //
    imageId,
    //
    isMediaImgHeightAuto,
    //
    titleTag,
    subTitleTag,
    //
    enableButton,
    isInfoClick,
    //
    buttonText,
    infoboxLink,
    //
    buttonTextColor,
    buttonHvrTextColor,
    //
    titleColor,
    //
    subTitleColor,
    //
    descriptionColor,
    //
    // buttonBgColor,

    //
    mediaAlignment,
    //
    contentsAlignment,
    btnAlignment,
    //
    btnEffect,
    linkNewTab
  } = attributes;
  const resRequiredProps = {
    setAttributes,
    resOption,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    switch (layoutPreset) {
      case "preset1":
        setAttributes({
          flexDirection: "column",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;
      case "preset2":
        setAttributes({
          flexDirection: "column-reverse",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;
      case "preset3":
        setAttributes({
          flexDirection: "row",
          contentAlignment: "left",
          mediaAlignSelf: "flex-start"
        });
        break;
      case "preset4":
        setAttributes({
          flexDirection: "row-reverse",
          contentAlignment: "right",
          mediaAlignSelf: "flex-start"
        });
        break;
    }
  }, [layoutPreset]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-tab-controls" + tab.name
  }, tab.name === "general" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Infobox Settings", "essential-blocks")
    // initialOpen={false}
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout Preset ", "essential-blocks"),
    value: layoutPreset,
    options: _constants__WEBPACK_IMPORTED_MODULE_10__.LAYOUT_TYPES,
    onChange: layoutPreset => setAttributes({
      layoutPreset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clickable Infobox", "essential-blocks"),
    checked: isInfoClick,
    onChange: () => setAttributes({
      isInfoClick: !isInfoClick
    })
  }), isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl
  // id={`info-link-input-${blockId}`}
  , {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("URL (use https:// at the beginning)"),
    placeholder: "https://your-link.com",
    value: infoboxLink,
    onChange: infoboxLink => setAttributes({
      infoboxLink
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open in New Tab", "essential-blocks"),
    checked: linkNewTab,
    onChange: () => setAttributes({
      linkNewTab: !linkNewTab
    })
  })), !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show button", "essential-blocks"),
    checked: enableButton,
    onChange: () => setAttributes({
      enableButton: !enableButton
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignments", "essential-blocks")
  }, media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (flexDirection === "row" || flexDirection === "row-reverse") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(({
    value,
    label
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: mediaAlignment !== value,
    isPrimary: mediaAlignment === value,
    onClick: () => setAttributes({
      mediaAlignment: value
    })
  }, label)))), (flexDirection === "column" || flexDirection === "column-reverse") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(({
    value,
    label
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: mediaAlignment !== value,
    isPrimary: mediaAlignment === value,
    onClick: () => setAttributes({
      mediaAlignment: value
    })
  }, label))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Contents alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.CONTENTS_ALIGNMENTS.map(({
    value,
    label
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: contentsAlignment !== value,
    isPrimary: contentsAlignment === value,
    onClick: () => setAttributes({
      contentsAlignment: value
    })
  }, label)))), enableButton && !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Button alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.CONTENTS_ALIGNMENTS.map(({
    value,
    label
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: btnAlignment !== value,
    isPrimary: btnAlignment === value,
    onClick: () => setAttributes({
      btnAlignment: value
    })
  }, label))))), enableButton && !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputControl, {
    label: "Button Text",
    attrName: "buttonText",
    inputValue: buttonText,
    setAttributes: setAttributes,
    onChange: text => setAttributes({
      buttonText: text
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Link", "essential-blocks"),
    placeholder: "https://your-site.com",
    attrName: "infoboxLink",
    inputValue: infoboxLink,
    setAttributes: setAttributes,
    onChange: text => setAttributes({
      infoboxLink: text
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link URL (use https:// at the beginning)", "essential-blocks")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open in New Tab", "essential-blocks"),
    checked: linkNewTab,
    onChange: () => setAttributes({
      linkNewTab: !linkNewTab
    })
  }))), tab.name === "styles" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Media", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-image-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-image-icon"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.MEDIA_TYPES.map(({
    label,
    value
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: media !== value,
    isPrimary: media === value,
    onClick: () => setAttributes({
      media: value
    })
  }, label)))), media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, media === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBIconPicker, {
    value: infoboxIcon,
    onChange: icon => setAttributes({
      infoboxIcon: icon
    })
  }), media === "icon" && infoboxIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.mediaIconSize,
    resRequiredProps: resRequiredProps,
    min: 8,
    max: 200,
    step: 1
  }), media === "number" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text", "essential-blocks"),
    id: "eb-infobox-number-id"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: `${number}`,
    id: "eb-infobox-number-id",
    onChange: e => setAttributes({
      number: `${e.target.value}`
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Text Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_number,
    resRequiredProps: resRequiredProps
  })), (media === "number" || media === "icon") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: numIconColor,
    onChange: numIconColor => setAttributes({
      numIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBackground,
    baseLabel: "Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Use Background", "essential-blocks"),
    checked: useNumIconBg,
    onChange: () => setAttributes({
      useNumIconBg: !useNumIconBg
    })
  }), useNumIconBg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Type", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-infobox-background"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.ICON_IMAGE_BG_TYPES.map(({
    value,
    label
  }, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isPrimary: numIconBgType === value,
    isSecondary: numIconBgType !== value,
    onClick: () => setAttributes({
      numIconBgType: value
    })
  }, label)))), numIconBgType === "fill" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "essential-blocks"),
    color: numIconBgColor,
    onChange: numIconBgColor => setAttributes({
      numIconBgColor
    })
  }), numIconBgType === "gradient" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gradient", "essential-blocks")
    // initialOpen={false}
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GradientColorControl, {
    gradientColor: numIconBgGradient,
    onChange: numIconBgGradient => setAttributes({
      numIconBgGradient
    })
  })))), media === "image" && !imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: ({
      id,
      url,
      alt
    }) => setAttributes({
      imageUrl: url,
      imageId: id,
      imageAlt: alt
    }),
    type: "image",
    value: imageId,
    render: ({
      open
    }) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "essential-blocks"),
        icon: "format-image",
        onClick: open
      });
    }
  }), media === "image" && imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageAvatar, {
    imageUrl: imageUrl,
    onDeleteImage: () => setAttributes({
      imageUrl: null
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Width", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.mediaImageWidth,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_10__.sizeUnitTypes,
    min: 0,
    max: 500,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto Image Height", "essential-blocks"),
    checked: isMediaImgHeightAuto,
    onChange: () => setAttributes({
      isMediaImgHeightAuto: !isMediaImgHeightAuto
    })
  }), !isMediaImgHeightAuto && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Height", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.mediaImageHeight,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_10__.imgHeightUnits,
    min: 0,
    max: 500,
    step: 1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Media & content spacing", "Infobox"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.mediaContentGap,
    resRequiredProps: resRequiredProps,
    min: 0,
    max: 500,
    step: 1,
    noUnits: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBgRadius,
    baseLabel: "Border Radius"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBgMargin,
    baseLabel: "Margin"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Tag", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.HEADER_TAGS.map((header, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: titleTag !== header,
    isPrimary: titleTag === header,
    onClick: () => setAttributes({
      titleTag: header
    })
  }, header.toUpperCase())))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_title,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.titlePadding,
    baseLabel: "Title Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: titleColor,
    onChange: titleColor => setAttributes({
      titleColor
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable", "essential-blocks"),
    checked: enableSubTitle,
    onChange: () => setAttributes({
      enableSubTitle: !enableSubTitle
    })
  }), enableSubTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Tag", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_10__.HEADER_TAGS.map((header, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isSecondary: subTitleTag !== header,
    isPrimary: subTitleTag === header,
    onClick: () => setAttributes({
      subTitleTag: header
    })
  }, header.toUpperCase())))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_subTitle,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.subTitlePadding,
    baseLabel: "Subtitle Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: subTitleColor,
    onChange: subTitleColor => setAttributes({
      subTitleColor
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show content", "essential-blocks"),
    checked: enableDescription,
    onChange: () => setAttributes({
      enableDescription: !enableDescription
    })
  }), enableDescription && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_content,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.contentPadding,
    baseLabel: "Content Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: descriptionColor,
    onChange: descriptionColor => setAttributes({
      descriptionColor
    })
  }))), enableButton && !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_buttonText,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.buttonPadding,
    baseLabel: "Button Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text color", "essential-blocks"),
    color: buttonTextColor,
    onChange: buttonTextColor => setAttributes({
      buttonTextColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover text color", "essential-blocks"),
    color: buttonHvrTextColor,
    onChange: buttonHvrTextColor => setAttributes({
      buttonHvrTextColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__.infoBtnBg,
    resRequiredProps: resRequiredProps,
    forButton: true
    // noOverlay
    // noMainBgi
    // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_5__.btnBdShd,
    resRequiredProps: resRequiredProps
    // noShadow
    // noBorder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Effects", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Hover Effect", "essential-blocks"),
    value: btnEffect,
    options: _constants__WEBPACK_IMPORTED_MODULE_10__.HOVER_EFFECT
    // onChange={(preset) => setAttributes({ preset })}
    ,
    onChange: btnEffect => {
      setAttributes({
        btnEffect
      });
    }
  })))), tab.name === "advance" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin & Padding", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapperMargin,
    baseLabel: "Margin"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapperPadding,
    baseLabel: "Padding"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__.infoWrapBg,
    resRequiredProps: resRequiredProps
    // noOverlay
    // noMainBgi
    // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_5__.wrpBdShadow,
    resRequiredProps: resRequiredProps
    // noShadow
    // noBorder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infobox_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/infobox-save */ "./src/components/infobox-save.js");



function save({
  attributes
}) {
  const {
    blockId,
    selectedIcon,
    infoboxIcon,
    number = 0,
    media,
    imageUrl,
    imageAlt,
    enableSubTitle,
    enableDescription,
    infoboxLink,
    linkNewTab,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  } = attributes;
  const requiredProps = {
    selectedIcon,
    infoboxIcon,
    blockId,
    number,
    media,
    imageUrl,
    imageAlt,
    enableSubTitle,
    enableDescription,
    infoboxLink,
    linkNewTab,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    btnEffect,
    classHook
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    target: linkNewTab ? "_blank" : "_self",
    rel: "noopener noreferrer",
    className: "info-click-link info-wrap-link"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
    requiredProps: requiredProps
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
    requiredProps: requiredProps
  }));
}

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");






const {
  softMinifyCssStrings,
  generateBackgroundControlStyles,
  generateDimensionsControlStyles,
  generateTypographyStyles,
  generateBorderShadowStyles,
  generateResponsiveRangeStyles,
  StyleComponent
} = window.EBInfoboxControls;
function Style(props) {
  const {
    attributes,
    setAttributes,
    name
  } = props;
  const {
    // responsive control attributes ⬇
    resOption,
    // blockMeta is for keeping all the styles
    blockMeta,
    // blockId attribute for making unique className and other uniqueness
    blockId,
    media,
    imageUrl,
    enableSubTitle,
    enableDescription,
    flexDirection,
    mediaAlignSelf,
    contentAlignment,
    useNumIconBg,
    numIconColor,
    numIconBgType,
    numIconBgColor,
    numIconBgGradient,
    [`${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaImageWidth}Unit`]: mediaImgWidthUnit,
    [`TAB${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaImageWidth}Unit`]: TABmediaImgWidthUnit,
    [`MOB${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaImageWidth}Unit`]: MOBmediaImgWidthUnit,
    isMediaImgHeightAuto,
    buttonTextColor = "#30267A",
    buttonHvrTextColor,
    titleColor = "#fff",
    subTitleColor = "#fff",
    descriptionColor = "#fff",
    mediaAlignment,
    contentsAlignment,
    btnAlignment,
    numberFontSize,
    TABnumberFontSize,
    MOBnumberFontSize,
    mIconZRange,
    TABmIconZRange,
    MOBmIconZRange,
    mIconZUnit,
    TABmIconZUnit,
    MOBmIconZUnit,
    numberSizeUnit,
    TABnumberSizeUnit,
    MOBnumberSizeUnit,
    isInfoClick,
    enableButton,
    btnEffect
  } = attributes;
  const buttonThakbe = !isInfoClick && enableButton;

  //
  // styling codes starts from here
  //

  const {
    typoStylesDesktop: titleTypoStylesDesktop,
    typoStylesTab: titleTypoStylesTab,
    typoStylesMobile: titleTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.typoPrefix_title,
    defaultFontSize: 26
  });
  const {
    typoStylesDesktop: subTitleTypoStylesDesktop,
    typoStylesTab: subTitleTypoStylesTab,
    typoStylesMobile: subTitleTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.typoPrefix_subTitle,
    defaultFontSize: 22
  });
  const {
    typoStylesDesktop: contentTypoStylesDesktop,
    typoStylesTab: contentTypoStylesTab,
    typoStylesMobile: contentTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.typoPrefix_content,
    defaultFontSize: 20
  });
  const {
    typoStylesDesktop: buttonTypoStylesDesktop,
    typoStylesTab: buttonTypoStylesTab,
    typoStylesMobile: buttonTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.typoPrefix_buttonText,
    defaultFontSize: 20
  });
  const {
    typoStylesDesktop: numTypoStylesDesktop,
    typoStylesTab: numTypoStylesTab,
    typoStylesMobile: numTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.typoPrefix_number,
    defaultFontSize: 28
  });
  const {
    dimensionStylesDesktop: mediaBgPaddingDesktop,
    dimensionStylesTab: mediaBgPaddingTab,
    dimensionStylesMobile: mediaBgPaddingMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.mediaBackground,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: mediaRadiusStylesDesktop,
    dimensionStylesTab: mediaRadiusStylesTab,
    dimensionStylesMobile: mediaRadiusStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.mediaBgRadius,
    styleFor: "border-radius"
  });
  const {
    dimensionStylesDesktop: mediaBgMarginStylesDesktop,
    dimensionStylesTab: mediaBgMarginStylesTab,
    dimensionStylesMobile: mediaBgMarginStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.mediaBgMargin,
    styleFor: "margin"
  });
  const {
    dimensionStylesDesktop: buttonPaddingStylesDesktop,
    dimensionStylesTab: buttonPaddingStylesTab,
    dimensionStylesMobile: buttonPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.buttonPadding,
    styleFor: "padding"
  });

  // const {
  // 	dimensionStylesDesktop: buttonRadiusStylesDesktop,
  // 	dimensionStylesTab: buttonRadiusStylesTab,
  // 	dimensionStylesMobile: buttonRadiusStylesMobile,
  // } = generateDimensionsControlStyles({
  // 	attributes,
  // 	controlName: buttonRadius,
  // 	styleFor: "border-radius",
  // });

  const {
    dimensionStylesDesktop: titlePaddingStylesDesktop,
    dimensionStylesTab: titlePaddingStylesTab,
    dimensionStylesMobile: titlePaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.titlePadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: subTitlePaddingStylesDesktop,
    dimensionStylesTab: subTitlePaddingStylesTab,
    dimensionStylesMobile: subTitlePaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.subTitlePadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: contentPaddingStylesDesktop,
    dimensionStylesTab: contentPaddingStylesTab,
    dimensionStylesMobile: contentPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.contentPadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: wrapperPaddingStylesDesktop,
    dimensionStylesTab: wrapperPaddingStylesTab,
    dimensionStylesMobile: wrapperPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.wrapperPadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: wrapperMarginStylesDesktop,
    dimensionStylesTab: wrapperMarginStylesTab,
    dimensionStylesMobile: wrapperMarginStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.wrapperMargin,
    styleFor: "margin"
  });
  const {
    backgroundStylesDesktop,
    hoverBackgroundStylesDesktop,
    backgroundStylesTab,
    hoverBackgroundStylesTab,
    backgroundStylesMobile,
    hoverBackgroundStylesMobile,
    overlayStylesDesktop,
    hoverOverlayStylesDesktop,
    overlayStylesTab,
    hoverOverlayStylesTab,
    overlayStylesMobile,
    hoverOverlayStylesMobile,
    bgTransitionStyle,
    ovlTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.infoWrapBg
    // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
  });
  const {
    backgroundStylesDesktop: btnBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: btnHoverBackgroundStylesDesktop,
    backgroundStylesTab: btnBackgroundStylesTab,
    hoverBackgroundStylesTab: btnHoverBackgroundStylesTab,
    backgroundStylesMobile: btnBackgroundStylesMobile,
    hoverBackgroundStylesMobile: btnHoverBackgroundStylesMobile,
    bgTransitionStyle: btnBgTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.infoBtnBg,
    forButton: true
    // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
  });
  const {
    styesDesktop: bdShadowStyesDesktop,
    styesTab: bdShadowStyesTab,
    styesMobile: bdShadowStyesMobile,
    stylesHoverDesktop: bdShadowStylesHoverDesktop,
    stylesHoverTab: bdShadowStylesHoverTab,
    stylesHoverMobile: bdShadowStylesHoverMobile,
    transitionStyle: bdShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.wrpBdShadow,
    attributes
    // noShadow: true,
    // noBorder: true,
  });
  const {
    styesDesktop: btnBdShadowStyesDesktop,
    styesTab: btnBdShadowStyesTab,
    styesMobile: btnBdShadowStyesMobile,
    stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
    stylesHoverTab: btnBdShadowStylesHoverTab,
    stylesHoverMobile: btnBdShadowStylesHoverMobile,
    transitionStyle: btnBdShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.btnBdShd,
    attributes
    // noShadow: true,
    // noBorder: true,
  });
  const {
    rangeStylesDesktop: iconSizeDesktop,
    rangeStylesTab: iconSizeTab,
    rangeStylesMobile: iconSizeMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaIconSize,
    customUnit: "px",
    property: "font-size",
    attributes
  });
  const {
    rangeStylesDesktop: contentMediaGapDesktop,
    rangeStylesTab: contentMediaGapTab,
    rangeStylesMobile: contentMediaGapMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaContentGap,
    customUnit: "px",
    property: "gap",
    attributes
  });
  const {
    rangeStylesDesktop: mediaImgHeightDesktop,
    rangeStylesTab: mediaImgHeightTab,
    rangeStylesMobile: mediaImgHeightMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaImageHeight,
    property: "height",
    attributes
  });
  const {
    rangeStylesDesktop: mediaImgWidthDesktop,
    rangeStylesTab: mediaImgWidthTab,
    rangeStylesMobile: mediaImgWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__.mediaImageWidth,
    property: "width",
    attributes
  });
  const wrapperStylesDesktop = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${bdShadowStyesDesktop}
			${backgroundStylesDesktop}
			transition: ${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesDesktop}
			transition: ${ovlTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesDesktop}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${flexDirection ? `flex-direction: ${flexDirection};` : " "}
			${media !== "none" ? `${contentMediaGapDesktop}` : ""}
		}

		${media !== "none" ? `
				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
					${mediaAlignment ? `align-self: ${mediaAlignment};` : `align-self: ${mediaAlignSelf || "center"};`}

					${mediaBgMarginStylesDesktop}

				}


				${media === "image" ? `

						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
							${mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " "}
						}

						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

							${imageUrl ? mediaRadiusStylesDesktop : " "}

							${mediaImgWidthUnit === "%" ? `width: 100%;` : mediaImgWidthDesktop}
							${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightDesktop}

						}

						.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
							${imageUrl ? " " : mediaRadiusStylesDesktop}
						}
						` : " "}



				${media === "number" || media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {

							${mediaBgPaddingDesktop}
							${mediaRadiusStylesDesktop}

							${useNumIconBg ? `${numIconBgType === "fill" ? `background-color: ${numIconBgColor};` : numIconBgType === "gradient" ? `background-image: ${numIconBgGradient};` : " "}` : " "}

						}

						.eb-infobox-wrapper.${blockId} .number-or-icon > * {
							color: ${numIconColor || "#fff"};
						}

						` : " "}



				${media === "number" ? `

					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesDesktop}
						height:${numberFontSize || 28}${numberSizeUnit};
						width:${numberFontSize || 28}${numberSizeUnit};
						display:flex;
						justify-content:center;
						align-items:center;
					}

					` : " "}

				${media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeDesktop}
							height:${mIconZRange}${mIconZUnit};
							width:${mIconZRange}${mIconZUnit};
							display:flex;
							justify-content:center;
							align-items:center;
						}

						` : " "}


			` : " "}

		.eb-infobox-wrapper.${blockId} .contents-wrapper {
			flex: 1;
			${contentAlignment ? `text-align: ${contentAlignment};` : " "}

			${contentsAlignment ? `text-align: ${contentsAlignment};` : `text-align: ${contentAlignment};`}
		}

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesDesktop}
			${titlePaddingStylesDesktop}
			${titleColor ? `color: ${titleColor};` : " "}
		}

		${enableSubTitle ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesDesktop}
					${subTitlePaddingStylesDesktop}
					${subTitleColor ? `color: ${subTitleColor};` : " "}
				}
				` : " "}

		${enableDescription ? `

				.eb-infobox-wrapper.${blockId} .description {

					${contentTypoStylesDesktop}
					${contentPaddingStylesDesktop}
					${descriptionColor ? `color: ${descriptionColor};` : " "}

				}

				` : " "}

		${buttonThakbe ? `

				.eb-infobox-wrapper.${blockId} .contents-wrapper .eb-infobox-btn-wrapper{
					${btnAlignment ? `text-align:${btnAlignment};` : ""}
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesDesktop}
					${buttonPaddingStylesDesktop}
					${btnBackgroundStylesDesktop}
					${btnBdShadowStyesDesktop}


					${buttonTextColor ? `color: ${buttonTextColor};` : " "}

					transition: all 0.5s, ${btnBgTransitionStyle}, ${btnBdShadowTransitionStyle};
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${buttonHvrTextColor ? `color: ${buttonHvrTextColor};` : " "}
					${btnBdShadowStylesHoverDesktop}
				}

                ${btnEffect ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                        ${btnHoverBackgroundStylesDesktop}
                        ${buttonHvrTextColor ? `color: ${buttonHvrTextColor};` : " "}
                        ${btnBdShadowStylesHoverDesktop}
                    }
                    ` : ""}




				` : " "}

		`;
  const wrapperStylesTab = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}


		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapTab}` : ""}
		}

		${media !== "none" ? `

				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {

					${mediaBgMarginStylesTab}
				}

				${media === "number" || media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesTab}
							${mediaBgPaddingTab}
						}

						` : " "}


				${media === "number" ? `

						.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
							${numTypoStylesTab}
							${TABnumberFontSize ? `height:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
							${TABnumberFontSize ? `width:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
						}

					` : " "}


				${media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeTab}
							${TABmIconZRange ? `height:${TABmIconZRange}${TABmIconZUnit};` : ""}
							${TABmIconZRange ? `width:${TABmIconZRange}${TABmIconZUnit};` : ""}
						}

					` : " "}


				${media === "image" ? `

					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${TABmediaImgWidthUnit === "%" ? mediaImgWidthTab : mediaImgWidthUnit === "%" ? `width: auto;` : " "}
					}

					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

						${TABmediaImgWidthUnit === "%" ? mediaImgWidthUnit === "%" ? " " : `width: 100%;` : mediaImgWidthTab}

						${isMediaImgHeightAuto ? "" : mediaImgHeightTab}

					}


					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesTab}

					}

					` : " "}




			` : " "}


		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesTab}
			${titlePaddingStylesTab}

		}

		${enableSubTitle ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesTab}
					${subTitlePaddingStylesTab}

				}
				` : " "}

		${enableDescription ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesTab}
					${contentPaddingStylesTab}

				}
				` : " "}

		${buttonThakbe ? `
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesTab}
					${buttonPaddingStylesTab}
					${btnBdShadowStyesTab}
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverTab}
				}

				` : " "}

        ${btnEffect ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                    ${btnHoverBackgroundStylesTab}
                    ${btnBdShadowStylesHoverTab}
                }
                ` : ""}

	`;
  const wrapperStylesMobile = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesMobile}
		}


		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesMobile}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapMobile}` : ""}
		}

		${media !== "none" ? `

				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {

					${mediaBgMarginStylesMobile}
				}

				${media === "number" || media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesMobile}
							${mediaBgPaddingMobile}
						}

						` : " "}

				${media === "number" ? `

					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesMobile}
						${MOBnumberFontSize ? `height:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
						${MOBnumberFontSize ? `width:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
					}

					` : " "}

				${media === "icon" ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeMobile}
							${MOBmIconZRange ? `height:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
							${MOBmIconZRange ? `width:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
						}

					` : " "}

				${media === "image" ? `


					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${MOBmediaImgWidthUnit === "%" ? mediaImgWidthMobile : TABmediaImgWidthUnit === "%" ? `width: auto;` : " "}
					}


					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

						${MOBmediaImgWidthUnit === "%" ? TABmediaImgWidthUnit === "%" ? " " : `width: 100%;` : mediaImgWidthMobile}

						${isMediaImgHeightAuto ? "" : mediaImgHeightMobile}

					}


					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesMobile}
					}

					` : " "}



			` : " "}

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesMobile}
			${titlePaddingStylesMobile}

		}

		${enableSubTitle ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesMobile}
					${subTitlePaddingStylesMobile}

				}
				` : " "}

		${enableDescription ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesMobile}
					${contentPaddingStylesMobile}

				}

				` : " "}

		${buttonThakbe ? `

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesMobile}
					${btnBdShadowStyesMobile}
				}


				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverMobile}
				}

				` : " "}


        ${btnEffect ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                    ${btnHoverBackgroundStylesMobile}
                    ${btnBdShadowStylesHoverMobile}
                }
                ` : ""}
	`;

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
	`);

  // all css styles for Tab in strings ⬇
  const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
	`);

  // all css styles for Mobile in strings ⬇
  const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
	`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyles: desktopAllStyles,
    tabAllStyles: tabAllStyles,
    mobileAllStyles: mobileAllStyles,
    blockName: name
  }));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"infobox/infobox","title":"Infobox","apiVersion":2,"category":"widgets","description":"Deliver your content beautifully to grab attention with an animated Infobox block.","supports":{"html":false,"align":["wide","full"]},"textdomain":"infobox","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkinfobox"] = globalThis["webpackChunkinfobox"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map