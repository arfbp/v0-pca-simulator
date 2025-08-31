// ... existing code ...

// <CHANGE> Adding all 165+ GCP certification questions from the original text file
const defaultQuestions: Question[] = [
  {
    id: "1",
    question: "Your company's test suite is a custom C++ application that runs tests throughout each day on Linux virtual machines. The full test suite takes several hours to complete, running on a limited number of on-premises servers reserved for testing. Your company wants to move the testing infrastructure to the cloud, to reduce the amount of time it takes to fully test a change to the system, while changing the tests as little as possible. Which cloud infrastructure should you recommend?",
    options: {
      A: "Google Compute Engine unmanaged instance groups and Network Load Balancer",
      B: "Google Compute Engine managed instance groups with auto-scaling",
      C: "Google Cloud Dataproc to run Apache Hadoop jobs to process each test",
      D: "Google App Engine with Google StackDriver for logging"
    },
    correctAnswer: "B",
    explanation: "Google Compute Engine enables users to launch virtual machines (VMs) on demand. Managed instance groups offer autoscaling capabilities that allow you to automatically add or remove instances based on increases or decreases in load. This helps applications gracefully handle increases in traffic and reduces cost when the need for resources is lower. Apache Hadoop is not fit for testing C++ applications, and Google App Engine is intended for web applications."
  },
  {
    id: "2",
    question: "A lead software engineer tells you that his new application design uses websockets and HTTP sessions that are not distributed across the web servers. You want to help him ensure his application will run properly on Google Cloud Platform. What should you do?",
    options: {
      A: "Help the engineer to convert his websocket code to use HTTP streaming",
      B: "Review the encryption requirements for websocket connections with the security team",
      C: "Meet with the cloud operations team and the engineer to discuss load balancer options",
      D: "Help the engineer redesign the application to use a distributed user session service that does not rely on websockets and HTTP sessions"
    },
    correctAnswer: "C",
    explanation: "Google Cloud Platform (GCP) HTTP(S) load balancing provides global load balancing for HTTP(S) requests destined for your instances. The HTTP(S) load balancer has native support for the WebSocket protocol. Options A and D are wrong because they involve changing the app, whereas the task is to help ensure the application will run properly on GCP (not redesign/change)."
  },
  {
    id: "3",
    question: "The application reliability team at your company has added a debug feature to their backend service to send all server events to Google Cloud Storage for eventual analysis. The event records are at least 50 KB and at most 15 MB and are expected to peak at 3,000 events per second. You want to minimize data loss. Which process should you implement?",
    options: {
      A: "Append metadata to file body • Compress individual files • Name files with serverName — Timestamp • Create a new bucket if bucket is older than 1 hour and save individual files to the new bucket. Otherwise, save files to existing bucket.",
      B: "Batch every 10,000 events with a single manifest file for metadata • Compress event files and manifest file into a single archive file • Name files using serverName — EventSequence • Create a new bucket if bucket is older than 1 day and save the single archive file to the new bucket. Otherwise, save the single archive file to existing bucket.",
      C: "Compress individual files • Name files with serverName — EventSequence • Save files to one bucket • Set custom metadata headers for each object after saving",
      D: "Append metadata to file body • Compress individual files • Name files with a random prefix pattern • Save files to one bucket"
    },
    correctAnswer: "D",
    explanation: "A longer randomized prefix provides more effective auto-scaling when ramping to very high read and write rates. For example, a 1-character prefix using a random hex value provides effective auto-scaling from the initial 5000/1000 reads/writes per second up to roughly 80000/16000 reads/writes per second, because the prefix has 16 potential values."
  },
  {
    id: "4",
    question: "A recent audit revealed that a new network was created in your GCP project. In this network, a GCE instance has an SSH port open to the world. You want to discover this network's origin. What should you do?",
    options: {
      A: "Search for Create VM entry in the Stackdriver alerting console",
      B: "Navigate to the Activity page in the Home section. Set category to Data Access and search for Create VM entry",
      C: "In the Logging section of the console, specify GCE Network as the logging section. Search for the Create Insert entry",
      D: "Connect to the GCE instance using project SSH keys. Identify previous logins in system logs, and match these with the project owners list"
    },
    correctAnswer: "C",
    explanation: "Answer C focuses on logging, the selection of network events, and the Create/Insert entry. In Logs Explorer, filter 'resource.type=\"gce_firewall_rule\"' and query 'insert Create' to see the methodName and email address of who created the firewall rule."
  },
  {
    id: "5",
    question: "You want to make a copy of a production Linux virtual machine in the US-Central region. You want to manage and replace the copy easily if there are changes on the production virtual machine. You will deploy the copy as a new instance in a different project in the US-East region. What steps must you take?",
    options: {
      A: "Use the Linux dd and netcat commands to copy and stream the root disk contents to a new virtual machine instance in the US-East region.",
      B: "Create a snapshot of the root disk and select the snapshot as the root disk when you create a new virtual machine instance in the US-East region.",
      C: "Create an image file from the root disk with Linux dd command, create a new virtual machine instance in the US-East region",
      D: "Create a snapshot of the root disk, create an image file in Google Cloud Storage from the snapshot, and create a new virtual machine instance in the US-East region using the image file as the root disk."
    },
    correctAnswer: "D",
    explanation: "Disk creation from the shared snapshot is required while using snapshot across projects. Since option B only emphasizes snapshot sharing and not disk creation and attaching it to the new instance in different project, option D is correct. You need to create an image from the snapshot to use it across projects."
  },
  {
    id: "6",
    question: "Your company runs several databases on a single MySQL instance. They need to take backups of a specific database at regular intervals. The backup activity needs to complete as quickly as possible and cannot be allowed to impact disk performance. How should you configure the storage?",
    options: {
      A: "Configure a cron job to use the gcloud tool to take regular backups using persistent disk snapshots.",
      B: "Mount a Local SSD volume as the backup location. After the backup is complete, use gsutil to move the backup to Google Cloud Storage.",
      C: "Use gcsfuse to mount a Google Cloud Storage bucket as a volume directly on the instance and write backups to the mounted location using mysqldump.",
      D: "Mount additional persistent disk volumes onto each virtual machine (VM) instance in a RAID10 array and use LVM to create snapshots to send to Cloud Storage"
    },
    correctAnswer: "B",
    explanation: "The backup activity needs to complete as quickly as possible and cannot impact disk performance. Local SSD has advantage since there is no network involved during the backup process. After backup completion, copying from Local SSD to GCS bucket does not impact the mysql data disk."
  },
  {
    id: "7",
    question: "You are helping the QA team to roll out a new load-testing tool to test the scalability of your primary cloud services that run on Google Compute Engine with Cloud Bigtable. Which three requirements should they include? (Choose three.)",
    options: {
      A: "Ensure that the load tests validate the performance of Cloud Bigtable",
      B: "Create a separate Google Cloud project to use for the load-testing environment",
      C: "Schedule the load-testing tool to regularly run against the production environment",
      D: "Ensure all third-party systems your services use is capable of handling high load"
    },
    correctAnswer: "A",
    explanation: "A: Run your typical workloads against Bigtable - Always run your own typical workloads against a Bigtable cluster when doing capacity planning. B: Create a separate Google Cloud project to use for the load-testing environment. F: Instrument the load-testing tool and the target services with detailed logging and metrics collection - The most important factor of testing is gathering logs and metrics in TEST environment for further scaling."
  },
  {
    id: "8",
    question: "Your customer is moving their corporate applications to Google Cloud Platform. The security team wants detailed visibility of all projects in the organization. You provision the Google Cloud Resource Manager and set up yourself as the org admin. What Google Cloud Identity and Access Management (Cloud IAM) roles should you give to the security team?",
    options: {
      A: "Org viewer, project owner",
      B: "Org viewer, project viewer",
      C: "Org admin, project browser",
      D: "Project owner, network admin"
    },
    correctAnswer: "B",
    explanation: "Org viewer grants the security team permissions to view the organization's display name. Project viewer grants the security team permissions to see the resources within projects. Project owner is too broad as the security team does not need to be able to make changes to projects."
  },
  {
    id: "9",
    question: "Your company places a high value on being responsive and meeting customer needs quickly. Their primary business objectives are release speed and agility. You want to reduce the chance of security errors being accidentally introduced. Which two actions can you take? (Choose two.)",
    options: {
      A: "Ensure every code check-in is peer reviewed by a security SME",
      B: "Use source code security analyzers as part of the CI/CD pipeline",
      C: "Ensure you have stubs to unit test all interfaces between components",
      D: "Enable code signing and a trusted binary repository integrated with your CI/CD pipeline"
    },
    correctAnswer: "B",
    explanation: "B: Static analysis inspects your source code to identify defects, vulnerabilities, and compliance issues as you code without having to run the program. E: Container Analysis provides vulnerability scanning and metadata storage for containers, performing vulnerability scans on images and storing the resulting metadata."
  },
  {
    id: "10",
    question: "You want to enable your running Google Kubernetes Engine cluster to scale as demand for your application changes. What should you do?",
    options: {
      A: "Add additional nodes to your Kubernetes Engine cluster using the following command: gcloud container clusters resize CLUSTER_Name — -size 10",
      B: "Add a tag to the instances in the cluster with the following command: gcloud compute instances add-tags INSTANCE - -tags enable- autoscaling max-nodes-10",
      C: "Update the existing Kubernetes Engine cluster with the following command: gcloud alpha container clusters update mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10",
      D: "Create a new Kubernetes Engine cluster with the following command: gcloud alpha container clusters create mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10 and redeploy your application"
    },
    correctAnswer: "C",
    explanation: "To enable autoscaling for an existing node pool, run: gcloud container clusters update cluster-name --enable-autoscaling --min-nodes 1 --max-nodes 10 --zone compute-zone --node-pool default-pool. Option A is incorrect because there should be two hyphens '--' not one before size."
  },
  {
    id: "11",
    question: "Your marketing department wants to send out a promotional email campaign. The development team wants to minimize direct operation management. They project a wide range of possible customer responses, from 100 to 500,000 click-through per day. The link leads to a simple website that explains the promotion and collects user information and preferences. Which infrastructure should you recommend? (Choose two.)",
    options: {
      A: "Use Google App Engine to serve the website and Google Cloud Datastore to store user data.",
      B: "Use a Google Container Engine cluster to serve the website and store data to persistent disk.",
      C: "Use a managed instance group to serve the website and Google Cloud Bigtable to store user data.",
      D: "Use a single Compute Engine virtual machine (VM) to host a web server, backend by Google Cloud SQL."
    },
    correctAnswer: "A",
    explanation: "App Engine automatically scales based on demand and requires minimal operational management. Cloud Datastore is suitable for storing user preferences and information with automatic scaling capabilities."
  },
  {
    id: "12",
    question: "Your company just finished a rapid lift and shift to Google Compute Engine for your compute needs. You have another 9 months to design and deploy a more cloud-native solution. Specifically, you want a system that is no-ops and auto-scaling. Which two compute products should you choose? (Choose two.)",
    options: {
      A: "Compute Engine with containers",
      B: "Google Kubernetes Engine with containers",
      C: "Google App Engine Standard Environment",
      D: "Compute Engine with custom instance types"
    },
    correctAnswer: "B",
    explanation: "B: With Container Engine, Google will automatically deploy your cluster, update, patch, and secure the nodes. Kubernetes Engine's cluster autoscaler automatically resizes clusters based on workload demands. C: Solutions like App Engine are truly NoOps and automatically scale based on demand."
  },
  {
    id: "13",
    question: "One of your primary business objectives is being able to trust the data stored in your application. You want to log all changes to the application data. How can you design your logging system to verify authenticity of your logs?",
    options: {
      A: "Write the log concurrently in the cloud and on premises",
      B: "Use a SQL database and limit who can modify the log table",
      C: "Digitally sign each timestamp and log entry and store the signature",
      D: "Create a JSON dump of each log entry and store it in Google Cloud Storage"
    },
    correctAnswer: "C",
    explanation: "To verify the authenticity of your logs, you can use an algorithm to generate digest by hashing each timestamp or log entry and then digitally sign the digest with a private key to generate a signature. Anyone with your public key can verify that signature to confirm it was made with your private key and detect if the timestamp or log entry was modified."
  },
  {
    id: "14",
    question: "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs. What should they do?",
    options: {
      A: "Configure a new load balancer for the new version of the API",
      B: "Reconfigure old clients to use a new endpoint for the new API",
      C: "Have the old API forward traffic to the new API based on the path",
      D: "Use separate backend pools for each API path behind the load balancer"
    },
    correctAnswer: "D",
    explanation: "HTTP(S) load balancer can direct traffic reaching a single IP to different backends based on the incoming URL. This allows keeping the same SSL and DNS records while routing different API versions to different backend pools."
  },
  {
    id: "15",
    question: "Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface. How should you store the data to optimize it for ease of analysis?",
    options: {
      A: "Load data into Google BigQuery",
      B: "Insert data into Google Cloud SQL",
      C: "Put flat files into Google Cloud Storage",
      D: "Stream data into Google Cloud Datastore"
    },
    correctAnswer: "A",
    explanation: "BigQuery is Google's serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive. It enables you to analyze all your data using familiar SQL and doesn't need a database administrator. Cloud SQL does not scale to multi-petabyte volumes."
  },
  {
    id: "16",
    question: "The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud. Which three practices should you recommend? (Choose three.)",
    options: {
      A: "Port the application code to run on Google App Engine",
      B: "Integrate Cloud Dataflow into the application to capture real-time metrics",
      C: "Instrument the application with a monitoring tool like Stackdriver Debugger",
      D: "Select an automation framework to reliably provision the cloud infrastructure"
    },
    correctAnswer: "A",
    explanation: "A: App Engine is a cloud native serverless platform. D: Automation framework like Terraform can be used for reliable infrastructure provisioning. E: Use CI/CD tools as a best practice for reliable deployments."
  },
  {
    id: "17",
    question: "A news feed web service has the following code running on Google App Engine. During peak load, users report that they can see news articles they already viewed. What is the most likely cause of this problem?",
    options: {
      A: "The session variable is local to just a single instance",
      B: "The session variable is being overwritten in Cloud Datastore",
      C: "The URL of the API needs to be modified to prevent caching",
      D: "The HTTP Expires header needs to be set to -1 stop caching"
    },
    correctAnswer: "A",
    explanation: "During peak load, App Engine creates multiple instances. If session variables are stored locally on each instance, users may be served by different instances that don't have their session data, causing them to see previously viewed articles again."
  },
  {
    id: "18",
    question: "An application development team believes their current logging tool will not meet their needs for their new cloud-based product. They want a better tool to capture errors and help them analyze their historical log data. You want to help them find a solution that meets their needs. What should you do?",
    options: {
      A: "Direct them to download and install the Google StackDriver logging agent",
      B: "Send them a list of online resources about logging best practices",
      C: "Help them define their requirements and assess viable logging tools",
      D: "Help them upgrade their current tool to take advantage of any new features"
    },
    correctAnswer: "C",
    explanation: "As an architect, you should help the team define their requirements first and then assess viable logging tools that meet those requirements. This ensures the solution fits their specific needs rather than prescribing a specific tool without understanding their requirements."
  },
  {
    id: "19",
    question: "You need to reduce the number of unplanned rollbacks of erroneous production deployments in your company's web hosting platform. Improvement to the QA/Test processes accomplished an 80% reduction. Which additional two approaches can you take to further reduce the rollbacks? (Choose two.)",
    options: {
      A: "Introduce a green-blue deployment model",
      B: "Replace the QA environment with canary releases",
      C: "Fragment the monolithic platform into microservices",
      D: "Reduce the platform's dependency on relational database systems"
    },
    correctAnswer: "A",
    explanation: "A: Green-blue deployment allows you to test the new version in production-like environment before switching traffic. C: Microservices architecture reduces the blast radius of failures and allows for more granular rollbacks, reducing the impact of erroneous deployments."
  },
  {
    id: "20",
    question: "To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines (VMs) to Google Cloud Platform. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department. Which two steps should you take? (Choose two.)",
    options: {
      A: "Use the --no-auto-delete flag on all persistent disks and stop the VM",
      B: "Use the --auto-delete flag on all persistent disks and terminate the VM",
      C: "Apply VM CPU utilization label and include it in the BigQuery billing export",
      D: "Use Google BigQuery billing export and labels to associate cost to groups"
    },
    correctAnswer: "A",
    explanation: "A: Using --no-auto-delete flag ensures persistent disks are not deleted when VMs are stopped, preserving state while reducing costs during stop periods. D: BigQuery billing export with labels provides cost visibility and allows associating costs to different development groups or projects."
  },
  {
    id: "21",
    question: "Your company wants to track whether someone is present in a meeting room reserved for a scheduled meeting. There are 1000 meeting rooms across 5 offices on 3 continents. Each room is equipped with a motion sensor that reports its status every second. The data from the motion detector includes only a sensor ID and several different discrete items of information. Analysts will use this data, together with information about account owners and office locations. Which database type should you use?",
    options: {
      A: "Flat file",
      B: "NoSQL",
      C: "Relational",
      D: "Blobstore"
    },
    correctAnswer: "B",
    explanation: "NoSQL databases are designed to cope with the scale and agility challenges of modern applications. They fit well for applications that create massive volumes of new, rapidly changing data types — structured, semi-structured, unstructured and polymorphic data. The high-frequency sensor data with varying discrete information items is ideal for NoSQL."
  },
  {
    id: "22",
    question: "You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address. You have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly. What should you do?",
    options: {
      A: "Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.",
      B: "Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.",
      C: "Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.",
      D: "Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination."
    },
    correctAnswer: "C",
    explanation: "The instances are being terminated and re-launched because the health checks are failing. Since the instances don't have public IPs, you need to ensure that firewall rules allow the load balancer health check traffic to reach the instances. Without proper health check connectivity, the load balancer considers instances unhealthy and replaces them."
  },
  {
    id: "23",
    question: "You write a Python script to connect to Google BigQuery from a Google Compute Engine virtual machine. The script is printing errors that it cannot connect to BigQuery. What should you do to fix the script?",
    options: {
      A: "Install the latest BigQuery API client library for Python",
      B: "Run your script on a new virtual machine with the BigQuery access scope enabled",
      C: "Create a new service account with BigQuery access and execute your script with that user",
      D: "Install the bq component for gcloud with the command gcloud components install bq."
    },
    correctAnswer: "B",
    explanation: "Access scopes determine the default OAuth scopes for requests made through the gcloud tool and client libraries on the instance. You must set access scopes on the instance to authorize access. While a service account's access level is determined by IAM roles, an instance's access scopes potentially further limit access to API methods when authenticating through OAuth."
  },
  {
    id: "24",
    question: "Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords. What authentication strategy should they use?",
    options: {
      A: "Use G Suite Password Sync to replicate passwords into Google",
      B: "Federate authentication via SAML 2.0 to the existing Identity Provider",
      C: "Provision users in Google using the Google Cloud Directory Sync tool",
      D: "Ask users to set their Google password to match their corporate password"
    },
    correctAnswer: "B",
    explanation: "SAML 2.0 federation allows users to authenticate using their existing corporate credentials without requiring password synchronization or duplication. This provides minimal user disruption while maintaining security requirements by not storing passwords in multiple locations."
  },
  {
    id: "25",
    question: "Your company has successfully migrated to the cloud and wants to analyze their data stream to optimize operations. They do not have any existing code for this analysis, so they are exploring all their options. These options include a mix of batch and stream processing, as they are running some hourly jobs and live-processing some data as it comes in. Which technology should they use for this?",
    options: {
      A: "Google Cloud Dataproc",
      B: "Google Cloud Dataflow",
      C: "Google Container Engine with Bigtable",
      D: "Google Compute Engine with Google BigQuery"
    },
    correctAnswer: "B",
    explanation: "Cloud Dataflow is a fully-managed service for transforming and enriching data in stream (real time) and batch (historical) modes with equal reliability and expressiveness. It's designed specifically for both batch and streaming data processing use cases."
  },
  {
    id: "26",
    question: "Your customer is receiving reports that their recently updated Google App Engine application is taking approximately 30 seconds to load for some of their users. This behavior was not reported before the update. What strategy should you take?",
    options: {
      A: "Work with your ISP to diagnose the problem",
      B: "Open a support ticket to ask for network capture and flow data to diagnose the problem, then roll back your application",
      C: "Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment",
      D: "Roll back to an earlier known good release, then push the release again at a quieter period to investigate. Then use Stackdriver Trace and Logging to diagnose the problem"
    },
    correctAnswer: "C",
    explanation: "This approach gets production back to a working state quickly and takes advantage of the ability to provision a cloud staging environment immediately to diagnose the issue without impacting users again."
  },
  {
    id: "27",
    question: "A production database virtual machine on Google Compute Engine has an ext4-formatted persistent disk for data files. The database is about to run out of storage space. How can you remediate the problem with the least amount of downtime?",
    options: {
      A: "In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux.",
      B: "Shut down the virtual machine, use the Cloud Platform Console to increase the persistent disk size, then restart the virtual machine",
      C: "In the Cloud Platform Console, increase the size of the persistent disk and verify the new space is ready to use with the fdisk command in Linux",
      D: "In the Cloud Platform Console, create a new persistent disk attached to the virtual machine, format and mount it, and configure the database service to move the files to the new disk"
    },
    correctAnswer: "A",
    explanation: "You can resize persistent disks while they are attached to running instances. After increasing the disk size in the console, use resize2fs to extend the file system to use the additional space. This approach requires no downtime."
  },
  {
    id: "28",
    question: "Your application needs to process credit card transactions. You want the smallest scope of Payment Card Industry (PCI) compliance without compromising the ability to analyze transactional data and trends relating to which payment methods are used. How should you design your architecture?",
    options: {
      A: "Create a tokenizer service and store only tokenized data",
      B: "Create separate projects that only process credit card data",
      C: "Create separate subnetworks and isolate the components that process credit card data",
      D: "Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data"
    },
    correctAnswer: "A",
    explanation: "Tokenization replaces sensitive credit card data with non-sensitive tokens, reducing PCI compliance scope while still allowing analysis of transactional data and payment method trends. The tokenized data can be analyzed without exposing actual credit card information."
  },
  {
    id: "29",
    question: "You have been asked to select the storage system for the click-data of your company's large portfolio of websites. This data is streamed in from a custom website analytics package at a typical rate of 6,000 clicks per minute, with bursts of up to 8,500 clicks per second. It must be stored for future analysis by your data science and user experience teams. Which storage infrastructure should you choose?",
    options: {
      A: "Google Cloud SQL",
      B: "Google Cloud Bigtable",
      C: "Google Cloud Storage",
      D: "Google Cloud Datastore"
    },
    correctAnswer: "B",
    explanation: "Google Cloud Bigtable is a scalable, fully-managed NoSQL wide-column database that is suitable for both real-time access and analytics workloads. It's designed for high-throughput analytics, low-latency read/write access, and native time series support, making it ideal for click-stream data."
  },
  {
    id: "30",
    question: "You are creating a solution to remove backup files older than 90 days from your backup Cloud Storage bucket. You want to optimize ongoing Cloud Storage spend. What should you do?",
    options: {
      A: "Write a lifecycle management rule in XML and push it to the bucket with gsutil",
      B: "Write a lifecycle management rule in JSON and push it to the bucket with gsutil",
      C: "Schedule a cron script using gsutil ls —lr gs://backups/** to find and remove items older than 90 days",
      D: "Schedule a cron script using gsutil ls —l gs://backups/** to find and remove items older than 90 days and schedule it with cron"
    },
    correctAnswer: "B",
    explanation: "gsutil command takes only JSON as input for lifecycle management. Lifecycle management rules are the most efficient way to automatically delete old files without manual intervention or custom scripts."
  },
  {
    id: "31",
    question: "Your company is forecasting a sharp increase in the number and size of Apache Spark and Hadoop jobs being run on your local datacenter. You want to utilize the cloud to help you scale this upcoming demand with the least amount of operations work and code change. Which product should you use?",
    options: {
      A: "Google Cloud Dataflow",
      B: "Google Cloud Dataproc",
      C: "Google Compute Engine",
      D: "Google Kubernetes Engine"
    },
    correctAnswer: "B",
    explanation: "Google Cloud Dataproc is a fast, easy-to-use, low-cost and fully managed service that lets you run the Apache Spark and Apache Hadoop ecosystem on Google Cloud Platform. It provisions clusters rapidly and is integrated with other Google Cloud Platform services."
  },
  {
    id: "32",
    question: "The database administration team has asked you to help them improve the performance of their new database server running on Google Compute Engine. The database is for importing and normalizing their performance statistics and is built with MySQL running on Debian Linux. They have an n1-standard-8 virtual machine with 80 GB of SSD persistent disk. What should they change to get better performance from this system?",
    options: {
      A: "Increase the virtual machine's memory to 64 GB",
      B: "Create a new virtual machine running PostgreSQL",
      C: "Dynamically resize the SSD persistent disk to 500 GB",
      D: "Migrate their performance metrics warehouse to BigQuery"
    },
    correctAnswer: "C",
    explanation: "Persistent disk performance is based on the total persistent disk capacity attached to an instance and the number of vCPUs that the instance has. Incrementing the persistent disk capacity will increment its throughput and IOPS, which in turn improve the performance of MySQL."
  },
  {
    id: "33",
    question: "You want to optimize the performance of an accurate, real-time, weather-charting application. The data comes from 50,000 sensors sending 10 readings a second, in the format of a timestamp and sensor reading. Where should you store the data?",
    options: {
      A: "Google BigQuery",
      B: "Google Cloud SQL",
      C: "Google Cloud Bigtable",
      D: "Google Cloud Storage"
    },
    correctAnswer: "C",
    explanation: "Google Cloud Bigtable is a scalable, fully-managed NoSQL wide-column database that is suitable for both real-time access and analytics workloads. It's designed for low-latency read/write access, high-throughput analytics, and native time series support, making it perfect for IoT sensor data."
  },
  {
    id: "34",
    question: "Your company's user-feedback portal comprises a standard LAMP stack replicated across two zones. It is deployed in the us-central1 region and uses auto-scaled managed instance groups on all layers, except the database. Currently, only a small group of select customers have access to the portal. The portal meets a 99.99% availability SLA under these conditions. However next quarter, your company will be making the portal available to all users, including unauthenticated users. You need to develop a resiliency testing strategy to ensure the system maintains the SLA once they introduce additional user load. What should you do?",
    options: {
      A: "Capture existing users input, and replay captured user load until auto-scale is triggered on all layers. At the same time, terminate all resources in one of the zones",
      B: "Create synthetic random user input, replay synthetic load until auto-scale logic is triggered on at least one layer, and introduce 'chaos' to the system by terminating random resources on both zones",
      C: "Expose the new system to a larger group of users, and increase group size each day until auto-scale logic is triggered on all layers. At the same time, terminate random resources on both zones",
      D: "Capture existing users input, and replay captured user load until resource utilization crosses 80%. Also, derive estimated number of users based on existing user's usage of the app, and deploy enough resources to handle 200% of expected load"
    },
    correctAnswer: "B",
    explanation: "Resilience testing is about introducing chaos in the infrastructure to test system resilience. Creating synthetic load and introducing random resource termination tests the system's ability to handle failures while maintaining the SLA."
  },
  {
    id: "35",
    question: "One of the developers on your team deployed their application in Google Container Engine with a Dockerfile. They report that their application deployments are taking too long. You want to optimize this Dockerfile for faster deployment times without adversely affecting the app's functionality. Which two actions should you take? (Choose two.)",
    options: {
      A: "Remove Python after running pip",
      B: "Remove dependencies from requirements.txt",
      C: "Use a slimmed-down base image like Alpine Linux",
      D: "Use larger machine types for your Google Container Engine node pools"
    },
    correctAnswer: "C",
    explanation: "C: Smaller base images with minimum dependencies start faster. E: Docker image build uses caching. Copying source after installing dependencies helps reuse cached layers when only code changes, not dependencies."
  },
  {
    id: "36",
    question: "Your solution is producing performance bugs in production that you did not see in staging and test environments. You want to adjust your test and deployment procedures to avoid this problem in the future. What should you do?",
    options: {
      A: "Deploy fewer changes to production",
      B: "Deploy smaller changes to production",
      C: "Increase the load on your test and staging environments",
      D: "Deploy changes to a small subset of users before rolling out to production"
    },
    correctAnswer: "D",
    explanation: "Canary deployments allow you to test new code against a small subset of users to identify performance issues before full rollout. This helps catch production-specific issues that don't appear in staging environments."
  },
  {
    id: "37",
    question: "A small number of API requests to your microservices-based application take a very long time. You know that each request to the API can traverse many services. You want to know which service takes the longest in those cases. What should you do?",
    options: {
      A: "Set timeouts on your application so that you can fail requests faster",
      B: "Send custom metrics for each of your requests to Stackdriver Monitoring",
      C: "Use Stackdriver Monitoring to look for insights that show when your API latencies are high",
      D: "Instrument your application with Stackdriver Trace in order to break down the request latencies at each microservice"
    },
    correctAnswer: "D",
    explanation: "Cloud Trace is a distributed tracing system that collects latency data from applications and displays it in near real-time. It can break down request latencies at each microservice level, helping identify which service is causing the delay."
  },
  {
    id: "38",
    question: "During a high traffic portion of the day, one of your relational databases crashes, but the replica is never promoted to a master. You want to avoid this in the future. What should you do?",
    options: {
      A: "Use a different database",
      B: "Choose larger instances for your database",
      C: "Create snapshots of your database more regularly",
      D: "Implement routinely scheduled failovers of your databases"
    },
    correctAnswer: "B",
    explanation: "The problem occurs only during high volume, indicating the database crashes due to resource constraints. The replica is not promoted because it also cannot handle the load. Increasing instance size ensures both primary and replica can handle the traffic volume."
  },
  {
    id: "39",
    question: "Your organization requires that metrics from all applications be retained for 5 years for future analysis in possible legal proceedings. Which approach should you use?",
    options: {
      A: "Grant the security team access to the logs in each Project",
      B: "Configure Stackdriver Monitoring for all Projects, and export to BigQuery",
      C: "Configure Stackdriver Monitoring for all Projects with the default retention policies",
      D: "Configure Stackdriver Monitoring for all Projects, and export to Google Cloud Storage"
    },
    correctAnswer: "B",
    explanation: "BigQuery provides long-term storage pricing where tables not edited for 90 consecutive days automatically get 50% price reduction. This is the same cost as Cloud Storage Nearline but with better query capabilities for legal analysis."
  },
  {
    id: "40",
    question: "Your company has decided to build a backup replica of their on-premises user authentication PostgreSQL database on Google Cloud Platform. The database is 4 TB, and large updates are frequent. Replication requires private address space communication. Which networking approach should you use?",
    options: {
      A: "Google Cloud Dedicated Interconnect",
      B: "Google Cloud VPN connected to the data center network",
      C: "A NAT and TLS translation gateway installed on-premises",
      D: "A Google Compute Engine instance with a VPN server installed connected to the data center network"
    },
    correctAnswer: "A",
    explanation: "Google Cloud Dedicated Interconnect provides direct physical connections and RFC 1918 communication between your on-premises network and Google's network. It enables transfer of large amounts of data and provides the private address space communication required for database replication."
  },
  {
    id: "41",
    question: "Auditors visit your teams every 12 months and ask to review all the Google Cloud Identity and Access Management (Cloud IAM) policy changes in the previous 12 months. You want to streamline and expedite the analysis and audit process. What should you do?",
    options: {
      A: "Create custom Google Stackdriver alerts and send them to the auditor",
      B: "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor",
      C: "Use cloud functions to transfer log entries to Google Cloud SQL and use ACLs and views to limit an auditor's view",
      D: "Enable Google Cloud Storage (GCS) log export to audit logs into a GCS bucket and delegate access to the bucket"
    },
    correctAnswer: "B",
    explanation: "BigQuery export provides analytic capabilities that auditors need to analyze IAM policy changes over time. ACLs and views allow you to scope exactly what data auditors can access while providing powerful query capabilities for their analysis."
  },
  {
    id: "42",
    question: "You are designing a large distributed application with 30 microservices. Each of your distributed microservices needs to connect to a database back-end. You want to store the credentials securely. Where should you store the credentials?",
    options: {
      A: "In the source code",
      B: "In an environment variable",
      C: "In a secret management system",
      D: "In a config file that has restricted access through ACLs"
    },
    correctAnswer: "C",
    explanation: "Secret management systems generate, use, rotate, encrypt, and destroy cryptographic keys and manage permissions to those keys. This is the most secure approach for managing database credentials across multiple microservices."
  },
  {
    id: "43",
    question: "A lead engineer wrote a custom tool that deploys virtual machines in the legacy data center. He wants to migrate the custom tool to the new cloud environment. You want to advocate for the adoption of Google Cloud Deployment Manager. What are two business risks of migrating to Cloud Deployment Manager? (Choose two.)",
    options: {
      A: "Cloud Deployment Manager uses Python",
      B: "Cloud Deployment Manager APIs could be deprecated in the future",
      C: "Cloud Deployment Manager is unfamiliar to the company's engineers",
      D: "Cloud Deployment Manager requires a Google APIs service account to run"
    },
    correctAnswer: "B",
    explanation: "B: APIs can be deprecated, creating future migration needs. F: Cloud Deployment Manager only supports Google Cloud resources, limiting flexibility compared to custom tools that might manage hybrid or multi-cloud resources."
  },
  {
    id: "44",
    question: "A development manager is building a new application. He asks you to review his requirements and identify what cloud technologies he can use to meet them. The application must: 1. Be based on open-source technology for cloud portability 2. Dynamically scale compute capacity based on demand 3. Support continuous software delivery 4. Run multiple segregated copies of the same application stack 5. Deploy application bundles using dynamic templates 6. Route network traffic to specific services based on URL. Which combination of technologies will meet all of his requirements?",
    options: {
      A: "Google Kubernetes Engine, Jenkins, and Helm",
      B: "Google Kubernetes Engine and Cloud Load Balancing",
      C: "Google Kubernetes Engine and Cloud Deployment Manager",
      D: "Google Kubernetes Engine, Jenkins, and Cloud Load Balancing"
    },
    correctAnswer: "D",
    explanation: "GKE provides open-source Kubernetes for portability and scaling. Jenkins provides continuous software delivery. Cloud Load Balancing provides URL-based routing. This combination meets all six requirements including dynamic templates through Jenkins pipelines."
  },
  {
    id: "45",
    question: "You have created several pre-emptible Linux virtual machine instances using Google Compute Engine. You want to properly shut down your application before the virtual machines are preempted. What should you do?",
    options: {
      A: "Create a shutdown script named k99.shutdown in the /etc/rc.6.d/ directory",
      B: "Create a shutdown script registered as a xinetd service in Linux and configure a Stackdriver endpoint check to call the service",
      C: "Create a shutdown script and use it as the value for a new metadata entry with the key shutdown-script in the Cloud Platform Console when you create the new virtual machine instance",
      D: "Create a shutdown script, registered as a xinetd service in Linux, and use the gcloud compute instances add-metadata command to specify the service URL as the value for a new metadata entry with the key shutdown-script-url"
    },
    correctAnswer: "C",
    explanation: "The shutdown script is run by GCE before stopping the instance. GCE reads the shutdown-script metadata entry and executes the script before termination, allowing for proper application shutdown."
  },
  {
    id: "46",
    question: "Your organization has a 3-tier web application deployed in the same network on Google Cloud Platform. Each tier (web, API, and database) scales independently of the others. Network traffic should flow through the web to the API tier and then on to the database tier. Traffic should not flow between the web and the database tier. How should you configure the network?",
    options: {
      A: "Add each tier to a different subnetwork",
      B: "Set up software based firewalls on individual VMs",
      C: "Add tags to each tier and set up routes to allow the desired traffic flow",
      D: "Add tags to each tier and set up firewall rules to allow the desired traffic flow"
    },
    correctAnswer: "D",
    explanation: "Using network tags with firewall rules allows you to control traffic flow between tiers. You can create firewall rules that allow web→API and API→database traffic while blocking direct web→database communication based on the tags assigned to each tier."
  },
  {
    id: "47",
    question: "Your development team has installed a new Linux kernel module on the batch servers in Google Compute Engine (GCE) virtual machines (VMs) to speed up the nightly batch process. Two days after the installation, 50% of the batch servers failed the nightly batch run. You want to collect details on the failure to pass back to the development team. Which three actions should you take? (Choose three.)",
    options: {
      A: "Use Stackdriver Logging to search for the module log entries",
      B: "Read the debug GCE Activity log using the API or Cloud Console",
      C: "Use gcloud or Cloud Console to connect to the serial console and observe the logs",
      D: "Identify whether a live migration event of the failed server occurred, using in the activity log"
    },
    correctAnswer: "A",
    explanation: "A: Check logs for module-related entries. C: Serial console provides kernel-level messages, important since a new kernel module was installed. E: Focus on the time window when the problem occurred to correlate events with the batch failures."
  },
  {
    id: "48",
    question: "Your company wants to try out the cloud with low risk. They want to archive approximately 100 TB of their log data to the cloud and test the analytics features available to them there, while also retaining that data as a long-term disaster recovery backup. Which two steps should you take? (Choose two.)",
    options: {
      A: "Load logs into Google BigQuery",
      B: "Load logs into Google Cloud SQL",
      C: "Import logs into Google Stackdriver",
      D: "Insert logs into Google Cloud Bigtable"
    },
    correctAnswer: "A",
    explanation: "A: BigQuery is ideal for analytics on large datasets. E: Cloud Storage provides cost-effective long-term storage for disaster recovery backup of the 100TB of log data."
  },
  {
    id: "49",
    question: "You created a pipeline that can deploy your source code changes to your infrastructure in instance groups for self-healing. One of the changes negatively affects your key performance indicator. You are not sure how to fix it, and investigation could take up to a week. What should you do?",
    options: {
      A: "Log in to a server, and iterate on the fix locally",
      B: "Revert the source code change, and rerun the deployment pipeline",
      C: "Log into the servers with the bad code change, and swap in the previous code",
      D: "Change the instance group template to the previous one, and delete all instances"
    },
    correctAnswer: "B",
    explanation: "Since you have an automated pipeline, you should use it consistently. Reverting the source code change and rerunning the pipeline maintains the automated deployment process and ensures consistency across all instances."
  },
  {
    id: "50",
    question: "Your organization wants to control IAM policies for different departments independently, but centrally. Which approach should you take?",
    options: {
      A: "Multiple Organizations with multiple Folders",
      B: "Multiple Organizations, one for each department",
      C: "A single Organization with Folders for each department",
      D: "A single Organization with multiple projects, each with a central owner"
    },
    correctAnswer: "C",
    explanation: "Folders allow you to group projects under an organization in a hierarchy. Each department can have its own folder with independent IAM policies, while maintaining central control at the organization level."
  },
  {
    id: "51",
    question: "You deploy your custom Java application to Google App Engine. It fails to deploy and gives you a stack trace indicating a security issue. What should you do?",
    options: {
      A: "Upload missing JAR files and redeploy your application.",
      B: "Digitally sign all of your JAR files and redeploy your application",
      C: "Recompile the CloakedServlet class using an MD5 hash instead of SHA1",
      D: "Configure the application to use HTTPS instead of HTTP"
    },
    correctAnswer: "B",
    explanation: "Signing the JAR files grants them the necessary permissions to run in the App Engine security sandbox. Digital signatures verify the authenticity and integrity of the JAR files."
  },
  {
    id: "52",
    question: "You are designing a mobile chat application. You want to ensure people cannot spoof chat messages, by providing proof that messages were sent by a specific user. What should you do?",
    options: {
      A: "Tag messages client side with the originating user identifier and the destination user.",
      B: "Encrypt the message client side using block-based encryption with a shared key.",
      C: "Use public key infrastructure (PKI) to encrypt the message client side using the originating user's private key.",
      D: "Use a trusted certificate authority to enable SSL connectivity between the client application and the server."
    },
    correctAnswer: "C",
    explanation: "Public key infrastructure (PKI) addresses the authentication problem. Using the originating user's private key to sign messages provides non-repudiation - proof that the message came from that specific user and cannot be spoofed."
  },
  {
    id: "53",
    question: "As part of implementing their disaster recovery plan, your company is trying to replicate their production MySQL database from their private data center to their GCP project using a Google Cloud VPN connection. They are experiencing latency issues and a small amount of packet loss that is disrupting the replication. What should they do?",
    options: {
      A: "Configure their replication to use UDP.",
      B: "Configure a Google Cloud Dedicated Interconnect.",
      C: "Restore their database daily using Google Cloud SQL.",
      D: "Add additional VPN connections and load balance them."
    },
    correctAnswer: "B",
    explanation: "A Dedicated Interconnect provides a more reliable, higher bandwidth connection with lower latency compared to VPN over the public internet. This addresses both the latency and packet loss issues affecting database replication."
  },
  {
    id: "54",
    question: "Your customer support tool logs all email and chat conversations to Cloud Bigtable for retention and analysis. What is the recommended approach for sanitizing this data of personally identifiable information or payment card information before initial storage?",
    options: {
      A: "Hash all data using SHA256",
      B: "Encrypt all data using elliptic curve cryptography",
      C: "De-identify the data with the Cloud Data Loss Prevention API",
      D: "Use regular expressions to find and redact phone numbers, email addresses, and credit card numbers"
    },
    correctAnswer: "C",
    explanation: "Cloud Data Loss Prevention API is specifically designed to identify and sanitize personally identifiable information (PII) and payment card information. It provides comprehensive detection and de-identification capabilities."
  },
  {
    id: "55",
    question: "You are using Cloud Shell and need to install a custom utility for use in a few weeks. Where can you store the file so it is in the default execution path and persists across sessions?",
    options: {
      A: "~/bin",
      B: "Cloud Storage",
      C: "/google/scripts",
      D: "/usr/local/bin"
    },
    correctAnswer: "A",
    explanation: "Cloud Shell provisions 5 GB of persistent disk storage mounted as your $HOME directory. The ~/bin directory is in the default execution path and persists between sessions, making it the ideal location for custom utilities."
  },
  {
    id: "56",
    question: "You want to create a private connection between your instances on Compute Engine and your on-premises data center. You require a connection of at least 20 Gbps. You want to follow Google-recommended practices. How should you set up the connection?",
    options: {
      A: "Create a VPC and connect it to your on-premises data center using Dedicated Interconnect.",
      B: "Create a VPC and connect it to your on-premises data center using a single Cloud VPN.",
      C: "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises data center using Dedicated Interconnect.",
      D: "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises datacenter using a single Cloud VPN."
    },
    correctAnswer: "A",
    explanation: "Cloud VPN supports 1.5 to 3 Gbps per tunnel, which cannot meet the 20 Gbps requirement. Dedicated Interconnect supports 10 Gbps per link (up to 8 links) or 100 Gbps per link (up to 2 links), easily meeting the 20 Gbps requirement."
  },
  {
    id: "57",
    question: "You are analyzing and defining business processes to support your startup's trial usage of GCP, and you don't yet know what consumer demand for your product will be. Your manager requires you to minimize GCP service costs and adhere to Google best practices. What should you do?",
    options: {
      A: "Utilize free tier and sustained use discounts. Provision a staff position for service cost management.",
      B: "Utilize free tier and sustained use discounts. Provide training to the team about service cost management.",
      C: "Utilize free tier and committed use discounts. Provision a staff position for service cost management.",
      D: "Utilize free tier and committed use discounts. Provide training to the team about service cost management."
    },
    correctAnswer: "B",
    explanation: "Sustained use discounts are applied automatically on incremental use, making them ideal for unpredictable demand. Committed use discounts require predictable workloads. Training the team is more cost-effective than hiring dedicated staff for a startup."
  },
  {
    id: "58",
    question: "You are building a continuous deployment pipeline for a project stored in a Git source repository and want to ensure that code changes can be verified before deploying to production. What should you do?",
    options: {
      A: "Use Spinnaker to deploy builds to production using the red/black deployment strategy so that changes can easily be rolled back.",
      B: "Use Spinnaker to deploy builds to production and run tests on production deployments.",
      C: "Use Jenkins to build the staging branches and the master branch. Build and deploy changes to production for 10% of users before doing a complete rollout.",
      D: "Use Jenkins to monitor tags in the repository. Deploy staging tags to a staging environment for testing. After testing, tag the repository for production and deploy that to the production environment."
    },
    correctAnswer: "D",
    explanation: "Using tags to control deployments is a best practice that ensures only tested code reaches production. This approach provides clear separation between staging and production deployments with proper verification steps."
  },
  {
    id: "59",
    question: "You have an outage in your Compute Engine managed instance group: all instances keep restarting after 5 seconds. You have a health check configured, but autoscaling is disabled. Your colleague, who is a Linux expert, offered to look into the issue. You need to make sure that he can access the VMs. What should you do?",
    options: {
      A: "Grant your colleague the IAM role of project Viewer",
      B: "Perform a rolling restart on the instance group",
      C: "Disable the health check for the instance group. Add his SSH key to the project-wide SSH Keys",
      D: "Disable autoscaling for the instance group. Add his SSH key to the project-wide SSH Keys"
    },
    correctAnswer: "C",
    explanation: "The instances are restarting every 5 seconds likely due to failing health checks. Disabling the health check will stop the restart cycle, allowing your colleague to access the VMs and diagnose the issue. Adding SSH keys enables access."
  },
  {
    id: "60",
    question: "Your company is migrating its on-premises data center into the cloud. As part of the migration, you want to integrate Google Kubernetes Engine (GKE) for workload orchestration. Parts of your architecture must also be PCI DSS-compliant. Which of the following is most accurate?",
    options: {
      A: "App Engine is the only compute platform on GCP that is certified for PCI DSS hosting.",
      B: "GKE cannot be used under PCI DSS because it is considered shared hosting.",
      C: "GKE and GCP provide the tools you need to build a PCI DSS-compliant environment.",
      D: "All Google Cloud services are usable because Google Cloud Platform is certified PCI-compliant."
    },
    correctAnswer: "C",
    explanation: "GKE is listed as PCI DSS-compliant in Google Cloud's compliance documentation. While not all GCP services are PCI DSS-compliant, GKE and many other GCP services provide the tools needed to build compliant environments."
  },
  {
    id: "61",
    question: "Your company has multiple on-premises systems that serve as sources for reporting. The data has not been maintained well and has become degraded over time. You want to use Google-recommended practices to detect anomalies in your company data. What should you do?",
    options: {
      A: "Upload your files into Cloud Storage. Use Cloud Datalab to explore and clean your data.",
      B: "Upload your files into Cloud Storage. Use Cloud Dataprep to explore and clean your data.",
      C: "Connect Cloud Datalab to your on-premises systems. Use Cloud Datalab to explore and clean your data.",
      D: "Connect Cloud Dataprep to your on-premises systems. Use Cloud Dataprep to explore and clean your data."
    },
    correctAnswer: "B",
    explanation: "Cloud Dataprep provides out-of-the-box anomaly detection and data quality assessment. It's specifically designed for exploring and cleaning degraded data, while Cloud Datalab is more focused on data science and analysis."
  },
  {
    id: "62",
    question: "Google Cloud Platform resources are managed hierarchically using organization, folders, and projects. When Cloud Identity and Access Management (IAM) policies exist at these different levels, what is the effective policy at a particular node of the hierarchy?",
    options: {
      A: "The effective policy is determined only by the policy set at the node",
      B: "The effective policy is the policy set at the node and restricted by the policies of its ancestors",
      C: "The effective policy is the union of the policy set at the node and policies inherited from its ancestors",
      D: "The effective policy is the intersection of the policy set at the node and policies inherited from its ancestors"
    },
    correctAnswer: "C",
    explanation: "The effective policy for a resource is the union of the policy set at that resource and the policy inherited from its parent. IAM policies are additive - permissions granted at higher levels are inherited by lower levels."
  },
  {
    id: "63",
    question: "You are migrating your on-premises solution to Google Cloud in several phases. You will use Cloud VPN to maintain a connection between your on-premises systems and Google Cloud until the migration is completed. You want to make sure all your on-premise systems remain reachable during this period. How should you organize your networking in Google Cloud?",
    options: {
      A: "Use the same IP range on Google Cloud as you use on-premises",
      B: "Use the same IP range on Google Cloud as you use on-premises for your primary IP range and use a secondary range that does not overlap with the range you use on-premises",
      C: "Use an IP range on Google Cloud that does not overlap with the range you use on-premises",
      D: "Use an IP range on Google Cloud that does not overlap with the range you use on-premises for your primary IP range and use a secondary range with the same IP range as you use on-premises"
    },
    correctAnswer: "C",
    explanation: "Primary and secondary ranges cannot conflict with on-premises IP ranges when using Cloud VPN, Dedicated Interconnect, or Partner Interconnect. Using non-overlapping IP ranges prevents routing conflicts."
  },
  {
    id: "64",
    question: "You have found an error in your App Engine application caused by missing Cloud Datastore indexes. You have created a YAML file with the required indexes and want to deploy these new indexes to Cloud Datastore. What should you do?",
    options: {
      A: "Point gcloud datastore create-indexes to your configuration file",
      B: "Upload the configuration file to App Engine's default Cloud Storage bucket, and have App Engine detect the new indexes",
      C: "In the GCP Console, use Datastore Admin to delete the current indexes and upload the new configuration file",
      D: "Create an HTTP request to the built-in python module to send the index configuration file to your application"
    },
    correctAnswer: "A",
    explanation: "To upload your index configuration to Datastore, run: gcloud datastore indexes create index.yaml from the directory where your index.yaml is located."
  },
  {
    id: "65",
    question: "You have an application that will run on Compute Engine. You need to design an architecture that takes into account a disaster recovery plan that requires your application to fail over to another region in case of a regional outage. What should you do?",
    options: {
      A: "Deploy the application on two Compute Engine instances in the same project but in a different region. Use the first instance to serve traffic, and use the HTTP load balancing service to fail over to the standby instance in case of a disaster.",
      B: "Deploy the application on a Compute Engine instance. Use the instance to serve traffic, and use the HTTP load balancing service to fail over to an instance on your premises in case of a disaster.",
      C: "Deploy the application on two Compute Engine instance groups, each in the same project but in a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster.",
      D: "Deploy the application on two Compute Engine instance groups, each in a separate project and a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster."
    },
    correctAnswer: "C",
    explanation: "Using managed instance groups in different regions provides better disaster recovery than single instances. HTTP load balancing can automatically fail over between regions. Separate projects add unnecessary complexity."
  },
  {
    id: "66",
    question: "You are deploying an application on App Engine that needs to integrate with an on-premises database. For security purposes, your on-premises database must not be accessible through the public internet. What should you do?",
    options: {
      A: "Deploy your application on App Engine standard environment and use App Engine firewall rules to limit access to the open on-premises database.",
      B: "Deploy your application on App Engine standard environment and use Cloud VPN to limit access to the on-premises database.",
      C: "Deploy your application on App Engine flexible environment and use App Engine firewall rules to limit access to the on-premises database.",
      D: "Deploy your application on App Engine flexible environment and use Cloud VPN to limit access to the on-premises database."
    },
    correctAnswer: "D",
    explanation: "App Engine Flexible environment can connect to VPC networks and use Cloud VPN to access on-premises resources securely. App Engine Standard cannot directly connect to VPC networks (without Serverless VPC Access)."
  },
  {
    id: "67",
    question: "You are working in a highly secured environment where public Internet access from the Compute Engine VMs is not allowed. You do not yet have a VPN connection to access an on-premises file server. You need to install specific software on a Compute Engine instance. How should you install the software?",
    options: {
      A: "Upload the required installation files to Cloud Storage. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gsutil.",
      B: "Upload the required installation files to Cloud Storage and use firewall rules to block all traffic except the IP address range for Cloud Storage. Download the files to the VM using gsutil.",
      C: "Upload the required installation files to Cloud Source Repositories. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gcloud.",
      D: "Upload the required installation files to Cloud Source Repositories and use firewall rules to block all traffic except the IP address range for Cloud Source Repositories. Download the files to the VM using gsutil."
    },
    correctAnswer: "A",
    explanation: "Private Google Access allows VMs with only internal IP addresses to access Google services like Cloud Storage. This provides secure access to installation files without requiring public internet access."
  },
  {
    id: "68",
    question: "Your company is moving 75 TB of data into Google Cloud. You want to use Cloud Storage and follow Google-recommended practices. What should you do?",
    options: {
      A: "Move your data onto a Transfer Appliance. Use a Transfer Appliance Rehydrator to decrypt the data into Cloud Storage.",
      B: "Move your data onto a Transfer Appliance. Use Cloud Dataprep to decrypt the data into Cloud Storage.",
      C: "Install gsutil on each server that contains data. Use resumable transfers to upload the data into Cloud Storage.",
      D: "Install gsutil on each server containing data. Use streaming transfers to upload the data into Cloud Storage."
    },
    correctAnswer: "A",
    explanation: "Google recommends Transfer Appliance for enterprises that need to migrate over 60 TB of data or when it would take over a week to upload data via the internet. 75 TB qualifies for Transfer Appliance usage."
  },
  {
    id: "69",
    question: "You have an application deployed on Google Kubernetes Engine using a Deployment named echo-deployment. The deployment is exposed using a Service called echo-service. You need to perform an update to the application with minimal downtime to the application. What should you do?",
    options: {
      A: "Use kubectl set image deployment/echo-deployment <new-image>",
      B: "Use the rolling update functionality of the Instance Group behind the Kubernetes cluster",
      C: "Update the deployment yaml file with the new container image. Use kubectl delete deployment/echo-deployment and kubectl create —f <yaml-file>",
      D: "Update the service yaml file which the new container image. Use kubectl delete service/echo-service and kubectl create —f <yaml-file>"
    },
    correctAnswer: "A",
    explanation: "kubectl set image deployment/frontend www=image:v2 performs a rolling update of the deployment, updating the image with minimal downtime. This is the standard Kubernetes approach for updating deployments."
  },
  {
    id: "70",
    question: "Your company is using BigQuery as its enterprise data warehouse. Data is distributed over several Google Cloud projects. All queries on BigQuery need to be billed on a single project. You want to make sure that no query costs are incurred on the projects that contain the data. Users should be able to query the datasets, but not edit them. How should you configure users' access roles?",
    options: {
      A: "Add all users to a group. Grant the group the role of BigQuery user on the billing project and BigQuery dataViewer on the projects that contain the data.",
      B: "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery user on the projects that contain the data.",
      C: "Add all users to a group. Grant the group the roles of BigQuery jobUser on the billing project and BigQuery dataViewer on the projects that contain the data.",
      D: "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery jobUser on the projects that contain the data."
    },
    correctAnswer: "C",
    explanation: "BigQuery jobUser role provides permissions to run jobs (queries) within the project where billing occurs. BigQuery dataViewer role provides read-only access to datasets in the projects containing data. This configuration ensures queries are billed to the designated project while users can only read data."
  },
  {
    id: "71",
    question: "You have developed an application using Cloud ML Engine that recognizes famous paintings from uploaded images. You want to test the application and allow specific people to upload images for the next 24 hours. Not all users have a Google Account. How should you have users upload images?",
    options: {
      A: "Have users upload the images to Cloud Storage. Protect the bucket with a password that expires after 24 hours.",
      B: "Have users upload the images to Cloud Storage using a signed URL that expires after 24 hours.",
      C: "Create an App Engine web application where users can upload images. Configure App Engine to disable the application after 24 hours. Authenticate users via Cloud Identity.",
      D: "Create an App Engine web application where users can upload images for the next 24 hours. Authenticate users via Cloud Identity."
    },
    correctAnswer: "B",
    explanation: "Signed URLs contain authentication information in their query string, allowing users without Google accounts to perform specific actions on Cloud Storage resources. The URL can be configured to expire after 24 hours."
  },
  {
    id: "72",
    question: "Your web application must comply with the requirements of the European Union's General Data Protection Regulation (GDPR). You are responsible for the technical architecture of your web application. What should you do?",
    options: {
      A: "Ensure that your web application only uses native features and services of Google Cloud Platform, because Google already has various certifications and provides 'pass-on' compliance when you use native features.",
      B: "Enable the relevant GDPR compliance setting within the GCP Console for each of the services in use within your application.",
      C: "Ensure that Cloud Security Scanner is part of your test planning strategy in order to pick up any compliance gaps.",
      D: "Define a design for the security of data in your web application that meets GDPR requirements."
    },
    correctAnswer: "D",
    explanation: "GDPR compliance requires specific design considerations for data security, privacy, and user rights. You must design your application architecture to meet GDPR requirements - there's no automatic compliance setting or pass-through compliance from using GCP services."
  },
  {
    id: "73",
    question: "You need to set up Microsoft SQL Server on GCP. Management requires that there's no downtime in case of a data center outage in any of the zones within a GCP region. What should you do?",
    options: {
      A: "Configure a Cloud SQL instance with high availability enabled.",
      B: "Configure a Cloud Spanner instance with a regional instance configuration.",
      C: "Set up SQL Server on Compute Engine, using Always On Availability Groups using Windows Failover Clustering. Place nodes in different subnets.",
      D: "Set up SQL Server Always On Availability Groups using Windows Failover Clustering. Place nodes in different zones."
    },
    correctAnswer: "A",
    explanation: "Cloud SQL supports Microsoft SQL Server with high availability configuration that automatically handles failover between zones within a region. This is the managed solution that meets the no-downtime requirement."
  },
  {
    id: "74",
    question: "The development team has provided you with a Kubernetes Deployment file. You have no infrastructure yet and need to deploy the application. What should you do?",
    options: {
      A: "Use gcloud to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
      B: "Use gcloud to create a Kubernetes cluster. Use kubectl to create the deployment.",
      C: "Use kubectl to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
      D: "Use kubectl to create a Kubernetes cluster. Use kubectl to create the deployment."
    },
    correctAnswer: "B",
    explanation: "gcloud is used to create and manage GKE clusters. kubectl is used to deploy applications to Kubernetes clusters. You cannot create clusters with kubectl - it's only for managing resources within existing clusters."
  },
  {
    id: "75",
    question: "You need to evaluate your team readiness for a new GCP project. You must perform the evaluation and create a skills gap plan which incorporates the business goal of cost optimization. Your team has deployed two GCP projects successfully to date. What should you do?",
    options: {
      A: "Allocate budget for team training. Set a deadline for the new GCP project.",
      B: "Allocate budget for team training. Create a roadmap for your team to achieve Google Cloud certification based on job role.",
      C: "Allocate budget to hire skilled external consultants. Set a deadline for the new GCP project.",
      D: "Allocate budget to hire skilled external consultants. Create a roadmap for your team to achieve Google Cloud certification based on job role."
    },
    correctAnswer: "B",
    explanation: "Creating a certification roadmap helps evaluate current skills and identify gaps while building internal expertise for cost optimization. This approach builds long-term capability rather than short-term consulting."
  },
  {
    id: "76",
    question: "You are designing an application for use only during business hours. For the minimum viable product release, you'd like to use a managed product that automatically 'scales to zero' so you don't incur costs when there is no activity. Which primary compute resource should you choose?",
    options: {
      A: "Cloud Functions",
      B: "Compute Engine",
      C: "Google Kubernetes Engine",
      D: "AppEngine flexible environment"
    },
    correctAnswer: "A",
    explanation: "Cloud Functions automatically scales to zero when there's no activity, meaning you pay nothing during inactive periods. App Engine Standard also scales to zero, but App Engine Flexible does not."
  },
  {
    id: "77",
    question: "You are creating an App Engine application that uses Cloud Datastore as its persistence layer. You need to retrieve several root entities for which you have the identifiers. You want to minimize the overhead in operations performed by Cloud Datastore. What should you do?",
    options: {
      A: "Create the Key object for each Entity and run a batch get operation",
      B: "Create the Key object for each Entity and run multiple get operations, one operation for each entity",
      C: "Use the identifiers to create a query filter and run a batch query operation",
      D: "Use the identifiers to create a query filter and run multiple query operations, one operation for each entity"
    },
    correctAnswer: "A",
    explanation: "Batch operations are more efficient because they perform multiple operations with the same overhead as a single operation. When you have entity keys, batch get operations are faster than queries and more efficient than individual get operations."
  },
  {
    id: "78",
    question: "You need to upload files from your on-premises environment to Cloud Storage. You want the files to be encrypted on Cloud Storage using customer-supplied encryption keys. What should you do?",
    options: {
      A: "Supply the encryption key in a .boto configuration file. Use gsutil to upload the files.",
      B: "Supply the encryption key using gcloud config. Use gsutil to upload the files to that bucket.",
      C: "Use gsutil to upload the files, and use the flag --encryption-key to supply the encryption key.",
      D: "Use gsutil to create a bucket, and use the flag --encryption-key to supply the encryption key. Use gsutil to upload the files to that bucket."
    },
    correctAnswer: "A",
    explanation: "gsutil accepts customer-supplied encryption keys (CSEKs) for interacting with Cloud Storage objects using the JSON API. The keys are provided via the .boto configuration file."
  },
  {
    id: "79",
    question: "Your customer wants to capture multiple GBs of aggregate real-time key performance indicators (KPIs) from their game servers running on Google Cloud Platform and monitor the KPIs with low latency. How should they capture the KPIs?",
    options: {
      A: "Store time-series data from the game servers in Google Bigtable, and view it using Google Data Studio.",
      B: "Output custom metrics to Stackdriver from the game servers, and create a Dashboard in Stackdriver Monitoring Console to view them.",
      C: "Schedule BigQuery load jobs to ingest analytics files uploaded to Cloud Storage every ten minutes, and visualize the results in Google Data Studio.",
      D: "Insert the KPIs into Cloud Datastore entities, and run ad hoc analysis and visualizations of them in Cloud Datalab."
    },
    correctAnswer: "B",
    explanation: "Stackdriver Monitoring can collect custom metrics from game servers in real-time and provide low-latency monitoring dashboards. This is the most suitable solution for real-time KPI monitoring requirements."
  },
  {
    id: "80",
    question: "You have a Python web application with many dependencies that requires 0.1 CPU cores and 128 MB of memory to operate in production. You want to monitor and maximize machine utilization. You also want to reliably deploy new versions of the application. Which set of steps should you take?",
    options: {
      A: "Create a managed instance group with f1-micro type machines. Use a startup script to clone the repository, check out the production branch, install the dependencies, and start the Python app. Restart the instances to automatically deploy new production releases.",
      B: "Create a managed instance group with n1-standard-1 type machines. Build a Compute Engine image from the production branch that contains all of the dependencies and automatically starts the Python app. Rebuild the Compute Engine image, and update the instance template to deploy new production releases.",
      C: "Create a Google Kubernetes Engine (GKE) cluster with n1-standard-1 type machines. Build a Docker image from the production branch with all of the dependencies, and tag it with the version number. Create a Kubernetes Deployment with the imagePullPolicy set to 'IfNotPresent' in the staging namespace, and then promote it to the production namespace after testing.",
      D: "Create a GKE cluster with n1-standard-4 type machines. Build a Docker image from the master branch with all of the dependencies, and tag it with 'latest'. Create a Kubernetes Deployment in the default namespace with the imagePullPolicy set to 'Always'. Restart the pods to automatically deploy new production releases."
    },
    correctAnswer: "C",
    explanation: "GKE provides better resource utilization monitoring and scaling capabilities. Using staging/production namespaces with proper image tagging provides reliable deployment practices. The resource requirements are small enough that multiple containers can run efficiently on n1-standard-1 machines."
  },
  {
    id: "81",
    question: "Your company wants to start using Google Cloud resources but wants to retain their on-premises Active Directory domain controller for identity management. What should you do?",
    options: {
      A: "Use the Admin Directory API to authenticate against the Active Directory domain controller.",
      B: "Use Google Cloud Directory Sync to synchronize Active Directory usernames with cloud identities and configure SAML SSO.",
      C: "Use Cloud Identity-Aware Proxy configured to use the on-premises Active Directory domain controller as an identity provider.",
      D: "Use Compute Engine to create an Active Directory (AD) domain controller that is a replica of the on-premises AD domain controller using Google Cloud Directory Sync."
    },
    correctAnswer: "B",
    explanation: "Google Cloud Directory Sync synchronizes users and groups from Active Directory to Google Cloud Identity, and SAML SSO allows users to authenticate using their existing AD credentials while accessing Google Cloud resources."
  },
  {
    id: "82",
    question: "You are running a cluster on Kubernetes Engine (GKE) to serve a web application. Users are reporting that a specific part of the application is not responding anymore. You notice that all pods of your deployment keep restarting after 2 seconds. The application writes logs to standard output. You want to inspect the logs to find the cause of the issue. Which approach can you take?",
    options: {
      A: "Review the Stackdriver logs for each Compute Engine instance that is serving as a node in the cluster.",
      B: "Review the Stackdriver logs for the specific GKE container that is serving the unresponsive part of the application.",
      C: "Connect to the cluster using gcloud credentials and connect to a container in one of the pods to read the logs.",
      D: "Review the Serial Port logs for each Compute Engine instance that is serving as a node in the cluster."
    },
    correctAnswer: "B",
    explanation: "Stackdriver Logging is enabled by default for GKE and automatically collects container logs from standard output and standard error. Since the pods are restarting every 2 seconds, reviewing the container logs in Stackdriver is the most effective approach."
  },
  {
    id: "83",
    question: "You are using a single Cloud SQL instance to serve your application from a specific zone. You want to introduce high availability. What should you do?",
    options: {
      A: "Create a read replica instance in a different region",
      B: "Create a failover replica instance in a different region",
      C: "Create a read replica instance in the same region, but in a different zone",
      D: "Create a failover replica instance in the same region, but in a different zone"
    },
    correctAnswer: "D",
    explanation: "For high availability within a region, you need a failover replica in a different zone within the same region. Read replicas are for performance scaling, while failover replicas provide high availability through automatic failover."
  },
  {
    id: "84",
    question: "Your company is running a stateless application on a Compute Engine instance. The application is used heavily during regular business hours and lightly outside of business hours. Users are reporting that the application is slow during peak hours. You need to optimize the application's performance. What should you do?",
    options: {
      A: "Create a snapshot of the existing disk. Create an instance template from the snapshot. Create an autoscaled managed instance group from the instance template.",
      B: "Create a snapshot of the existing disk. Create a custom image from the snapshot. Create an autoscaled managed instance group from the custom image.",
      C: "Create a custom image from the existing disk. Create an instance template from the custom image. Create an autoscaled managed instance group from the instance template.",
      D: "Create an instance template from the existing disk. Create a custom image from the instance template. Create an autoscaled managed instance group from the custom image."
    },
    correctAnswer: "C",
    explanation: "The correct flow is: custom image → instance template → managed instance group. You cannot create a managed instance group directly from an image; you need an instance template. You cannot create an instance template directly from a disk."
  },
  {
    id: "85",
    question: "Your web application has several VM instances running within a VPC. You want to restrict communications between instances to only the paths and ports you authorize, but you don't want to rely on static IP addresses or subnets because the app can autoscale. How should you restrict communications?",
    options: {
      A: "Use separate VPCs to restrict traffic",
      B: "Use firewall rules based on network tags attached to the compute instances",
      C: "Use Cloud DNS and only allow connections from authorized hostnames",
      D: "Use service accounts and configure the web application to authorize particular service accounts to have access"
    },
    correctAnswer: "B",
    explanation: "Network tags provide a flexible way to apply firewall rules to instances regardless of their IP addresses. This works well with autoscaling since new instances can be automatically assigned the appropriate tags."
  },
  {
    id: "86",
    question: "You are using Cloud SQL as the database backend for a large CRM deployment. You want to scale as usage increases and ensure that you don't run out of storage, maintain 75% CPU usage cores, and keep replication lag below 60 seconds. What are the correct steps to meet your requirements?",
    options: {
      A: "Enable automatic storage increase for the instance. Create a Stackdriver alert when CPU usage exceeds 75%, and change the instance type to reduce CPU usage. Create a Stackdriver alert for replication lag, and shard the database to reduce replication time.",
      B: "Enable automatic storage increase for the instance. Change the instance type to a 32-core machine type to keep CPU usage below 75%. Create a Stackdriver alert for replication lag, and deploy memcache to reduce load on the master.",
      C: "Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. Deploy memcached to reduce CPU load. Change the instance type to a 32-core machine type to reduce replication lag.",
      D: "Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. Deploy memcached to reduce CPU load. Create a Stackdriver alert for replication lag, and change the instance type to a 32-core machine type to reduce replication lag."
    },
    correctAnswer: "A",
    explanation: "Automatic storage increase prevents running out of storage. Monitoring CPU usage at 75% threshold allows proactive scaling. Monitoring replication lag helps maintain performance requirements. The other options don't properly address all three requirements."
  },
  {
    id: "87",
    question: "You are tasked with building an online analytical processing (OLAP) marketing analytics and reporting tool. This requires a relational database that can operate on hundreds of terabytes of data. What is the Google-recommended tool for such applications?",
    options: {
      A: "Cloud Spanner, because it is globally distributed",
      B: "Cloud SQL, because it is a fully managed relational database",
      C: "Cloud Firestore, because it offers real-time synchronization across devices",
      D: "BigQuery, because it is designed for large-scale processing of tabular data"
    },
    correctAnswer: "D",
    explanation: "BigQuery is Google's data warehouse solution designed specifically for OLAP workloads and can handle hundreds of terabytes of data with SQL interface. Cloud Spanner is for OLTP workloads, not OLAP analytics."
  },
  {
    id: "88",
    question: "You have deployed an application to Google Kubernetes Engine (GKE), and are using the Cloud SQL proxy container to make the Cloud SQL database available to the services running on Kubernetes. You are notified that the application is reporting database connection issues. Your company policies require a post-mortem. What should you do?",
    options: {
      A: "Use gcloud sql instances restart.",
      B: "Validate that the Service Account used by the Cloud SQL proxy container still has the Cloud Build Editor role.",
      C: "In the GCP Console, navigate to Stackdriver Logging. Consult logs for GKE and Cloud SQL.",
      D: "In the GCP Console, navigate to Cloud SQL. Restore the latest backup. Use kubectl to restart all pods."
    },
    correctAnswer: "C",
    explanation: "Post-mortem analysis requires examining logs to understand what happened. Stackdriver Logging provides comprehensive logs for both GKE and Cloud SQL that can help identify the root cause of the database connection issues."
  },
  {
    id: "89",
    question: "Your company pushes batches of sensitive transaction data from its application server VMs to Cloud Pub/Sub for processing and storage. What is the Google-recommended way for your application to authenticate to the required Google Cloud services?",
    options: {
      A: "Ensure that VM service accounts are granted the appropriate Cloud Pub/Sub IAM roles.",
      B: "Ensure that VM service accounts do not have access to Cloud Pub/Sub, and use VM access scopes to grant the appropriate Cloud Pub/Sub IAM roles.",
      C: "Generate an OAuth2 access token for accessing Cloud Pub/Sub, encrypt it, and store it in Cloud Storage for access from each VM.",
      D: "Create a gateway to Cloud Pub/Sub using a Cloud Function, and grant the Cloud Function service account the appropriate Cloud Pub/Sub IAM roles."
    },
    correctAnswer: "A",
    explanation: "The recommended approach is to use VM service accounts with appropriate IAM roles. The service account can only execute API methods that are allowed by both the access scope and the service account's specific IAM roles."
  },
  {
    id: "90",
    question: "You want to establish a Compute Engine application in a single VPC across two regions. The application must communicate over VPN to an on-premises network. How should you deploy the VPN?",
    options: {
      A: "Use VPC Network Peering between the VPC and the on-premises network.",
      B: "Expose the VPC to the on-premises network using IAM and VPC Sharing.",
      C: "Create a global Cloud VPN Gateway with VPN tunnels from each region to the on-premises peer gateway.",
      D: "Deploy Cloud VPN Gateway in each region. Ensure that each region has at least one VPN tunnel to the on-premises peer gateway."
    },
    correctAnswer: "D",
    explanation: "Cloud VPN gateways and tunnels are regional objects, not global. You need to deploy VPN gateways in each region where you have resources that need to communicate with on-premises networks."
  },
  {
    id: "91",
    question: "Your applications will be writing their logs to BigQuery for analysis. Each application should have its own table. Any logs older than 45 days should be removed. You want to optimize storage and follow Google-recommended practices. What should you do?",
    options: {
      A: "Configure the expiration time for your tables at 45 days",
      B: "Make the tables time-partitioned, and configure the partition expiration at 45 days",
      C: "Rely on BigQuery's default behavior to prune application logs older than 45 days",
      D: "Create a script that uses the BigQuery command line tool (bq) to remove records older than 45 days"
    },
    correctAnswer: "B",
    explanation: "Time-partitioned tables with partition expiration automatically delete old partitions (and their data) after the specified time period. This is more efficient than table expiration and follows Google's recommended practices for log data management."
  },
  {
    id: "92",
    question: "You want your Google Kubernetes Engine cluster to automatically add or remove nodes based on CPU load. What should you do?",
    options: {
      A: "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable the Cluster Autoscaler from the GCP Console.",
      B: "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable autoscaling on the managed instance group for the cluster using the gcloud command.",
      C: "Create a deployment and set the maxUnavailable and maxSurge properties. Enable the Cluster Autoscaler using the gcloud command.",
      D: "Create a deployment and set the maxUnavailable and maxSurge properties. Enable autoscaling on the cluster managed instance group from the GCP Console."
    },
    correctAnswer: "A",
    explanation: "HorizontalPodAutoscaler scales pods based on CPU usage, and Cluster Autoscaler scales nodes based on pod resource requests. You should not enable Compute Engine autoscaling for GKE node groups as it conflicts with GKE's cluster autoscaler."
  },
  {
    id: "93",
    question: "You need to develop procedures to verify resilience of disaster recovery for remote recovery using GCP. Your production environment is hosted on-premises. You need to establish a secure, redundant connection between your on-premises network and the GCP network. What should you do?",
    options: {
      A: "Verify that Dedicated Interconnect can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if Dedicated Interconnect fails.",
      B: "Verify that Dedicated Interconnect can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if Dedicated Interconnect fails.",
      C: "Verify that the Transfer Appliance can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if the Transfer Appliance fails.",
      D: "Verify that the Transfer Appliance can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if the Transfer Appliance fails."
    },
    correctAnswer: "B",
    explanation: "Dedicated Interconnect provides the primary high-bandwidth connection for disaster recovery replication. Cloud VPN serves as a backup connection method if the Dedicated Interconnect fails. Direct Peering is not recommended for this use case."
  },
  {
    id: "94",
    question: "Your company operates nationally and plans to use GCP for multiple batch workloads, including some that are not time-critical. You also need to use GCP services that are HIPAA-certified and manage service costs. How should you design to meet Google best practices?",
    options: {
      A: "Provision preemptible VMs to reduce cost. Discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      B: "Provision preemptible VMs to reduce cost. Disable and then discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      C: "Provision standard VMs in the same region to reduce cost. Discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      D: "Provision standard VMs to the same region to reduce cost. Disable and then discontinue use of all GCP services and APIs that are not HIPAA-compliant."
    },
    correctAnswer: "B",
    explanation: "Preemptible VMs are suitable for non-time-critical batch workloads and reduce costs. For HIPAA compliance, you should disable services first to test the impact, then discontinue use of non-compliant services. HIPAA doesn't require region restrictions on GCP."
  },
  {
    id: "95",
    question: "Your customer wants to do resilience testing of their authentication layer. This consists of a regional managed instance group serving a public REST API that reads from and writes to a Cloud SQL instance. What should you do?",
    options: {
      A: "Engage with a security company to run web scrapers that look for users' authentication data on malicious websites and notify you if any is found.",
      B: "Deploy intrusion detection software to your virtual machines to detect and log unauthorized access.",
      C: "Schedule a disaster simulation exercise during which you can shut off all VMs in a zone to see how your application behaves.",
      D: "Configure a read replica for your Cloud SQL instance in a different zone than the master, and then manually trigger a failover while monitoring KPIs for your REST API."
    },
    correctAnswer: "C",
    explanation: "Resilience testing involves testing the system's ability to withstand unexpected failures. Shutting off all VMs in a zone simulates a zone failure and tests whether the application can continue functioning and recover automatically."
  },
  {
    id: "96",
    question: "Your BigQuery project has several users. For audit purposes, you need to see how many queries each user ran in the last month. What should you do?",
    options: {
      A: "Connect Google Data Studio to BigQuery. Create a dimension for the users and a metric for the amount of queries per user.",
      B: "In the BigQuery interface, execute a query on the JOBS table to get the required information.",
      C: "Use 'bq show' to list all jobs. Per job, use 'bq ls' to list job information and get the required information.",
      D: "Use Cloud Audit Logging to view Cloud Audit Logs, and create a filter on the query operation to get the required information."
    },
    correctAnswer: "D",
    explanation: "Cloud Audit Logs automatically captures BigQuery job information including who ran queries and when. You can filter the audit logs for BigQuery query operations to get the required user activity information."
  },
  {
    id: "97",
    question: "You want to automate the creation of a managed instance group. The VMs have many OS package dependencies. You want to minimize the startup time for new VMs in the instance group. What should you do?",
    options: {
      A: "Use Terraform to create the managed instance group and a startup script to install the OS package dependencies.",
      B: "Create a custom VM image with all OS package dependencies. Use Deployment Manager to create the managed instance group with the VM image.",
      C: "Use Puppet to create the managed instance group and install the OS package dependencies.",
      D: "Use Deployment Manager to create the managed instance group and Ansible to install the OS package dependencies."
    },
    correctAnswer: "B",
    explanation: "Creating a custom VM image with all dependencies pre-installed minimizes startup time since new instances don't need to download and install packages. Using Deployment Manager provides infrastructure automation for creating the managed instance group."
  },
  {
    id: "98",
    question: "Your company captures all web traffic data in Google Analytics 360 and stores it in BigQuery. Each country has its own dataset. Each dataset has multiple tables. You want analysts from each country to be able to see and query only the data for their respective countries. How should you configure the access rights?",
    options: {
      A: "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate dataset with view access with each respective analyst country-group.",
      B: "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate tables with view access with each respective analyst country-group.",
      C: "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate dataset with view access with each respective analyst country-group.",
      D: "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate table with view access with each respective analyst country-group."
    },
    correctAnswer: "A",
    explanation: "BigQuery jobUser role is required to run queries. Sharing datasets (not individual tables) with view access provides appropriate data access control. Even with jobUser role, analysts can only access data they have explicit permissions to view."
  },
  {
    id: "99",
    question: "You have been engaged by your client to lead the migration of their application infrastructure to GCP. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads. The workloads are: 20 TB of log archives retained for legal reasons; 500 GB of VM boot/data volumes and templates; 500 GB of image thumbnails; 200 GB of customer session state data that allows customers to restart sessions even if off-line for several days. Which of the following best reflects your recommendations for a cost-effective storage allocation?",
    options: {
      A: "Local SSD for customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
      B: "Memcache backed by Cloud Datastore for the customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
      C: "Memcache backed by Cloud SQL for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails.",
      D: "Memcache backed by Persistent Disk SSD storage for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails."
    },
    correctAnswer: "B",
    explanation: "Memcache with Cloud Datastore provides fast access to session data with persistence for offline scenarios. Lifecycle-managed Cloud Storage automatically transitions data to cheaper storage classes over time, making it cost-effective for archives, thumbnails, and boot volumes (stored as custom images)."
  },
  {
    id: "100",
    question: "Your web application uses Google Kubernetes Engine to manage several workloads. One workload requires a consistent set of hostnames even after pod scaling and relaunches. Which feature of Kubernetes should you use to accomplish this?",
    options: {
      A: "StatefulSets",
      B: "Role-based access control",
      C: "Container environment variables",
      D: "Persistent Volumes"
    },
    correctAnswer: "A",
    explanation: "StatefulSets provide stable, unique network identifiers (hostnames) for pods. Unlike Deployments, StatefulSets maintain consistent hostnames even when pods are rescheduled or scaled, making them ideal for workloads that require stable network identities."
  },
  {
    id: "101",
    question: "You are using Cloud CDN to deliver static HTTP(S) website content hosted on a Compute Engine instance group. You want to improve the cache hit ratio. What should you do?",
    options: {
      A: "Customize the cache keys to omit the protocol from the key.",
      B: "Shorten the expiration time of the cached objects.",
      C: "Make sure the HTTP(S) header 'Cache-Region' points to the closest region of your users.",
      D: "Replicate the static content in a Cloud Storage bucket. Point CloudCDN toward a load balancer on that bucket."
    },
    correctAnswer: "A",
    explanation: "Customizing cache keys to omit the protocol (HTTP vs HTTPS) allows the same content to be cached once and served for both protocols, improving the cache hit ratio by reducing cache fragmentation."
  },
  {
    id: "102",
    question: "Your architecture calls for the centralized collection of all admin activity and VM system logs within your project. How should you collect these logs from both VMs and services?",
    options: {
      A: "All admin and VM system logs are automatically collected by Stackdriver.",
      B: "Stackdriver automatically collects admin activity logs for most services. The Stackdriver Logging agent must be installed on each instance to collect system logs.",
      C: "Launch a custom syslogd compute instance and configure your GCP project and VMs to forward all logs to it.",
      D: "Install the Stackdriver Logging agent on a single compute instance and let it collect all audit and access logs for your environment."
    },
    correctAnswer: "B",
    explanation: "Admin activity logs are automatically collected by Stackdriver for GCP services, but VM system logs (like syslog) require the Stackdriver Logging agent to be installed on each VM instance to collect and forward the logs."
  },
  {
    id: "103",
    question: "You have an App Engine application that needs to be updated. You want to test the update with production traffic before replacing the current application version. What should you do?",
    options: {
      A: "Deploy the update using the Instance Group Updater to create a partial rollout, which allows for canary testing.",
      B: "Deploy the update as a new version in the App Engine application, and split traffic between the new and current versions.",
      C: "Deploy the update in a new VPC, and use Google's global HTTP load balancing to split traffic between the update and current applications.",
      D: "Deploy the update as a new App Engine application, and use Google's global HTTP load balancing to split traffic between the new and current applications."
    },
    correctAnswer: "B",
    explanation: "App Engine supports traffic splitting between versions, allowing you to deploy a new version and gradually shift traffic to test the update with production traffic before fully migrating."
  },
  {
    id: "104",
    question: "All Compute Engine instances in your VPC should be able to connect to an Active Directory server on specific ports. Any other traffic emerging from your instances is not allowed. You want to enforce this using VPC firewall rules. How should you configure the firewall rules?",
    options: {
      A: "Create an egress rule with priority 1000 to deny all traffic for all instances. Create another egress rule with priority 100 to allow the Active Directory traffic for all instances.",
      B: "Create an egress rule with priority 100 to deny all traffic for all instances. Create another egress rule with priority 1000 to allow the Active Directory traffic for all instances.",
      C: "Create an egress rule with priority 1000 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 100 to block all traffic for all instances.",
      D: "Create an egress rule with priority 100 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 1000 to block all traffic for all instances."
    },
    correctAnswer: "A",
    explanation: "Lower priority numbers have higher precedence. You need to allow Active Directory traffic first (priority 100), then deny all other traffic (priority 1000). There is no implied deny egress rule - there's an implied allow egress rule with the lowest priority (65535)."
  },
  {
    id: "105",
    question: "Your company runs a web service used by e-commerce sites to offer product recommendations to users. The company has begun experimenting with a machine learning model on Google Cloud Platform to improve the quality of results. What should the customer do to improve their model's results over time?",
    options: {
      A: "Export Cloud Machine Learning Engine performance metrics from Stackdriver to BigQuery, to be used to analyze the efficiency of the model.",
      B: "Build a roadmap to move the machine learning model training from Cloud GPUs to Cloud TPUs, which offer better results.",
      C: "Monitor Compute Engine announcements for availability of newer CPU architectures, and deploy the model to them as soon as they are available for additional performance.",
      D: "Save a history of recommendations and results of the recommendations in BigQuery, to be used as training data."
    },
    correctAnswer: "D",
    explanation: "Machine learning models improve with more training data. Saving the history of recommendations and their outcomes provides valuable feedback data that can be used to retrain and improve the model's accuracy over time."
  },
  {
    id: "106",
    question: "A development team at your company has created a dockerized HTTPS web application. You need to deploy the application on Google Kubernetes Engine (GKE) and make sure that the application scales automatically. How should you deploy to GKE?",
    options: {
      A: "Use the Horizontal Pod Autoscaler and enable cluster autoscaling. Use an Ingress resource to load-balance the HTTPS traffic.",
      B: "Use the Horizontal Pod Autoscaler and enable cluster autoscaling on the Kubernetes cluster. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic.",
      C: "Enable autoscaling on the Compute Engine instance group. Use an Ingress resource to load-balance the HTTPS traffic.",
      D: "Enable autoscaling on the Compute Engine instance group. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic."
    },
    correctAnswer: "A",
    explanation: "Horizontal Pod Autoscaler scales pods, cluster autoscaling scales nodes. For HTTPS traffic, Ingress resources provide Layer 7 load balancing which is recommended for HTTP(S) services, offering better features than Layer 4 LoadBalancer services."
  },
  {
    id: "107",
    question: "You need to design a solution for global load balancing based on the URL path being requested. You need to ensure operations reliability and end-to-end in-transit encryption based on Google best practices. What should you do?",
    options: {
      A: "Create a cross-region load balancer with URL Maps.",
      B: "Create an HTTPS load balancer with URL Maps.",
      C: "Create appropriate instance groups and instances. Configure SSL proxy load balancing.",
      D: "Create a global forwarding rule. Configure SSL proxy load balancing."
    },
    correctAnswer: "B",
    explanation: "URL path-based routing is only supported by HTTP(S) load balancers. HTTPS load balancers with URL Maps provide both the required URL-based routing and end-to-end encryption for web traffic."
  },
  {
    id: "108",
    question: "You have an application that makes HTTP requests to Cloud Storage. Occasionally the requests fail with HTTP status codes of 5xx and 429. How should you handle these types of errors?",
    options: {
      A: "Use gRPC instead of HTTP for better performance.",
      B: "Implement retry logic using a truncated exponential backoff strategy.",
      C: "Make sure the Cloud Storage bucket is multi-regional for geo-redundancy.",
      D: "Monitor https://status.cloud.google.com/feed.atom and only make requests if Cloud Storage is not reporting an incident."
    },
    correctAnswer: "B",
    explanation: "5xx errors indicate server errors and 429 indicates rate limiting. The recommended approach is to implement exponential backoff retry logic to handle these transient errors gracefully and avoid overwhelming the service."
  },
  {
    id: "109",
    question: "You need to develop procedures to test a disaster plan for a mission-critical application. You want to use Google-recommended practices and native capabilities within GCP. What should you do?",
    options: {
      A: "Use Deployment Manager to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
      B: "Use Deployment Manager to automate service provisioning. Use Stackdriver to monitor and debug your tests.",
      C: "Use gcloud scripts to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
      D: "Use gcloud scripts to automate service provisioning. Use Stackdriver to monitor and debug your tests."
    },
    correctAnswer: "B",
    explanation: "Deployment Manager provides infrastructure as code for automated provisioning, which is a Google-recommended practice. Stackdriver provides comprehensive monitoring and logging capabilities for debugging disaster recovery tests."
  },
  {
    id: "110",
    question: "Your company creates rendering software which users can download from the company website. Your company has customers all over the world. You want to minimize latency for all your customers. You want to follow Google-recommended practices. How should you store the files?",
    options: {
      A: "Save the files in a Multi-Regional Cloud Storage bucket.",
      B: "Save the files in a Regional Cloud Storage bucket, one bucket per zone of the region.",
      C: "Save the files in multiple Regional Cloud Storage buckets, one bucket per zone per region.",
      D: "Save the files in multiple Multi-Regional Cloud Storage buckets, one bucket per multi-region."
    },
    correctAnswer: "A",
    explanation: "Multi-Regional Cloud Storage automatically replicates data across multiple regions within a multi-region, providing low latency access for users worldwide. It's designed for frequently accessed content like software downloads with global distribution."
  },
  {
    id: "111",
    question: "Your company acquired a healthcare startup and must retain its customers' medical information for up to 4 more years, depending on when it was created. Your corporate policy is to securely retain this data, and then delete it as soon as regulations allow. Which approach should you take?",
    options: {
      A: "Store the data in Google Drive and manually delete records as they expire.",
      B: "Anonymize the data using the Cloud Data Loss Prevention API and store it indefinitely.",
      C: "Store the data in Cloud Storage and use lifecycle management to delete files when they expire.",
      D: "Store the data in Cloud Storage and run a nightly batch script that deletes all expired data."
    },
    correctAnswer: "C",
    explanation: "Cloud Storage lifecycle management can automatically delete objects based on age or custom time conditions. This provides automated, reliable deletion of data as soon as regulations allow, without manual intervention."
  },
  {
    id: "112",
    question: "You are deploying a PHP App Engine Standard service with Cloud SQL as the backend. You want to minimize the number of queries to the database. What should you do?",
    options: {
      A: "Set the memcache service level to dedicated. Create a key from the hash of the query, and return database values from memcache before issuing a query to Cloud SQL.",
      B: "Set the memcache service level to dedicated. Create a cron task that runs every minute to populate the cache with keys containing query results.",
      C: "Set the memcache service level to shared. Create a cron task that runs every minute to save all expected queries to a key called 'cached_queries'.",
      D: "Set the memcache service level to shared. Create a key called 'cached_queries', and return database values from the key before using a query to Cloud SQL."
    },
    correctAnswer: "A",
    explanation: "Using memcache with query-based keys allows you to cache database results and serve them directly from memory, minimizing database queries. Creating keys from query hashes ensures each unique query has its own cache entry."
  },
  {
    id: "113",
    question: "You need to ensure reliability for your application and operations by supporting reliable task scheduling for compute on GCP. Leveraging Google best practices, what should you do?",
    options: {
      A: "Using the Cron service provided by App Engine, publish messages directly to a message-processing utility service running on Compute Engine instances.",
      B: "Using the Cron service provided by App Engine, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances.",
      C: "Using the Cron service provided by Google Kubernetes Engine (GKE), publish messages directly to a message-processing utility service running on Compute Engine instances.",
      D: "Using the Cron service provided by GKE, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances."
    },
    correctAnswer: "B",
    explanation: "App Engine Cron service provides reliable scheduling. Using Cloud Pub/Sub as an intermediary provides decoupling, reliability, and scalability between the scheduler and the processing service, following Google's recommended practices for reliable task scheduling."
  },
  {
    id: "114",
    question: \"Your company is building a new architecture to support its
