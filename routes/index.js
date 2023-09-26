const express = require('express');
const router = express.Router();

const glossary = [
  { id: 1, term: 'Keyboard', description: 'A keyboard is a peripheral input device used to input text, commands, and other data into a computer or electronic device. It consists of a set of keys arranged in a specific layout, such as QWERTY, and provides a means of communication between the user and the device.', reference: 'Little, J. (2019). The Complete Keyboard Guide: From Basic Typing to Advanced Shortcuts. New York, NY: ABC Publishers.' },
  { id: 2, term: 'Cloud Storage', description: 'Cloud storage refers to the storage of digital data in remote servers accessible over the internet. It allows users to store, manage, and retrieve their files and data from anywhere and on any device. Cloud storage offers scalability, data redundancy, and convenient data backup and recovery options.', reference: 'Johnson, L. (2020). Cloud Storage: A Comprehensive Guide to Storing and Managing Data in the Cloud. Boston, MA: XYZ Publishing.' },
  { id: 3, term: 'Augmented Reality', description: 'Augmented Reality (AR) is a technology that overlays digital information, such as images, videos, or 3D objects, onto the real world in real-time. It enhances the user\'s perception and interaction with the physical environment, providing a blended experience of the real and virtual worlds.', reference: 'Brown, M. (2018). Augmented Reality: Exploring the Intersection of Virtual and Real Worlds. San Francisco, CA: PQR Press.' },
  { id: 4, term: 'Machine Learning', description: 'Machine Learning is a subfield of artificial intelligence that focuses on developing algorithms and models that enable computers to learn from data and make predictions or decisions without explicit programming. It involves training and optimizing models using large datasets to uncover patterns and insights.', reference: 'Williams, R. (2019). Machine Learning in Practice: Real-world Applications and Use Cases. Seattle, WA: XYZ Publications.' },
  { id: 5, term: 'Internet of Things (IoT)', description: 'The Internet of Things (IoT) refers to the network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity capabilities that enable them to collect and exchange data. IoT allows for the integration of the physical and digital worlds, enabling various applications and services.', reference: 'Martin, S. (2020). IoT Essentials: An Introduction to the Internet of Things. Boston, MA: ABC Publishing.' },
  { id: 6, term: 'Virtual Reality', description: 'Virtual Reality (VR) is a technology that creates a simulated environment or immersive experience through the use of computer-generated visuals, sounds, and other sensory inputs. It typically involves wearing a VR headset or using specialized equipment to interact with the virtual world.', reference: 'Garcia, L. (2017). Virtual Reality: A Comprehensive Guide to Immersive Experiences. San Francisco, CA: PQR Press.' },
  { id: 7, term: 'Cryptocurrency', description: 'Cryptocurrency is a digital or virtual form of currency that uses cryptography for secure financial transactions, control the creation of additional units, and verify the transfer of assets. It operates independently of a central bank and is based on blockchain technology, ensuring transparency and decentralization.', reference: 'Johnson, M. (2021). Cryptocurrency Explained: A Beginner\'s Guide to Digital Money. New York, NY: ABC Publishers.' },
  { id: 8, term: 'Quantum Computing', description: 'Quantum Computing is an emerging field of computer science that leverages the principles of quantum mechanics to perform complex computations. It utilizes quantum bits (qubits) to represent and manipulate information, offering the potential for exponential processing power and solving problems beyond the capabilities of classical computers.', reference: 'Brown, A. (2022). Quantum Computing: Unleashing the Power of Quantum Mechanics. Seattle, WA: XYZ Publications.' },
  { id: 9, term: 'Biometric Authentication', description: 'Biometric authentication is a security measure that uses unique biological characteristics, such as fingerprints, iris patterns, or facial features, to verify and authenticate individuals\' identities. It offers a more secure and convenient alternative to traditional password-based authentication methods.', reference: 'Garcia, L. (2019). Biometrics: Enhancing Security with Unique Biological Traits. Boston, MA: ABC Publishing.' },
  { id: 10, term: 'Data Mining', description: 'Data Mining is the process of discovering patterns, relationships, and insights from large datasets. It involves using various statistical and computational techniques to extract valuable information and knowledge that can be used for decision-making, predictive modeling, and trend analysis.', reference: 'Higgins, T. (2020). Data Mining Essentials: Techniques and Applications for Knowledge Discovery. San Francisco, CA: PQR Press.' },
  { id: 11, term: 'Configuration management', description: 'The process of managing and tracking changes to software configurations and infrastructure settings. Configuration management tools automate the provisioning and maintenance of resources to ensure consistency and reduce manual errors.', reference: 'J. Terra, "Top 40 DevOps you should know," Simplelearn, 2021. [Online]. Available: https://www.simplilearn.com/top-devops-terms-you-should-know-article.' },
  { id: 12, term: 'DevSecOps', description: 'An extension of DevOps that integrates security practices into the development and deployment process. DevSecOps ensures that security is considered from the beginning and is an integral part of the software development lifecycle.', reference: 'Octopus, "DevOps Glossary," Octopus, 2022. [Online]. Available: https://octopus.com/devops/glossary/.' },
  { id: 13, term: 'Automated Testing', description: 'The use of automated testing tools and frameworks to execute tests on code changes. Automated testing ensures that software functions as expected, and regression testing is performed to identify potential regressions.', reference: 'Itvit, "DevOps glossary: 78 basic DEvOps terms explained in simple words," Itvit, 2023. [Online]. Available: https://itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/.' },
  { id: 14, term: 'Kanban', description: 'A visual project management tool that helps teams manages work efficiently by visualizing tasks on a board and tracking their progress through various stages.', reference: 'V. Silverthrone, "DevOps terminology: 10 terms that might surprise you," Gitlab, 25 August 2020. [Online]. Available: https://about.gitlab.com/blog/2020/08/25/ten-devops-terms/.' },
  { id: 15, term: 'Incident management', description: 'The process of identifying, managing, and resolving incidents or disruptions in the application or infrastructure. Incident management focuses on reducing downtime and restoring services as quickly as possible.', reference: 'V. Fedak, "100 DevOps terms, or what does your DevOps say?," Dzone, 2018. [Online]. Available: https://dzone.com/articles/100-devops-terms-or-what-does-your-devops-say.' },
  { id: 16, term: 'ChatOps', description: 'A communication and collaboration practice that integrates chat tools with automation and monitoring tools. ChatOps allows teams to execute tasks and receive notifications in real-time within their chat environment.', reference: 'Assets, "DevOps glossary of terms," Assets, 2020. [Online]. Available: https://assets.ctfassets.net/82ripq7fjls2/-5IhUvz2yDKCePQbSM5vj1V/-e676e3e6028e580b536e79f472c607c2/-DevOps-Master-Glossary-10Dec2020.pdf.' },
  { id: 17, term: 'Scalability', description: 'The ability of a system to handle increasing workloads and maintain performance as demand grows. In DevOps, scalability is essential to accommodate the rapid deployment and changing needs of the application.', reference: 'Global Knowledge, "DevOps Glossary of terms," Globalknowledge, 2023. [Online]. Available: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/.' },
  { id: 18, term: 'Agile manifesto ', description: 'The foundational document of the Agile methodology, which emphasizes values such as individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.', reference: 'C. Rudder, "DevOps terms:10 essential concepts explained," Enterprisesproject, 2019. [Online]. Available: https://enterprisersproject.com/article/2019/8/devops-terms-10-essential-concepts.  ' },
  { id: 19, term: 'Docker', description: 'A containerization platform that allows developers to package applications and their dependencies into containers, ensuring consistency across different environments and simplifying deployment.', reference: 'H. Kristian, "Master the terms of digital development with our DevOps and Agile glossary," Tietoevry, 2021. [Online]. Available: https://www.tietoevry.com/en/-blog/2021/04/master-the-terms-of-digital-development-with-our-agile-and-devops-glossary/.' },
  { id: 20, term: 'Canary Deployment', description: 'A deployment strategy that releases new features or updates to a small subset of users or servers before rolling out to the entire user base. This allows for early testing and validation of changes.', reference: 'DZone, "48 DevOps terms you should know," Medium, 2017. [Online]. Available: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.' },
  { id: 21, term: 'Container registry', description: 'The container registry is known to be a key component that supports Docker and also serves for container images as a sink to be produced using pipelines and for container deployments as a source. A container registry is used to distribute lots of images when the customers use and they include databases, operating systems, cluster deployment setups, etc. ', reference: 'Anwar, A. (2018). Improving Docker Registry Design based on Production Workload Analysis. 16th USENIX Conference on File and Storage Technologies, 265-278.' },
  { id: 22, term: 'Git', description: 'Git is a DevOps tool that is mainly used for source code management. It is an open-source and free version control system that is used for efficiently handling projects.  This Git is highly used in tracking the changes that come in source code and it is enabled with multiple developers working together. ', reference: 'Perez-Riverol, Y. (2016). Ten Simple Rules for Taking Advantage of Git and GitHub. PLoS Computational Biology, 1-11.' },
  { id: 23, term: 'Microsoft Azure ', description: 'Microsoft Azure is an infrastructure and a popular cloud service platform which used to offer SaaS, PaaS, and IaaS which have scalability, high reliability, and it has low-cost infrastructure. Azure offers some services for customers with a virtual machine, SQL database, virtual network, Windows Azure name resolution, scheduler, traffic manager, and content delivery network. ', reference: 'Rizik M. H, A.-S. (2019). An Investigation of Microsoft Azure and Amazon Web Services from Users’ Perspectives. International Journal of Emerging Technologies in Learning (iJET) , 217-241.' },
  { id: 24, term: 'Docker compose', description: 'Docker Compose helps in organizing a group of containers. There is a set of docker containers that is specified in the YAML configuration file and it is used to override the runtime configuration of the containers. It allows for creating and running with a multi-container for docker applications. It helps in defining and sharing multi-container applications. ', reference: 'Raj, A. (2021). Building Microservices with Docker Compose. The International journal of analytical and experimental modal analysis, 1215-1219.' },
  { id: 25, term: 'Project Management', description: 'Project management is known as specific knowledge uses, tools, techniques, and skills that are used to deliver a thing with people’s value. Software development is improved with the process of business, building construction, and the relief that comes after a disaster.  It is an act with a plan, organized, and the project is managed in achievement for an outcome.', reference: 'Shawl, S. (2016). Establishing an effective project management and control system in project based organizations. best: International Journal of Humanities, Arts, Medicine and Sciences (BEST: IJHAMS), 23-32.' },
  { id: 26, term: 'Information technology', description: 'Information technology is the use of computers which used to create, store, process, retrieve, and exchange every type of information and data. It helps in accessing the information and they are responsible for a large portion of the business operations, and working force and it has personal access to a piece of information which is comprised of everyday activities. ', reference: 'Berisha-Shaqiri, A. (2015). Impact of Information Technology and Internet in Businesses. Academic Journal of Business, Administration, Law and Social Sciences, 73-79.' },
  { id: 27, term: 'GitHub repository', description: 'GitHub is one of the leading platforms that has open-source software projects. GitHub is facilitated by many developers that used to collaborate and contribute to the projects with a performance in several actions like updating the projects using the commit history, logging issues or the defects using reports, and contributing to the projects in pull requests.  ', reference: 'Sciences (BEST: IJHAMS), 23-32. Venigalla, A. S. (2021). Whats in a GitHub Repository? -- A Software Documentation Perspective. arXiv, 1-11.' },
  { id: 28, term: 'Node.js', description: 'Node.js is referred to as JavaScript in a running environment.  It has been built over a Chrome V8 JavaScript engine and is a cross-platform running environment. Using the node, it can be easy to build fast, scalable, and lightweight applications. Node.js allows JavaScript to be used end to end which is on the client and the server end. ', reference: 'Jadhav, G. (2020). Role of Node.js in Modern Web Application Development . International Research Journal of Engineering and Technology (IRJET) , 6145-6150.' },
  { id: 29, term: 'Dockerize microservice', description: 'The Dockerize microservices are used for building decentralized architectures. The docker containers are required with a few computing resources which is more than the virtual machines. This Docker is very possible in reduction of the performance overhead and they deployed with many microservices on the same server.', reference: 'Wan, X. (2018). Application deployment using Microservice and Docker containers: Framework and optimization. Journal of Network and Computer Applications, 97-109. Database server' },
  { id: 30, term: 'Database Servers', description: 'Database servers are referred to as network computers which are on the network that is to be dedicated to the storage of the database and the retrieval of the data that comes from the database. It consists of software and hardware used in running a database. Oracle, and Microsoft SQL servers are some examples. ', reference: 'Setiyadi, A. (2018). Information System Monitoring Access Log Database on Database Server. IOP Conference Series Materials Science and Engineering, 1-10.' },
  { id: 31, term: 'Terraform', description: 'Terraform is defined as an infrastructure code tool. They are an excellent tool for defining and affecting all cloud and on-prem resources in human-readable and human-readable configuration files, provisioning infrastructure throughout its lifetime, and driving stable workflows. They are a tool that allows all programmers to protect, efficiently build, modify, and all vulnerable infrastructures.', reference: 'Bhat, K. (2022). Multi cloud orchestration using terraform. International Journal for Research in Applied Science and Engineering Technology, 10(6), 3749-3753. https://doi.org/10.22214/ijraset.2022.44760' },
  { id: 32, term: 'Kubectl', description: 'Kubernetes API is used and a tool called kubectl provides a command-line tool to interact with the control plane of a Kubernetes cluster. This tool provides the necessary permissions to run all sorts of commands against Kubernetes clusters. It is used to sort out all the triplets and examine the necessary resources.', reference: 'Carrión, C. (2022). Kubernetes as a standard container orchestrator - A bibliometric analysis. Journal of Grid Computing, 20(4). https://doi.org/10.1007/s10723-022-09629-8' },
  { id: 33, term: 'Software Deployment', description: 'Software deployment is the process of making available all kinds of software used by users and other programs on a computer. These solutions vary depending on their utility and performance. These procedures should be customized according to the specifics of the system. These increase the security and connectivity of the system', reference: 'Panizzi, M. D., Genero, M., & Bertone, R. (2023). Refining a software system deployment process model through empirical studies. Journal of Computer Science and Technology, 23(1), e06. https://doi.org/10.24215/16666038.23.e06' },
  { id: 34, term: 'Production environment', description: 'A production environment is defined as a real-time system. Its a process where software, products, and their update vulnerabilities are pushed directly to end users. For example, a company describes the process of updating all of its apps new vulnerabilities and making them live for all users.', reference: 'Amsili, J., Es, H. V., Aller, D., & Schindelbeck, R. (2022). Empirically-based production environment soil health goals. https://doi.org/10.1002/essoar.10512973.3' },
  { id: 35, term: 'Amqplib', description: 'RPCs are all types of operations in Advanced Message Queuing Protocol (AMQP). All of these are seen synchronously in the protocol channel, but also asynchronously from the librarys point of view. These are developed as an open standard protocol. These allow all kinds of interoperability between computers.', reference: 'Y. Jiang, K. Liu, T. Huang, C. Kang and Y. Yang, "Prototype Data System of Highly Reliable Ship Message Queue based on AMQP," 2022 8th International Conference on Big Data Computing and Communications (BigCom), Xiamen, China, 2022, pp. 372-378, doi: 10.1109/BigCom57025.2022.00053.' },
  { id: 36, term: 'Distributed applications', description: 'A distributed application typically consists of one or more remote and local clients. All these are connected through a network and means communication from different computers to one or more services. By this the users benefit to a great extent. Examples of this include web browsers and distributed browsers.', reference: 'B. Gan and C. Zhang, "Research on Application of Distributed Server Architecture for Virtual Reality Scenarios in Big Data Environment," 2020 International Conference on Computer Information and Big Data Applications (CIBDA), Guiyang, China, 2020, pp. 52-55, doi: 10.1109/CIBDA50819.2020.00020' },
  { id: 37, term: 'Kubernetes Orchestration System', description: 'Kubernetes is an open-source framework for containerization and orchestration. These are designed to help developers, which are very useful for developers to easily create containerized applications and services. These enable Kubernetes to scale, schedule, and monitor all those containers. These are multi-rooted tools for container lifecycle management.', reference: 'Senjab, K., Abbas, S., Ahmed, N., & Khan, A. U. (2023). A survey of Kubernetes scheduling algorithms. Journal of Cloud Computing, 12(1). https://doi.org/10.1186/s13677-023-00471-1' },
  { id: 38, term: 'Software Testing', description: 'Software testing is defined as a process of evaluating and verifying what a software product or application is supposed to do. The advantages of this are that all kinds of costs in the software are prevented and development costs are reduced. It helps to improve the efficiency of an administration.', reference: 'Boukhlif, M., Hanine, M., & Kharmoum, N. (2023). A decade of intelligent software testing research: A bibliometric analysis. Electronics, 12(9), 2109. https://doi.org/10.3390/electronics12092109' },
  { id: 39, term: 'Hybrid Clouds', description: 'A hybrid cloud refers to a combination of 2 computing environments. These help to share information from one person to another. Enables consistent and consistent travel required by a business. A hybrid cloud is virtually defined as having at least one private cloud and at least one public cloud, or having more than one private cloud.', reference: 'Henning, S., & Hasselbring, W. (2022). Demo paper: Benchmarking scalability of cloud-native applications with theodolite. 2022 IEEE International Conference on Cloud Engineering (IC2E). https://doi.org/10.1109/ic2e55432.2022.00037' },
  { id: 40, term: 'Cloud Datacenters', description: 'In a cloud data center, space and infrastructure, software services are all available for rent. All cloud providers, from big data miners to cloud data centers, maintain data with full security and compliance. Provides greater flexibility in usage and payment. You can build the framework by taking advantage of the various services it has.', reference: 'Big data in cloud data centers. (2018). Big Data and Software Defined Networks, 159-182. https://doi.org/10.1049/pbpc015e_ch8' },  
  { id: 41, term: 'Cloud Architect', description: 'The cloud architect is the information technology professionals, they have the responsibilities to supervise the organization’s cloud computing strategy. This involves the adoption of cloud plans and cloud software patterns, the management of the cloud and noticing the cloud architects. The cloud architects will supervise the software of the architectures and cloud environment deployment that involves private cloud, hybrid cloud, and public cloud.', reference: '	Lutkevich, B. (2023). cloud architect. Retrieved from techtarget: https://www.techtarget.com/searchcloudcomputing/definition/cloud-architec' },  
  { id: 42, term: 'Container Orchestration', description: 'Container orchestration automatically scales, manages, provisions, and that software of containerized that is not worrying regarding the underlying of the infrastructure. Programmers or developers will execute the container orchestration wherever it is required and they will be permitted to automatically contain the management of life cycle.', reference: 'Google Cloud. (2023). What is container orchestration? Retrieved from Google Cloud: https://cloud.google.com/discover/what-is-container-orchestration#:~:text=Container%20orchestration%20automatically%20provisions%2C%20deploys,life%20cycle%20management%20of%20containers.' },  
  { id: 43, term: 'Datacenter security', description: 'Data center security is the method of providing the controls for security in the data center. The aim is to safeguard the vulnerabilities that will compromise the privacy, combination or business information assets availability or property intellectual.', reference: 'Cisco. (2023). What Is Data Center Security? Retrieved from Cisco: https://www.cisco.com/c/en/us/solutions/security/secure-data-center-solution/what-is-data-center-security.html#~related-topics' },  
  { id: 44, term: 'Configuration Management', description: 'Configuration management is the procedure of managing the systems like computer software and hardware in the expected state. CM (Configuration Management ) is the approach that confirms the systems manner of performance with desired over time.', reference: '	VMware. (2023). What is Configuration Management? Retrieved from VMware: https://www.vmware.com/in/topics/glossary/content/configuration-management.html#:~:text=Configuration%20Management%20is%20the%20process,consistent%20with%20expectations%20over%20time.' },  
  { id: 45, term: 'Kubernetes Deployment', description: '	Kubernetes is the place for for executing the containerized applications. For instance, micro services. There arises two questions, where the answer is very important. The questions are: How Kubernetes are deployed by itself and how to confirm the fulfilments of deployment the requirements of the product environments. Out study will look into the examination and analysis of Kubernetes cluster like the environment of software production.', reference: 'Poniszewska-Marańda, A., & Czechowska, E. (2021). Kubernetes Cluster for Automating Software Production Environment. Institute of Information Technology, 21(5), 1-12. doi:https://doi.org/10.3390/s21051910' },  
  { id: 46, term: 'Load Balancing', description: 'Load unbalancing issue is the multi constraints, multi-variant issues that makes the performance lower and the effectiveness of resources in computing. The techniques of Loading Balancing make the solution for the situation of load balancing for non-expecting facets like underloading and overloading.', reference: 'S, A., & G, K. (2019). Load balancing in cloud computing – A hierarchical taxonomical classification. Journal of Cloud Computing, 8. doi:https://doi.org/10.1186/s13677-019-0146-7' },  
  { id: 47, term: 'Cloud Service Model', description: 'Cloud computing is the service model for enhancing on-demand, convenient, and ubiquitous that access the network to the pool that is shared the resources. The resources that computing can be fastly release and provisional with less effort. The cloud service model has three service model.', reference: 'Doi.Gov. (n.d.). Cloud Service Models. Retrieved from Doi.Gov: https://www.doi.gov/cloud/service#:~:text=Cloud%20computing%20is%20a%20model,and%20released%20with%20minimal%20effort.' },  
  { id: 48, term: 'Continuous delivery', description: 'CD (Continuous Delivery) is the correlated with new application development method. Organizations are adopted with continuous delivery have importance of report advantages. They are motivated by the advantages, many organizations will adopt the CD.	', reference: 'Chen, L. (2017). Continuous Delivery: Overcoming adoption challenges. Journal of Systems and Software, 128, 72-86. doi:https://doi.org/10.1016/j.jss.2017.02.013' }, 
  { id: 49, term: 'MongoDB', description: 'MongoDB is the document open-source database, that offers better performance, and higher chances for scaling. The record in MongoDB is the type of file that has the data structure field composed and pairs in values. MongoDB files are the same as JSON objects.', reference: '	Chauhan, A. (2019). A Review on Various Aspects of MongoDb. International Journal of Engineering Research & Technology, 8(5). Retrieved from https://www.ijert.org/research/a-review-on-various-aspects-of-mongodb-databases-IJERTV8IS050031.pdf' },  
  { id: 50, term: 'Cypress', description: 'The cypress is also said as the Bald cypress that marshes that extend till the Mississippi River to Illinois and also to Texas that is in the west. When the pond cypress is not permitted on the coastal plain of Mexico.', reference: 'Mitra , S., & Ghayeb Zamharir, M. (2023). Update on phytoplasma diseases associated with urban trees, desert trees, and bamboos in Asia. Phytoplasma Diseases of Major Crops, Trees, and Weeds, 2, 283-308. Retrieved from https://www.sciencedirect.com/science/article/abs/pii/B9780323918978000174' }  
];

router.get('/', function(req, res, next) {
  res.render('index', { glossary });
});

module.exports = router;
