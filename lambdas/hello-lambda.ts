import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async (
    e: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
    // return "I Love AWS Lambda";

    console.log(e);

    return {
        statusCode: 200,
        // let's just return the whole event
        body: JSON.stringify(e),
      };
}