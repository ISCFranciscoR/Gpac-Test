import React from 'react';
import './AppFooter.css';


function AppFooter(){
    return (
        <footer id="footer" className="p-2 bg-black-1 text-light-gray-3 monserrat-font">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 font-weight-lighter">GPAC Directory {process.env.REACT_APP_VERSION}</div>
                    <div className="col-12 col-sm-6 text-right font-weight-bold">
                        Help - Tutorials - Support - FAQ’s
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;