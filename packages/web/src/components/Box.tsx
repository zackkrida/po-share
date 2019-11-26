import { Space, getSpace } from '../lib/getSpace'

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
        background: #f8f8f8;
        color: var(--color-dark-100);
        font-size: 1.2em;
      }
    `}</style>
    <style jsx>{`
      .banner {
        background: ${theme === 'accent'
          ? `linear-gradient(#3c62f8, var(--color-accent))`
          : `#f8f8f8`};
      }
    `}</style>
    <style jsx>{`
      .banner {
        text-align: ${align};
      }
    `}</style>
    <style jsx>{`
      .banner {
        padding-left: ${getSpace(spaceX)};
        padding-right: ${getSpace(spaceX)};
      }
    `}</style>
    <style jsx>{`
      .banner {
        padding-top: ${getSpace(spaceY)};
        padding-bottom: ${getSpace(spaceY)};
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
