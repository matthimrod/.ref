---
title: Azure
permalink: /azure/
toc: true
classes: wide
---

<style>
  table tr:nth-child(even) { background-color: #f2f2f2 !important; }
  @media (prefers-color-scheme: dark) {
    table tr:nth-child(even) { background-color: #2d2d2d !important; }
  }
</style>

* [Azure Portal](https://portal.azure.com/)
* [Azure CLI Reference](https://learn.microsoft.com/en-us/cli/azure/)
  * [Azure CLI Installation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
* [Azure SDK for Python](https://github.com/Azure/azure-sdk-for-python)
  * [Python API overview](https://learn.microsoft.com/en-us/python/api/overview/azure/)
* [Azure REST API Reference](https://learn.microsoft.com/en-us/rest/api/azure/)
* [Terraform AzureRM Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
* [Azurite (local Storage emulator)](https://github.com/Azure/Azurite)

| Service                                                                                      | ≈ AWS                    | &nbsp;                                                                                                      | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | &nbsp;                                                                                                                                   |
| :------------------------------------------------------------------------------------------- | :----------------------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [API Management](https://azure.microsoft.com/en-us/products/api-management)                  | API Gateway              | [Docs](https://learn.microsoft.com/en-us/azure/api-management/)                                             | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/apim)                              | [REST](https://learn.microsoft.com/en-us/rest/api/apimanagement/)                           | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/api_management)                                     |
| [App Service](https://azure.microsoft.com/en-us/products/app-service)                        | App Runner / EB          | [Docs](https://learn.microsoft.com/en-us/azure/app-service/)                                                 | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/webapp)                            | [REST](https://learn.microsoft.com/en-us/rest/api/appservice/web-apps)                       | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_web_app)                                      |
| [Application Gateway](https://azure.microsoft.com/en-us/products/application-gateway)        | ALB                      | [Docs](https://learn.microsoft.com/en-us/azure/application-gateway/overview)                                 | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/network/application-gateway)       | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway)                                |
| [Application Insights](https://azure.microsoft.com/en-us/products/monitor)                   | X-Ray / CW APM           | [Docs](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)                      | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-query-readme)                                     | [CLI](https://learn.microsoft.com/en-us/cli/azure/monitor)                           | [REST](https://learn.microsoft.com/en-us/rest/api/monitor/)                                  | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_insights)                               |
| [Container Apps](https://azure.microsoft.com/en-us/products/container-apps)                  | ECS Fargate              | [Docs](https://learn.microsoft.com/en-us/azure/container-apps/)                                              | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/containerapp)                      | [REST](https://learn.microsoft.com/en-us/rest/api/containerapps/)                            | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_app)                                      |
| [Container Instances (ACI)](https://azure.microsoft.com/en-us/products/container-instances)  | Fargate (simple)         | [Docs](https://learn.microsoft.com/en-us/azure/container-instances/)                                         | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/container)                         | [REST](https://learn.microsoft.com/en-us/rest/api/container-instances/)                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_group)                                    |
| [Container Registry (ACR)](https://azure.microsoft.com/en-us/products/container-registry)    | ECR                      | [Docs](https://learn.microsoft.com/en-us/azure/container-registry/)                                          | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/acr)                               | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_registry)                                 |
| [Databricks](https://azure.microsoft.com/en-us/products/databricks)                          | &nbsp;                   | [Docs](https://learn.microsoft.com/en-us/azure/databricks/)                                                  | [Python](https://databricks-sdk-py.readthedocs.io/en/latest/)                                                                 | &nbsp;                                                                              | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/databricks_workspace)                               |
| * Databricks provider                                                                       | &nbsp;                   | &nbsp;                                                                                                      | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/databricks/databricks/latest/docs)                                                          |
| [Event Grid](https://azure.microsoft.com/en-us/products/event-grid)                          | EventBridge              | [Docs](https://learn.microsoft.com/en-us/azure/event-grid/)                                                  | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/eventgrid-readme)                                         | [CLI](https://learn.microsoft.com/en-us/cli/azure/eventgrid)                         | [REST](https://learn.microsoft.com/en-us/rest/api/eventgrid/)                                | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_topic)                                    |
| [Event Hubs](https://azure.microsoft.com/en-us/products/event-hubs)                          | Kinesis / MSK            | [Docs](https://learn.microsoft.com/en-us/azure/event-hubs/)                                                  | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/eventhub-readme)                                          | [CLI](https://learn.microsoft.com/en-us/cli/azure/eventhubs)                         | [REST](https://learn.microsoft.com/en-us/rest/api/eventhub/)                                 | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventhub_namespace)                                 |
| [Front Door](https://azure.microsoft.com/en-us/products/frontdoor)                           | CloudFront               | [Docs](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview)                                | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/afd)                               | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cdn_frontdoor_profile)                              |
| [Functions](https://azure.microsoft.com/en-us/products/functions)                            | Lambda                   | [Docs](https://learn.microsoft.com/en-us/azure/azure-functions/)                                             | [Python](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python)                                  | [CLI](https://learn.microsoft.com/en-us/cli/azure/functionapp)                       | [REST](https://learn.microsoft.com/en-us/rest/api/appservice/web-apps)                       | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_function_app)                                 |
| * Durable Functions                                                                         | Step Functions           | [Docs](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview)            | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | &nbsp;                                                                                                                                   |
| [Key Vault](https://azure.microsoft.com/en-us/products/key-vault)                            | Secrets Manager / SSM    | [Docs](https://learn.microsoft.com/en-us/azure/key-vault/)                                                   | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/keyvault-secrets-readme)                                  | [CLI](https://learn.microsoft.com/en-us/cli/azure/keyvault)                          | [REST](https://learn.microsoft.com/en-us/rest/api/keyvault/)                                 | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault)                                          |
| [Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/products/kubernetes-service)    | EKS                      | [Docs](https://learn.microsoft.com/en-us/azure/aks/)                                                         | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/aks)                               | [REST](https://learn.microsoft.com/en-us/rest/api/aks/)                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kubernetes_cluster)                                 |
| [Log Analytics](https://azure.microsoft.com/en-us/products/monitor)                          | CloudWatch Logs          | [Docs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview)                     | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-query-readme)                                     | [CLI](https://learn.microsoft.com/en-us/cli/azure/monitor)                           | [REST](https://learn.microsoft.com/en-us/rest/api/monitor/)                                  | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/log_analytics_workspace)                            |
| [Logic Apps](https://azure.microsoft.com/en-us/products/logic-apps)                          | Step Functions           | [Docs](https://learn.microsoft.com/en-us/azure/logic-apps/)                                                   | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/logic)                             | [REST](https://learn.microsoft.com/en-us/rest/api/logic/)                                    | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/logic_app_workflow)                                 |
| [Managed Identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview) | IAM role     | [Docs](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)         | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/identity-readme)                                          | [CLI](https://learn.microsoft.com/en-us/cli/azure/identity)                          | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/user_assigned_identity)                             |
| [Monitor](https://azure.microsoft.com/en-us/products/monitor)                                | CloudWatch               | [Docs](https://learn.microsoft.com/en-us/azure/azure-monitor/)                                               | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-query-readme)                                     | [CLI](https://learn.microsoft.com/en-us/cli/azure/monitor)                           | [REST](https://learn.microsoft.com/en-us/rest/api/monitor/)                                  | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_action_group)                               |
| [Service Bus](https://azure.microsoft.com/en-us/products/service-bus)                        | SQS / SNS                | [Docs](https://learn.microsoft.com/en-us/azure/service-bus-messaging/)                                       | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/servicebus-readme)                                       | [CLI](https://learn.microsoft.com/en-us/cli/azure/servicebus)                        | [REST](https://learn.microsoft.com/en-us/rest/api/servicebus/)                               | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_namespace)                               |
| * Service Bus Queue                                                                         | SQS                      | &nbsp;                                                                                                      | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_queue)                                   |
| * Service Bus Topic                                                                         | SNS                      | &nbsp;                                                                                                      | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_topic)                                   |
| [SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database)                | RDS                      | [Docs](https://learn.microsoft.com/en-us/azure/azure-sql/)                                                   | &nbsp;                                                                                                                        | [CLI](https://learn.microsoft.com/en-us/cli/azure/sql)                               | [REST](https://learn.microsoft.com/en-us/rest/api/sql/)                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/mssql_server)                                       |
| [Storage (Blob / ADLS Gen2)](https://azure.microsoft.com/en-us/products/storage/data-lake-storage) | S3                 | [Docs](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction)                 | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/storage-file-datalake-readme)                             | [CLI](https://learn.microsoft.com/en-us/cli/azure/storage)                           | [REST](https://learn.microsoft.com/en-us/rest/api/storageservices/)                          | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account)                                    |
| * Blob SDK                                                                                  | S3 SDK                   | [Docs](https://learn.microsoft.com/en-us/azure/storage/blobs/)                                                | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/storage-blob-readme)                                      | &nbsp;                                                                              | &nbsp;                                                                                      | &nbsp;                                                                                                                                   |
| * Data Lake filesystem                                                                      | S3                       | &nbsp;                                                                                                      | &nbsp;                                                                                                                        | &nbsp;                                                                              | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_data_lake_gen2_filesystem)                  |
| [Storage Queue](https://azure.microsoft.com/en-us/products/storage/queues)                   | SQS (basic)              | [Docs](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction)                   | [Python](https://learn.microsoft.com/en-us/python/api/overview/azure/storage-queue-readme)                                     | [CLI](https://learn.microsoft.com/en-us/cli/azure/storage/queue)                     | &nbsp;                                                                                      | [TF](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_queue)                                      |

## Databricks

* [Develop on Databricks](https://learn.microsoft.com/en-us/azure/databricks/developers/)
  * [Databricks SDK for Python](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/sdk-python)
    * [Documentation](https://databricks-sdk-py.readthedocs.io/en/latest/)
  * [Databricks Utilities](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/databricks-utils)
  * [Databricks SQL Language Reference](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/)

## AWS–Azure Secret Decoder Ring

Personal cheat sheet. Azure (and Databricks) is what this shop uses; AWS is the dialect I already speak. Add rows as we bump into them.

Format: **Azure / Databricks → AWS equivalent → notes / differences / our examples**.

## Messaging

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| Service Bus **queue** | SQS | Durable work queue, one producer → one consumer path. Peek-lock ≈ visibility timeout; DLQ is a subqueue. **Example:** MFT job broker enqueue (`mft-feed-launch-requests`). |
| Service Bus **topic** (+ subscriptions) | SNS | Pub/sub fan-out. Prefer a **queue** unless multiple independent subscribers need the same event. |
| Storage Queue | SQS (basic / cheap) | Simpler than Service Bus; fewer messaging features. Fine for very simple buffers; SB is what we already use in-repo. |
| `POST .../<queue>/messages` (SB REST) | SQS `SendMessage` (HTTPS) | REST send with SAS (Send-only) or Entra Bearer. No AMQP SDK required from GoAnywhere. |

```http
POST https://<namespace>.servicebus.windows.net/<queue>/messages
Authorization: SharedAccessSignature sr=...&sig=...&se=...&skn=<SendPolicy>
Content-Type: application/json

{"correlation_id":"...","event_type":"launch_requested"}
```

## Compute / workers

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| Azure Function | Lambda | Short-lived event worker. Common pattern: HTTP trigger that enqueues to Service Bus so GA doesn’t hold SB SDK/SAS complexity. |
| Function (durable) / Container Apps / App Service | ECS / EKS / EC2 | Longer-running consumers. **Example host for job broker:** Azure Function app *or* Databricks-hosted consumer — TBD with architecture. |
| **job-o-matic** (job broker program) | “the consumer” / worker service | `AuditWriter` + `LaunchOrchestrator` in one service. |
| Databricks Lakeflow Job | Batch / Step Functions task | Scheduled or triggered data processing. **Example:** feed jobs from `main.prd_ctl.job_display_names`. |

## Storage & data

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| ADLS Gen2 | S3 | Object/file landing. Paths look like `abfss://container@account.dfs.core.windows.net/...`. **Example:** `sftp-to-adls-monitor` / `sftp-to-adls-trigger` landings. |
| Databricks SQL + Unity Catalog Delta | Redshift / Athena + Glue | Analytical warehouse + catalog. |
| UC `prd_ctl.*` and/or Azure SQL | DynamoDB (app state) or RDS | Control/config tables. **Example:** `main.prd_ctl.job_display_names` (`display_name`, `job_name`). |
| UC logging / event tables | DynamoDB / Postgres (audit log) | Append-style ops audit. **Example (planned):** feed run events + `feed_launch_requests` with `attempt_count`. |

## Observability & events

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| Azure Monitor **Metrics** + **Alerts** | CloudWatch Metrics + Alarms | Platform/resource metrics and threshold alerts. |
| Log Analytics (Azure Monitor Logs) | CloudWatch Logs | Queryable log store (Kusto/KQL vs Logs Insights). App and infra logs often land here. |
| Application Insights | CloudWatch + X-Ray (APM slice) | App-level telemetry, traces, dependencies. Often paired with Functions / App Service. |
| Azure Workbooks / Dashboards | CloudWatch Dashboards | Ops visualization. **Our stack also:** Datadog (already wired for many Databricks jobs) + Lakeview for data dashboards. |
| Databricks job run UI / system tables | CloudWatch metrics for Batch/ECS tasks | Job success/fail, duration; not a full CloudWatch replacement—complement with Datadog/Monitor. |
| **Event Grid** | EventBridge (event bus / rules) | React to Azure resource or custom events; filter → Function / Service Bus / webhook. Closest “EventBridge rules” analogue. |
| Logic Apps / Durable Functions (schedules & workflows) | EventBridge Scheduler + some Step Functions | Cron/scheduled triggers and light orchestration. Event Grid is the bus; these are often the targets. |
| Service Bus (app messaging) | EventBridge *or* SQS (depending on use) | Don’t confuse with Event Grid: SB = your app’s work queue; Event Grid = reactive event routing across Azure. |

## Containers (Fargate-shaped options — AKS not required)

You do **not** need Azure Kubernetes Service for “run my container without managing servers.” AKS ≈ EKS (you operate the cluster control plane model). Fargate-like options:

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| **Azure Container Apps** | ECS on **Fargate** (closest) | Serverless containers, scale-to-zero, HTTP/event-driven, revisions. First place I’d look for a small always-on or scale-to-zero **job-o-matic** host if not using Functions. |
| Azure Container Instances (ACI) | Fargate (simpler / one-shot) | “Just run this container.” Less orchestration than Container Apps; good for bursts or simple workers. |
| App Service (Linux container) | Elastic Beanstalk / App Runner-ish | Web apps in a container with PaaS hosting. Slightly different product shape than Fargate. |
| Azure Functions (custom container) | Lambda container image | When the worker is event-shaped but you need a custom image. |
| **AKS** (Azure Kubernetes Service) | EKS (+ Fargate profile optional) | Full Kubernetes. Use when you need K8s ecosystem, many services, complex networking—not the default for a two-component job broker. |
| Databricks (Jobs / Apps compute) | “managed data compute” (no clean 1:1) | Not a general container platform; use for data/jobs. job-o-matic *can* live here, but Container Apps / Functions are the more classic microservice hosts. |

**Rule of thumb:** Lambda-shaped → **Functions**; Fargate-shaped → **Container Apps** (or ACI); EKS-shaped → **AKS**. Skip AKS until you have a real Kubernetes need.

## Identity & secrets

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| SAS / PAT | IAM access key | Long-lived keys — minimize. Prefer Send-only SAS for SB from GA if going direct REST. |
| Managed Identity / Entra app | IAM role / IRSA | Workload identity. Prefer over embedding keys in job-o-matic where possible. |
| Azure Key Vault | Secrets Manager / SSM Parameter Store | **Example here:** Databricks secret scopes like `*-ea-kv-data` (`service-bus-connection-str`, GA tokens, etc.). |

## Pattern: enqueue → retry → log

```text
producer  →  queue (Service Bus / SQS)  →  consumer
                                         ├─ bounded retries + backoff
                                         └─ write terminal result to log table
```

Same shape on either cloud. **Our example:** GoAnywhere publishes; job-o-matic consumes, launches Databricks feed jobs with Fibonacci backoff (30/30/60/90/150s), audits outcomes, Datadog on terminal failure.

## Scratch / to add later

| Azure / Databricks | AWS equivalent | Notes / differences / our examples |
|---|---|---|
| Event Hubs | Kinesis / MSK (Kafka) | High-throughput streaming ingest (different from Event Grid). |
| APIM | API Gateway | Fronting Functions / SB relay for GA. |
| Logic Apps / Durable Functions | Step Functions | Orchestration beyond simple queue+worker (also noted under events). |
| App Gateway / Front Door | ALB / CloudFront | Ingress / CDN — as needed. |
| Azure DevOps / GitHub Actions | CodePipeline / CodeBuild | CI/CD — fill in when packaging job-o-matic. |

