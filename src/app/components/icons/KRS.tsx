const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#fff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="58"
      fill="none"
      viewBox="0 0 62 78"
    >
      <path
        fill={color}
        d="M54 .667a7.667 7.667 0 0 1 7.667 7.666v61.334A7.667 7.667 0 0 1 54 77.333H8a7.667 7.667 0 0 1-7.667-7.666V8.333A7.667 7.667 0 0 1 8 .667zm0 7.666H34.833V39l-9.583-8.625L15.667 39V8.333H8v61.334h46z"
      ></path>
    </svg>
  );
};

export default SvgIcon;
