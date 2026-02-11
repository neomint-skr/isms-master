> **Document ID:** CB_POL_L2_12-AI-Usage
> **Version:** 00.01.003
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** BEYOND-ISO
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# AI Governance and Acceptable Use Standard

## Summary

AI systems create significant value but carry risks for data protection, ethics, security, and legal compliance that require structured governance. This standard establishes binding requirements for the design, development, deployment, procurement, and use of AI systems — including generative AI tools. It anchors AI governance within the ISMS and supports compliance with the EU AI Act and GDPR. Without these requirements, AI-related risks remain unmanaged and regulatory obligations unfulfilled.

## Objective and Scope

**Policy reference:** P1, P2
**Operationalized by:** CB_POL_L3_03-Developer-Handbook, CB_AWR_01-Awareness-Fundamentals

**Objective:** AI technologies are integral to business operations and product offerings. Without a governance framework, risks arising from bias, opacity, data protection violations, and security vulnerabilities remain unaddressed.

This standard defines requirements for responsible AI governance across the entire AI lifecycle. It ensures that AI systems are developed and operated ethically, securely, and in compliance with applicable regulations including the EU AI Act and GDPR.

The standard complements the information security policy (CB_POL_L1_01) and connects to development standards (CB_POL_L2_04), data protection (CB_POL_L2_02), supplier management (CB_POL_L2_05), and incident management (CB_PRC_01).

**Scope:** All employees, contractors, and external service providers involved in the design, development, deployment, procurement, or use of AI systems. Covers both internally developed AI systems and third-party AI tools used for business purposes.

## Definitions

| Term | Definition |
|---|---|
| Artificial Intelligence (AI) | Computer systems that simulate human intelligence, performing tasks such as learning from data, recognising patterns, making decisions, and solving problems |
| AI Algorithm | A computational procedure designed to solve problems or perform tasks in AI, processing data, making predictions, or taking actions based on defined rules or machine learning |
| AI System | The combination of AI algorithms and the hardware or software infrastructure necessary to implement artificial intelligence capabilities |
| AI Project | Any business initiative that involves the use of AI systems, including the development, use, or procurement of solutions using AI systems |
| Generative AI (GenAI) | A subset of AI that focuses on creating content autonomously, such as images, text, code, or audio |
| AI Lifecycle | The stages of an AI system's development and use: (1) Design and Governance, (2) Data Collection, (3) Model Development, (4) Deployment and Monitoring |
| High-Risk AI System | An AI system whose failure or malfunction may cause significant harm to health, safety, fundamental rights, or the legal standing of individuals |
| General-Purpose AI (GPAI) | An AI model trained on broad data that can perform a wide range of tasks without being designed for a specific application |
| AI System Owner | The individual primarily responsible and accountable for the development or deployment of a given AI system |
| AI Oversight Team | The body responsible for overseeing the development, deployment, and use of AI systems within the organization |

[REF:DGoJ-KI2, Ch. 3]

## AI Principles

The following principles govern the development, deployment, and use of all AI systems.

### Accountability

Compliance with these principles shall be verified throughout the entire AI lifecycle. Before commencing each lifecycle phase, the AI System Owner shall collaborate with the AI Oversight Team to identify and mitigate new risks. Records demonstrating compliance shall be maintained. Where a data protection impact assessment is required, it shall be documented and retained. For internally developed AI systems, all associated technical documentation shall be preserved.

[REF:DGoJ-KI2, Ch. 5.1]

### Human Oversight and Control

All AI systems shall include mechanisms enabling human oversight and intervention. The nature and extent of oversight mechanisms shall be proportionate to the risk associated with the AI system. AI systems that may be used for automated decisions with significant legal or financial impact on individuals shall be assessed for appropriate safeguards and remedies. The AI System Owner shall consult the AI Oversight Team regarding suitable oversight mechanisms.

[REF:DGoJ-KI2, Ch. 5.2]

### Technical Robustness and Security

AI systems shall be developed and deployed to minimize unintended or unexpected harm. Proportionate, risk-based measures shall be taken to optimize model robustness, reliability, accuracy, and information security. A security assessment shall be conducted before deployment of any AI system, determining impacts on existing security controls and identifying foreseeable information security risks. Appropriate measures against adversarial attacks, unexpected input data, or manipulation attempts shall be implemented and documented.

[REF:DGoJ-KI2, Ch. 5.3]

### Data Protection

All AI systems processing personal data shall comply with applicable data protection legislation. A legal basis under Art. 6 GDPR (and where applicable Art. 9 GDPR for sensitive data) shall be identified and documented for each processing activity. Records of processing activities shall be updated to reflect AI-related processing. Privacy notices shall be updated to provide clear information about personal data processing in connection with AI systems. The AI System Owner shall consult the Data Protection Officer to ensure compliance.

[REF:DGoJ-KI2, Ch. 5.4]

### Fairness and Non-discrimination

