const TotalTime = ({ shifts }) => {

    // Get all hours and minutes
    const allHours = shifts.map(shift => parseInt(shift.hours))
    const allMins = shifts.map(shift => parseInt(shift.minutes))

    // Get sum of all hours and minutes
    let sumHours = allHours.reduce((a, b) => a + b, 0)
    let sumMins = allMins.reduce((a, b) => a + b, 0)

    // Convert sum of hours and minutes into total minutes for conversion
    const totalMins = (sumHours * 60) + sumMins


    return (
        <div className="container total-wrapper d-flex justify-content-evenly">
            <h5>Total Time</h5>
            <h6>{Math.floor(totalMins / 60)}{sumHours > 0 && ' Hours'}</h6>
            <h6>{totalMins % 60} {sumMins > 0 && ' Minutes'}</h6>
        </div>
    )
}

export default TotalTime