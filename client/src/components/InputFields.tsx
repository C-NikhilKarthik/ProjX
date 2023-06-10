import React from "react";

type InputFieldsProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  icons?: React.ElementType;
};

function InputFields(props: InputFieldsProps) {
  return (
    <div className="relative z-0 w-full flex items-center group">
      <input
        type={props.type}
        name={props.name}
        className="pr-8 border-b-2 border-primary-light block px-2 backdrop-filter backdrop-blur-sm py-2.5 w-full text-sm text-gray-900 bg-slate-950 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={props.name}
        className="pointer-events-none z-[1] pl-2 peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
      >
        {props.placeholder}
      </label>
      <span className="pr-2 text-slate-500 peer-focus:text-primary transition-[color] absolute right-1 pointer-events-none material-symbols-outlined">
        {props.icons && <props.icons className="text-xl" />}
      </span>
    </div>
  );
}

export default InputFields;