AI systems shall be developed and deployed to promote equal access and avoid discrimination based on ethnicity, gender, age, or other protected characteristics. A risk assessment shall be conducted to identify foreseeable risks of unfair outcomes. Where such risks exist, proportionate mitigation measures and review procedures shall be established. AI systems shall be monitored regularly for fairness. When unfair outcomes are detected, the AI System Owner shall ensure that corrective measures are taken.

[REF:DGoJ-KI2, Ch. 5.5]

### Transparency and Explainability

AI System Owners shall ensure that documentation is maintained detailing data sources, algorithms used, and decision-making processes. Individuals directly interacting with AI systems shall be informed about the capabilities and limitations of such systems. Individuals affected by AI system decisions shall be informed about their rights under applicable legislation.

[REF:DGoJ-KI2, Ch. 5.6]

## Roles and Responsibilities

### AI Oversight Team

A multidisciplinary AI Oversight Team shall be established with at minimum the following expertise areas:

| Role | Expertise Area |
|---|---|
| [Data Protection Officer] | Data protection and privacy |
| [AI ethics representative] | AI ethics |
| CISO | Information security |
| [Legal representative] | Legal compliance |

The AI Oversight Team advises AI System Owners and stakeholders on conformity with the AI principles defined in this standard. The team identifies risks and recommends mitigation measures within their respective areas of expertise.

[REF:DGoJ-KI2, Ch. 4.2, 6.1]

### AI System Owners

AI System Owners are responsible for:

- Ensuring implementation of appropriate technical and organizational measures to align AI systems with the principles defined in this standard
- Coordinating with the AI Oversight Team throughout the AI lifecycle
- Maintaining technical documentation for internally developed AI systems

[REF:DGoJ-KI2, Ch. 4.3]

### Data Protection Officer in AI Context

The Data Protection Officer (DPO) advises all relevant stakeholders — in particular AI System Owners — on the compliance of AI systems with data protection legislation and data governance requirements. The DPO identifies data protection risks and recommends mitigation measures.

[REF:DGoJ-KI2, Ch. 4.1]

## Governance and Risk Management

### AI Screening

All proposed uses of new AI systems shall undergo a screening assessment. The assessment shall be submitted to the AI Oversight Team for review before commencement of the AI project. The screening shall evaluate the risk level, data protection implications, and alignment with the AI principles defined in this standard.

[REF:DGoJ-KI2, Ch. 6.2.1]

### Data Protection Impact Assessment

Where the DPO determines that a data protection impact assessment (DPIA) is required, the assessment shall be completed before any data collection or processing in connection with the AI project. DPIA is mandatory for AI systems that perform profiling, automated decision-making about individuals, or large-scale processing of special categories of personal data.

[REF:DGoJ-KI2, Ch. 6.2.2]

### Continuous AI Risk Management

All relevant assessments shall be conducted throughout the AI lifecycle and repeated at minimum before each lifecycle phase. Risk areas specific to AI systems include:

| Risk Category | Description |
|---|---|
| Bias and discrimination | Systematic deviation in AI outputs disadvantaging protected groups |
| Model drift | Degradation of model performance over time due to changing data patterns |
| Hallucination | Generation of plausible but factually incorrect outputs |
| Data quality | Incomplete, outdated, or biased training data affecting model outputs |
| Adversarial manipulation | Intentional exploitation of model vulnerabilities through crafted inputs |

The AI Oversight Team is responsible for coordinating additional assessments and advising on corrective measures.

[REF:DGoJ-KI2, Ch. 6.2.3-4]

## AI-Specific Training

Training and awareness programmes shall address AI-related topics for the following target groups:

| Target Group | Training Focus |
|---|---|
| All employees | Ethical and responsible use of AI, AI principles, acceptable use rules |
| [Developers and engineers] | AI security, bias prevention, testing procedures, responsible AI development |
| Management | AI governance, risk oversight, EU AI Act obligations |

AI-specific training shall be integrated into the existing awareness and competence framework (CB_POL_L2_10, HB_CLS_7.2).

[REF:DGoJ-KI2, Ch. 6.3]

## AI Supplier Assessment

When procuring AI systems or products and services that use AI systems, all internal procurement and due diligence policies shall be followed. Third-party AI systems shall substantially conform to the AI principles defined in this standard. Before contract conclusion, third-party AI providers shall be required to complete a vendor assessment covering their AI practices. Completed assessments shall be submitted to the AI Oversight Team together with the screening assessment.

[REF:DGoJ-KI2, Ch. 6.4]

## Logging and Auditability

AI systems shall implement logging mechanisms sufficient for subsequent review and audit.

| Requirement | Description |
|---|---|
| Decision logging | AI-generated decisions with significant impact on individuals or operations shall be logged with sufficient context for review |
| Input/output recording | For high-risk AI systems, inputs and outputs shall be recorded to enable traceability |
| Model versioning | Changes to AI models shall be versioned and documented, including training data provenance |
| Retention | AI-related logs shall be retained in accordance with records management requirements (CB_POL_L2_08) |

