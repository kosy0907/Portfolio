import React, { forwardRef } from 'react';
import { About, Skill } from '../StyledComponent/StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Section2(props, section2Ref) {
    const gitUrl = 'https://github.com/kosy0907'
    const blogUrl = 'https://kosy.tistory.com/'

    return (
        <>
            <About ref={section2Ref}>
                <h1>Hello, I'm Ko Seung  Yeon!</h1>
                <p>
                    Hi there, I’m Seungyeon. When I'm not testing the limits of the latest tech products, you'll find me mastering the art of Sudoku.
                    Driven by the magic of 0s and 1s, I have led the QA sector for renowned companies in their campaign for tech supremacy.
                    My motto in life is 'Quality isn't an act, it's a habit'— and I bring it to every project I embark upon. You might find a bug in the Amazon forest, but you won’t find one on my watch!
                </p>
                <div className='socialLink'>
                    <a href={gitUrl} target='_blank' className='github' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                    <a href={blogUrl} target='_blank' className='Tistory' rel="noreferrer"><FontAwesomeIcon icon={faBook} className='icon' /></a>
                </div>
            </About>
            <Skill />
        </>
    );
}

export default forwardRef(Section2);
