export default function Container({onChange, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
            <label> Initial Investment </label>
                <input type="number"
                    value={userInput.initialInvestment}
                    onChange={(e)=> onChange('initialInvestment',e.target.value) }
                />
                <label>Anual Investment</label>
                <input type="number"
                    value={userInput.annualInvestment}
                    onChange={(e)=> onChange('annualInvestment', e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Expected Investment</label>
                <input type="number" 
                    value={userInput.expectedReturn}
                    onChange={(e)=> onChange('expectedReturn', e.target.value)}
                />
                <label>Duration</label>
                <input type="number"
                    value={userInput.duration}
                    onChange={(e)=> onChange('duration', e.target.value)}
                />
            </div>
        </section>
    )
}