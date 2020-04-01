import React, { useState } from 'react';
import './AppTableMarket.css';
import AppRowTableMarket from './row_table/AppRowTableMarket';
import AppModalTalent from './modal_talent/AppModalTalent';


function AppTableMarket(props){
    const [show, setShow] = useState(false);
    const [talentData, setTalentData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const talents = props.rowsTalents;

    const showModal = async (modalData) => {
        await setTalentData(modalData);
        handleShow();
    }

    const updateTable = function () {
        props.updateRows();
    }

    const createTalentRows = () => {
        const rows = talents.map(talent => {
            return <AppRowTableMarket 
                key={talent.id} 
                rowData={talent} 
                showModal={showModal}/>
        });
        return rows;
    }
    
    return (
        <div className="col-12">
            { !talents && <h3 className="mt-5">
                <i className="fa fa-spinner fa-spin"></i>
                &nbsp;Loading data...
            </h3>}
            {talents && talents.length === 0 && <h3 className="mt-5">Not talents for now</h3>}
            { talents && talents.length > 0 &&
                <React.Fragment>
                    <table className="tbl-market">
                        <thead className="thead-market">
                            <tr>
                                <th className="th-market"></th>
                                <th className="th-market">Name</th>
                                <th className="th-market">Industry</th>
                                <th className="th-market">Job Position</th>
                                <th className="th-market">Phone</th>
                                <th className="th-market">Salary</th>
                                <th className="th-market">Location</th>
                                <th className="th-market"></th>
                            </tr>
                        </thead>
                        <tbody className="tbody-market">
                            {createTalentRows()}
                        </tbody>
                        <tfoot className="tfoot-market"></tfoot>
                    </table>
                <AppModalTalent show={show} 
                    data={talentData} 
                    closeModal={handleClose} 
                    updateTable={updateTable}/>
                </React.Fragment>
            }
        </div>
    );
}

export default AppTableMarket;