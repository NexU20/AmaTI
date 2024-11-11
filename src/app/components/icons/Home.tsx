const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#000";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="21"
      fill="none"
      viewBox="0 0 19 21"
    >
      <path
        fill={color}
        d="M2.75 18.375h3.375v-6.75h6.75v6.75h3.375V8.25L9.5 3.188 2.75 8.25zM.5 20.625v-13.5l9-6.75 9 6.75v13.5h-7.875v-6.75h-2.25v6.75z"
      ></path>
    </svg>
  );
};

export default SvgIcon;
