import React from 'react'
import Layout from '../componenets/Layout'

const upload = () => {

    return (
        <>
            <Layout title="Upload Excel File">
                <div className='container my-3'>
                    <h1>Upload Excel File</h1>
                    <form>
                        <div className="py-3">
                            <label for="formFile" className="form-label">Upload an exel file</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className='btn btn-primary'>Upload</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default upload