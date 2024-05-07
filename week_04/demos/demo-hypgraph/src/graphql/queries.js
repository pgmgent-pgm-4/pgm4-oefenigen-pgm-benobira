import { gql } from "@apollo/client";

const GET_ALL_TODOS = gql`
    query GET_TODOS {
        todos {
            id
            title
            description
            isCompleted
    }
}`;

export { GET_ALL_TODOS };