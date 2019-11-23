export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="button">
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

        .button:hover {
          cursor: pointer;
          transform: scale(1.04);
        }
      `}</style>
    </button>
  )
}

interface ButtonProps {
  children: React.ReactNode
}
