import React, { useState } from 'react';
import { projectItem } from './projectItem';
import { TabMenu, ProjectList, ProjectItem, MockupImg } from '../../StyledComponent/StyledComponent';

function Tab() {
    const [index, setindex] = useState(0);

    const tabMenu = [
        { name: 'All' },
        { name: 'Web' },
        { name: 'Design' }
    ]

    const selectTab = (index) => {
        setindex(index);
    }

    return (
        <>
            <TabMenu>
                {tabMenu.map((tab, i) => {
                    return (
                        <li
                            key={i}
                            className={index === i ? "tab focused" : "tab"}
                            onClick={() => selectTab(i)}
                        >
                            {tab.name}</li>
                    )
                })}
            </TabMenu>

            <ProjectList>
                {projectItem
                    .filter((item) => item.tag[1].type.includes(tabMenu[index].name))
                    .map((item, i) => (
                        <ProjectItem key={i}>
                            <MockupImg src={require(`../../../images/mockup/${item.img}.png`)} alt={`${item.img}`} />
                            <div key={item.title}>{item.title}</div>
                        </ProjectItem>
                    ))}
            </ProjectList>
        </>
    );
}

export default Tab;