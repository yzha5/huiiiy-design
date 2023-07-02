import { IconProps } from "../props"
export default function Umbrella({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2C2.5 2 1 7.5 1 7.5C3.36222 6.45012 5.36222 6.45137 8 6.50373M8 2C13.5 2 15 7.5 15 7.5C12.3872 6.54988 10.3872 6.55112 8 6.50373M8 2L8 0M8 6.50373V14C8 14 8 15.5 7 15.5C6 15.5 6 14 6 14" stroke={color}/>
</svg>)}