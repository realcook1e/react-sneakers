import { FC, ComponentPropsWithoutRef } from "react";

interface CustomButtonProps extends ComponentPropsWithoutRef<"div"> {
	extraClass?: string;
}

const CustomButton: FC<CustomButtonProps> = props => {
	const { extraClass, children, ...buttonProps } = props;
	return (
		<div
			className={`customBtn ${
				extraClass ? extraClass : ""
			} rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer`}
			{...buttonProps}
		>
			{children}
		</div>
	);
};

export default CustomButton;
