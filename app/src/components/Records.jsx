import React from 'react'

const Records = ({data}) => {

  return (
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Titulo</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.public_id} </td>
                    <td>{item.title} </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Records