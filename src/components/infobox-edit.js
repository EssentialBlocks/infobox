import { __ } from "@wordpress/i18n";
import { MediaUpload, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function InfoboxContainer({ attributes, setAttributes }) {
	const {
		blockId,
		media,
		selectedIcon,
		number,
		imageUrl,
		imageId,
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
		classHook,
	} = attributes;

	return (
		<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
			<div className={`${blockId} eb-infobox-wrapper`}>
				<div className="infobox-wrapper-inner">
					{media === "icon" ? (
						<div className="icon-img-wrapper">
							<div className="eb-icon number-or-icon">
								<span
									data-icon={selectedIcon}
									className={`eb-infobox-icon-data-selector  ${selectedIcon}`}
								></span>
							</div>
						</div>
					) : null}

					{media === "number" ? (
						<div className="icon-img-wrapper">
							<div className="eb-infobox-num-wrapper number-or-icon">
								<span className="eb-infobox-number">{number}</span>
							</div>
						</div>
					) : null}

					{media === "image" ? (
						<div className="icon-img-wrapper">
							<div className="eb-infobox-image-wrapper">
								<MediaUpload
									onSelect={({ id, url }) =>
										setAttributes({ imageUrl: url, imageId: id })
									}
									type="image"
									value={imageId}
									render={({ open }) => {
										if (!imageUrl) {
											return (
												<Button
													className="eb-infobox-img-btn components-button"
													label={__("Upload Image", "essential-blocks")}
													icon="format-image"
													onClick={open}
												/>
											);
										} else {
											return (
												<img className="eb-infobox-image" src={imageUrl} />
											);
										}
									}}
								/>
							</div>
						</div>
					) : null}

					<div className="contents-wrapper">
						<RichText
							tagName={titleTag}
							className="title"
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>

						{enableSubTitle ? (
							<RichText
								tagName={subTitleTag}
								className="subtitle"
								value={subTitle}
								onChange={(subTitle) => setAttributes({ subTitle })}
							/>
						) : null}

						{enableDescription ? (
							<RichText
								tagName="p"
								className="description"
								value={description}
								onChange={(description) => setAttributes({ description })}
							/>
						) : null}

						{enableButton && !isInfoClick ? (
							<div className="eb-infobox-btn-wrapper">
								<a
									href={infoboxLink}
									// style={{ pointerEvents: "none" }}
									className={`infobox-btn ${btnEffect || " "}`}
								>
									{buttonText}
								</a>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
