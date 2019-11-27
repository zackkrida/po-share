import { Space, getSpace } from '../lib/getSpace'

const BGMap = {
  accent: 'linear-gradient(#3c62f8, var(--color-accent))',
  light: 'var(--color-light)',
  dark: 'linear-gradient(var(--color-dark-100) 3%, var(--color-dark))',
}

const ColorMap = {
  accent: 'var(--color-dark-100)',
  light: 'var(--color-dark-100)',
  dark: 'var(--color-bg-light)',
}

const getBg = (theme: Theme.Palette) => {
  return BGMap[theme]
}

const getText = (theme: Theme.Palette) => {
  return ColorMap[theme]
}

export const Box = ({
  align = 'left',
  children,
  element = 'section',
  spaceX = 'small',
  spaceY = 'medium',
  styleOnInteraction = false,
  theme = 'light',
}: BoxProps) => {
  const Element = element
  return (
    <Element className="box">
      {children}
      <style jsx>{`
        .box {
          font-size: 1.2em;
        }
      `}</style>
      <style jsx>{`
        .box {
          background: ${getBg(theme)};
          border: 4px solid ${getBg(theme)};
          color: ${getText(theme)};
          text-align: ${align};
          padding: ${getSpace(spaceY)} ${getSpace(spaceX)};
        }
      `}</style>
      <style jsx>
        {`
          .box:focus-within,
          .box:hover {
            ${styleOnInteraction && `border-color: var(--color-dark);`}
            ${styleOnInteraction && `border-radius: 4px;`}
            ${styleOnInteraction &&
              `box-shadow: 0px 4px 0px var(--color-dark);`}
          }
        `}
      </style>
    </Element>
  )
}

type BoxProps = {
  children: React.ReactNode
  spaceX?: Space
  spaceY?: Space
  theme?: Theme.Palette
  element?: keyof JSX.IntrinsicElements
  align?: Theme.Alignment
  styleOnInteraction?: boolean /** Style a box when it's content is focused or hovered. Beware of nexted boxes...all parent boxes will be styled too.   */
}
