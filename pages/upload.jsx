import React, { useState } from 'react'
import Layout from '../componenets/Layout'
import axios from "axios";

const upload = () => {

    const [file, setFile] = useState();
    const [notify, setNotify] = useState(null);
    const [notifyClass, setNotifyClass] = useState(null)

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (file) {
            formData.set('file', file);
            let { data } = await axios.post(
                "http://127.0.0.1:8000/api/attendances", formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).catch(function (error) {
                setNotify('Please Upload an excel file');
                setNotifyClass('alert mt-4 alert-warning');
            });

            if (data.success) {
                setFile(null);
                setNotify('File uploaded successfully');
                setNotifyClass('alert mt-4 alert-success');
            }
            else {
                setNotify('File uploaded failed');
                setNotifyClass('alert mt-4 alert-danger');
            }
        }
        else {
            setNotify('Please Upload an excel file');
            setNotifyClass('alert mt-4 alert-warning');
        }
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

                    {
                        notify && <div className={notifyClass} role="alert">
                            {notify}
                        </div>
                    }

                </div>
            </Layout>
        </>
    )
}

export default upload