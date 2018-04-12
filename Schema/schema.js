const graphql = require('graphql');

const axios = require('axios');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:5000/companies/${parentValue.companyId}`)
          .then(result => {
            return result.data;
          });
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:5000/users/${args.id}`)
          .then(result => {
            return result.data;
          });
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:5000/companies/${args.id}`)
          .then(result => {
            return result.data;
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
