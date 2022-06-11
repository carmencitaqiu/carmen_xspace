import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../Loading';
import { useLocation } from "react-router-dom";
import './style.css';
const SPACE_DETAIL_QUERY = gql`
    {
        launchNext {
            launch_date_local
            id
            launch_site {
            site_name_long
            }
            launch_success
            links {
            article_link
            video_link
            }
            rocket {
            rocket_name
            rocket_type
            }
            details
            mission_name
        }
    }
`;
const ListDetail = ({ organizationName }) => {
  const location = useLocation();
  console.log(location.query)
  if (location.query) {
    const { id } = location.query;
  }
  return (
    <Query
    query={SPACE_DETAIL_QUERY}
  >
    {({ data, loading, error, fetchMore }) => {
      if (error) {
        return <div>error</div>;
      }

      console.log(`detail success********${JSON.stringify(data)}`);

      if (loading) {
        return <Loading isCenter={true} />;
      }
      let launchNext = {};
      if (data && data.launchNext) {
        launchNext = data.launchNext;
      }
      const {mission_name = "", rocket = {}, details = "",launch_date_local = ""} = launchNext;
      return (
        <div className='launchesPast'>
          <div className='wrapper'>
            <div className='detail-title'>Mission:{mission_name}</div>
            <div className='detail-subtitle'>Launch Details</div>
              <div className='detail'>{launch_date_local}</div>
              <div className='detail'>
                {details}
              </div>
            <div className='detail-subtitle'>Rocket Details</div>
            <div>
            <div className='launchesPastItem'>
              <div>Rocket Name</div>
              <div>{rocket?.rocket_name}</div>
            </div>
            <div className='launchesPastItem'>
              <div>Rocket Type</div>
              <div>{rocket?.rocket_type}</div>
            </div>
            </div>
          
          </div>
        </div>
      );
    }}
  </Query>
  ) 

};
  
export default ListDetail;