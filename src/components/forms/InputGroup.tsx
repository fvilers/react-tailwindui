import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
};

function InputGroup({ className, id, label, ...rest }: Props) {
  return (
    <div>
      {label && (
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          className={twMerge(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            className,
          )}
          {...rest}
        />
      </div>
    </div>
  );
}

export default InputGroup;
