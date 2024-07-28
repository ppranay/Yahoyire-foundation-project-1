import React from 'react'
import '../css/abtPageHeader.css';
const AbtPageHeader = ({ title, path, name }) => {
  return (
    <div>
         <div className="page-header-1" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AbtPageHeader