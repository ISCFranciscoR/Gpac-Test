import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './AppSearcherMarket.css';
import three_points from '../../assets/images/icons/three_points.svg';

import { doRequestTalentAPI } from '../../core/helpers/RequestAPIHelper';

function AppSearcherMarket(props){
    const [ parameters, setParameters ] = useState({
        "gender": null,
        "industry": null,
        "location": null
    });

    const [talents, setTalents] = useState([]);
    const [getNewRows, setGetNewRows] = useState(props.getNewRows);
    const { onTalents } = props;

    const setParametersHelper = () => {
        const gender = document.getElementById('slctGender').value;
        const industry = document.getElementById('slctIndustries').value;
        const location = document.getElementById('slctLocations').value;
        const _parameters = {
            "gender": parseInt(gender) === -1 ? null : gender,
            "industry": parseInt(industry) === -1 ? null : industry,
            "location": parseInt(location) === -1 ? null : location
        }
        setParameters(_parameters);
    }

    useEffect(() => {
        setGetNewRows(props.getNewRows);
        setParameters({
            "gender": null,
            "industry": null,
            "location": null
        });
    }, [props.getNewRows]);

    let intervalDelayId = 0;
    const quickSearch = (e) => {
        e.persist();
        clearTimeout(intervalDelayId);
        intervalDelayId = setTimeout(() => {
            const termForSearch = e.target.value.toLowerCase();
            if(termForSearch === '') {
                onTalents(talents);
                return;
            }
            const _talents = talents.filter(talent => {
                return talent.first_name.toLowerCase().includes(termForSearch) || 
                    talent.first_lastname.toLowerCase().includes(termForSearch); 
            });
            onTalents(_talents);
        }, 300);
    }

    useEffect(() => {
        const getTalents = () => {
            doRequestTalentAPI('list', 'POST', parameters)
                .then(talents => {
                    setTalents(talents);
                    onTalents(talents);
                });
        }
        getTalents();
    }, [parameters]);



    return (
        <div className="row bg-black-2 text-light-gray-3 p-2">
            <div className="col-9">
                <div className="input-group">
                    <div className="form-control bg-black-4 border-0 p-0">
                        <div className="row mx-0">
                            <div className="col-3 p-0">  
                                <input type="text" name="freeSearchValue" id="freeSearchValue"
                                    className="gpac-select text-light-gray-3"
                                    placeholder="Quick Search..." 
                                    onKeyDown={quickSearch}/>
                            </div>
                            <div className="col-3 p-0">
                                    <Form.Control id="slctGender" as="select" className="form-control gpac-select" custom>
                                        <option value="-1">Gender</option>
                                        <option value="1">Female</option>
                                        <option value="2">Male</option>
                                        <option value="3">Other</option>
                                    </Form.Control>
                            </div>
                            <div className="col-3 p-0">
                                <Form.Control id="slctIndustries" as="select" className="form-control gpac-select" custom>
                                        <option value="-1">Industry</option>
                                        <option value="1">TI</option>
                                        <option value="2">Construction</option>
                                        <option value="3">Health</option>
                                </Form.Control>
                            </div>
                            <div className="col-3 p-0">
                                <Form.Control id="slctLocations" as="select" className="form-control gpac-select" custom>
                                        <option value="-1">Location</option>
                                        <option value="1">NJ</option>
                                        <option value="2">NY</option>
                                        <option value="3">MN</option>
                                        <option value="4">IL</option>
                                        <option value="5">TX</option>
                                </Form.Control>
                            </div>
                        </div>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="button" onClick={setParametersHelper}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-8">
                        <span className="cursor-pointer">Advanced search</span>
                    </div>
                    <div className="col-4">
                        <img src={three_points} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppSearcherMarket;