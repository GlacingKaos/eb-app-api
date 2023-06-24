import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './components/Records';
import Pagination from './components/Pagination';

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}properties`, { params: { limit: recordsPerPage, page: currentPage } })
            .then(res => {
                setData(res.data.content);
                setLoading(false);
                setTotal(res.data.pagination.total)
            })
            .catch(() => {
                alert('Error: API DOWN')
            })
    }, [currentPage])

    const nPages = Math.ceil(total / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2> EasyBroker Properties </h2>
            {loading ? <>
                <h4 className="text-center">Loading...</h4>
            </> : <Records data={data} />}
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
