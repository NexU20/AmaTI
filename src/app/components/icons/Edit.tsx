const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#fff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 0v2H2v14h14V7h2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm5.94.354.707.707a.5.5 0 0 1 0 .707L8.314 11.1l-1.992.98a.3.3 0 0 1-.402-.402l.98-1.992L16.233.353a.5.5 0 0 1 .707 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default SvgIcon;
