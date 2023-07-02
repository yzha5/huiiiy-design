import { IconProps } from "../props"
export default function Keyboard({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="5.5" width="15" height="8" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M12 5.5C12 5.5 12.2308 4.53842 12 4C11.7824 3.49237 11.3144 3.45408 11 3C10.7515 2.64101 10.5 2 10.5 2" stroke={color} strokeLinejoin="round"/>
<path d="M4 12H8.5M2 7H3M10.5 9V10.5H9M8 7H9M7 7H6M5 7H4M2 10.5H4M12 7H14M12 9H14M12 11H14M9.5 12H11M2 9H3M2 12H3M10 7H11M4 9H5M6 9H7M8 9H9M5 10.5H6M7 10.5H8" stroke={color} strokeLinejoin="round"/>
</svg>)}