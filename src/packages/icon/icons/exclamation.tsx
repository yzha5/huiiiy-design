import { IconProps } from "../props"
export default function Exclamation({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16V14M8 12V0" stroke={color}/>
</svg>)}