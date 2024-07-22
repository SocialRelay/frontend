/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eNMXRjBN9AJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-background border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <h1 className="text-lg font-semibold">Written Pieces</h1>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          <PlusIcon className="w-4 h-4" />
          New
        </Link>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="grid gap-6 p-4 sm:p-6">
          <div className="grid grid-cols-[1fr_auto] items-start gap-4">
            <div>
              <h2 className="text-lg font-semibold">My Masterpiece</h2>
              <p className="text-muted-foreground">
                This is a description of my written piece. It&apos;s a short paragraph that provides some context about the
                content.
              </p>
            </div>
            <div className="text-muted-foreground text-sm">June 15, 2023</div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-start gap-4">
            <div>
              <h2 className="text-lg font-semibold">Reflections on Life</h2>
              <p className="text-muted-foreground">
                This is another written piece that explores some deeper thoughts and ideas. It&apos;s a bit longer than the
                first one.
              </p>
            </div>
            <div className="text-muted-foreground text-sm">May 28, 2023</div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-start gap-4">
            <div>
              <h2 className="text-lg font-semibold">A Moment in Time</h2>
              <p className="text-muted-foreground">
                This is a short piece that captures a specific moment in time. It&apos;s a bit more concise than the others.
              </p>
            </div>
            <div className="text-muted-foreground text-sm">April 12, 2023</div>
          </div>
        </div>
      </div>
      <div className="bg-background border-t px-4 py-2 flex items-center justify-between">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          <PlusIcon className="w-4 h-4" />
          New
        </Link>
      </div>
    </div>
  )
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}