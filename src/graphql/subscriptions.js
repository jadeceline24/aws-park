/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePark = /* GraphQL */ `
  subscription OnCreatePark($filter: ModelSubscriptionParkFilterInput) {
    onCreatePark(filter: $filter) {
      id
      name
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePark = /* GraphQL */ `
  subscription OnUpdatePark($filter: ModelSubscriptionParkFilterInput) {
    onUpdatePark(filter: $filter) {
      id
      name
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePark = /* GraphQL */ `
  subscription OnDeletePark($filter: ModelSubscriptionParkFilterInput) {
    onDeletePark(filter: $filter) {
      id
      name
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
