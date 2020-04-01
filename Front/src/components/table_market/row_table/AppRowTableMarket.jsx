import React from 'react';
import './AppRowTableMarket.css';

// import profile from '../../../assets/images/profiles/profile_1.png';


function AppRowTableMarket(props){

    const { 
        first_name,
        first_lastname,
        actual_job,
        phone,
        salary,
        profile_img,
        industry,
        location,
        job_position
    } = props.rowData;

    const showTalentModal = () => {
        props.showModal(props.rowData);
    }

    return (
        <tr className="tr-market bg-gray-1 text-light-gray-3">
            <td className="td-market pl-2">
                <img src={profile_img} alt="Profile" className="img-fluid profile-photo"/>
            </td>
            <td className="td-market">
                <div>
                    <span className="candidate-name font-weight-bolder d-block">
                        { `${first_name} ${first_lastname}` }
                    </span>
                    <span className="d-block">{actual_job}</span>
                </div>
            </td>
            <td className="td-market">{ industry }</td>
            <td className="td-market">{ job_position }</td>
            <td className="td-market">{ phone }</td>
            <td className="td-market text-center money-symbol">{ salary }</td>
            <td className="td-market text-center">{ location }</td>
            <td className="td-market pr-2">
                <button className="btn btn-block text-white font-weight-bold btn-view-profile" 
                    onClick={showTalentModal}>View Profile
                </button>
            </td>
        </tr>
    );
}


export default AppRowTableMarket;