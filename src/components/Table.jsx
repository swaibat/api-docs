import Link from 'next/link'
import clsx from 'clsx'

import { Heading } from '@/components/Heading'
import React from 'react'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export const h2 = function H2(props) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({ children }) {
  return (
    <div className="my-4 flex gap-2 rounded-lg border border-emerald-500/20 bg-emerald-50/50 p-3 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
      <div>{children}</div>
    </div>
  )
}

export function Row({ children }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({ children, sticky = false }) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24'
      )}
    >
      {children}
    </div>
  )
}

export function CompactTable({ children, heading, hasHeader = true }) {
  const rows = React.Children.toArray(children);
  return (
    <div className="mb-3 rounded-lg border-collapse border border-gray-300 dark:border-gray-700 overflow-hidden">
      {heading && (
        <thead>
          <tr className="w-full bg-zinc-100 dark:bg-zinc-800 my-1 text-zinc-900 dark:text-zinc-200">
            <th className="pb-0 mb-1 w-full px-3 font-medium text-zinc-900 dark:text-zinc-200 border-b border-gray-300 dark:border-gray-700 text-left">
              {heading}
            </th>
            <th />
          </tr>
        </thead>
      )}
      <table className={"my-0 min-w-full table-auto text-left text-xs text-zinc-600 dark:text-zinc-300"}>
        {hasHeader && (
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-gray-300 dark:border-gray-700">
              <th className="border-r py-2 px-3 font-medium text-zinc-900 dark:text-zinc-200 border-b border-gray-300 dark:border-gray-700">
                Property
              </th>
              <th className="border-r py-2 px-3 font-medium text-zinc-900 dark:text-zinc-200 border-b border-gray-300 dark:border-gray-700">
                Type
              </th>
              <th className="py-2 px-3 font-medium text-zinc-900 dark:text-zinc-200 border-b border-gray-300 dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, index) => {
            return React.cloneElement(row, {
              isLast: index === rows.length - 1,
            });
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CompactRow({ children, isLast = false }) {
  return (
    <tr className={clsx(
      "border-b border-gray-300 dark:border-gray-700",
      isLast && "border-b-0"
    )}>
      {children}
    </tr>
  )
}

export function CompactCell({ children, className, code = false, type = false, isLast = false }) {
  return (
    <td
      className={clsx(
        "py-2 px-3 border-gray-300 dark:border-gray-700", 
        !isLast && "border-r",  // Add right border unless it's the last cell
        className
      )}
    >
      {code ? (
        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">{children}</code>
      ) : type ? (
        <span className="text-xs text-zinc-500 dark:text-zinc-500">{children}</span>
      ) : (
        children
      )}
    </td>
  )
}
