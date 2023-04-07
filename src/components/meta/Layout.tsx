import styled from '@emotion/styled';

import { BREAKPOINT_VALUES } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { Head } from './Head';

const Container = styled.div`
  max-width: ${BREAKPOINT_VALUES.lg};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(16)};
  @media only screen and (min-width: ${BREAKPOINT_VALUES.xs}px) {
    padding: ${pxToRem(32)};
  }
`;

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <Container>{children}</Container>
    </>
  );
}
