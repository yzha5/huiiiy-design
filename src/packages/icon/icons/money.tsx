import { IconProps } from "../props"
export default function Money({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="3" width="15" height="10" stroke={color}/>
<path d="M10 6C10 6 10 5 8 5C6 5 6 6.5 6 6.5C6 8.5 8 8 8 8C8 8 10 7.5 10 9.5C10 9.5 10 11 8 11C6 11 6 10 6 10M8 4V12" stroke={color} strokeLinejoin="round"/>
</svg>)}