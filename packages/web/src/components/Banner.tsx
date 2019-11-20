export const Banner = ({ theme = "light", children }: BannerProps) => (
  <div className="banner">
    {children}
    <style jsx>{`
      .banner {
        background: #f8f8f8;
        color: #141618;
        font-size: 1.2em;
        padding: 6em 1.5em 4em;
      }
    `}</style>
    <style jsx>{`
      .banner {
        background: ${theme === "accent"
          ? `linear-gradient(#3c62f8, #1142db)`
          : `#f8f8f8`};
        color: #141618;
      }
    `}</style>
  </div>
);

type BannerProps = {
  children: React.ReactNode;
  theme?: "light" | "accent";
};
