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
  theme = 'light',
  align = 'left',
  spaceX = 'small',
  spaceY = 'medium',
  children,
}: BoxProps) => (
  <div className="banner">
    {children}
    <style jsx>{`
      .banner {
        font-size: 1.2em;
      }
    `}</style>
    <style jsx>{`
      .banner {
        background: ${getBg(theme)};
        color: ${getText(theme)};
        text-align: ${align};
        padding: ${getSpace(spaceY)} ${getSpace(spaceX)};
      }
    `}</style>
  </div>
)

type BoxProps = {
  children: React.ReactNode
  spaceX?: Space
  spaceY?: Space
  theme?: Theme.Palette
  align?: Theme.Alignment
}
