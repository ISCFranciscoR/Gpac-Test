import React, { useState } from 'react';
import './AppMarket.css';
import AppSearcherMarket from '../searcher_market/AppSearcherMarket';
import AppTableMarket from '../table_market/AppTableMarket';
import AppModalTalent from '../table_market/new_talent/AppNewTalent';

function AppMarket(){

    const [ talents, setTalents ] = useState(undefined);
    const [ newRows, setNewRows ] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateTalents = function (_talents) {
        setTalents(_talents);
        setNewRows(false);
    }

    const updateRows = () => {
        setNewRows(true);
    }

    return (
        <section>
            <AppSearcherMarket onTalents={updateTalents} getNewRows={newRows}/>
            <div className="row pt-5 pb-5 pr-5 pl-3">
                <div className="col-12">
                   <div className="row">
                       <div className="col-6">
                           <div>
                                <span className="red-circle-title"><i className="fa fa-2x fa-circle">&nbsp;</i></span>
                                <span className="title-section text-white">Market</span>
                           </div>
                       </div>
                       <div className="col-6">
                           <div className="float-right">
                                <button className="btn btn-add-talent" onClick={handleShow}>Add new talent</button>
                           </div>
                       </div>
                   </div>
                   <div className="row pl-5">
                        <AppTableMarket rowsTalents={talents} updateRows={updateRows}/>
                   </div>
                </div>
            </div>
            <AppModalTalent show={show}
                closeModal={handleClose}
                updateTable={updateRows} />
        </section>
    );

}

export default AppMarket;