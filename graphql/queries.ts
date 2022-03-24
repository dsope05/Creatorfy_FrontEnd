import { gql } from '@apollo/client';

export const USER_CREATOR = gql`
    query userCreators($id: [Int]) {
    userCreators(id: $id){
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
            }
            extraPublic {
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