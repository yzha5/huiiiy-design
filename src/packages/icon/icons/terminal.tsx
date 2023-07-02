import { IconProps } from "../props"
export default function Terminal({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="2" width="15" height="12" rx="1" stroke={color}/>
<path d="M3 5L6 8L3 11M7.5 11H13" stroke={color}/>
</svg>)}