const Input = ({ icon, ...inputProps }) => {
  return (
    <div className="flex items-center bg-slate-600/45 px-3 py-0 rounded-lg mt-5">
      {icon}
      <input
        className="ml-2 w-full outline-none focus:outline-none focus:ring-0 border-none focus:border-none bg-transparent font-normal text-slate-200 text-sm"
        {...inputProps}
        // type="text"
        // name="search"
        // id="search"
        // placeholder="Search..."
      />
    </div>
  );
};

export default Input;
