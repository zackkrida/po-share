// Spacing helper function for styles that need a spacing prop
export const SpaceMap = {
  small: '1em',
  medium: '2em',
  large: '3em',
  xlarge: '5em',
}

export function getSpace(space: Space) {
  return SpaceMap[space]
}

export type Space = keyof typeof SpaceMap
