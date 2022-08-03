import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect width={72} height={72} rx={36} fill="#B4A9F7" />
      <path fill="url(#b)" d="M4 0h72v72H4z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={72} height={72} rx={36} fill="#fff" />
      </clipPath>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.00089)" />
      </pattern>
      <image
        id="c"
        width={1125}
        height={1125}
      />
    </defs>
  </svg>
);
export default SvgComponent;