'use client'

import React, { FormEvent, useEffect, useState } from 'react'

import searchIcon from '../assets/search-icon.svg'
import { useStateContext } from '../contexts/ContextProvider'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

const Search: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const context = useStateContext()
  const books = context?.books
  const setBookBySearch = context?.setBookBySearch
  const setPageIndex = context?.setPageIndex

  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    let kw = keyword
    if (searchParams.get('q') !== null) kw = searchParams.get('q') as string

    setKeyword(kw)

    setBookBySearch &&
      setBookBySearch(
        books
          ? books!.filter((book) =>
              book.name.toLowerCase().includes(kw.toLowerCase()),
            )
          : [],
      )
    setPageIndex && setPageIndex!(1)
  }, [])

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    setBookBySearch &&
      setBookBySearch(
        books
          ? books!.filter((book) =>
              book.name.toLowerCase().includes(keyword.toLowerCase()),
            )
          : [],
      )
    setPageIndex && setPageIndex!(1)

    if (keyword !== '') router.push(`?q=${keyword}`)
    else router.push('/')
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center border-2 bg-white gap-1 px-2 rounded-md overflow-hidden"
    >
      <Image className="w-4 h-4 text-gray" src={searchIcon} alt="search-icon" />
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border-none outline-none px-1 py-2"
        type="text"
        placeholder="Type and enter..."
      />
    </form>
  )
}

export default Search
