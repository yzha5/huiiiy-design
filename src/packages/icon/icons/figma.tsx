import { IconProps } from "../props"
export default function Figma({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0.5H6.5C5.11929 0.5 4 1.61929 4 3C4 4.38071 5.11929 5.5 6.5 5.5H11.5C12.8807 5.5 14 4.38071 14 3C14 1.61929 12.8807 0.5 11.5 0.5Z" stroke={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.5H9V10.5H6.5C5.11929 10.5 4 9.38071 4 8C4 6.61929 5.11929 5.5 6.5 5.5Z" stroke={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.5 10.5H9V13C9 14.3807 7.88071 15.5 6.5 15.5C5.11929 15.5 4 14.3807 4 13C4 11.6193 5.11929 10.5 6.5 10.5Z" stroke={color}/>
<path d="M11.5 10.5C12.8807 10.5 14 9.38071 14 8C14 6.61929 12.8807 5.5 11.5 5.5C10.1193 5.5 9 6.61929 9 8C9 9.38071 10.1193 10.5 11.5 10.5Z" stroke={color}/>
<path d="M9 0.5V5.5" stroke={color}/>
</svg>)}