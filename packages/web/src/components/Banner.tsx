export const Banner = ({
  theme = 'light',
  align = 'left',
  children,
}: BannerProps) => (
  <div className="banner">
    {children}
    <style jsx>{`
      .banner {
        background: #f8f8f8;
        color: var(--color-dark-100);
        font-size: 1.2em;
        padding: 6em 1.5em 4em;
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
  </div>
)

type BannerProps = {
  children: React.ReactNode
  theme?: Theme.Palette
  align?: Theme.Alignment
}
