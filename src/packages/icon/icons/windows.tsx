import { IconProps } from "../props"
export default function Windows({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M0.5 3.5L6 2.5V7H0.5V3.5Z" stroke={color}/>
<path d="M8 2L15.5 1V7H8V2Z" stroke={color}/>
<path d="M8 9H15.5V15L8 14V9Z" stroke={color}/>
<path d="M0.5 9H6V13.5L0.5 12.5V9Z" stroke={color}/>


</svg>)}