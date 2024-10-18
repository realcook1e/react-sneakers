import { FC, ComponentPropsWithoutRef } from "react";
import ArrowRightSvg from "../../../assets/icons/arrow_right.svg?react";
import ArrowLeftSvg from "../../../assets/icons/arrow_left.svg?react";

interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
	btnText: string;
	arrow?: "left" | "right" | "none";
	extraClass?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
	btnText,
	extraClass,
	arrow = "none",
	...buttonProps
}) => {
	return (
		<button
			className={`primaryBtn ${
				extraClass ? extraClass : ""
			} group relative flex justify-center items-center transition-all text-white font-bold py-4 rounded-2xl`}
			{...buttonProps}
		>
			{arrow === "left" && (
				<ArrowLeftSvg className='transition-all mr-5' />
			)}
			{btnText}
			{arrow === "right" && (
				<ArrowRightSvg className='absolute right-8 transition-all group-hover:right-5' />
			)}
		</button>
	);
};

export default PrimaryButton;
