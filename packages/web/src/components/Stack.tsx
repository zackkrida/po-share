import { Children, cloneElement, ReactElement } from 'react'
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

function getSpace(space: Space) {
  if (space === 'small') {
    return '1em'
  } else if (space === 'medium') {
    return '2em'
  } else if (space === 'large') {
    return '3em'
  } else if (space === 'xlarge') {
    return '5em'
  }
}

type Space = 'small' | 'medium' | 'large' | 'xlarge'
interface StackProps {
  children: React.ReactNode
  space: Space
}
