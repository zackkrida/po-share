import * as React from 'react'

export const Button = ({
  children,
  ...props
}: JSX.IntrinsicElements['button']) => {
  return (
    <button className="button" {...props}>
      {children}
      <style jsx>{`
        .button {
          appearance: none;
          border: 2px solid var(--color-accent);
          padding: 0.5rem 1rem;
          background-color: var(--color-accent);
          color: var(--color-bg-light);
          transition: 0.1s all ease-in;
        }

        .button:hover,
        .button:focus {
          cursor: pointer;
          transform: scale(1.04);
        }
      `}</style>
    </button>
  )
}
