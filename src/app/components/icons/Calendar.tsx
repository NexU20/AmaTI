import * as React from "react";

export default function Calendar(props: React.SVGProps<SVGElement>) {
  const color = props.color || "#BEBEBE";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill={color}
        d="M17.417 3.667h-1.834V2.75a.917.917 0 0 0-1.833 0v.917h-5.5V2.75a.917.917 0 0 0-1.833 0v.917H4.583a2.75 2.75 0 0 0-2.75 2.75v11a2.75 2.75 0 0 0 2.75 2.75h12.834a2.75 2.75 0 0 0 2.75-2.75v-11a2.75 2.75 0 0 0-2.75-2.75m.916 13.75a.917.917 0 0 1-.916.916H4.583a.917.917 0 0 1-.916-.916V11h14.666zm0-8.25H3.667v-2.75a.917.917 0 0 1 .916-.917h1.834v.917a.917.917 0 0 0 1.833 0V5.5h5.5v.917a.917.917 0 0 0 1.833 0V5.5h1.834a.917.917 0 0 1 .916.917z"
      ></path>
    </svg>
  );
}
