@startuml
title Високорівнева архітектура для додатку Gym Tracker



"React Native App" --> "FastAPI Microservices" : "API Calls (HTTP/HTTPS)"
"FastAPI Microservices" --> "Firebase Cloud Storage" : "REST API for Media"
"FastAPI Microservices" --> "Firebase" : "Authentication/Database Sync"
"FastAPI Microservices" <--> "Docker Containerization" : "Containerized Services"
"Git" --> "GitHub Actions" : "Code Push/Changes"
"GitHub Actions" --> "FastAPI Microservices" : "Deploy Updates"
@enduml