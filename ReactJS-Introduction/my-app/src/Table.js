import React from "react";
const TableHeader=()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Technology</th>
            </tr>
        </thead>
    )
}

const TableBody=()=>{
    return(
        <tbody>
            <tr>
                <td>Nidhi</td>
                <td>Javascript</td>
            </tr>
        </tbody>
    )
}
function Table() {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
  }
  
  export default Table;