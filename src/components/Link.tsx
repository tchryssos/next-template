import styled from '@emotion/styled';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
  noHoverStyles?: boolean;
};

const StyledLink = styled.a<Pick<LinkProps, 'noHoverStyles'>>`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  :hover,
  :active {
  }
`;

const OnMouseSpan = styled.span`
  display: inline-flex;
`;

const Link: React.FC<LinkProps> = ({
  internal,
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  noHoverStyles,
}) => (
  <>
    <NextLink href={href} passHref>
      <StyledLink
        className={className}
        noHoverStyles={noHoverStyles}
        rel="noopener noreferrer"
        target={internal ? '_self' : '_blank'}
      >
        {/*
            Hack to allow mouseEvents inside nextjs links
            See https://github.com/vercel/next.js/issues/1490
          */}
        <OnMouseSpan onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {children}
        </OnMouseSpan>
      </StyledLink>
    </NextLink>
  </>
);

export default Link;
