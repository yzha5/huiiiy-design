import { IconProps } from "../props"
export default function Tick({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 8L5.5 13L15.5 3" stroke={color}/>
</svg>)}