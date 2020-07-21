/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Dropdown,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import faIcons from "../util/faIcons.js";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	INFOBOX_TYPES,
	POSITIONS,
	HEADER_TAGS,
	TEXT_TRANSFORM,
	BUTTON_SIZES,
	BUTTON_ALIGN,
	BORDER_STYLES,
	BACKGROUND_TYPE,
} from "./constants.js";
import DimensionsControl from "../util/dimensions-control";
import ImageAvatar from "../util/image-avatar/ImageAvater.js";
import GradientColorControl from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	changeButtonSize = (newSize) => {
		switch (newSize) {
			case "small":
				this.props.setAttributes({
					buttonPaddingTop: 5,
					buttonPaddingRight: 10,
					buttonPaddingBottom: 5,
					buttonPaddingLeft: 10,
					buttonSize: newSize,
				});
				break;

			case "medium":
				this.props.setAttributes({
					buttonPaddingTop: 10,
					buttonPaddingRight: 20,
					buttonPaddingBottom: 10,
					buttonPaddingLeft: 30,
					buttonSize: newSize,
				});
				break;

			case "large":
				this.props.setAttributes({
					buttonPaddingTop: 20,
					buttonPaddingRight: 30,
					buttonPaddingBottom: 20,
					buttonPaddingLeft: 30,
					buttonSize: newSize,
				});
				break;

			case "extra-large":
				this.props.setAttributes({
					buttonPaddingTop: 20,
					buttonPaddingRight: 60,
					buttonPaddingBottom: 20,
					buttonPaddingLeft: 60,
					buttonSize: newSize,
				});
				break;
		}
	};

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			backgroundType,
			backgroundImageURL,
			backgroundImageID,
			backgroundColor,
			backgroundGradient,
			imageOrIcon,
			iconPosition,
			selectedIcon,
			isClickable,
			clickableLink,
			header,
			content,
			imageUrl,
			imageId,
			flexDirection,
			order,
			showButton,
			buttonText,
			imageHeight,
			imageWidth,
			number,
			headerTag,
			contentFontSize,
			contentColor,
			headerColor,
			headerTextTransform,
			numberColor,
			numberSize,
			iconSize,
			iconColor,
			iconBackground,
			buttonColor,
			buttonTextColor,
			iconPaddingTop,
			iconPaddingRight,
			iconPaddingBottom,
			iconPaddingLeft,
			headerPaddingTop,
			headerPaddingRight,
			headerPaddingBottom,
			headerPaddingLeft,
			imageMarginTop,
			imageMarginRight,
			imageMarginBottom,
			imageMarginLeft,
			buttonPaddingTop,
			buttonPaddingRight,
			buttonPaddingBottom,
			buttonPaddingLeft,
			buttonSize,
			buttonAlign,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			borderWidth,
			borderStyle,
			borderColor,
			borderRadius,
			shadowColor,
			shadowHOffset,
			shadowVOffset,
			shadowBlur,
			shadowSpread,
			contentSizeUnit,
			iconSizeUnit,
			marginUnit,
			paddingUnit,
			radiusUnit,
			headerPaddingUnit,
			iconPaddingUnit,
			borderWidthUnit,
			buttonPaddingUnit,
		} = attributes;

		// Change flex order based on icon position
		if (iconPosition === "top") {
			setAttributes({ order: 0, flexDirection: "column" });
		} else if (iconPosition === "bottom") {
			setAttributes({ order: 1, flexDirection: "column" });
		} else if (iconPosition === "left") {
			setAttributes({ order: 0, flexDirection: "row" });
		} else if (iconPosition === "right") {
			setAttributes({ order: 1, flexDirection: "row" });
		}

		return (
			<InspectorControls key="controls">
				<PanelBody title={__("Infobox Settings")}>
					<BaseControl
						id="eb-infobox-background-type"
						label={__("Infobox Background")}
					>
						<ButtonGroup id="eb-infobox-infobox-background">
							{BACKGROUND_TYPE.map((item) => (
								<Button
									isLarge
									isSecondary={backgroundType !== item.value}
									isPrimary={backgroundType === item.value}
									onClick={() =>
										setAttributes({
											backgroundType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<BaseControl id="eb-infobox-image-icon" label={__("Image or Icon")}>
						<ButtonGroup id="eb-infobox-image-icon">
							{INFOBOX_TYPES.map((value) => (
								<Button
									isLarge
									isSecondary={imageOrIcon !== value}
									isPrimary={imageOrIcon === value}
									onClick={() => setAttributes({ imageOrIcon: value })}
								>
									{value}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<BaseControl
						id="eb-infobox-position"
						label={__(`${imageOrIcon}  Position`)}
					>
						<ButtonGroup id="eb-infobox-position">
							{POSITIONS.map((value) => (
								<Button
									isLarge
									isSecondary={iconPosition !== value}
									isPrimary={iconPosition === value}
									onClick={() => setAttributes({ iconPosition: value })}
								>
									{value}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{imageOrIcon === "icon" && (
						<BaseControl label={__("Select Icon")}>
							<FontIconPicker
								icons={faIcons}
								onChange={(icon) => setAttributes({ selectedIcon: icon })}
								value={selectedIcon}
								appendTo="body"
								isMulti={false}
							/>
						</BaseControl>
					)}

					{imageOrIcon === "image" && imageId && (
						<Fragment>
							<RangeControl
								label={__("Image Height")}
								value={imageHeight}
								onChange={(newSize) => setAttributes({ imageHeight: newSize })}
								min={0}
								max={400}
							/>

							<RangeControl
								label={__("Image Width")}
								value={imageWidth}
								onChange={(newSize) => setAttributes({ imageWidth: newSize })}
								min={0}
								max={400}
							/>
						</Fragment>
					)}

					{imageOrIcon === "number" && (
						<BaseControl label={__("Number")} id="eb-infobox-number-id">
							<input
								type="number"
								value={number}
								id="eb-infobox-number-id"
								onChange={(event) =>
									setAttributes({
										number: parseInt(event.target.value, 10),
									})
								}
								min={0}
							/>
						</BaseControl>
					)}

					{!isClickable && (
						<ToggleControl
							label={__("Show Button")}
							checked={showButton}
							onChange={() => setAttributes({ showButton: !showButton })}
						/>
					)}

					{!showButton && (
						<ToggleControl
							label={__("Infobox Clickable")}
							checked={isClickable}
							onChange={() => setAttributes({ isClickable: !isClickable })}
						/>
					)}

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<BaseControl label={__("Heading")}>
										<ButtonGroup className="infobox-button-group">
											{HEADER_TAGS.map((header) => (
												<Button
													isSecondary={headerTag !== header}
													isPrimary={headerTag === header}
													onClick={() => setAttributes({ headerTag: header })}
												>
													{header.toUpperCase()}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									<SelectControl
										label={__("Heading Text Transform")}
										value={headerTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(newValue) =>
											setAttributes({ headerTextTransform: newValue })
										}
									/>

									<UnitControl
										selectedUnit={contentSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(contentSizeUnit) =>
											setAttributes({ contentSizeUnit })
										}
									/>

									<RangeControl
										label={__("Content Font Size")}
										value={contentFontSize}
										allowReset
										onChange={(newSize) =>
											setAttributes({ contentFontSize: newSize })
										}
										min={8}
										max={100}
									/>

									{imageOrIcon === "icon" && selectedIcon && (
										<Fragment>
											<UnitControl
												selectedUnit={iconSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(iconSizeUnit) =>
													setAttributes({ iconSizeUnit })
												}
											/>

											<RangeControl
												label={__("Icon Size")}
												value={iconSize}
												allowReset
												onChange={(newSize) =>
													setAttributes({ iconSize: newSize })
												}
												min={8}
												max={100}
											/>
										</Fragment>
									)}

									{imageOrIcon === "number" && (
										<RangeControl
											label={__("Number Size")}
											value={numberSize}
											onChange={(newSize) =>
												setAttributes({ numberSize: newSize })
											}
											min={8}
											max={64}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>

					{showButton && (
						<PanelBody title={__("Button Settings")}>
							<TextControl
								label={__("Button Text")}
								value={buttonText}
								onChange={(newText) => setAttributes({ buttonText: newText })}
							/>

							<TextControl
								label={__("Link URL")}
								placeholder="https://your-link.com"
								value={clickableLink}
								onChange={(link) => setAttributes({ clickableLink: link })}
							/>

							<SelectControl
								label={__("Button Size")}
								value={buttonSize}
								options={BUTTON_SIZES}
								onChange={(newSize) => this.changeButtonSize(newSize)}
							/>

							<SelectControl
								label={__("Button Align")}
								value={buttonAlign}
								options={BUTTON_ALIGN}
								onChange={(buttonAlign) => setAttributes({ buttonAlign })}
							/>
						</PanelBody>
					)}

					{isClickable && (
						<TextControl
							label={__("Infobox Link")}
							placeholder="https://your-link.com"
							value={clickableLink}
							onChange={(link) => setAttributes({ clickableLink: link })}
						/>
					)}
				</PanelBody>

				{backgroundType === "image" && (
					<PanelBody title={__("Background Image")}>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									backgroundImageURL: media.url,
									backgroundImageID: media.id,
								})
							}
							type="image"
							value={backgroundImageID}
							render={({ open }) =>
								!backgroundImageURL && (
									<Button
										className="eb-infobox-bg-upload-button components-button"
										label={__("Upload Image")}
										icon="format-image"
										onClick={open}
									/>
								)
							}
						/>

						{backgroundImageURL && (
							<ImageAvatar
								imageUrl={backgroundImageURL}
								onDeleteImage={() =>
									setAttributes({ backgroundImageURL: null })
								}
							/>
						)}
					</PanelBody>
				)}

				{backgroundType === "fill" && (
					<PanelColorSettings
						title={__("Background Color")}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (newColor) =>
									setAttributes({
										backgroundColor: newColor,
									}),
								label: __("Background Color"),
							},
							{
								value: iconBackground,
								onChange: (newColor) =>
									setAttributes({ iconBackground: newColor }),
								label: __("Icon Background Color"),
							},
						]}
					/>
				)}

				{backgroundType === "gradient" && (
					<PanelBody title={__("Gradient Colors")} initialOpen={false}>
						<GradientColorControl
							colorOne="#0072ff"
							colorTwo="#00c6ff"
							angle={45}
							onChange={(newValue) =>
								setAttributes({ backgroundGradient: newValue })
							}
						/>
					</PanelBody>
				)}

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Colors")} initialOpen={false}>
					<ColorControl
						label={__("Header Color")}
						color={headerColor}
						onChange={(headerColor) => setAttributes({ headerColor })}
					/>

					<ColorControl
						label={__("Content Color")}
						color={contentColor}
						onChange={(contentColor) => setAttributes({ contentColor })}
					/>

					{imageOrIcon === "icon" && (
						<ColorControl
							label={__("Icon Color")}
							color={iconColor}
							onChange={(iconColor) => setAttributes({ iconColor })}
						/>
					)}

					{imageOrIcon === "number" && (
						<ColorControl
							label={__("Number Color")}
							color={numberColor}
							onChange={(numberColor) => setAttributes({ numberColor })}
						/>
					)}

					{showButton && (
						<>
							<ColorControl
								label={__("Button Color")}
								color={buttonColor}
								onChange={(buttonColor) => setAttributes({ buttonColor })}
							/>

							<ColorControl
								label={__("Button Text Color")}
								color={buttonTextColor}
								onChange={(buttonTextColor) =>
									setAttributes({ buttonTextColor })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Spacing")} initialOpen={false}>
					<UnitControl
						selectedUnit={headerPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(headerPaddingUnit) =>
							setAttributes({ headerPaddingUnit })
						}
					/>

					<DimensionsControl
						label={__("Header Padding")}
						top={headerPaddingTop}
						right={headerPaddingRight}
						bottom={headerPaddingBottom}
						left={headerPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								headerPaddingTop: top,
								headerPaddingRight: right,
								headerPaddingBottom: bottom,
								headerPaddingLeft: left,
							})
						}
					/>

					{imageOrIcon === "image" && (
						<DimensionsControl
							label={__("Image Margin")}
							top={imageMarginTop}
							right={imageMarginTop}
							bottom={imageMarginBottom}
							left={imageMarginLeft}
							onChange={({ top, right, bottom, left }) =>
								setAttributes({
									imageMarginTop: top,
									imageMarginRight: right,
									imageMarginBottom: bottom,
									imageMarginLeft: left,
								})
							}
						/>
					)}

					{showButton && (
						<>
							<UnitControl
								selectedUnit={buttonPaddingUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(buttonPaddingUnit) =>
									setAttributes({ buttonPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Button Padding")}
								top={buttonPaddingTop}
								right={buttonPaddingRight}
								bottom={buttonPaddingBottom}
								left={buttonPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										buttonPaddingTop: top,
										buttonPaddingRight: right,
										buttonPaddingBottom: bottom,
										buttonPaddingLeft: left,
									})
								}
							/>
						</>
					)}

					{imageOrIcon === "icon" && (
						<>
							<UnitControl
								selectedUnit={iconPaddingUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(iconPaddingUnit) =>
									setAttributes({ iconPaddingUnit })
								}
							/>
							<DimensionsControl
								label={__("Icon Padding")}
								top={iconPaddingTop}
								right={iconPaddingRight}
								bottom={iconPaddingBottom}
								left={iconPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										iconPaddingTop: top,
										iconPaddingRight: right,
										iconPaddingBottom: bottom,
										iconPaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Border")} initialOpen={false}>
					<ColorControl
						label={__("Border Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>

					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(borderStyle) => setAttributes({ borderStyle })}
					/>

					<UnitControl
						selectedUnit={borderWidthUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(borderWidthUnit) => setAttributes({ borderWidthUnit })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth}
						allowReset
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={0}
						max={100}
					/>

					<UnitControl
						selectedUnit={radiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(radiusUnit) => setAttributes({ radiusUnit })}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={borderRadius}
						allowReset
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						allowReset
						onChange={(shadowHOffset) => setAttributes({ shadowHOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						allowReset
						onChange={(shadowVOffset) => setAttributes({ shadowVOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						allowReset
						onChange={(shadowBlur) => setAttributes({ shadowBlur })}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						allowReset
						onChange={(shadowSpread) => setAttributes({ shadowSpread })}
						min={0}
						max={20}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
export default Inspector;
