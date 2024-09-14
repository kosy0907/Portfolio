import React, { forwardRef } from 'react';
import { Project, ProjectTitle, GridContainer, ProjectItemContainer, ProjectImage } from '../StyledComponent/StyledComponent';
import { ProjectItem } from './Tab/ProjectItem';

function Section3(props, section3Ref) {
    return (
        <Project ref={section3Ref}>
            <ProjectTitle>My Projects</ProjectTitle>
            <GridContainer>
                {ProjectItem.map((item, id) => (
                    <>
                        <ProjectItemContainer>
                            <p>{item.title}</p>
                            <ProjectImage src={require(`../../images/project/${item.img}.png`)} alt={item.img} style={{ width: '100px' }} />
                        </ProjectItemContainer>
                    </>
                ))}
            </GridContainer>
        </Project>
    );
}

export default forwardRef(Section3);