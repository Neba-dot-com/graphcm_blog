


/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

import { GraphQLClient,gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
 

    export default async function hecommentslloAPI(req,res ) {

   
    const graphQLClient = new GraphQLClient(graphqlApi,{
      headers:{
        authorization:`Bearer ${process.env.GRAPHCMS_TOKEN}`
      }
    })
     
const query = gql`
mutation CreateComment($name:String!, $email:String!, $comment:String!,$slug:String!}){
  createComment(data:{name:$name, email:$email, comment:$comment, post:{connect:{slug:$slug}}}){id}
 
}

`
try {
  const result = await graphQLClient.request(query,req.body)
  return res.status(200).send(result)
} catch (error) {
  console.log(error)
}

    }
