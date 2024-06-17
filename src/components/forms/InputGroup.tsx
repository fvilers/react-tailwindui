import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  help?: ReactNode;
  label?: ReactNode;
};

function InputGroup({ className, help, id, label, ...rest }: Props) {
  const descriptionId = id && help ? `${id}-description` : undefined;
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
          aria-describedby={descriptionId}
          className={twMerge(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            className,
          )}
          {...rest}
        />
      </div>
      {help && (
        <p className="mt-2 text-sm text-gray-500" id={descriptionId}>
          {help}
        </p>
      )}
    </div>
  );
}

export default InputGroup;
