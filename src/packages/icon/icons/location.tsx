import { IconProps } from "../props"
export default function Location({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6C13 8.76142 8 14.5 8 14.5C8 14.5 3 8.76142 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke={color}/>
<circle cx="8" cy="6" r="2" stroke={color}/>
</svg>)}