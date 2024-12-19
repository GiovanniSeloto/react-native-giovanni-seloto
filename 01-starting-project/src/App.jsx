import Header from '../components/Header/Header';
import '../components/CoreConcepts/CoreConcepts.css'
import Examples from '../components/Example';
import CoreConcepts from '../components/CoreConcepts';

function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;