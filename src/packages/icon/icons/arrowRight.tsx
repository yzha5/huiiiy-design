import { IconProps } from "../props"
export default function ArrowRight({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H15" stroke={color}/>
<path d="M10 3L15 8L10 13" stroke={color}/>
</svg>)}