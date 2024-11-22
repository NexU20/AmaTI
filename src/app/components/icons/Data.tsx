import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      fill="none"
      viewBox="0 0 16 18"
    >
      <path
        fill={color}
        d="M16 14V4c0-2.168-3.663-4-8-4S0 1.832 0 4v10c0 2.168 3.663 4 8 4s8-1.832 8-4M8 2c3.691 0 5.931 1.507 6 1.994C13.931 4.493 11.691 6 8 6S2.069 4.493 2 4.006C2.069 3.507 4.309 2 8 2M2 6.607C3.479 7.454 5.637 8 8 8s4.521-.546 6-1.393v2.387C13.931 9.493 11.691 11 8 11S2.069 9.493 2 9zM2 14v-2.393C3.479 12.454 5.637 13 8 13s4.521-.546 6-1.393v2.387C13.931 14.493 11.691 16 8 16s-5.931-1.507-6-2"
      ></path>
    </svg>
  );
};

export default SvgIcon;
