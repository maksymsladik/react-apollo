import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int ) {
    characters (page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query ($id: ID! ) {
    character (id: $id) {
      id
      name
      image
      episode {
        id
        name
      }
    }
  }
`;

export const GET_EPISODE_BY_ID = gql`
  query ($id: ID! ) {
    episode (id: $id) {
      id
      name
      characters {
        id
        name
      }
    }
  }
`;
