/* eslint-disable react/prop-types */
const OutlineButton = ({ text, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-amber-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-amber-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
      <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

const SolidButton = ([text, ...buttonProps]) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-red-500 to-amber-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      {...buttonProps}
    >
      {text}
    </button>
  );
};

const Button = ({ variant, ...buttonProps }) => {
  switch (variant) {
    case "outline":
      return <OutlineButton {...buttonProps} />;
    case "solid":
      return <SolidButton {...buttonProps} />;
    default:
      throw new Error("Invalid variant prop");
  }
};

export default Button;
