import InputGroup from "../components/forms/InputGroup";

function InputGroupsPage() {
  return (
    <main className="space-y-6 p-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Forms / Input groups
          </h1>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with label
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with label and help text
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              help="We'll only use this for spam."
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with validation error
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              defaultValue="not_an_email_address"
              error="Not a valid email address."
              help="We'll only use this for spam."
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with disabled state
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              disabled
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with hidden label
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              hiddenLabel={true}
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with leading icon
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              icon={
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                    fillRule="evenodd"
                  />
                </svg>
              }
              iconPosition="before"
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Input with trailing icon
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <InputGroup
              icon={
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    fillRule="evenodd"
                  />
                </svg>
              }
              iconPosition="after"
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default InputGroupsPage;
