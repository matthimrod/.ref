---
title: Reference Pages
permalink: /
---
* [AWS](#aws)
* [Java](#java)
* [Git](#git)
* [HL7](#hl7)
* [JavaScript](#javascript)
* [Linux](#linux)
* [Python](#python)
* [Regular Expressions](#regular-expressions)
* [Time Zones](#time-zones)

## AWS

* [AWS CDK Reference Documentation](https://docs.aws.amazon.com/cdk/api/v2/)
* [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/)
* [AWS CDK Python Reference](https://docs.aws.amazon.com/cdk/api/v2/python/)
* [Boto3 documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
* [CloudFormation Users Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
* [CloudFormation Template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html)
* [Moto: Mock AWS Services](https://docs.getmoto.org/en/latest/#)
* [Moto - Configuratrion Options](https://docs.getmoto.org/en/latest/docs/configuration/index.html)
* [Moto - Implemented Services](https://docs.getmoto.org/en/latest/docs/services/index.html)

| Service                                                                 | &nbsp;                                                  | &nbsp;                                                                                                  | &nbsp;                                                                       | &nbsp;                                                                  | &nbsp;                                                                                   | &nbsp;                                                                                       |
| :---------------------------------------------------------------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [Athena](https://aws.amazon.com/athena/)                                | [Docs](https://docs.aws.amazon.com/athena/)             | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/athena.html)         | [Moto](https://docs.getmoto.org/en/latest/docs/services/athena.html)         | [CLI](https://docs.aws.amazon.com/cli/latest/reference/athena/)         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_athena.html)             | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Athena.html)         |
| [Batch](https://aws.amazon.com/batch/)                                  | [Docs](https://docs.aws.amazon.com/batch/)              | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/batch.html)          | [Moto](https://docs.getmoto.org/en/latest/docs/services/batch.html)          | [CLI](https://docs.aws.amazon.com/cli/latest/reference/batch/)          | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_batch.html)              | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Batch.html)          |
| [CloudFormation](https://aws.amazon.com/cloudformation/)                | [Docs](https://docs.aws.amazon.com/cloudformation/)     | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudformation.html) | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudformation.html) | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/) | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudformation.html)     | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudFormation.html) |
| [CloudTrail](https://aws.amazon.com/cloudtrail/)                        | [Docs](https://docs.aws.amazon.com/cloudtrail/)         | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudtrail.html)     | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudtrail.html)     | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudtrail/)     | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudtrail.html)         | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudTrail.html)     |
| [CloudWatch](https://aws.amazon.com/cloudwatch/)                        | [Docs](https://docs.aws.amazon.com/cloudwatch/)         | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html)     | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudwatch.html)     | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/)     | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudwatch.html)         | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudWatch.html)     |
| * CloudWatch Actions                                                    | &nbsp;                                                  | &nbsp;                                                                                                  | &nbsp;                                                                       | &nbsp;                                                                  | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudwatch_actions.html) | &nbsp;                                                                                       |
| [Connect](https://aws.amazon.com/connect/)                              | [Docs](https://docs.aws.amazon.com/connect/)            | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/connect.html)        | &nbsp;                                                                       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/connect/)        | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_connect.html)            | &nbsp;                                                                                       |
| [DirectConnect](https://aws.amazon.com/directconnect/)                  | [Docs](https://docs.aws.amazon.com/directconnect/)      | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/directconnect.html)  | [Moto](https://docs.getmoto.org/en/latest/docs/services/directconnect.html)  | &nbsp;                                                                  | &nbsp;                                                                                   | &nbsp;                                                                                       |
| [DatabaseMigrationService](https://aws.amazon.com/dms/)                 | [Docs](https://docs.aws.amazon.com/dms/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dms.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/dms.html)            | &nbsp;                                                                  | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_dms.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DMS.html)            |
| [DynamoDB](https://aws.amazon.com/dynamodb)                             | [Docs](https://docs.aws.amazon.com/dynamodb)            | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html)       | [Moto](https://docs.getmoto.org/en/latest/docs/services/dynamodb.html)       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/)       | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_dynamodb.html)           | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DynamoDB.html)       |
| [EBS (Elastic Block Store)](https://aws.amazon.com/ebs/)                | [Docs](https://docs.aws.amazon.com/ebs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ebs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ebs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ebs/)            | &nbsp;                                                                                   | &nbsp;                                                                                       |
| [EC2 (Elastic Compute Cloud)](https://aws.amazon.com/ec2)               | [Docs](https://docs.aws.amazon.com/ec2)                 | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ec2.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ec2.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EC2.html)            |
| [ECR (EC2 Container Registry)](https://aws.amazon.com/ecr/)             | [Docs](https://docs.aws.amazon.com/ecr/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ecr.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ecr.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ecr/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ecr.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ECR.html)            |
| [ECS (EC2 Container Service)](https://aws.amazon.com/ecs/)              | [Docs](https://docs.aws.amazon.com/ecs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ecs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ecs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ecs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ecs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ECS.html)            |
| [EFS (Elastic File System)](https://aws.amazon.com/efs/)                | [Docs](https://docs.aws.amazon.com/efs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/efs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/efs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/efs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_efs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EFS.html)            |
| [EKS (Elastic Kubernetes Service)](https://aws.amazon.com/eks/)         | [Docs](https://docs.aws.amazon.com/eks/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/eks.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/eks.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/eks/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_eks.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EKS.html)            |
| [EMR (Elastic Map Reduce)](https://aws.amazon.com/emr/)                 | [Docs](https://docs.aws.amazon.com/emr/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/emr.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/emr.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/emr/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_emr.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EMR.html)            |
| [EventBridge](https://aws.amazon.com/eventbridge/)                      | [Docs](https://docs.aws.amazon.com/eventbridge/)        | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/events.html)         | [Moto](https://docs.getmoto.org/en/latest/docs/services/events.html)         | [CLI](https://docs.aws.amazon.com/cli/latest/reference/events/)         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_events.html)             | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Events.html)         |
| * EventBridge Event Targets                                             | &nbsp;                                                  | &nbsp;                                                                                                  | &nbsp;                                                                       | &nbsp;                                                                  | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_events_targets.html)     | &nbsp;                                                                                       |
| [Glue](https://aws.amazon.com/glue/)                                    | [Docs](https://docs.aws.amazon.com/glue/)               | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/glue.html)           | [Moto](https://docs.getmoto.org/en/latest/docs/services/glue.html)           | [CLI](https://docs.aws.amazon.com/cli/latest/reference/glue/)           | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_glue.html)               | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Glue.html)           |
| [GlueDataBrew](https://aws.amazon.com/glue/features/databrew/)          | [Docs](https://docs.aws.amazon.com/databrew/latest/dg/) | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/databrew.html)       | [Moto](https://docs.getmoto.org/en/latest/docs/services/databrew.html)       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/databrew/)       | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_databrew.html)           | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DataBrew.html)       |
| [IAM (Identity and Access Management)](https://aws.amazon.com/iam/)     | [Docs](https://docs.aws.amazon.com/iam/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/iam.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/iam.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/iam/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_iam.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_IAM.html)            |
| [KMS (Key Management Service)](https://aws.amazon.com/kms/)             | [Docs](https://docs.aws.amazon.com/kms/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kms.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/kms.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/kms/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_kms.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_KMS.html)            |
| [Lambda](https://aws.amazon.com/lambda/)                                | [Docs](https://docs.aws.amazon.com/lambda/)             | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/lambda.html)         | [Moto](https://docs.getmoto.org/en/latest/docs/services/lambda.html)         | [CLI](https://docs.aws.amazon.com/cli/latest/reference/lambda/)         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_lambda.html)             | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Lambda.html)         |
| [RDS (Relational Database Service)](https://aws.amazon.com/rds/)        | [Docs](https://docs.aws.amazon.com/rds/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/rds.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/rds.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/rds/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_rds.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_RDS.html)            |
| [S3 (Simple Storage Service)](https://aws.amazon.com/s3/)               | [Docs](https://docs.aws.amazon.com/s3/)                 | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html)             | [Moto](https://docs.getmoto.org/en/latest/docs/services/s3.html)             | [CLI](https://docs.aws.amazon.com/cli/latest/reference/s3/)             | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_s3.html)                 | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_S3.html)             |
| * S3 API                                                                | &nbsp;                                                  | &nbsp;                                                                                                  | &nbsp;                                                                       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/s3api/)          | &nbsp;                                                                                   | &nbsp;                                                                                       |
| [SFN (Step Functions)](https://aws.amazon.com/step-functions/)          | [Docs](https://docs.aws.amazon.com/step-functions/)     | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/stepfunctions.html)  | [Moto](https://docs.getmoto.org/en/latest/docs/services/stepfunctions.html)  | [CLI](https://docs.aws.amazon.com/cli/latest/reference/stepfunctions/)  | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_stepfunctions.html)      | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_StepFunctions.html)  |
| [SNS (Simple Notification Service)](https://aws.amazon.com/sns/)        | [Docs](https://docs.aws.amazon.com/sns/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sns.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sns.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sns/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sns.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SNS.html)            |
| * SNS Subscriptions                                                     | &nbsp;                                                  | &nbsp;                                                                                                  | &nbsp;                                                                       | &nbsp;                                                                  | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sns_subscriptions.html)  | &nbsp;                                                                                       |
| [SQS (Simple Queue Service)](https://aws.amazon.com/sqs/)               | [Docs](https://docs.aws.amazon.com/sqs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sqs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sqs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sqs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SQS.html)            |
| [SSM (Simple Systems Manager)](https://aws.amazon.com/systems-manager/) | [Docs](https://docs.aws.amazon.com/systems-manager/)    | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ssm.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ssm.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ssm/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ssm.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SSM.html)            |
| [STS (Secure Token Service)](https://aws.amazon.com/iam/)               | [Docs (IAM)](https://docs.aws.amazon.com/iam/)          | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sts.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sts/)            | &nbsp;                                                                                   | &nbsp;                                                                                       |
| [X-Ray](https://aws.amazon.com/xray/)                                   | [Docs](https://docs.aws.amazon.com/xray/)               | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/xray.html)           |                                                                              |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_xray.html)               | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_XRay.html)           |

## Java

* [Amazon Corretto JDK](https://aws.amazon.com/corretto/)
* [OpenJDK](https://openjdk.org/) ([Download](https://openjdk.org/projects/jdk/))
* [Apache Maven](https://maven.apache.org/) ([Download](https://maven.apache.org/download.cgi))
* [Spring](https://spring.io/) ([Initializr](https://start.spring.io/))
* [Maven Repository](https://mvnrepository.com/)

### Tools

* [JUnit 5](https://junit.org/junit5/)
* [Project Lombok](https://projectlombok.org/)

## Git

| Repostiory Operations                                                     | &nbsp;                              |
| :------------------------------------------------------------------------ | :---------------------------------- |
| Create a new repository with the specified name                           | `git init [project name]`           |
| Download a working copy of a repository locally                           | `git clone [url]`                   |
| List all new or modified files to be committed                            | `git status`                        |
| List the version history for the current branch                           | `git log [--graph] [--[short]stat]` |
| List the version history for a given file (including renames)             | `git log --follow [file]`           |
| Show the details of a given commit                                        | `git show [commit]`                 |
| Reset the working copy "HEAD" to the state at the given commit            | `git reset [commit]`                |
| Reset the working copy "HEAD" to the given commit and discard the changes | `git reset --hard [commit]`         |

| Commit Operations                                                        | &nbsp;                          |
| :----------------------------------------------------------------------- | :------------------------------ |
| Capture a copy of the file(s) in preparation for committing              | `git add [file]`                |
| Discard changes that have been made to the working copy                  | `git restore [file]`            |
| Discard changes that have staged for commit, keep the working copy       | `git restore --staged [file]`   |
| Delete the file from the working directory and stages the deletion       | `git rm [file]`                 |
| Remove the file from version control but preserves the working copy      | `git rm --cached [file]`        |
| Move/Rename the file and stage the action                                | `git mv [source] [destination]` |
| Show file differences not yet staged (local copy vs. repo)               | `git diff [file]`               |
| Show file differences staged for commit (staged copy vs. local copy)     | `git diff --staged [file`       |
| Add the staged changes permanently in version history                    | `git commit -m "[message]"`     |
| Upload commits from the local coopy to the server                        | `git push`                      |
| Download changes from the server to the local copy of the current branch | `git pull`                      |
| Download a copy of changes to the repository from the server             | `git fetch`                     |

| Stash Operations                                                    | &nbsp;                               |
| :------------------------------------------------------------------ | :----------------------------------- |
| Store a temporary copy of all modified, tracked files               | `git stash [push] [-m "message"]`    |
| Store a copy of all changed files (tracked, untracked, NOT ignored) | `git stash [push] -u [-m "message"]` |
| Store a copy of all changed files (tracked, untracked, AND ignored) | `git stash [push] -a [-m "message"]` |
| List all entries in the stash                                       | `git stash list`                     |
| Restore the most recent entry from the stash                        | `git stash pop`                      |
| Discard the most recent entry from the stash                        | `git stash drop`                     |

| Branch Operations                                                            | &nbsp;                                   |
| :--------------------------------------------------------------------------- | :--------------------------------------- |
| List the local branches in the current repository                            | `git branch [-l]`                        |
| List the remote branches in the current repository                           | `git branch -r`                          |
| List the both local and remote branches in the current repository            | `git branch -a`                          |
| Create a new branch                                                          | `git branch [branch-name]`               |
| Delete the specified branch                                                  | `git branch -d [branch-name]`            |
| Switch to the specified branch and update the files in the working directory | `git checkout [branch-name]`             |
| Combine the history from the specified branch into the current branch        | `git merge [branch]`                     |
| Shows content differences between two branches                               | `git diff [first]...[second]`            |

| Maintenance                                                 | &nbsp;                                                  |
| :---------------------------------------------------------- | :------------------------------------------------------ |
| Git Cleanup                                                 | `git gc`                                                |
| Stop showing changes on a tracked file.                     | `git update-index --assume-unchanged [<file> ...]`      |
| Resume showing changes on a tracked file.                   | `git update-index --no-assume-unchanged [<file> ...]`   |
| Prune local branches that don't exist on the remote anymore | `git remote prune origin` or `git fetch --prune origin` |

Note: Feature branches that originated locally and were merged via a merge request won't be automatically removed, but you can find these with git branch -vv. The remote will say "; gone".

### Git Flow Extension

* [Git Flow](https://github.com/nvie/gitflow)
* [Using git-flow to automate your git branching workflow](https://jeffkreeftmeijer.com/git-flow/)

| Git Flow Operations                                                          | &nbsp;                                   |
| :--------------------------------------------------------------------------- | :--------------------------------------- |
| Initialize Git Flow extensions                                               | `git flow init [-d]`                     |
| Create a Git Flow feature branch                                             | `git flow feature start [feature-name]`  |
| Finish a Git Flow feature branch (merge the changes and delete the branch)   | `git flow feature finish [feature-name]` |

| Git Flow Workflows | &nbsp;                                                                                                                                    |
| :----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| init               | Initialize a new git repo with support for the branching model.                                                                           |
| feature            | Used to add new features to the code. Created from develop and merged to develop.                                                         |
| release            | Used to prepare a release from develop to be merged with master/main. Created from develop and merged to master/main and back to develop. |
| hotfix             | Used to quickly address necessary changes for the main branch. Created from master/main and merged back to master/main and to develop.    |

### Git Cleanup

Git Cleanup runs a number of housekeeping tasks within the current repository, such as compressing file revisions (to reduce disk space and increase performance), removing unreachable objects which may have been created from prior invocations of git add, packing refs, pruning reflog, rerere metadata or stale working trees. May also update ancillary indexes such as the commit-graph.

## HL7

* [Mirth Connect Releases](https://github.com/nextgenhealthcare/connect/releases)
* [Mirth Connect User Guide](https://downloads.mirthcorp.com/connect-user-guide/latest/mirth-connect-user-guide.pdf)
* [Mirth Connect Administrator Launcher Downloads](https://mirthdownloadarchive.s3.amazonaws.com/mcal-downloads.html)

### Escape Sequences

| Sequence | Replacement | &nbsp;                                          |
| :------: | :---------: | :---------------------------------------------- |
|   \F\    |     \|      | Field Separator (MSH-1)                         |
|   \S\    |      ^      | Subfield Separator [MSH-2](0)                   |
|   \R\    |      ~      | Repetition Separator [MSH-2](1)                 |
|   \E\    |      \      | Escape Character [MSH-2](2)                     |
|   \T\    |      &      | Subcomponent Separator [MSH-2](3)               |
|  \\.br\  |     \n      | Carriage Return (nonstandard?)                  |
|  \X0D\   |     \n      | Carriage Return (Using \x##\ + Hex Character #) |
|  \X0A\   |     \r      | Line Feed (Using \x##\ + Hex Character #)       |

## JavaScript

* [JavaScript - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

#### Fundamental Objects

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
* [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## Linux

* [A poem about Linux commands](/linux/)
* [GNU coreutils](https://www.gnu.org/software/coreutils/manual/html_node/index.html)
* [GNU emacs](https://www.gnu.org/software/emacs/documentation.html)
* [GNU grep](https://www.gnu.org/software/grep/manual/html_node/index.html)
* [GNU gzip](https://www.gnu.org/software/gzip/manual/html_node/index.html)
* [GNU nano](https://www.nano-editor.org/docs.php)
* [GNU tar](https://www.gnu.org/software/tar/manual/html_node/index.html)
* [GNU wget](https://www.gnu.org/software/wget/manual/html_node/index.html)

| Output, Summarize, or Hash Files     | &nbsp;                                                                                       |
| :----------------------------------- | :------------------------------------------------------------------------------------------- |
| Write and concatenate files          | [`cat`](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html)         |
| Transform data into printable data   | [`base64`](https://www.gnu.org/software/coreutils/manual/html_node/base64-invocation.html)   |
| Output the first part of a file      | [`head`](https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html)       |
| Output the last part of a file       | [`tail`](https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html)       |
| Split a file into pieces             | [`split`](https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html)     |
| Print newline, word, and byte counts | [`wc`](https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html)           |
| Print or check MD5 digests           | [`md5sum`](https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html)   |
| Print or check SHA-1 digests         | [`sha1sum`](https://www.gnu.org/software/coreutils/manual/html_node/sha1sum-invocation.html) |

| Operating on File Contents/Sorting | &nbsp;                                                                                 |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
| Sort text files                    | [`sort`](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html) |
| Shuffle text files                 | [`shuf`](https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html) |
| Uniquify files                     | [`uniq`](https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html) |
| Compare two sorted files by line   | [`comm`](https://www.gnu.org/software/coreutils/manual/html_node/comm-invocation.html) |
| Join lines on a common field       | [`join`](https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html) |
| Print a line of text               | [`echo`](https://www.gnu.org/software/coreutils/manual/html_node/echo-invocation.html) |

| Directory Listing and Operations                     | &nbsp;                                                                                           |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| List directory contents                              | [`ls`](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html)               |
| Color setup for `ls`                                 | [`dircolors`](https://www.gnu.org/software/coreutils/manual/html_node/dircolors-invocation.html) |
| Copy files and directories                           | [`cp`](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html)               |
| Copy files and set attributes                        | [`install`](https://www.gnu.org/software/coreutils/manual/html_node/install-invocation.html)     |
| Convert and copy a file                              | [`dd`](https://www.gnu.org/software/coreutils/manual/html_node/dd-invocation.html)               |
| Move or rename files or directories                  | [`mv`](https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html)               |
| Remove (delete) files or directories                 | [`rm`](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html)               |
| Remove files more securely                           | [`shred`](https://www.gnu.org/software/coreutils/manual/html_node/shred-invocation.html)         |
| Make links between files                             | [`ln`](https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html)               |
| Make a new directory                                 | [`mkdir`](https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html)         |
| Print the value of a symlink or cannonical file name | [`readlink`](https://www.gnu.org/software/coreutils/manual/html_node/readlink-invocation.html)   |
| Remove an empty directory                            | [`rmdir`](https://www.gnu.org/software/coreutils/manual/html_node/rmdir-invocation.html)         |
| Remove files via the unlink syscall                  | [`unlink`](https://www.gnu.org/software/coreutils/manual/html_node/unlink-invocation.html)       |
| Report file system space usage                       | [`df`](https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html)               |
| Estimate file space usage                            | [`du`](https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html)               |
| Report file or file system status                    | [`stat`](https://www.gnu.org/software/coreutils/manual/html_node/stat-invocation.html)           |

| File Attribute Manipulation    | &nbsp;                                                                                   |
| :----------------------------- | :--------------------------------------------------------------------------------------- |
| Change file owner and group    | [`chown`](https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html) |
| Change file group ownership    | [`chgrp`](https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html) |
| Change file access permissions | [`chmod`](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html) |
| Change file timestamp          | [`touch`](https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html) |

| File Name Manipulation                      | &nbsp;                                                                                         |
| :------------------------------------------ | :--------------------------------------------------------------------------------------------- |
| Strip directory and suffix from a file name | [`basename`](https://www.gnu.org/software/coreutils/manual/html_node/basename-invocation.html) |
| Strip last file name component              | [`dirname`](https://www.gnu.org/software/coreutils/manual/html_node/dirname-invocation.html)   |
| Check file name validity and portability    | [`pathchk`](https://www.gnu.org/software/coreutils/manual/html_node/pathchk-invocation.html)   |
| Print the resolved file name                | [`realpath`](https://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html) |

| Working Context                         | &nbsp;                                                                                         |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------- |
| Print the current working directory     | [`pwd`](https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html)           |
| Print all or some environment variables | [`printenv`](https://www.gnu.org/software/coreutils/manual/html_node/printenv-invocation.html) |
| Run a command immune to hangups         | [`nohup`](https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html)       |
| Send a signal to a process              | [`kill`](https://www.gnu.org/software/coreutils/manual/html_node/kill-invocation.html)         |

## Python

### Guides

* [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
* [Python Package Index](https://pypi.org/)
* [Python Packaging User Guide](https://packaging.python.org/en/latest/)
  * [pyproject.toml specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/)

### Core Python Documentation

* [Status of Python Versions](https://devguide.python.org/versions/)
* [Python 3 Documentation (python.org)](https://docs.python.org/3/index.html)
* [Python Module Index](https://docs.python.org/3/py-modindex.html)
  * [Modules CLI](https://docs.python.org/3/library/cmdline.html)
* [The Python Language Reference](https://docs.python.org/3/reference/index.html)
  * [Escape Sequences](https://docs.python.org/3/reference/lexical_analysis.html#escape-sequences)
  * [Falsey Values](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
  * [Format Strings](https://docs.python.org/3/library/string.html#formatstrings) / [Format Spec Mini-Language](https://docs.python.org/3/library/string.html#format-specification-mini-language)

### [The Python Standard Library](https://docs.python.org/3/library/index.html)

#### [Built-in Functions](https://docs.python.org/3/library/functions.html)

#### [Built-in Constants](https://docs.python.org/3/library/constants.html)

#### [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)

#### [Built-in Types](https://docs.python.org/3/library/stdtypes.html)

* [boolean operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
* [comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons)
* [Boolean Type](https://docs.python.org/3/library/stdtypes.html#boolean-type-bool)
  * [bool](https://docs.python.org/3/library/functions.html#bool): boolean
* [Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)
  * [int](https://docs.python.org/3/library/functions.html#int): integers
  * [float](https://docs.python.org/3/library/functions.html#float): floating point (typically a double in underlying C)
  * [complex](https://docs.python.org/3/library/functions.html#complex): real part + imaginary part (&radic;i)
* [Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)
* [Sequence Types](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)
  * [list](https://docs.python.org/3/library/stdtypes.html#list): mutable sequences typically of homogenous data
  * [tuple](https://docs.python.org/3/library/stdtypes.html#tuple): an immutable sequences
  * [range](https://docs.python.org/3/library/stdtypes.html#range): an immutable sequence of numbers
  * [Text Sequence Type](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
    * [str](https://docs.python.org/3/library/stdtypes.html#str)
      * [str-specific methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
      * [format string syntax](https://docs.python.org/3/library/string.html#format-string-syntax)
      * [format specification mini-language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
      * [printf-style string formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)
  * [Binary Sequence Types](https://docs.python.org/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview)
    * [bytes](https://docs.python.org/3/library/stdtypes.html#bytes): immutable sequences of single bytes
    * [bytearray](https://docs.python.org/3/library/stdtypes.html#bytearray): mutable sequences of single bytes
    * [memoryview](https://docs.python.org/3/library/stdtypes.html#memoryview): objects that allow Python code to access the internal data of an object that supports the [buffer protocol](https://docs.python.org/3/c-api/buffer.html#bufferobjects) without copying.
* [Set Types](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)
  * [set](https://docs.python.org/3/library/stdtypes.html#set)
  * [frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)
* [Mapping Types](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict): currently only dict
  * [dict](https://docs.python.org/3/library/stdtypes.html#dict): maps hashable values to arbitrary objects
* [Context Manager Types](https://docs.python.org/3/library/stdtypes.html#context-manager-types)

#### [Text Processing Services](https://docs.python.org/3/library/text.html)

* [string](https://docs.python.org/3/library/string.html): Common string operations
* [re](https://docs.python.org/3/library/re.html): Regular expression operations
* [difflib](https://docs.python.org/3/library/difflib.html): Helpers for computing deltas
* [textwrap](https://docs.python.org/3/library/textwrap.html): Text wrapping and filling
* [unicodedata](https://docs.python.org/3/library/unicodedata.html): Unicode Character Database
* [stringprep](https://docs.python.org/3/library/stringprep.html): Internet String Preparation

#### [Binary Data Services](https://docs.python.org/3/library/binary.html)

* [struct](https://docs.python.org/3/library/struct.html): Interpret bytes as packed binary data
* [codecs](https://docs.python.org/3/library/codecs.html): Codec registry and base classes

#### [Data Types](https://docs.python.org/3/library/datatypes.html)

* [datetime](https://docs.python.org/3/library/datetime.html): Basic date and time types
  * [strftime/strptime format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes)
* [zoneinfo](https://docs.python.org/3/library/zoneinfo.html): IANA time zone support
* [calendar](https://docs.python.org/3/library/calendar.html): General calendar-related functions
* [collections](https://docs.python.org/3/library/collections.html): Container datatypes
* [collections.abc](https://docs.python.org/3/library/collections.abc.html): Abstract Base Classes for Containers
* [heapq](https://docs.python.org/3/library/heapq.html): Heap queue algorithm
* [bisect](https://docs.python.org/3/library/bisect.html): Array bisection algorithm
* [array](https://docs.python.org/3/library/array.html): Efficient arrays of numeric values
* [weakref](https://docs.python.org/3/library/weakref.html): Weak references
* [types](https://docs.python.org/3/library/types.html): Dynamic type creation and names for built-in types
* [copy](https://docs.python.org/3/library/copy.html): Shallow and deep copy operations
* [pprint](https://docs.python.org/3/library/pprint.html): Data pretty printer
* [reprlib](https://docs.python.org/3/library/reprlib.html): Alternate repr() implementation
* [enum](https://docs.python.org/3/library/enum.html): Support for enumerations
* [graphlib](https://docs.python.org/3/library/graphlib.html): Functionality to operate with graph-like structures

#### [Numeric and Mathematical Modules](https://docs.python.org/3/library/numeric.html)

* [numbers](https://docs.python.org/3/library/numbers.html): Numeric abstract base classes
* [math](https://docs.python.org/3/library/math.html): Mathematical functions
* [cmath](https://docs.python.org/3/library/cmath.html): Mathematical functions for complex numbers
* [decimal](https://docs.python.org/3/library/decimal.html): Decimal fixed-point and floating-point arithmetic
* [fractions](https://docs.python.org/3/library/fractions.html): Rational numbers
* [random](https://docs.python.org/3/library/random.html): Generate pseudo-random numbers
* [statistics](https://docs.python.org/3/library/statistics.html): Mathematical statistics functions

#### [Functional Programming Modules](https://docs.python.org/3/library/functional.html)

* [itertools](https://docs.python.org/3/library/itertools.html): Functions creating iterators for efficient looping
* [functools](https://docs.python.org/3/library/functools.html): Higher-order functions and operations on callable objects
* [operator](https://docs.python.org/3/library/operator.html): Standard operators as functions

#### [File and Directory Access](https://docs.python.org/3/library/filesys.html)

* [pathlib](https://docs.python.org/3/library/pathlib.html): Object-oriented filesystem paths
* [os.path](https://docs.python.org/3/library/os.path.html): Common pathname manipulations
* [stat](https://docs.python.org/3/library/stat.html): Interpreting stat() results
* [filecmp](https://docs.python.org/3/library/filecmp.html): File and Directory Comparisons
* [tempfile](https://docs.python.org/3/library/tempfile.html): Generate temporary files and directories
* [glob](https://docs.python.org/3/library/glob.html): Unix style pathname pattern expansion
* [fnmatch](https://docs.python.org/3/library/fnmatch.html): Unix filename pattern matching
* [linecache](https://docs.python.org/3/library/linecache.html): Random access to text lines
* [shutil](https://docs.python.org/3/library/shutil.html): High-level file operations

#### [Data Persistence](https://docs.python.org/3/library/persistence.html)

* [pickle](https://docs.python.org/3/library/pickle.html): Python object serialization
* [copyreg](https://docs.python.org/3/library/copyreg.html): Register pickle support functions
* [shelve](https://docs.python.org/3/library/shelve.html): Python object persistence
* [marshal](https://docs.python.org/3/library/marshal.html): Internal Python object serialization
* [sqlite3](https://docs.python.org/3/library/sqlite3.html): DB-API 2.0 interface for SQLite databases

#### [Data Compression and Archiving](https://docs.python.org/3/library/archiving.html)

* [zlib](https://docs.python.org/3/library/zlib.html): Compression compatible with gzip
* [gzip](https://docs.python.org/3/library/gzip.html): Support for gzip files
* [bz2](https://docs.python.org/3/library/bz2.html): Support for bzip2 compression
* [lzma](https://docs.python.org/3/library/lzma.html): Compression using the LZMA algorithm
* [zipfile](https://docs.python.org/3/library/zipfile.html): Work with ZIP archives
* [tarfile](https://docs.python.org/3/library/tarfile.html): Read and write tar archive files

#### [File Formats](https://docs.python.org/3/library/fileformats.html)

* [csv](https://docs.python.org/3/library/csv.html): CSV File Reading and Writing
* [configparser](https://docs.python.org/3/library/configparser.html): Configuration file parser
* [tomllib](https://docs.python.org/3/library/tomllib.html): Parse TOML files
* [netrc](https://docs.python.org/3/library/netrc.html): netrc file processing

#### [Cryptographic Services](https://docs.python.org/3/library/crypto.html)

* [hashlib](https://docs.python.org/3/library/hashlib.html): Secure hashes and message digests
* [hmac](https://docs.python.org/3/library/hmac.html): Keyed-Hashing for Message Authentication
* [secrets](https://docs.python.org/3/library/secrets.html): Generate secure random numbers for managing secrets

#### [Generic Operating System Services](https://docs.python.org/3/library/allos.html)

* [os](https://docs.python.org/3/library/os.html): Miscellaneous operating system interfaces
* [io](https://docs.python.org/3/library/io.html): Core tools for working with streams
* [time](https://docs.python.org/3/library/time.html): Time access and conversions
* [logging](https://docs.python.org/3/library/logging.html): Logging facility for Python
* [logging.config](https://docs.python.org/3/library/logging.config.html): Logging configuration
* [logging.handlers](https://docs.python.org/3/library/logging.handlers.html): Logging handlers
* [platform](https://docs.python.org/3/library/platform.html): Access to underlying platform’s identifying data
* [errno](https://docs.python.org/3/library/errno.html): Standard errno system symbols
* [ctypes](https://docs.python.org/3/library/ctypes.html): A foreign function library for Python

#### [Command Line Interface Libraries](https://docs.python.org/3/library/cmdlinelibs.html)

* [argparse](https://docs.python.org/3/library/argparse.html): Parser for command-line options, arguments and subcommands
* [optparse](https://docs.python.org/3/library/optparse.html): Parser for command line options
* [getpass](https://docs.python.org/3/library/getpass.html): Portable password input
* [fileinput](https://docs.python.org/3/library/fileinput.html): Iterate over lines from multiple input streams

#### [Concurrent Execution](https://docs.python.org/3/library/concurrency.html)

* [threading](https://docs.python.org/3/library/threading.html): Thread-based parallelism
* [multiprocessing](https://docs.python.org/3/library/multiprocessing.html): Process-based parallelism
* [multiprocessing.shared_memory](https://docs.python.org/3/library/multiprocessing.shared_memory.html): Shared memory for direct access across processes
* [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html): Launching parallel tasks
* [subprocess](https://docs.python.org/3/library/subprocess.html): Subprocess management
* [sched](https://docs.python.org/3/library/sched.html): Event scheduler
* [queue](https://docs.python.org/3/library/contextvars.html): A synchronized queue class
* [contextvars](https://docs.python.org/3/library/contextvars.html): Context Variables
* [_thread](https://docs.python.org/3/library/_thread.html): Low-level threading API

#### [Networking and Interprocess Communication](https://docs.python.org/3/library/ipc.html)

* [asyncio](https://docs.python.org/3/library/asyncio.html): Asynchronous I/O
* [socket](https://docs.python.org/3/library/socket.html): Low-level networking interface
* [ssl](https://docs.python.org/3/library/ssl.html): TLS/SSL wrapper for socket objects

#### [Internet Data Handling](https://docs.python.org/3/library/netdata.html)

* [email](https://docs.python.org/3/library/email.html): An email and MIME handling package
* [json](https://docs.python.org/3/library/json.html): JSON encoder and decoder
* [mailbox](https://docs.python.org/3/library/mailbox.html): Manipulate mailboxes in various formats
* [mimetypes](https://docs.python.org/3/library/mimetypes.html): Map filenames to MIME types
* [base64](https://docs.python.org/3/library/base64.html): Base16, Base32, Base64, Base85 Data Encodings
* [binascii](https://docs.python.org/3/library/binascii.html): Convert between binary and ASCII
* [quopri](https://docs.python.org/3/library/quopri.html): Encode and decode MIME quoted-printable data

#### [Structured Markup Processing Tools](https://docs.python.org/3/library/markup.html)

* [html](https://docs.python.org/3/library/html.html): HyperText Markup Language support
* [html.parser](https://docs.python.org/3/library/html.parser.html): Simple HTML and XHTML parser
* [html.entities](https://docs.python.org/3/library/html.entities.html): Definitions of HTML general entities
* [XML Processing Modules](https://docs.python.org/3/library/xml.html)
  * [xml.etree.ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html): The ElementTree XML API

#### [Internet Protocols and Support](https://docs.python.org/3/library/internet.html)

* [webbrowser](https://docs.python.org/3/library/webbrowser.html): Convenient web-browser controller
* [wsgiref](https://docs.python.org/3/library/wsgiref.html): WSGI Utilities and Reference Implementation
* [urllib](https://docs.python.org/3/library/urllib.html): URL handling modules
* [urllib.request](https://docs.python.org/3/library/urllib.request.html): Extensible library for opening URLs
* [urllib.response](https://docs.python.org/3/library/urllib.request.html#module-urllib.response): Response classes used by urllib
* [urllib.parse](https://docs.python.org/3/library/urllib.parse.html): Parse URLs into components
* [urllib.error](https://docs.python.org/3/library/urllib.error.html): Exception classes raised by urllib.request
* [urllib.robotparser](https://docs.python.org/3/library/urllib.robotparser.html): Parser for robots.txt
* [http](https://docs.python.org/3/library/http.html): HTTP modules
* [http.client](https://docs.python.org/3/library/http.client.html): HTTP protocol client
* [ftplib](https://docs.python.org/3/library/ftplib.html): FTP protocol client
* [uuid](https://docs.python.org/3/library/uuid.html): UUID objects according to RFC 4122
* [socketserver](https://docs.python.org/3/library/socketserver.html): A framework for network servers
* [http.server](https://docs.python.org/3/library/http.server.html): HTTP servers
* [http.cookies](https://docs.python.org/3/library/http.cookies.html): HTTP state management
* [http.cookiejar](https://docs.python.org/3/library/http.cookiejar.html): Cookie handling for HTTP clients
* [xmlrpc](https://docs.python.org/3/library/xmlrpc.html): XMLRPC server and client modules
* [xmlrpc.client](https://docs.python.org/3/library/xmlrpc.client.html): XML-RPC client access
* [xmlrpc.server](https://docs.python.org/3/library/xmlrpc.server.html): Basic XML-RPC servers
* [ipaddress](https://docs.python.org/3/library/ipaddress.html): IPv4/IPv6 manipulation library

#### [Multimedia Services](https://docs.python.org/3/library/mm.html)

#### [Internationalization](https://docs.python.org/3/library/i18n.html)

#### [Program Frameworks](https://docs.python.org/3/library/frameworks.html)

* [cmd](https://docs.python.org/3/library/cmd.html): Support for line-oriented command interpreters
* [shlex](https://docs.python.org/3/library/shlex.html): Simple lexical analysis

#### [Graphical User Interfaces with Tk](https://docs.python.org/3/library/tk.html)

#### [Development Tools](https://docs.python.org/3/library/development.html)

* [typing](https://docs.python.org/3/library/typing.html): Support for type hints
* [pydoc](https://docs.python.org/3/library/pydoc.html): Documentation generator and online help system

#### [Debugging and Profiling](https://docs.python.org/3/library/debug.html)

#### [Software Packaging and Distribution](https://docs.python.org/3/library/distribution.html)

* [ensurepip](https://docs.python.org/3/library/ensurepip.html): Bootstrapping the pip installer
* [venv](https://docs.python.org/3/library/venv.html): Creation of virtual environments
* [zipapp](https://docs.python.org/3/library/zipapp.html): Manage executable Python zip archives

#### [Python Runtime Services](https://docs.python.org/3/library/python.html)

* [sys](https://docs.python.org/3/library/sys.html): System-specific parameters and functions
* [sys.monitoring](https://docs.python.org/3/library/sys.monitoring.html): Execution event monitoring
* [sysconfig](https://docs.python.org/3/library/sysconfig.html): Provide access to Python’s configuration information
* [builtins](https://docs.python.org/3/library/builtins.html): Built-in objects
* [__main__](https://docs.python.org/3/library/__main__.html): Top-level code environment
* [warnings](https://docs.python.org/3/library/warnings.html): Warning control
* [dataclasses](https://docs.python.org/3/library/dataclasses.html): Data Classes
* [contextlib](https://docs.python.org/3/library/contextlib.html): Utilities for with-statement contexts
* [abc](https://docs.python.org/3/library/abc.html): Abstract Base Classes
* [atexit](https://docs.python.org/3/library/atexit.html): Exit handlers
* [traceback](https://docs.python.org/3/library/traceback.html): Print or retrieve a stack traceback
* [__future__](https://docs.python.org/3/library/__future__.html): Future statement definitions
* [gc](https://docs.python.org/3/library/gc.html): Garbage Collector interface
* [inspect](https://docs.python.org/3/library/inspect.html): Inspect live objects
* [site](https://docs.python.org/3/library/site.html): Site-specific configuration hook

#### [Custom Python Interpreters](https://docs.python.org/3/library/custominterp.html)

#### [Importing Modules](https://docs.python.org/3/library/modules.html)

* [zipimport](https://docs.python.org/3/library/zipimport.html): Import modules from Zip archives
* [pkgutil](https://docs.python.org/3/library/pkgutil.html): Package extension utility
* [modulefinder](https://docs.python.org/3/library/modulefinder.html): Find modules used by a script
* [runpy](https://docs.python.org/3/library/modulefinder.html): Locating and executing Python modules
* [importlib](https://docs.python.org/3/library/importlib.html): The implementation of import
* [importlib.resources](https://docs.python.org/3/library/importlib.resources.html): Package resource reading, opening and access
* [importlib.resources.abc](https://docs.python.org/3/library/importlib.resources.abc.html): Abstract base classes for resources
* [importlib.metadata](https://docs.python.org/3/library/importlib.metadata.html): Accessing package metadata
* [The initialization of the sys.path module search path](https://docs.python.org/3/library/sys_path_init.html)


#### [Python Language Services](https://docs.python.org/3/library/language.html)

#### [MS Windows Specific Services](https://docs.python.org/3/library/windows.html)

#### [Unix Specific Services](https://docs.python.org/3/library/unix.html)

#### [Modules command-line interface (CLI)](https://docs.python.org/3/library/cmdline.html)

### Environment/Dependency Management

* [pip](https://pip.pypa.io/en/stable/)
* [pipenv](https://pipenv.pypa.io/en/latest/)
* [pyenv-win](https://github.com/pyenv-win/pyenv-win)
* [uv](https://github.com/astral-sh/uv)

### Testing and Code Analysis Tools

* [pytest](https://docs.pytest.org/)
* [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/index.html)
* [assertpy](https://github.com/assertpy/assertpy)
* [mypy](https://mypy.readthedocs.io/en/stable/index.html)
* [pylint](https://pylint.readthedocs.io/en/latest/)
* [pyflakes](https://github.com/PyCQA/pyflakes)
* [pycodestyle](https://pycodestyle.pycqa.org/en/latest/)
* [bandit](https://bandit.readthedocs.io/en/latest/)
* [checkov](https://www.checkov.io/)

### Templating

* [liquid template language (shopify.github.io)](https://shopify.github.io/liquid/)
* [liquid reference](https://shopify.dev/docs/api/liquid)

### Data Frames

* [pandas](https://pandas.pydata.org/docs/index.html)
  * [API Reference](https://pandas.pydata.org/docs/reference/index.html)
* [PySpark](https://spark.apache.org/docs/latest/api/python/index.html)
  * [API Reference](https://spark.apache.org/docs/latest/api/python/reference/index.html)

### 3rd Party Libraries

* [IPython](https://ipython.readthedocs.io/en/stable/index.html)
  * [Built-in magic commands](https://ipython.readthedocs.io/en/stable/interactive/magics.html)
* [Jupyter](https://jupyter.org/)
  * [The Ultimate Markdown Guide (for Jupyter Notebook)](https://medium.com/analytics-vidhya/the-ultimate-markdown-guide-for-jupyter-notebook-d5e5abf728fd)
* [localstack](https://github.com/localstack/localstack)
* [requests](https://requests.kennethreitz.org/en/latest/)
* [SQLAlchemy](https://www.sqlalchemy.org/)

### Misc

* [ralsina/rst-cheatsheet: A two-page cheatsheet for restructured text](https://github.com/ralsina/rst-cheatsheet)
* [pyWhat/pywhat/Data/regex.json](https://github.com/bee-san/pyWhat/blob/main/pywhat/Data/regex.json)

## Regular Expressions

Metacharacters that must be escaped: `^` `[` `.` `$` `{` `*` `(` `)` `\` `+` `|` `?` `<` `>`

| Anchors | &nbsp;            |
| :------ | :---------------- |
| `^`     | start of line     |
| `$`     | end of line       |
| `\A`    | start of string   |
| `\Z`    | end of string     |
| `\b`    | word boundary     |
| `\B`    | not word boundary |
| `\<`    | start of word ⚠️   |
| `\>`    | end of word ⚠️     |

| Quantifiers | &nbsp;                                                 |
| :---------- | :----------------------------------------------------- |
| `*`         | 0 or more                                              |
| `*?`        | 0 or more, ungreedy                                    |
| `+`         | 1 or more                                              |
| `+?`        | 1 or more, ungreedy                                    |
| `?`         | 0 or 1                                                 |
| `??`        | 0 or 1, ungreedy                                       |
| `{#}`       | Exacty # (e.g., `{3}` = exactly 3)                     |
| `{#,}`      | # or more (e.g., `{3,}` = 3 or more)                   |
| `{#,}?`     | # or more, ungreedy                                    |
| `{#,#}`     | # to # matches, inclusive (e.g., `{3,5}` = 3, 4, or 5) |
| `{#,#}?`    | # to # matches, inclusive and ungreedy                 |

| Ranges | &nbsp;                                              |
| :----- | :-------------------------------------------------- |
| `.`    | any character, typically excluding newline/linefeed |
| `|`    | or (e.g., `a | b` matches `a` or `b`)               |
| `()`   | capturing group (e.g., `Date: (\d{4}-\d{2}-\d{2})`) |
| `(?:)` | non-capturing/passive group (e.g., `(?:this|that)`) |
| `[]`   | characer range                                      |
| `[^]`  | negative characer range                             |

| Character Class | &nbsp;                                                                            |
| :-------------- | :-------------------------------------------------------------------------------- |
| `\c`            | control character (e.g., ASCII 0-31 & 127), same as POSIX `[:word:]`              |
| `\s`            | white space (e.g., `[\t\n\f\r ]` tab, newline, form feed, carriage returm, space) |
| `\S`            | not white space                                                                   |
| `\d`            | digit (e.g., `[0-9]`)                                                             |
| `\D`            | not digit                                                                         |
| `\w`            | word (e.g., `[A-Za-z0-9_]`)                                                       |
| `\W`            | not word                                                                          |

| Escape Sequences       | &nbsp;                                       |
| :--------------------- | :------------------------------------------- |
| `\\`                   | literal backslash `` ` ``                    |
| `\t`                   | tab                                          |
| `\n`                   | newline/linefeed                             |
| `\r`                   | carriage return                              |
| `\f`                   | form feed                                    |
| `\a`                   | alarm/bell                                   |
| `\xhh`                 | hexadecimal character `hh`                   |
| `\xxx` `\oxxx` `\Oxxx` | octal character `xxx`                        |
| `\Q`                   | quote (disable pattern metacharacters)       |
| `\E`                   | end quote (re-enable pattern metacharacters) |

| POSIX Character Class | &nbsp;                                                                                                                               |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `[:upper:]`           | any uppercase character (e.g., `[A-Z]`)                                                                                              |
| `[:lower:]`           | any lowercase character (e.g., `[a-z]`)                                                                                              |
| `[:alpha:]`           | any alphabetical character (e.g., `[A-Za-z]`)                                                                                        |
| `[:alnum:]`           | any alphanumeric character (e.g., `[A-Za-z0-9]`)                                                                                     |
| `[:digit:]`           | any decimal digit (e.g., `[0-9]`)                                                                                                    |
| `[:xdigit:]`          | any hexadecimal digit (e.g., `[0-9a-fA-F]`)                                                                                          |
| `[:punct:]`           | any graphical character excluding "word" chartacters (e.g., ``[-!"#$%&'()*+,./:;<=>?@[\\\]^_`{\|}~]``)                               |
| `[:blank:]`           | any horizontal whitespace character (e.g., space or tab `\t`)                                                                        |
| `[:space:]`           | any whitespace character, similar to `\s`\ but also includes vertical tab `\X0B` / `\013`                                            |
| `[:cntrl:]`           | any control character (ASCII 0-31 & 127), same as `\c`                                                                               |
| `[:graph:]`           | any character that is graphical, that is, visible. This class consists of all alphanumeric characters and all punctuation characters |
| `[:print:]`           | all printable characters, which is the set of all graphical characters plus those whitespace characters which are not also controls. |
| `[:word:]`            | any "word" character (e.g., [A-Za-z0-9_]), same as `\w`                                                                              |

| Backreferences ⚠️ | &nbsp;                  |
| :--------------- | :---------------------- |
| `$n` or `\n`     | nth capturing group     |
| ``$` ``          | before matched string   |
| `$'`             | after matched string    |
| `$+`             | last matched string     |
| `$&`             | entire matched string   |
| `$_`             | entire input string     |
| `$$`             | literal dollar sign `$` |

⚠️ Not universally supported

## Time Zones

|   P   |   M   |   C   |   E   |
| :---: | :---: | :---: | :---: |
|  10   |  11   |  12   |   1   |
|  11   |  12   |   1   |   2   |
|  12   |   1   |   2   |   3   |
|   1   |   2   |   3   |   4   |
|   2   |   3   |   4   |   5   |
|   3   |   4   |   5   |   6   |
|   4   |   5   |   6   |   7   |
|   5   |   6   |   7   |   8   |
|   6   |   7   |   8   |   9   |
|   7   |   8   |   9   |  10   |
|   8   |   9   |  10   |  11   |
|   9   |  10   |  11   |  12   |
