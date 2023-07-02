import { IconProps } from "../props"
export default function Compass({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="8" cy="8" r="7.5" stroke={color}/>
<path d="M7.2424 7.24228L11.0305 4.96944L8.75763 8.75751L4.96956 11.0304L7.2424 7.24228Z" stroke={color} strokeMiterlimit="16"/>


</svg>)}