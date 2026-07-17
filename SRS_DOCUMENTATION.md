# Software Requirements Specification (SRS)
## Project Name: MEDHA AI
**Tagline**: "The AI Operating System for Enterprise"

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to outline the Software Requirements Specification for **MEDHA AI**. This document details the functional and non-functional requirements, system architecture, and core modules necessary to develop a production-quality, enterprise-grade AI-powered ERP Copilot.

### 1.2 Scope
MEDHA AI is an intelligent enterprise operating system designed to sit on top of core ERP modules. It enables employees to control business operations through natural language via an AI Copilot. Unlike traditional CRUD applications, MEDHA AI incorporates a Local AI Orchestration Layer and a Custom Machine Learning Microservice to provide predictive analytics, workflow automation, and conversational data access without relying on external SaaS AI providers.

### 1.3 Definitions and Acronyms
- **ERP**: Enterprise Resource Planning
- **LLM**: Large Language Model
- **RAG**: Retrieval-Augmented Generation
- **RBAC**: Role-Based Access Control
- **PO**: Purchase Order
- **SRS**: Software Requirements Specification

---

## 2. Overall Description

### 2.1 Product Perspective
MEDHA AI is a standalone, web-based enterprise application built using a decoupled monorepo architecture. It integrates a Next.js frontend, a Node.js/Express core backend, a Prisma/PostgreSQL database layer, and a Python FastAPI microservice for custom Machine Learning models. The AI conversational interface relies on a local LLM runner (e.g., Ollama running Llama 3) connected via LangGraph for autonomous function calling.

### 2.2 User Classes and Characteristics
The system implements strict Role-Based Access Control (RBAC). User classes include:
- **Employee**: Can view personal profiles, apply for leave, view attendance.
- **HR Manager**: Manages employee records, approves leaves, runs payroll.
- **Inventory Manager**: Tracks stock, manages warehouses, reserves inventory.
- **Procurement Manager**: Creates and approves purchase orders, manages suppliers.
- **Finance Manager**: Manages invoices, tracks revenue/expenses, views profit/loss.
- **Administrator**: Full system access, configures roles and permissions.

### 2.3 Operating Environment
- **Frontend**: Modern web browsers (Chrome, Firefox, Safari, Edge).
- **Backend Infrastructure**: Dockerized environment capable of running Node.js, Python 3.10+, PostgreSQL 15, ChromaDB, and Ollama.
- **Deployment**: On-premise or Private Cloud infrastructure to ensure data privacy for local LLM inference.

---

## 3. System Features

### 3.1 Human Resources (HR) Module
- **Employee Management**: CRUD operations for employee profiles and department mapping.
- **Attendance & Leave Management**: Tracking daily attendance, applying for leaves, and approval workflows.
- **Payroll**: Generating salary slips and managing compensation.
- **AI Integration**: "Apply leave tomorrow", "Show HR analytics", "Who is absent today?".

### 3.2 Inventory Management Module
- **Product & Stock Tracking**: Real-time stock movement tracking across multiple warehouses.
- **Alerts**: Automated low-stock alerts based on predefined minimum levels.
- **AI Integration**: "Show laptop stock", "Reserve 25 laptops", "Move stock to Hyderabad warehouse."

### 3.3 Procurement Module
- **Purchase Orders (PO)**: Creation, approval, and management of POs.
- **Vendor Management**: Supplier database and rating system.
- **AI Integration**: "Create PO for 100 laptops", "Find cheapest supplier", "Approve PO-104."

### 3.4 Finance Module
- **Invoices & Payments**: Tracking incoming and outgoing financial transactions.
- **Reporting**: Profit & Loss statements, revenue tracking, and cash flow analysis.
- **AI Integration**: "Show monthly revenue", "Generate expense report", "What are this month's losses?"

### 3.5 AI Copilot Orchestration
- **Local LLM Function Calling**: Uses local models (via Ollama) and LangGraph to interpret user intent, extract entities, and trigger internal ERP API functions.
- **Multi-step Reasoning**: Capable of executing complex, multi-step workflows (e.g., detecting low stock -> finding supplier -> creating PO -> asking for approval).
- **Conversational Memory**: Maintains context across chat threads for seamless interactions.

### 3.6 Custom Machine Learning Service
- **Demand Forecasting**: Custom ML models (PyTorch/Scikit-learn) to predict future inventory needs based on historical data.
- **Expense Prediction & Anomaly Detection**: Identifying unusual financial patterns and forecasting upcoming expenses.

---

## 4. External Interface Requirements

### 4.1 User Interfaces
- **SaaS Dashboard**: A premium, responsive dashboard built with Next.js, TailwindCSS (v4), and shadcn/ui. Features include glassmorphism, dark/light mode, and micro-animations.
- **Chat Interface**: A ChatGPT-style interface supporting streaming responses, typing animations, markdown, and suggested prompts.

### 4.2 Software Interfaces
- **PostgreSQL**: Primary relational database for all structured ERP data.
- **ChromaDB**: Vector database for RAG capabilities (document upload, enterprise knowledge base).
- **Ollama**: Local inference server for running open-source LLMs (Llama 3).

---

## 5. Non-Functional Requirements

### 5.1 Security
- **Authentication**: JWT-based authentication.
- **Authorization**: Granular Role-Based Access Control (RBAC). The AI Agent respects RBAC and cannot execute functions outside the user's permission scope.
- **Data Privacy**: 100% local processing. No enterprise data is sent to external APIs (OpenAI/Google).
- **Auditing**: Comprehensive Audit Logs for all sensitive operations and AI-triggered actions.

### 5.2 Performance and Scalability
- **Decoupled Architecture**: Node.js and Python ML services run independently, allowing independent scaling of the computationally heavy ML/AI components.
- **Database Optimization**: Prisma connection pooling and indexed database schemas.

### 5.3 Code Quality and Maintainability
- **Clean Architecture**: Feature-first folder structure.
- **Type Safety**: Strict TypeScript across the entire web and API codebase.
- **UI Consistency**: Centralized design system using TailwindCSS variables.

---

## 6. System Architecture Summary
- **Workspace**: NPM Workspaces Monorepo
- **apps/web**: Next.js 15, React 19, TailwindCSS, shadcn/ui
- **apps/api**: Node.js, Express, TypeScript, LangChain, LangGraph
- **apps/ml-service**: Python, FastAPI, PyTorch, Scikit-learn
- **packages/db**: Prisma ORM, PostgreSQL
- **Infrastructure**: Docker Compose (PostgreSQL, ChromaDB)
