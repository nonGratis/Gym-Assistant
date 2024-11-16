@startuml
title Високорівнева архітектура для додатку Gym Tracker

package "Client Interfaces" {
    component "React Native App" {
        note right of "React Native App"
            - Android додаток користувача 
            - Надає графічний інтерфейс та відповідний функціонал
        end note
    }
}

package "Backend" {
    component "FastAPI Microservices" {
        note right of "FastAPI Microservices"
            - Регулює API запити
            - Описує більшість бізнес логіки
            - Є незалежним від графічного інтерфейсу та гнучким
        end note
    }
    component "Firebase Cloud Storage" {
        note right of "Firebase Cloud Storage"
            - Зберігая усі необхідні дані та метадані роботи сервісу та аккаунтів користувачів
            - Надає рівні захисту для різних видів акторів у системі
        end note
    }
    component "Docker Containerization" {
        note right of "Docker Containerization"
            - Розгортає FastAPI сервіси та надає можливість швидких оновлень
        end note
    }
}

package "Version Control and CI/CD" {
    component "Git" {
        note right of "Git"
            - Система котролю версій та співробітництва
        end note
    }
    component "GitHub Actions" {
        note right of "GitHub Actions"
            - CI/CD автоматизація для побудови, тестування та розгортання
        end note
    }
}

package "Third-Party Services" {
    component "Firebase" {
        note right of "Firebase"
            - Authentication
            - Database (optional)
        end note
    }
}

"React Native App" ---> "FastAPI Microservices" : "API Calls (HTTP/HTTPS)"
"FastAPI Microservices" --> "Firebase Cloud Storage" : "REST API for Media"
"FastAPI Microservices" --> "Firebase" : "Authentication/Database Sync"
"FastAPI Microservices" <--> "Docker Containerization" : "Containerized Services"
"Git" --> "GitHub Actions" : "Code Push/Changes"
"GitHub Actions" ---> "FastAPI Microservices" : "Deploy Updates"
@enduml