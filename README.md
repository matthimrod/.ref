---
title: Reference Pages
permalink: /
---
* [AWS](#AWS)
* [Java](#java)
* [Git](#git)
* [HL7](#hl7)
* [Linux](#linux)
* [Python](#python)
* [Time Zones](#time-zones)

# AWS

* [AWS CDK Reference Documentation](https://docs.aws.amazon.com/cdk/api/v2/)
* [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/)
* [AWS CDK Python Reference](https://docs.aws.amazon.com/cdk/api/v2/python/)
* [Boto3 documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
* [CloudFormation Users Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) 
* [CloudFormation Template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html)
* [Moto: Mock AWS Services](https://docs.getmoto.org/en/latest/#)
* [Moto - Configuratrion Options](https://docs.getmoto.org/en/latest/docs/configuration/index.html)
* [Moto - Implemented Services](https://docs.getmoto.org/en/latest/docs/services/index.html)


| Service                                                               | Docs                                                    | Boto3                                                                                                   | Moto                                                                         | CLI                                                                     | CDK                                                                                      | CF                                                                                           |
| --------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Batch](https://aws.amazon.com/batch/)                                | [Docs](https://docs.aws.amazon.com/batch/)              | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/batch.html)          | [Moto](https://docs.getmoto.org/en/latest/docs/services/batch.html)          | [CLI](https://docs.aws.amazon.com/cli/latest/reference/batch/)          | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_batch.html)              | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Batch.html)          |
| [CloudFormation](https://aws.amazon.com/cloudformation/)              | [Docs](https://docs.aws.amazon.com/cloudformation/)     | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudformation.html) | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudformation.html) | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/) | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudformation.html)     | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudFormation.html) |
| [CloudTrail](https://aws.amazon.com/cloudtrail/)                      | [Docs](https://docs.aws.amazon.com/cloudtrail/)         | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudtrail.html)     | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudtrail.html)     | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudtrail/)     | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudtrail.html)         | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudTrail.html)     |
| [CloudWatch](https://aws.amazon.com/cloudwatch/)                      | [Docs](https://docs.aws.amazon.com/cloudwatch/)         | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html)     | [Moto](https://docs.getmoto.org/en/latest/docs/services/cloudwatch.html)     | [CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/)     | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudwatch.html)         | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_CloudWatch.html)     |
| * CloudWatch Actions                                                  |                                                         |                                                                                                         |                                                                              |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_cloudwatch_actions.html) |                                                                                              |
| [Connect](https://aws.amazon.com/connect/)                            | [Docs](https://docs.aws.amazon.com/connect/)            | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/connect.html)        |                                                                              | [CLI](https://docs.aws.amazon.com/cli/latest/reference/connect/)        | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_connect.html)            |                                                                                              |
| [DirectConnect](https://aws.amazon.com/directconnect/)                | [Docs](https://docs.aws.amazon.com/directconnect/)      | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/directconnect.html)  | [Moto](https://docs.getmoto.org/en/latest/docs/services/directconnect.html)  |                                                                         |                                                                                          |                                                                                              |
| [DatabaseMigrationService](https://aws.amazon.com/dms/)               | [Docs](https://docs.aws.amazon.com/dms/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dms.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/dms.html)            |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_dms.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DMS.html)            |
| [DynamoDB](https://aws.amazon.com/dynamodb)                           | [Docs](https://docs.aws.amazon.com/dynamodb)            | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html)       | [Moto](https://docs.getmoto.org/en/latest/docs/services/dynamodb.html)       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/)       | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_dynamodb.html)           | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DynamoDB.html)       |
| [EBS (Elastic Block Store)](https://aws.amazon.com/ebs/)              | [Docs](https://docs.aws.amazon.com/ebs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ebs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ebs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ebs/)            |                                                                                          |                                                                                              |
| [EC2 (Elastic Compute Cloud)](https://aws.amazon.com/ec2)             | [Docs](https://docs.aws.amazon.com/ec2)                 | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ec2.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ec2.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EC2.html)            |
| [ECR (EC2 Container Registry)](https://aws.amazon.com/ecr/)           | [Docs](https://docs.aws.amazon.com/ecr/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ecr.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ecr.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ecr/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ecr.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ECR.html)            |
| [ECS (EC2 Container Service)](https://aws.amazon.com/ecs/)            | [Docs](https://docs.aws.amazon.com/ecs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ecs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ecs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ecs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ecs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ECS.html)            |
| [EFS (Elastic File System)](https://aws.amazon.com/efs/)              | [Docs](https://docs.aws.amazon.com/efs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/efs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/efs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/efs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_efs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EFS.html)            |
| [EKS (Elastic Kubernetes Service)](https://aws.amazon.com/eks/)       | [Docs](https://docs.aws.amazon.com/eks/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/eks.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/eks.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/eks/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_eks.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EKS.html)            |
| [EMR (Elastic Map Reduce)](https://aws.amazon.com/emr/)               | [Docs](https://docs.aws.amazon.com/emr/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/emr.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/emr.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/emr/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_emr.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EMR.html)            |
| [EventBridge](https://aws.amazon.com/eventbridge/)                    | [Docs](https://docs.aws.amazon.com/eventbridge/)        | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/events.html)         | [Moto](https://docs.getmoto.org/en/latest/docs/services/events.html)         | [CLI](https://docs.aws.amazon.com/cli/latest/reference/events/)         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_events.html)             | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Events.html)         |
| * EventBridge Event Targets                                           |                                                         |                                                                                                         |                                                                              |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_events_targets.html)     |                                                                                              |
| [Glue](https://aws.amazon.com/glue/)                                  | [Docs](https://docs.aws.amazon.com/glue/)               | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/glue.html)           | [Moto](https://docs.getmoto.org/en/latest/docs/services/glue.html)           | [CLI](https://docs.aws.amazon.com/cli/latest/reference/glue/)           | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_glue.html)               | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Glue.html)           |
| [GlueDataBrew](https://aws.amazon.com/glue/features/databrew/)        | [Docs](https://docs.aws.amazon.com/databrew/latest/dg/) | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/databrew.html)       | [Moto](https://docs.getmoto.org/en/latest/docs/services/databrew.html)       | [CLI](https://docs.aws.amazon.com/cli/latest/reference/databrew/)       | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_databrew.html)           | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_DataBrew.html)       |
| [IAM (Identity and Access Management)](https://aws.amazon.com/iam/)   | [Docs](https://docs.aws.amazon.com/iam/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/iam.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/iam.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/iam/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_iam.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_IAM.html)            |
| [KMS (Key Management Service)](https://aws.amazon.com/kms/)           | [Docs](https://docs.aws.amazon.com/kms/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kms.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/kms.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/kms/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_kms.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_KMS.html)            |
| [Lambda](https://aws.amazon.com/lambda/)                              | [Docs](https://docs.aws.amazon.com/lambda/)             | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/lambda.html)         | [Moto](https://docs.getmoto.org/en/latest/docs/services/lambda.html)         | [CLI](https://docs.aws.amazon.com/cli/latest/reference/lambda/)         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_lambda.html)             | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Lambda.html)         |
| [RDS (Relational Database Service)](https://aws.amazon.com/rds/)      | [Docs](https://docs.aws.amazon.com/rds/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/rds.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/rds.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/rds/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_rds.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_RDS.html)            |
| [S3 (Simple Storage Service)](https://aws.amazon.com/s3/)             | [Docs](https://docs.aws.amazon.com/s3/)                 | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html)             | [Moto](https://docs.getmoto.org/en/latest/docs/services/s3.html)             | [CLI](https://docs.aws.amazon.com/cli/latest/reference/s3/)             | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_s3.html)                 | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_S3.html)             |
| * S3 API                                                              |                                                         |                                                                                                         |                                                                              | [CDK](https://docs.aws.amazon.com/cli/latest/reference/s3api/)          |                                                                                          |                                                                                              |
| [SNS (Simple Notification Service)](https://aws.amazon.com/sns/)      | [Docs](https://docs.aws.amazon.com/sns/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sns.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sns.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sns/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sns.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SNS.html)            |
| * SNS Subscriptions                                                   |                                                         |                                                                                                         |                                                                              |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sns_subscriptions.html)  |                                                                                              |
| [SQS (Simple Queue Service)](https://aws.amazon.com/sqs/)             | [Docs](https://docs.aws.amazon.com/sqs/)                | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sqs.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sqs/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_sqs.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SQS.html)            |
| [Simple Systems Manager/SSM](https://aws.amazon.com/systems-manager/) | [Docs](https://docs.aws.amazon.com/systems-manager/)    | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ssm.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/ssm.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/ssm/)            | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ssm.html)                | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_SSM.html)            |
| STS (Secure Token Service)                                            |                                                         | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html)            | [Moto](https://docs.getmoto.org/en/latest/docs/services/sts.html)            | [CLI](https://docs.aws.amazon.com/cli/latest/reference/sts/)            |                                                                                          |                                                                                              |
| [X-Ray](https://aws.amazon.com/xray/)                                 | [Docs](https://docs.aws.amazon.com/xray/)               | [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/xray.html)           |                                                                              |                                                                         | [CDK](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_xray.html)               | [CF](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_XRay.html)           |


# Java

* [Amazon Corretto JDK](https://aws.amazon.com/corretto/)
* [OpenJDK](https://openjdk.org/) ([Download](https://openjdk.org/projects/jdk/))
* [Apache Maven](https://maven.apache.org/) ([Download](https://maven.apache.org/download.cgi))
* [Spring](https://spring.io/) ([Initializr](https://start.spring.io/))
* [Maven Repository](https://mvnrepository.com/)

## Tools

* [JUnit 5](https://junit.org/junit5/)
* [Project Lombok](https://projectlombok.org/)

# Git

| Repostiory Operations                                                      | Command                             |
| -------------------------------------------------------------------------- | ----------------------------------- |
| Create a new repository with the specified name                            | `git init [project name]`           |
| Download a working copy of a repository locally                            | `git clone [url]`                   |
| Initialize Git Flow extensions                                             | `git flow init [-d]`                |
| List all new or modified files to be committed                             | `git status`                        |
| List the version history for the current branch                            | `git log [--graph] [--[short]stat]` |
| List the version history for a given file (including renames)              | `git log --follow [file]`           |
| Show the details of a given commit                                         | `git show [commit]`                 |
| Reset the working copy "HEAD" to the state at the given commit             | `git reset [commit]`                |
| Reset the working copy "HEAD" to the given commit and discard the changes  | `git reset --hard [commit]`         |


| Commit Operations                                                          | Command                         |
| -------------------------------------------------------------------------- | ------------------------------- |
| Capture a copy of the file(s) in preparation for committing                | `git add [file]`                |
| Discard changes that have been made to the working copy                    | `git restore [file]`            |
| Discard changes that have staged for commit, keep the working copy         | `git restore --staged [file]`   |
| Delete the file from the working directory and stages the deletion         | `git rm [file]`                 |
| Remove the file from version control but preserves the working copy        | `git rm --cached [file]`        |
| Move/Rename the file and stage the action                                  | `git mv [source] [destination]` |
| Show file differences not yet staged (local copy vs. repo)                 | `git diff [file]`               |
| Show file differences staged for commit (staged copy vs. local copy)       | `git diff --staged [file`       |
| Add the staged changes permanently in version history                      | `git commit -m "[message]"`     |
| Upload commits from the local coopy to the server                          | `git push`                      |
| Download changes from the server to the local copy of the current branch   | `git pull`                      |
| Download a copy of changes to the repository from the server               | `git fetch`                     |

| Stash Operations                                                           | Command                              |
| -------------------------------------------------------------------------- | ------------------------------------ |
| Store a temporary copy of all modified, tracked files                      | `git stash [push] [-m "message"]`    |
| Store a copy of all changed files (tracked, untracked, NOT ignored)        | `git stash [push] -u [-m "message"]` |
| Store a copy of all changed files (tracked, untracked, AND ignored)        | `git stash [push] -a [-m "message"]` |
| List all entries in the stash                                              |  `git stash list`                    |
| Restore the most recent entry from the stash                               | `git stash pop`                      |
| Discard the most recent entry from the stash                               | `git stash drop`                     | 

| Branch Operations                                                            | Command                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------- |
| List the local branches in the current repository                            | `git branch [-l]`                        |
| List the remote branches in the current repository                           | `git branch -r`                          |
| List the both local and remote branches in the current repository            | `git branch -a`                          |
| Create a new branch                                                          | `git branch [branch-name]`               |
| Delete the specified branch                                                  | `git branch -d [branch-name]`            |
| Switch to the specified branch and update the files in the working directory | `git checkout [branch-name]`             |
| Combine the history from the specified branch into the current branch        | `git merge [branch]`                     |
| Shows content differences between two branches                               | `git diff [first]...[second]`            |
| Create a Git Flow feature branch                                             | `git flow feature start [feature-name]`  |
| Finish a Git Flow feature branch (merge the changes and delete the branch)   | `git flow feature finish [feature-name]` |

## Maintenance

| Git Cleanup -- Runs a number of housekeeping tasks within the current repository, such as compressing file revisions (to reduce disk space and increase performance), removing unreachable objects which may have been created from prior invocations of git add, packing refs, pruning reflog, rerere metadata or stale working trees. May also update ancillary indexes such as the commit-graph. | `git gc` |
| Stop showing changes on a tracked file. | `git update-index --assume-unchanged [<file> ...]` |
| Resume showing changes on a tracked file. | `git update-index --no-assume-unchanged [<file> ...]` |
| Prune local branches that don't exist on the remote anymore | `git remote prune origin` or `git fetch --prune origin` |

Note: Feature branches that originated locally and were merged via a merge request won't be automatically removed, but you can find these with git branch -vv. The remote will say "; gone". 


# HL7

## Escape Sequences

| Sequence | Replacement | Description | 
| :------: | :---------: | :---------- |
| \F\      | \|           | Field Separator (MSH-1) |
| \S\      | ^           | Subfield Separator (MSH-2)[0] |
| \R\      | ~           | Repetition Separator (MSH-2)[1] |
| \E\      | \           | Escape Character (MSH-2)[2] |
| \T\      | &           | Subcomponent Separator (MSH-2)[3] |
| \\.br\    | \n          | Carriage Return (nonstandard?) |
| \X0D\    | \n          | Carriage Return (Using \x##\ + Hex Character #) |
| \X0A\    | \r          | Line Feed (Using \x##\ + Hex Character #) |


# Linux

* [A poem about Linux commands](/linux/)
* [GNU coreutils](https://www.gnu.org/software/coreutils/manual/html_node/index.html)
* [GNU emacs](https://www.gnu.org/software/emacs/documentation.html)
* [GNU grep](https://www.gnu.org/software/grep/manual/html_node/index.html)
* [GNU gzip](https://www.gnu.org/software/gzip/manual/html_node/index.html)
* [GNU nano](https://www.nano-editor.org/docs.php)
* [GNU tar](https://www.gnu.org/software/tar/manual/html_node/index.html)
* [GNU wget](https://www.gnu.org/software/wget/manual/html_node/index.html)

| Output, Summarize, or Hash Files     | Command                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| Write and concatenate files          | [`cat`](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html)         |
| Transform data into printable data   | [`base64`](https://www.gnu.org/software/coreutils/manual/html_node/base64-invocation.html)   |
| Output the first part of a file      | [`head`](https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html)       |
| Output the last part of a file       | [`tail`](https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html)       |
| Split a file into pieces             | [`split`](https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html)     |
| Print newline, word, and byte counts | [`wc`](https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html)           |
| Print or check MD5 digests           | [`md5sum`](https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html)   |
| Print or check SHA-1 digests         | [`sha1sum`](https://www.gnu.org/software/coreutils/manual/html_node/sha1sum-invocation.html) |

| Operating on File Contents/Sorting | Command                                                                                |
| -----------------------------------| -------------------------------------------------------------------------------------- |
| Sort text files                    | [`sort`](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html) |
| Shuffle text files                 | [`shuf`](https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html) |
| Uniquify files                     | [`uniq`](https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html) |
| Compare two sorted files by line   | [`comm`](https://www.gnu.org/software/coreutils/manual/html_node/comm-invocation.html) |
| Join lines on a common field       | [`join`](https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html) |
| Print a line of text               | [`echo`](https://www.gnu.org/software/coreutils/manual/html_node/echo-invocation.html) |

| Directory Listing and Operations                     | Command                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
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

| File Attribute Manipulation    | Command                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Change file owner and group    | [`chown`](https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html) |
| Change file group ownership    | [`chgrp`](https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html) |
| Change file access permissions | [`chmod`](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html) |
| Change file timestamp          | [`touch`](https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html) |

| File Name Manipulation                      | Command                                                                                        |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Strip directory and suffix from a file name | [`basename`](https://www.gnu.org/software/coreutils/manual/html_node/basename-invocation.html) |
| Strip last file name component              | [`dirname`](https://www.gnu.org/software/coreutils/manual/html_node/dirname-invocation.html)   |
| Check file name validity and portability    | [`pathchk`](https://www.gnu.org/software/coreutils/manual/html_node/pathchk-invocation.html)   |
| Print the resolved file name                | [`realpath`](https://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html) |

| Working Context                         | Command                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Print the current working directory     | [`pwd`](https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html)           |
| Print all or some environment variables | [`printenv`](https://www.gnu.org/software/coreutils/manual/html_node/printenv-invocation.html) |
| Run a command immune to hangups         | [`nohup`](https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html)       |
| Send a signal to a process              | [`kill`](https://www.gnu.org/software/coreutils/manual/html_node/kill-invocation.html)         |


# Python

## Guides

* [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
* [Python Package Index](https://pypi.org/)
* [Python Packaging User Guide](https://packaging.python.org/en/latest/)
  * [pyproject.toml specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/)

## Core Python Documentation

* [Status of Python Versions](https://devguide.python.org/versions/)
* [Python 3 Documentation (python.org)](https://docs.python.org/3/index.html)
* [Python Module Index](https://docs.python.org/3/py-modindex.html)
* [The Python Language Reference](https://docs.python.org/3/reference/index.html)
  * [Escape Sequences](https://docs.python.org/3/reference/lexical_analysis.html#escape-sequences)
  * [Falsey Values](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
  * [Format Strings](https://docs.python.org/3/library/string.html#formatstrings) / [Format Spec Mini-Language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
* [The Python Standard Library](https://docs.python.org/3/library/index.html)
  * [base64](https://docs.python.org/3/library/base64.html)
  * [collections.abc](https://docs.python.org/3/library/collections.abc.html)
  * [dataclasses](https://docs.python.org/3/library/dataclasses.html)
  * [datetime](https://docs.python.org/3/library/datetime.html) ([format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes))
  * [hashlib](https://docs.python.org/3/library/hashlib.html)
  * [json](https://docs.python.org/3/library/json.html)
  * [logging](https://docs.python.org/3/library/logging.html)
  * [mimetypes](https://docs.python.org/3/library/mimetypes.html)
  * [os](https://docs.python.org/3/library/os.html)
  * [os.path](https://docs.python.org/3/library/os.path.html)
  * [pathlib](https://docs.python.org/3/library/pathlib.html)
  * [re](https://docs.python.org/3/library/re.html)
  * [sqlite3](https://docs.python.org/3/library/sqlite3.html)
  * [string](https://docs.python.org/3/library/string.html)
  * [sys](https://docs.python.org/3/library/sys.html)
  * [typing](https://docs.python.org/3/library/typing.html)
  * [urllib.parse](https://docs.python.org/3/library/urllib.parse.html)
  * [venv](https://docs.python.org/3/library/venv.html)
* [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)
* [Built-in Functions](https://docs.python.org/3/library/functions.html)
* [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
  * [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)
  * [dict](https://docs.python.org/3/library/stdtypes.html#dict)
  * [list](https://docs.python.org/3/library/stdtypes.html#list)
  * [set](https://docs.python.org/3/library/stdtypes.html#set)
  * [str](https://docs.python.org/3/library/stdtypes.html#str) ([methods](https://docs.python.org/3/library/stdtypes.html#string-methods), [%-formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-bytes-formatting))
  * [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)
  * [TypedDict](https://docs.python.org/3/library/typing.html#typing.TypedDict)
  * [Context Manager](https://docs.python.org/3/library/stdtypes.html#context-manager-types)

## Environment/Dependency Management

* [pip](https://pip.pypa.io/en/stable/)
* [pipenv](https://pipenv.pypa.io/en/latest/)
* [pyenv-win](https://github.com/pyenv-win/pyenv-win)

## Code Analysis Tools

* [pytest](https://docs.pytest.org/)
* [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/index.html)
* [assertpy](https://github.com/assertpy/assertpy)
* [mypy](https://mypy.readthedocs.io/en/stable/index.html)
* [pylint](https://pylint.readthedocs.io/en/latest/)
* [pyflakes](https://github.com/PyCQA/pyflakes)
* [pycodestyle](https://pycodestyle.pycqa.org/en/latest/)
* [bandit](https://bandit.readthedocs.io/en/latest/)
* [checkov](https://www.checkov.io/)

## 3rd Party Libraries


* [IPython](https://ipython.readthedocs.io/en/stable/index.html)
  * [Built-in magic commands](https://ipython.readthedocs.io/en/stable/interactive/magics.html)
* [Jupyter](https://jupyter.org/)
  * [The Ultimate Markdown Guide (for Jupyter Notebook)](https://medium.com/analytics-vidhya/the-ultimate-markdown-guide-for-jupyter-notebook-d5e5abf728fd)
* [liquid template language (shopify.github.io)](https://shopify.github.io/liquid/)
* [localstack](https://github.com/localstack/localstack)
* [Moto]()(https://docs.getmoto.org/en/latest/#)
* [pandas](https://pandas.pydata.org/docs/index.html)
  * [API reference](https://pandas.pydata.org/docs/reference/index.html)
* [requests](https://requests.kennethreitz.org/en/latest/)
* [SQLAlchemy](https://www.sqlalchemy.org/)

## Misc

* [ralsina/rst-cheatsheet: A two-page cheatsheet for restructured text](https://github.com/ralsina/rst-cheatsheet)
* [pyWhat/pywhat/Data/regex.json](https://github.com/bee-san/pyWhat/blob/main/pywhat/Data/regex.json)

# Time Zones

|  P |  M |  C |  E |
| -- | -- | -- | -- |
| 10 | 11 | 12 |  1 |
| 11 | 12 |  1 |  2 |
| 12 |  1 |  2 |  3 |
|  1 |  2 |  3 |  4 |
|  2 |  3 |  4 |  5 |
|  3 |  4 |  5 |  6 |
|  4 |  5 |  6 |  7 |
|  5 |  6 |  7 |  8 |
|  6 |  7 |  8 |  9 |
|  7 |  8 |  9 | 10 |
|  8 |  9 | 10 | 11 |
|  9 | 10 | 11 | 12 |
