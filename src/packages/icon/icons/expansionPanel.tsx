import { IconProps } from "../props"
export default function ExpansionPanel({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="1" width="15" height="6" rx="1" stroke={color}/>
<path d="M1 2H15" stroke={color}/>
<rect x="0.5" y="9" width="15" height="6" rx="1" stroke={color}/>
<path d="M1 10H15" stroke={color}/>


</svg>)}