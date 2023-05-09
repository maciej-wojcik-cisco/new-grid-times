import React from 'react';
import { Menu, Search, User } from 'react-feather';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Button from '../Button';
import Logo from '../Logo';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subcribe</Button>
          <SubLink href="#">Already a subscriber?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display:none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display:none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`

const SubscribeWrapper = styled.div`
  display:none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-self: end;
    position: relative;
  }
`

const SubLink = styled.a`
  font-size: .875rem;
  color: var(--color-gray-900);
  font-style: italic;
  text-decoration: underline;
  position: absolute;
  bottom: -24px;
  width: 100%;
  text-align: center;
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
