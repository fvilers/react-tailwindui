import Button from "../components/elements/Button";

function ButtonsPage() {
  return (
    <main className="space-y-6 p-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Elements / Buttons
          </h1>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Primary buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button size="extra-small" variant="primary">
              Button text
            </Button>
            <Button size="small" variant="primary">
              Button text
            </Button>
            <Button size="medium" variant="primary">
              Button text
            </Button>
            <Button size="large" variant="primary">
              Button text
            </Button>
            <Button size="extra-large" variant="primary">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Secondary buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button size="extra-small" variant="secondary">
              Button text
            </Button>
            <Button size="small" variant="secondary">
              Button text
            </Button>
            <Button size="medium" variant="secondary">
              Button text
            </Button>
            <Button size="large" variant="secondary">
              Button text
            </Button>
            <Button size="extra-large" variant="secondary">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Soft buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button size="extra-small" variant="soft">
              Button text
            </Button>
            <Button size="small" variant="soft">
              Button text
            </Button>
            <Button size="medium" variant="soft">
              Button text
            </Button>
            <Button size="large" variant="soft">
              Button text
            </Button>
            <Button size="extra-large" variant="soft">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Rounded primary buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button rounded size="extra-small" variant="primary">
              Button text
            </Button>
            <Button rounded size="small" variant="primary">
              Button text
            </Button>
            <Button rounded size="medium" variant="primary">
              Button text
            </Button>
            <Button rounded size="large" variant="primary">
              Button text
            </Button>
            <Button rounded size="extra-large" variant="primary">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Rounded secondary buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button rounded size="extra-small" variant="secondary">
              Button text
            </Button>
            <Button rounded size="small" variant="secondary">
              Button text
            </Button>
            <Button rounded size="medium" variant="secondary">
              Button text
            </Button>
            <Button rounded size="large" variant="secondary">
              Button text
            </Button>
            <Button rounded size="extra-large" variant="secondary">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Rounded soft buttons
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button rounded size="extra-small" variant="soft">
              Button text
            </Button>
            <Button rounded size="small" variant="soft">
              Button text
            </Button>
            <Button rounded size="medium" variant="soft">
              Button text
            </Button>
            <Button rounded size="large" variant="soft">
              Button text
            </Button>
            <Button rounded size="extra-large" variant="soft">
              Button text
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Buttons as links
        </h2>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Button as="a" href="/" variant="primary">
              Button text
            </Button>
            <Button as="a" href="/" variant="secondary">
              Button text
            </Button>
            <Button as="a" href="/" variant="soft">
              Button text
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ButtonsPage;
