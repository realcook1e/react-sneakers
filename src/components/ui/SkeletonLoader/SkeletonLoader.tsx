import { FC } from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader: FC = () => (
	<ContentLoader
		speed={2}
		width={210}
		height={245}
		viewBox='0 0 210 245'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect
			x='0'
			y='1'
			rx='10'
			ry='10'
			width='150'
			height='91'
		/>
		<rect
			x='0'
			y='107'
			rx='3'
			ry='3'
			width='150'
			height='15'
		/>
		<rect
			x='0'
			y='126'
			rx='3'
			ry='3'
			width='93'
			height='15'
		/>
		<rect
			x='0'
			y='163'
			rx='8'
			ry='8'
			width='80'
			height='24'
		/>
		<rect
			x='119'
			y='156'
			rx='8'
			ry='8'
			width='32'
			height='32'
		/>
	</ContentLoader>
);

export default SkeletonLoader;
