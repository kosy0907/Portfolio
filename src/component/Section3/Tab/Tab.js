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
                            <div className="itemContainer">
                                <img src={require(`../../../images/mockup/${item.img}.png`)} alt={`${item.img}`} />
                                <div className="itemText">
                                    <h3>{item.title}</h3>
                                    <div className="itemDesc">
                                        <p>{item.description}</p>
                                        <div className='itemLink'>
                                            <a href={item.link} target='_blank' rel='noreferrer'>Link</a>
                                            <a href={item.code} target='_blank' rel='noreferrer'>Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </ProjectList>
        </>
    );
}

export default Tab;