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

export const GET_SERVICE_INFO = gql`
    query services($id: [Int]) {
        services(id:$id) {
            error,
            items {
                id,
                title,
                reviewAverage,
                meetable,
                serviceType
            }
        }
    }
`

export const GET_SERVICE_OWNER = gql`
    query userCreators($id: [Int]) {
        userCreators(id:$id){
            error,
            items {
                handle,
                extraPublic {
                    profile_photo
                }
            }           
        }
    }
`