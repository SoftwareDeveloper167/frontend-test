import Layout from '../componenets/Layout'
import axios from "axios";

export const getStaticProps = async () => {

  const { data } = await axios.get('http://127.0.0.1:8000/api');

  return {
    props: {
      data
    }
  }

}

export default function Home({ data }) {
  // console.log(data)
  return (
    <Layout title="Challenge 1">

      <div className='container my-3'>

        <h1>View All Attendances</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Shift</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
            </tr>
          </thead>
          <tbody>

            {
              data.map((atten, key) => {
                var { attendances } = atten;
                
                return attendances.map((emp , emp_key) => {
                  console.log(emp)
                  return <tr key={key+'_'+emp_key} >
                    <th scope="row">{emp.employees.email}</th>
                    <td>{atten.shift.title}</td>
                    <td>{atten.attendance_date}</td>
                    <td>{atten.location.name}</td>
                    <td>{emp.check_in}</td>
                    <td>{emp.check_out}</td>
                  </tr>
                });

                
                
              })
            }

          </tbody>
        </table>

      </div>

    </Layout>
  )
}
