import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
		<defs>
			<linearGradient
				id="a"
				x1="50%"
				x2="50%"
				y1="0%"
				y2="100%"
				gradientTransform="rotate(270)"
			>
				<stop offset="0%" stopColor="hsl(0, 0%, 0%)" />
				<stop offset="45%" stopColor="#cd4464" />
				<stop offset="100%" stopColor="#7b8af1" />
			</linearGradient>
		</defs>
		<rect width="100%" height="100%" fill="hsl(0, 0%, 0%)" />
		<g fill="url(#a)">
			<rect
				width={155}
				height={2}
				x={540.5}
				y={710}
				opacity={0.97}
				rx={1}
				transform="rotate(90 618 711)"
			/>
			<rect
				width={515}
				height={2}
				x={440.5}
				y={534}
				opacity={0.78}
				rx={1}
				transform="rotate(90 698 535)"
			/>
			<rect
				width={401}
				height={2}
				x={-126.5}
				y={57}
				opacity={0.36}
				rx={1}
				transform="rotate(90 74 58)"
			/>
			<rect
				width={318}
				height={2}
				x={503}
				y={71}
				opacity={0.92}
				rx={1}
				transform="rotate(90 662 72)"
			/>
			<rect
				width={417}
				height={2}
				x={27.5}
				y={565}
				opacity={0.61}
				rx={1}
				transform="rotate(90 236 566)"
			/>
			<rect
				width={209}
				height={2}
				x={134.5}
				y={193}
				opacity={0.39}
				rx={1}
				transform="rotate(90 239 194)"
			/>
			<rect
				width={510}
				height={2}
				x={185}
				y={453}
				opacity={0.14}
				rx={1}
				transform="rotate(90 440 454)"
			/>
			<rect
				width={360}
				height={2}
				x={-139}
				y={395}
				opacity={0.96}
				rx={1}
				transform="rotate(90 41 396)"
			/>
			<rect
				width={302}
				height={2}
				x={154}
				y={334}
				opacity={0.6}
				rx={1}
				transform="rotate(90 305 335)"
			/>
			<rect
				width={116}
				height={2}
				x={142}
				y={734}
				opacity={0.9}
				rx={1}
				transform="rotate(90 200 735)"
			/>
			<rect
				width={304}
				height={2}
				x={-97}
				y={728}
				opacity={0.59}
				rx={1}
				transform="rotate(90 55 729)"
			/>
			<rect
				width={343}
				height={2}
				x={554.5}
				y={248}
				opacity={0.9}
				rx={1}
				transform="rotate(90 726 249)"
			/>
			<rect
				width={243}
				height={2}
				x={-46.5}
				y={168}
				opacity={0.5}
				rx={1}
				transform="rotate(90 75 169)"
			/>
			<rect
				width={126}
				height={2}
				x={27}
				y={276}
				opacity={0.47}
				rx={1}
				transform="rotate(90 90 277)"
			/>
			<rect
				width={119}
				height={2}
				x={170.5}
				y={57}
				opacity={0.63}
				rx={1}
				transform="rotate(90 230 58)"
			/>
			<rect
				width={616}
				height={2}
				x={81}
				y={669}
				opacity={0.11}
				rx={1}
				transform="rotate(90 389 670)"
			/>
			<rect
				width={226}
				height={2}
				x={44}
				y={424}
				opacity={0.75}
				rx={1}
				transform="rotate(90 157 425)"
			/>
			<rect
				width={334}
				height={2}
				x={238}
				y={80}
				opacity={0.72}
				rx={1}
				transform="rotate(90 405 81)"
			/>
			<rect
				width={491}
				height={2}
				x={350.5}
				y={358}
				opacity={0.33}
				rx={1}
				transform="rotate(90 596 359)"
			/>
			<rect
				width={298}
				height={2}
				x={-80}
				y={578}
				opacity={0.56}
				rx={1}
				transform="rotate(90 69 579)"
			/>
			<rect
				width={306}
				height={2}
				x={342}
				y={204}
				opacity={0.22}
				rx={1}
				transform="rotate(90 495 205)"
			/>
		</g>
	</svg>
);
export { SvgComponent as Meteors };
