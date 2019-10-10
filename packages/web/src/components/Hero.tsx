import * as React from 'react'

const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <section>
        <div>{children}</div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          background: linear-gradient(#141618, black);
          color: #f8f8f8;
          padding: 1em 1.5em;
          min-height: 500px;
          padding-bottom: 4em;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        section > div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: 0.2s ease-in all;
        }

        a:hover,
        a:focus {
          color: #3c62f8;
        }
      `}</style>
    </>
  )
}

type HeroProps = {
  children: React.ReactNode
}

export default Hero
