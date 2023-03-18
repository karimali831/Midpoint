
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { Observable } from "zen-observable-ts";

export async function graphQLQuery<T1, T2>(query: any, options?: GraphQLOptions<T2>):
    Promise<GraphQLResult<T1>> {
    return (await API.graphql(
        graphqlOperation(query, options))
    ) as GraphQLResult<T1>;
}

export async function graphQLSubscription<T>(query: any, params?: T):
    Promise<Observable<object>> {
    return await API.graphql(
        graphqlOperation(query)
    ) as Observable<object>
}

export interface GraphQLOptions<T> {
    id?: string;
    input?: T;
    filter?: T;
    sort?: T;
    limit?: number;
    variables?: T;
    authMode?: GRAPHQL_AUTH_MODE;
}

export interface SubscriptionValue<T> {
    value: { data: T };
}