## Testing Requirements

AI systems shall undergo testing proportionate to their risk level before deployment and at regular intervals during operation.

| Test Type | Purpose |
|---|---|
| Fairness testing | Assessment of AI outputs for systematic bias across protected characteristics |
| Adversarial testing | Evaluation of model resilience against crafted malicious inputs |
| Accuracy validation | Verification that model outputs meet defined accuracy thresholds |
| Regression testing | Confirmation that model updates do not degrade previously acceptable performance |
| Data quality assessment | Validation of training and inference data against quality criteria |

Test results shall be documented and made available to the AI Oversight Team.

## AI Incident Management

AI-specific incidents shall be handled within the existing incident management process (CB_PRC_01). The following AI-specific incident types shall be recognized:

| Incident Type | Description | Severity Indicator |
|---|---|---|
| Bias incident | AI system produces systematically discriminatory outputs | High — if affecting protected characteristics |
| Model failure | AI system produces materially incorrect outputs affecting operations or individuals | Based on impact assessment |
| Data breach via AI | Personal data exposed through AI system inputs, outputs, or training data | Per GDPR Art. 33/34 requirements |
| Adversarial attack | Intentional manipulation of AI system behaviour through crafted inputs | Based on impact assessment |
| Model drift | AI system performance degrades below acceptable thresholds | Medium — unless safety-critical |

Reporting and escalation follow the standard incident management process. The AI Oversight Team shall be notified of all AI-specific incidents.

## EU AI Act Classification

The EU AI Act classification framework distinguishes the following risk levels:

| Risk Level | Obligations | Examples |
|---|---|---|
| Unacceptable | Prohibited | Social scoring, real-time biometric identification (with exceptions) |
| High Risk | Conformity assessment, risk management, transparency, human oversight | Employment decisions, credit scoring, critical infrastructure |
| Limited Risk | Transparency obligations | Chatbots, deepfake generation |
| Minimal Risk | Voluntary codes of conduct | Spam filters, recommendation engines |

[The organization's AI products shall be classified according to the EU AI Act risk categories. The classification shall be documented and reviewed annually or upon significant changes to the AI system.]

## Acceptable Use of GenAI Tools

### Approval of GenAI Tools

Employees may only use approved GenAI tools. Unapproved tools must not be used for business purposes without explicit prior authorization. [List of approved tools is maintained by the Chief Information Security Officer.]

### Setup Rules

| Rule | Requirement |
|---|---|
| Software installation | No downloading or installing unapproved software on organization devices |
| Account usage | Do not use business accounts for personal purposes |
| Account setup | Use business email address and contact details |
| Training opt-out | Where available: decline use of inputs for provider model training |

### Input Rules

GenAI tools are not confidential. Every input is shared with the provider company. The following rules apply:

| # | Requirement |
|---|---|
| 1 | Do not include personal data in inputs (names, contact details, work location) |
| 2 | Do not enter information that could lead to the indirect identification of individuals |
| 3 | Do not enter customer or partner information of any kind |
| 4 | Do not enter confidential or sensitive organizational information |
| 5 | When in doubt, consult the Chief Information Security Officer |

### Output Rules

GenAI tools can produce inaccurate, biased, or legally problematic content. The following rules apply:

| # | Requirement |
|---|---|
| 1 | Do not use outputs where there are concerns regarding data protection, accuracy, or intellectual property |
| 2 | Do not use outputs as a basis for important decisions about individuals (e.g., hiring) |
| 3 | Do not present unedited GenAI outputs as one's own work |
| 4 | Review outputs for personal data |
| 5 | Verify outputs for accuracy before further use |
| 6 | Be aware of intellectual property risks in GenAI outputs and review accordingly |
| 7 | Be aware of bias and discrimination risks in GenAI outputs and review accordingly |

[REF:DGoJ-KI1]

## See also

- CB_POL_L1_01-Policy — Information security policy, principles
- CB_POL_L2_01-Access-and-Identity — Authentication, access control
- CB_POL_L2_02-Information-Protection — Classification, data protection lifecycle
- CB_POL_L2_04-Secure-Development — SDLC, secure coding, change management
- CB_POL_L2_05-Supplier-and-Cloud — Supplier assessment, agreements
- CB_POL_L2_10-Human-Resources — Training, awareness, competence
- CB_PRC_01-Incident-Management — Incident classification, reporting, escalation
- HB_CLS_7.2-Competence — Competence framework, training records

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.003 | 2026-02-11 | CISO | Extended to AI governance framework: definitions, principles, roles, risk management, training, supplier assessment, logging, testing, incident types, EU AI Act classification; added output rules #6 (IP) and #7 (bias) |
| 00.01.002 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.001 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.000 | 2026-02-09 | CISO | Initial version based on DataGuard GenAI usage policy (REC-513) |
