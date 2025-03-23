import * as React from "react";
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.color ?? "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? "52"}
    height={props.height ?? "52"}
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M24.9,30.1c0.6,0.6,1.5,0.6,2.1,0l22.6-21C50,8.3,49.9,7,48.3,7L3.6,7.1c-1.2,0-2.2,1.1-1.3,2.1L24.9,30.1z " />
      <path d="M50,17.3c0-1-1.2-1.6-2-0.9L30.3,32.7c-1.2,1.1-2.7,1.7-4.3,1.7s-3.1-0.6-4.3-1.6L4.1,16.4 c-0.8-0.7-2-0.2-2,0.9C2,17,2,40,2,40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4C50,34,50,21.8,50,17.3z" />
    </g>
  </svg>
);
export default MailIcon;
