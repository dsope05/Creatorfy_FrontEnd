import { gql } from '@apollo/client';

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

export const GET_BANNER_INFO = gql`
  query userCreators($handle: String) {
    userCreators(handle: $handle) {
      error
      items {
        id
        handle
        services {
          id
          title
          reviewAverage
          meetable
        }
        extraPublic {
          profile_photo
        }
      }
    }
  }
`;

export const SERVICES = gql`
  query services {
    services {
      items {
        id
        title
      }
    }
  }
`;

export const MY_USER = gql`
  query myUser {
    myUser {
      item {
        id
        handle
        userType
        extraPublic {
          profile_photo
        }
      }
    }
  }
`;

export const GET_CONVERSATIONS = gql`
  query getConversations {
    getConversations {
      items {
        id
        uuid
        creator {
          id
          handle
          userType
          extraPublic {
            profile_photo
          }
        }
        buyer {
          id
          handle
          userType
          extraPublic {
            profile_photo
          }
        }
        service {
          title
        }
        messages {
          message
          createdOn
          authorId
          uuid
        }
      }
    }
  }
`;
