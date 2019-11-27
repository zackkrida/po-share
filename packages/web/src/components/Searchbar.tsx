import { FormEvent, useState, useEffect } from 'react'
import Router from 'next/router'

export const Searchbar = ({ initialQuery = '' }: SearchbarProps) => {
  let [query, setQuery] = useState<string>(initialQuery)

  // update if/when query updates
  useEffect(() => setQuery(initialQuery), [initialQuery])

  // Send the user to the search result page, passing their search query
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!query) return // early return if the search input is blank

    Router.push(`/search/${encodeURIComponent(query)}`)
  }

  return (
    <form action="" className="Searchbar" onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={event => setQuery(event.target.value)}
        autoFocus
        type="text"
        placeholder="Search for anything, like 'techno beats, or sample'"
      />
      <button type="submit">
        <SearchSvg />
      </button>
      <style jsx>{`
        .Searchbar {
          width: 1000px;
          max-width: calc(100% - 2em);
          margin: 0 auto;
          display: block;
          padding: 1em;
          background-color: var(--color-bg-light);
          position: absolute;
          top: 520px;
          left: 0;
          right: 0;
          border-radius: 8px;
          box-shadow: 0 11px 24px 0 rgba(7, 7, 7, 0.25);
          transition: 0.1s all ease-in-out;
          border: 4px solid var(--color-bg-light);
        }

        button[type='submit'] {
          appearance: none;
          background: transparent;
          border: 0;
          color: var(--color-dark);
          cursor: pointer;
          padding: 1em;
          position: absolute;
          right: 1em;
          top: 50%;
          transform: translateY(-50%);
        }

        button[type='submit']:hover,
        button[type='submit']:focus {
          color: var(--color-accent);
        }

        .Searchbar:hover,
        .Searchbar:focus-within {
          box-shadow: 0 6px 20px 0 rgba(7, 7, 7, 0.35);
          transform: scale(1.04);
           {
            /* border-color: var(--color-accent); */
          }
        }

        input {
          padding: 1em;
          width: 100%;
          border-radius: 8px;
          appearance: none;
          border: none;
          font-size: 1.4em;
        }

        input::placeholder {
          color: #3c62f8;
          opacity: 1;
          appearance: none;
        }

        input:focus {
          outline: 0;
        }
      `}</style>
    </form>
  )
}

const SearchSvg = (props: unknown) => (
  <svg {...props} viewBox="0 0 56.966 56.966">
    <path
      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
s-17-7.626-17-17S14.61,6,23.984,6z"
    />
    <style jsx>{`
      svg {
        fill: currentcolor;
      }

      svg {
        width: 40px;
      }
    `}</style>
  </svg>
)

interface SearchbarProps {
  initialQuery?: string
}
