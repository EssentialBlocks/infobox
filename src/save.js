import { useBlockProps } from "@wordpress/block-editor";
import InfoboxContainer from "./components/infobox-container";

export default function save({ attributes }) {
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
		buttonText,
		title,
		subTitle,
		description,
		//
		titleTag,
		subTitleTag,

		// isOverly is to check if a overly on the block's background should exist ⬇
		isOverly,
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
		buttonText,
		title,
		subTitle,
		description,
		titleTag,
		subTitleTag,
		isOverly,
	};

	return (
		<div {...useBlockProps.save()}>
			<InfoboxContainer requiredProps={requiredProps} />
		</div>
	);
}
