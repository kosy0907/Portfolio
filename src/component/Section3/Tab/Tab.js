import React, { useState } from 'react';
import { projectItem } from './projectItem';
import { TabMenu, ProjectList } from '../../StyledComponent/StyledComponent';

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
                        <div className='projectItem' key={i}>
                            <img src={require(`../../../images/mockup/${item.img}.png`)} alt={`${item.img}`} />
                        </div>
                    ))}
            </ProjectList>
        </>
    );
}

export default Tab;