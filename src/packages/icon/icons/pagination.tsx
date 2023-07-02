import { IconProps } from "../props"
export default function Pagination({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M2.5 0V5C2.5 5.55228 2.94772 6 3.5 6H12.5C13.0523 6 13.5 5.55228 13.5 5V0M2.5 16V11C2.5 10.4477 2.94772 10 3.5 10H12.5C13.0523 10 13.5 10.4477 13.5 11V16" stroke={color}/>
<path d="M0 8H16" stroke={color} strokeDasharray="1 1"/>


</svg>)}