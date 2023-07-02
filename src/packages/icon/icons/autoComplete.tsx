import { IconProps } from "../props"
export default function AutoComplete({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="4" width="15" height="8" rx="1" stroke={color}/>
<path d="M3.5 5.5V10.5" stroke={color}/>
<path d="M11 9.5L9.26795 6.5H12.7321L11 9.5Z" stroke={color}/>
</svg>)}