export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = Omit<React.ComponentProps<C>, 'css'>;
