import { Flex } from '@mantine/core';

import { breakpointValues } from '~/constants/theme';
import { useBreakpointsAtLeast } from '~/logic/hooks/useBreakpoints';
import { pxToRem } from '~/logic/util/styles';

import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export function Layout({ children, title }: LayoutProps) {
  const isAtLeastXs = useBreakpointsAtLeast('xs');

  return (
    <>
      <Head title={title} />
      <Flex justify="center" p={isAtLeastXs ? 32 : 16} w="100%">
        <Flex h="100%" maw={pxToRem(breakpointValues.lg)} w="100%">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
