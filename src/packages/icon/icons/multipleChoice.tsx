import { IconProps } from "../props"
export default function MultipleChoice({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke={color}/>
<path d="M3 8.5L6 11.5L13 4.5" stroke={color}/>


</svg>)}