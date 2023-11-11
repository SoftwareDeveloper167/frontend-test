import React, { useState } from 'react'
import Layout from '../componenets/Layout'
import axios from "axios";

const upload = () => {

    const [file, setFile] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        
        if (file) {
            formData.set('file', file);
            let { data } = await axios.post(
                "http://127.0.0.1:8000/api/attendances", formData ,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            if (data.success) {
                alert('File uploaded successfully')
            }
            else{
                alert('File uploaded failed')
            }
        }
        else {
            alert('upload an excel file')
        }

        console.log(data);
    }

    return (
        <>
            <Layout title="Upload Excel File">
                <div className='container my-3'>
                    <h1>Upload Excel File</h1>
                    <form onSubmit={onSubmit}>
                        <div className="py-3">
                            <label htmlFor="formFile" className="form-label">Upload an exel file</label>
                            <input className="form-control" type="file"
                                id="formFile" onChange={(e) => setFile(e.target.files?.[0])}
                            />
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