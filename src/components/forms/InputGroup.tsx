import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: ReactNode;
  help?: ReactNode;
  label?: ReactNode;
};

function InputGroup({ className, error, help, id, label, ...rest }: Props) {
  const descriptionId = id && help ? `${id}-description` : undefined;
  const errorId = id && error ? `${id}-error` : undefined;

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

      <div
        className={twMerge("mt-2", error && "relative rounded-md shadow-sm")}
      >
        <input
          aria-describedby={error ? errorId : descriptionId}
          className={twMerge(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
            error &&
              "pr-10 text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500",
            className,
          )}
          {...rest}
        />

        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {error}
        </p>
      ) : (
        help && (
          <p className="mt-2 text-sm text-gray-500" id={descriptionId}>
            {help}
          </p>
        )
      )}
    </div>
  );
}

export default InputGroup;
