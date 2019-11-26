import { getSpace, Space } from '../lib/getSpace'

/**
 * Stack component
 * Adds vertical spacing to a list of elements
 */
export const Stack = ({ children, space }: StackProps) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div > :global(:not(:last-child)) {
          margin-bottom: ${getSpace(space)};
        }
      `}</style>
    </div>
  )
}

interface StackProps {
  children: React.ReactNode
  space: Space
}
