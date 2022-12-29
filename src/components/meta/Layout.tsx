import { Container } from '@mantine/core';

import { BREAKPOINT_VALUES } from '~/constants/theme';

import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <Container maw={BREAKPOINT_VALUES.lg} px={{ _: 16, xs: 32 }}>
        {children}
      </Container>
    </>
  );
}
