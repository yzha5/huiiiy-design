import { IconProps } from "../props"
export default function ArrowDown({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="8" y2="15" stroke={color}/>
<path d="M3 10L8 15L13 10" stroke={color}/>
</svg>)}