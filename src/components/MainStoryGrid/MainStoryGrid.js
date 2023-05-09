import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { QUERIES } from '../../constants';
import Advertisement from '../Advertisement';
import MainStory from '../MainStory';
import OpinionStory from '../OpinionStory';
import SecondaryStory from '../SecondaryStory';
import SectionTitle from '../SectionTitle';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';

    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    grid-template-columns: 5fr 4fr 3fr;
    gap: 0;
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-500);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-500);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 16px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid var(--color-gray-500);
  }
`;

const StoryWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-500);
  padding-bottom: 16px;
  margin-bottom: 16px;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`
const OpinionStoryWrapper = styled(StoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;

    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`

export default MainStoryGrid;
