import { SVGProps } from "react";
import CircularButton from "../components/elements/CircularButton";

function CircularButtonsPage() {
  return (
    <main className="space-y-6 p-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Elements / Circular buttons
          </h1>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Primary circular buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <CircularButton size="small" variant="primary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="medium" variant="primary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="large" variant="primary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Secondary circular buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <CircularButton size="small" variant="secondary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="medium" variant="secondary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="large" variant="secondary">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Soft circular buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <CircularButton size="small" variant="soft">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="medium" variant="soft">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
            <CircularButton size="large" variant="soft">
              <PlusIcon aria-hidden="true" className="h-5 w-5" />
            </CircularButton>
          </div>
        </div>
      </div>
    </main>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4.5v15m7.5-7.5h-15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CircularButtonsPage;
