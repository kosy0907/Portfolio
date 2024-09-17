import React, { useState, useEffect } from 'react';
import { projectItem } from './projectItem';
import { TabMenu, ProjectList } from '../../StyledComponent/StyledComponent';

function Tab() {
    const [index, setindex] = useState(0);

    const tabMenu = [
        { name: 'All' },
        { name: 'Web' },
        { name: 'Design' },
        // { name: 'Test Case' }
    ]

    const selectTab = (index) => {
        setindex(index);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('fadeIn', entry.isIntersecting);
                });
            },
            { threshold: 0.2 }
        );

        const targets = document.querySelectorAll('.fadeTarget');
        targets.forEach(target => observer.observe(target));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Tab menu */}
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

            {/* Project */}
            <ProjectList className='tab fadeTarget'>
                {projectItem
                    .filter((item) => item.tag[1].type.includes(tabMenu[index].name))
                    .map((item, i) => (
                        <div className='projectItem' key={i}>
                            <div className="itemContainer">
                                <img src={require(`../../../images/project/${item.img}.png`)} alt={item.img} />
                                <div className="itemText">
                                    <h3>{item.title}</h3>
                                    <div className="itemDesc">
                                        <p>{item.description}</p>
                                        <p>Role: {item.tag[0].role.join(', ')}</p>
                                        {item.tag[3] && <p>#{item.tag[3].fcn.join(' #')}</p>}
                                        <div className='itemLink'>
                                            {item.tag[1].type.includes('Test Case') ? (
                                                <a href={item.link} download={item.fileName} rel='noreferrer'>Download</a>
                                            ) : item.link ? (
                                                <a href={item.link} target='_blank' rel='noreferrer'>Link</a>
                                            ) : null}

                                            {item.code && (
                                                <a href={item.code} target='_blank' rel='noreferrer'>Code</a>
                                            )}
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