import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../componenets/Layout'

export default function Home() {
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
            <tr>
              <th scope="row">cedrick74@example.org</th>
              <td>Morning</td>
              <td>2020-01-20</td>
              <td>Bode-Rodriguez</td>
              <td>09:55:16</td>
              <td>06:55:16</td>
            </tr>
          </tbody>
        </table>

      </div>

    </Layout>
  )
}
