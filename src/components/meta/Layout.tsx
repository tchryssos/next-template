import styled from '@emotion/styled';

import { useBreakpointsAtLeast } from '~/logic/hooks/useBreakpoints';

import { FlexBox } from '../box/FlexBox';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const PageWrapper = styled(FlexBox)`
  max-width: ${({ theme }) => theme.breakpointValues.lg}px;
  width: 100%;
  height: 100%;
`;

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const isAtLeastXs = useBreakpointsAtLeast('xs');

  return (
    <>
      <Head title={title} />
      <FlexBox flex={1} justifyContent="center" p={isAtLeastXs ? 32 : 16}>
        <PageWrapper>{children}</PageWrapper>
      </FlexBox>
    </>
  );
};
