import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main >Projets</SectionTitle>
    <SectionText>
        Salut je m'appelle Paul Benetier et on va créer une timeline ensemble.
    </SectionText>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) =>(
        <BlogCard key={id}>
          <Img src={image}></Img>
          <TitleContent>
            <HeaderThree tittle>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              { tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider/>

  </Section>
);

export default Projects;