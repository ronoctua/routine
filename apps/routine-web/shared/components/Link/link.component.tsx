import { Button, ButtonProps } from '@routine/ui-react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends ButtonProps, NextLinkProps {
  href: string;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'link',
  href,
  children,

  // Next.js Link component props
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,

  ...props
}) => {
  return (
    <NextLink
      href={href}
      passHref={passHref}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}>
      <Button variant={variant} {...props}>
        {children}
      </Button>
    </NextLink>
  );
};
