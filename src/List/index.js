import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../Loading';
import ListContent from './ListContent';
const SPACE_QUERY = gql`
    query($limit: Int!) {
        launchesPast(limit: $limit) {
            id
            mission_name
            launch_date_local
            launch_site {
            site_name_long
            }
            links {
            article_link
            video_link
            }
            rocket {
            rocket_name
            rocket_type
            }
            launch_success
            details
        }
    }
`;
const limit = 10;
const List = ({ organizationName }) => (

    <Query
      query={SPACE_QUERY}
      variables={{
        limit,
      }}
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return <div>error</div>;
        }
  
        console.log(`success********${JSON.stringify(data)}`);
        let launchesPast = [];
        if (data && data.launchesPast) {
            launchesPast = data.launchesPast;
            console.log(launchesPast.length)
        }
  
        if (loading) {
          return <Loading isCenter={true} />;
        }
  
        return (
          <ListContent launchesPast={launchesPast} />
        );
      }}
    </Query>
  );
  
export default List;