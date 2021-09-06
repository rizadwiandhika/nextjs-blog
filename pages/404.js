import React from 'react'

import Link from 'next/link'
// Ini file untuk customer 404 error kita. Nama dan lokasi harus /pages/404.js

export default function Custom404() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <div className="flex gap-2 h-6 items-center">
        <p className="font-bold text-xl">404</p>
        <div className="min-h-full w-0.5 bg-gray-300 " />
        <p>This page cannot be found.</p>
      </div>
      <div>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    </div>
  )
}
