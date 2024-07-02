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
              id="email1"
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
              id="email2"
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
              id="email3"
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
              id="email4"
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
              id="email5"
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
