import { StyledComponentProps } from '@routine/ui-react';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';

import { DashboardStyles } from './Dashboard.styles';

const StyledDashboard = styled('div', DashboardStyles);

type DashboardLayoutProps = StyledComponentProps<typeof StyledDashboard> & {
  footerContent?: ReactNode;
};

export const DashboardLayout = ({
  children,
  footerContent,
  ...props
}: DashboardLayoutProps) => (
  <StyledDashboard {...props}>
    <main>{children}</main>
    <footer>{footerContent || <></>}</footer>
  </StyledDashboard>
);
