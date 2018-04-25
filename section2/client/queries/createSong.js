import gql from 'graphql-tag';

export const createSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
