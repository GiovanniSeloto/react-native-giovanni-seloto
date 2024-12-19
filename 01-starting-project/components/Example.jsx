import { EXAMPLES } from '../src/data';
import TapButton from './TapButton';
import { useState } from 'react';
import Section from './Section';
import Tab from './Tap';

export default function Examples() {

    const [TopicSelect, setTopicSelect] = useState('')

    function handleClick(selectTap) {
        setTopicSelect(selectTap)
        console.log(selectTap)
    }

    let tabContent = <p>Select a Topic</p>

    if (TopicSelect) {
        tabContent =
    <div id="tab-content">
        <h3>{EXAMPLES[TopicSelect].title}</h3>
        <p>{EXAMPLES[TopicSelect].description}</p>
        <pre>
            <code>{EXAMPLES[TopicSelect].code}</code>
        </pre>
    </div>
    }

    return (
        <div>
            <Section title="Examples" id="examples">
                <Tab 
                // buttonsContainer="menu"
                button={
                    <>
                        <TapButton label='Components' isSelect={TopicSelect === 'components'}
                            onClick={() => handleClick('components')} />

                        <TapButton label='JSX' isSelect={TopicSelect === 'jsx'}
                            onClick={() => handleClick('jsx')} />

                        <TapButton label='Props' isSelect={TopicSelect === 'props'}
                            onClick={() => handleClick('props')} />

                        <TapButton label='State' isSelect={TopicSelect === 'state'}
                            onClick={() => handleClick('state')} />
                    </>
                } />
            </Section>
            {/* <section id="tab-content"> */}
                 {tabContent} 
                {/* {!TopicSelect && <p>Select a Topic</p>}
                {TopicSelect &&
                    <div>
                        <h3>{EXAMPLES[TopicSelect].title}</h3>
                        <p>{EXAMPLES[TopicSelect].description}</p>
                        <pre>
                            <code>{EXAMPLES[TopicSelect].code}</code>
                        </pre>
                    </div>
                } */}
            {/* </section> */}
        </div>
    )
}
