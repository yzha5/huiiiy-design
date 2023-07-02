import { IconProps } from "../props"
export default function Forward({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.5 13V3L7.5 8L0.5 13Z" stroke={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.5 13V3L14.5 8L7.5 13Z" stroke={color}/>
</svg>)}