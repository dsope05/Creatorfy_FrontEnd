import { gql, useQuery } from '@apollo/client';
import { QueryHookOptions } from '@apollo/client/react/types/types';

export const USER_CREATOR = gql`
  query userCreators($handle: String) {
    userCreators(handle: $handle) {
      error
      items {
        firstName
        lastName
        handle
        email
        userType
        services {
          id
          title
          uuid
          tiers {
            title
            price
            currency
            description
            addOns
          }
          description
          reviewAverage
          photos {
            title
            url
          }
        }
        extraPublic {
          profile_photo
          country
          language
          stat_cards
          category
          subCategories
          verified_info
        }
      }
    }
  }
`;

const SERVICE_QUERY = gql`
  query ($id: [Int]) {
    services(id: $id) {
      items {
        id
        title
        description
        meetable
        photos {
          title
          url
        }
        questions {
          question
          answer
        }
        reviewAverage
        tiers {
          title
          description
          price
          currency
          addOns
        }
      }
      error
    }
  }
`;

export interface UserServiceVariables {
  id: number;
}

export interface UserServiceData {
  services: {
    error: string;
    items: {
      id: string;
      title: string;
      description: string;
      meetable: boolean;
      photos: {
        title: string;
        url: string;
      }[];
      questions: {
        question: string;
        answer: string;
      }[];
      reviewAverage: string;
      tiers: {
        title: string;
        description: string;
        price: string;
        currency: string;
        addOns: string[];
      }[];
    }[];
  };
}

export const useServiceQuery = (
  options?: QueryHookOptions<UserServiceData, UserServiceVariables>
) => {
  return useQuery<UserServiceData, UserServiceVariables>(
    SERVICE_QUERY,
    options
  );
};


export const GET_BANNER_INFO = gql`
    query userCreators($handle: String) {
        userCreators(handle:$handle){
            error,
            items {
            id,
            handle,
            services {
                id,
                title,
                reviewAverage,
                meetable,
            }
            extraPublic {
                profile_photo
            }
            }
        }
        }
`
