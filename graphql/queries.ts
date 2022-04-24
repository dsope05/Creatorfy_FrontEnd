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
