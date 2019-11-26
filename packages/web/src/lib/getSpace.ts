// Spacing helper function for styles that need a spacing prop
export const SpaceMap = {
  small: '1rem',
  medium: '2rem',
  large: '3rem',
  xlarge: '5rem',
  xxlarge: '7.5rem',
}

export function getSpace(space: Space) {
  return SpaceMap[space]
}

export type Space = keyof typeof SpaceMap
