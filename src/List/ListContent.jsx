import React from 'react';
import { useHistory } from "react-router-dom";
import './style.css';

const ListContent = ({
    launchesPast
}) => {
    const history = useHistory();
    const goDetail = (id) => {
        history.push({
            pathname: "/detail",
            query: {
              id,
            },
          });
    }

    return (
        <div className="launchesPastContent">
        {launchesPast.length ? launchesPast.map((item) => (
            <div key={item.id} className="launchesPastItem1">
                <div className='left-title'>
                    <div className={`launchesPast-title ${item.launch_success ? 'title-success': 'title-error'}`}>Mission:${item.mission_name}</div>
                    <div className='launchesPast-date'>{item.launch_date_local}</div>
                </div>
                <div className='detail-button' onClick={() => goDetail(item.id)}>Launch Details</div>
            </div>
        )): null}
       </div> 
    )
};

export default ListContent;