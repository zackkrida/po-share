declare interface CustomContext extends NextPageContext {
  apolloClient: ApolloClient<object>
}

// Some Reuseable Prop Types
namespace Theme {
  declare type Palette = 'accent' | 'light' | 'dark'
  declare type Alignment = 'left' | 'right' | 'center'
}
