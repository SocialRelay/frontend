/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LnxRCcq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen w-full bg-yellow-100">
      <div className="flex flex-col w-72 border-r border-yellow-200 bg-yellow-50 dark:bg-yellow-900">
        <div className="flex items-center h-16 px-6 border-b border-yellow-200 bg-yellow-50 dark:bg-yellow-900">
          <StickyNoteIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-300" />
          <h1 className="ml-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100">Notes</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 space-y-2">
            <Button variant="ghost" className="justify-start text-yellow-900 dark:text-yellow-100">
              <FolderIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
              <span className="ml-2">All Notes</span>
            </Button>
            <Button variant="ghost" className="justify-start text-yellow-900 dark:text-yellow-100">
              <TrashIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
              <span className="ml-2">Trash</span>
            </Button>
          </div>
          <div className="border-t border-yellow-200 dark:border-yellow-800" />
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-yellow-200 dark:bg-yellow-800">
              <span className="text-sm text-yellow-900 dark:text-yellow-100">Note 1</span>
              <ChevronRightIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800">
              <span className="text-sm text-yellow-900 dark:text-yellow-100">Note 2</span>
              <ChevronRightIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center h-16 px-6 border-b border-yellow-200 bg-yellow-50 dark:bg-yellow-900">
          <h2 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100">Note 1</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-sm text-yellow-900 dark:text-yellow-100">This is a note.</p>
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FolderIcon(props: any) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}


function StickyNoteIcon(props: any) {
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
      <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
      <path d="M15 3v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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