import * as cdk from 'aws-cdk-lib';
import { FunctionUrlAuthType, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, OutputFormat } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkLambdaTypescriptDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const lambdaFn = new NodejsFunction(this, "hello-lambda", {
      functionName: 'my-hello-lambda',
      description: 'CDK Lambda deployment',
      runtime: Runtime.NODEJS_18_X,
      entry: "lambdas/hello-lambda.ts",
      bundling: {
        format: OutputFormat.ESM
      }
    });

    const fnUrl = lambdaFn.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, "LambdaFn-name", {
      value: lambdaFn.functionName,
     
    });

    new cdk.CfnOutput(this,"Function-url",{
        value: fnUrl.url
    });
  }
}
