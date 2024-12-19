import CorePops from './CoreConcepts/CoreConcepts.jsx'
import { CORE_CONCEPTS } from '../src/data.jsx';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((coreItens) => <CorePops {...coreItens} />)}
            </ul>
        </section>
    )
}
