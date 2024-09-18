import React, { forwardRef } from 'react';
import {
    Project, ProjectItemContainer,
    ProjectItemImage,
    ProjectContent,
    ProjectTitle,
    ProjectLinkContainer
} from '../StyledComponent/StyledComponent';
import { ProjectItem } from './Tab/ProjectItem';

function Section3(props, section3Ref) {
    return (
        <Project ref={section3Ref}>
            {ProjectItem.map((item) => (
                <ProjectItemContainer key={item.id}>
                    <ProjectItemImage src={require(`../../images/project/${item.img}.png`)} alt={item.ProjectTitle} />
                    <ProjectContent className='content'>
                        <ProjectTitle>{item.title}</ProjectTitle>
                        <p>{item.description}</p>
                        <p className='role'>
                            Role: {item.tag[0].role.join(', ')}
                        </p>
                        {item.tag[3] && <p className='tag'>#{item.tag[3].fcn.join(' #')} #{item.tag.find(tag => tag.pj_category)?.pj_category}</p>}
                    </ProjectContent>

                    <ProjectLinkContainer>
                        {item.tag[1].type.includes('Test Case') ? (
                            <a href={item.link} target='_blank' rel='noreferrer'>View</a>
                        ) : item.link ? (
                            <a href={item.link} target='_blank' rel='noreferrer'>Link</a>
                        ) : null}

                        {item.code && (
                            <a href={item.code} target='_blank' rel='noreferrer'>Code</a>
                        )}
                    </ProjectLinkContainer>
                </ProjectItemContainer>

            ))}
        </Project>
    );
}

export default forwardRef(Section3);