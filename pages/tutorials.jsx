import React from 'react'
import Layout from '../componenets/Layout'
import axios from 'axios'

export const getStaticProps = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/tutorials`);
    return {
        props: {
            data
        }
    }
}


const tutorials = ({ data }) => {

    const { employees, shifts, locations } = data;

    return (
        <Layout title="Tutorial">
            <div className='container my-3'>

                <h4>Create an excel file of availble
                    <strong> Shifts , Locations</strong> & <strong>Employees</strong>
                </h4>

                <div className="alert alert-secondary" role="alert">
                    The below format should be created in Excel. if the table format or data is invalid then those row will not be stored
                    <br/> If employee already present then update record.
                </div>

                <table className="table table-sm mb-5">
                    <thead>
                        <tr>
                            <th scope="col">email</th>
                            <th scope="col">shift</th>
                            <th scope="col">attendance_date</th>
                            <th scope="col">location</th>
                            <th scope="col">check_in</th>
                            <th scope="col">check_out</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">employee@test.com</th>
                            <td>Morning</td>
                            <td>2014-03-20</td>
                            <td>abc location</td>
                            <td>09:00:00</td>
                            <td>06:00:00</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='mb-1 mt-4'>Available Shifts</h3>

                <table className="table table-sm mb-5">
                    <thead>
                        <tr>
                            <th>Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shifts.map((shift) => {
                            return <tr key={shift.id}>
                                <td>{shift.title}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <h3 className='mb-1 mt-4'>Available Locations</h3>

                <table className="table table-sm mb-5">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location) => {
                            return <tr key={location.id}>
                                <td>{location.name}</td>
                                <td>{location.address}</td>
                                <td>{location.city}</td>
                                <td>{location.state}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <h3 className='mb-1 mt-4'>Available Employees</h3>

                <table className="table table-sm mb-5">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return <tr key={employee.id}>
                                <td>{employee.email}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        </Layout>

    )
}

export default tutorials