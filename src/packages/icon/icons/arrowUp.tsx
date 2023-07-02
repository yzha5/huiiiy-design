import { IconProps } from "../props"
export default function ArrowUp({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="8" y1="1" x2="8" y2="16" stroke={color}/>
<path d="M3 6L8 1L13 6" stroke={color}/>
</svg>)}