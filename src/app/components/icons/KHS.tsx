const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#fff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      fill="none"
      viewBox="0 0 92 92"
    >
      <path
        fill={color}
        d="M40.25 66.125h23v5.75h-23zm-11.5 0h5.75v5.75h-5.75zm11.5-14.375h23v5.75h-23zm-11.5 0h5.75v5.75h-5.75zm11.5-14.375h23v5.75h-23zm-11.5 0h5.75v5.75h-5.75z"
      ></path>
      <path
        fill={color}
        d="M71.875 14.375H63.25V11.5a5.75 5.75 0 0 0-5.75-5.75h-23a5.75 5.75 0 0 0-5.75 5.75v2.875h-8.625a5.75 5.75 0 0 0-5.75 5.75V80.5a5.75 5.75 0 0 0 5.75 5.75h51.75a5.75 5.75 0 0 0 5.75-5.75V20.125a5.75 5.75 0 0 0-5.75-5.75M34.5 11.5h23V23h-23zm37.375 69h-51.75V20.125h8.625v8.625h34.5v-8.625h8.625z"
      ></path>
    </svg>
  );
};

export default SvgIcon;
