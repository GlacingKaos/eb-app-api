import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link"
                        onClick={prevPage}
                        href='#'>

                        Anterior
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (<>
                    {currentPage > 1 && currentPage - 1 == pgNumber ? <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}
                            className='page-link'
                            href='#'>

                            {pgNumber}
                        </a>
                    </li> : ""}
                    {currentPage == pgNumber ? <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}
                            className='page-link'
                            href='#'>

                            {pgNumber}
                        </a>
                    </li> : ""}
                    {currentPage < nPages && currentPage + 1 == pgNumber ? <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}
                            className='page-link'
                            href='#'>

                            {pgNumber}
                        </a>
                    </li> : ""}
                </>))}
                <li className="page-item">
                    <a className="page-link"
                        onClick={nextPage}
                        href='#'>

                        Siguiente
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination