import { gql } from '@apollo/client';

export const USER_CREATOR = gql`
    query userCreators($handle: String) {
    userCreators(handle: $handle){
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

export const USER_SERVICE = gql`
  query ($id: [Int]) {
    services(id: $id) {
      items {
        id
        uuid
        title
        photos {
          title
          url
        }
        description
        reviewAverage
        serviceType
        meetable
        startingAt
        tiers {
          title
          price
          currency
          addOns
          description
        }
        questions {
          question
          answer
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
    }[];
  };
}
