import { calculateInvestmentResults, formatter } from "./util/investment"

export default function Results({ input }) {

    const resultData = calculateInvestmentResults(input)
    console.log(input)

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest(Year)</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}