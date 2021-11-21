import { FaBan } from 'react-icons/fa'

const Shifts = ({ shifts, setShifts }) => {
    const onDelete = async (id) => {
        setShifts(shifts.filter(shift => shift.id !== id))

    }

    return (
        <div className="container mt-3">
            { shifts.length > 0 ? <table className="table table-striped table-bordered table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map(shift => {
                        return (
                            <tr key={shift.id}>
                                <td>{shift.date}</td>
                                <td>{shift.hours}</td>
                                <td>{shift.minutes}</td>
                                <td>
                                    <div className="dlt-btn text-center" onClick={() => {
                                        const id = shift.id;
                                        onDelete(id)
                                        }}>
                                        <FaBan />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h5 className="text-center mt-5">You have no shifts logged.</h5> }
        </div>
    )
}

export default Shifts