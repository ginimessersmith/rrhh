# RRHH - Sistema de Gestión de Recursos Humanos (Frontend)

![Angular](https://img.shields.io/badge/Angular-v16-DD0031?logo=angular)
![Angular Material](https://img.shields.io/badge/Angular_Material-v16-blue?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

Frontend de un sistema ERP (Enterprise Resource Planning) robusto, enfocado en la gestión integral de Recursos Humanos. Este proyecto está construido con Angular 16 y utiliza Angular Material para una interfaz de usuario limpia, moderna y responsiva.

El sistema está diseñado para manejar todos los procesos clave del ciclo de vida de un empleado, desde la postulación hasta la gestión de nóminas y contratos.

##  Características Principales

Este proyecto implementa una interfaz de usuario completa para administrar las siguientes entidades (la mayoría con operaciones CRUD completas):

* **Módulo de Autenticación:**
    * Login de usuario (`auth-module`).

* **Gestión Organizacional:**
    * Gestión de Gerencias (`managements-page`).
    * Gestión de Departamentos (`departments-page`).
    * Gestión de Sucursales (`branches-page`).
    * Asignación de Departamentos a Sucursales (`departments-branches-page`).
    * Gestión de Cargos (`positions-page`).

* **Gestión de Personal:**
    * Gestión de Empleados (`employees-page`).
    * Gestión de Postulantes (`applicants-page`).
    * Gestión de Contratos (`contract-page`).
    * Administración de Tipos de Contrato (`contract-types-page`).
    * Administración de Profesiones (`professions-page`).

* **Gestión de Nómina y Pagos:**
    * Gestión de Nóminas/Planillas (`payrolls-page`).
    * Administración de Bonificaciones (`bonuses-page`).
    * Administración de Deducciones (`deductions-page`).
    * Gestión de Períodos de pago (`periods-page`).
    * Gestión de Finiquitos (`settlements-page`).

* **Control y Perfil:**
    * Registro y control de Asistencias (`attendances-page`).
    * Página de Perfil de usuario (`perfil-page`).

##  Arquitectura y Estructura del Proyecto

El proyecto sigue las mejores prácticas de Angular, utilizando una arquitectura modular escalable para separar responsabilidades.

* **Arquitectura Modular:** El proyecto se divide en módulos principales como `Admin`,`Auth`, `Dashboard`,`Material`,`Shared` y `User`.
* **Lazy Loading:** El módulo `UserModule` (que contiene la lógica de negocio principal) se carga bajo demanda (Lazy Loading) para mejorar el rendimiento inicial de la aplicación.
* **Estructura de Módulo:** Cada módulo de funcionalidad (ej. `user`) está organizado internamente por tipo de archivo, facilitando el mantenimiento:
    * `/components`: Componentes reutilizables (ej. formularios, tablas).
    * `/interfaces`: Definiciones de tipos y modelos de datos.
    * `/pages`: Componentes "inteligentes" que representan una página completa.
    * `/services`: Servicios HTTP para la comunicación con el Backend.
    * `/utils`: Funciones de utilidad y helpers.
* **Módulo de Material:** Se utiliza un módulo dedicado (`MaterialModule`) para importar y exportar centralizadamente todos los componentes de Angular Material.

##  Stack Tecnológico

* **[Angular](https://angular.io/) (v16):** Framework principal para construir la Single Page Application (SPA).
* **[Angular Material](https://material.angular.io/):** Librería de componentes UI para una experiencia de usuario moderna y consistente.
* **[TypeScript](https://www.typescriptlang.org/):** Lenguaje base de Angular para un tipado estático y código robusto.
* **Angular Router:** Para la navegación del lado del cliente y la carga perezosa de módulos.
* **RxJS:** Para la gestión de la programación reactiva y flujos de datos asíncronos.

##  Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu máquina local.

1.  **Clonar el repositorio**
    ```bash
    git clone [https://github.com/ginimessersmith/rrhh.git]
    ```
2.  **Navegar al directorio**
    ```bash
    cd rrhh
    ```
3.  **Instalar dependencias**
    *(Se recomienda usar `npm`)*
    ```bash
    npm install
    ```
4.  **Configurar variables de entorno**
    >  **Importante:** Este proyecto frontend requiere un backend para funcionar. Deberás configurar la URL de la API en el archivo de entorno.

    Edita el archivo `src/environment/environment.production.ts` y define la URL de tu API:
    ```typescript
    export const environment = {
      baseUrl: 'http://###########:3000',//  <-- Reemplaza con la URL de tu backend
    };
    ```
5.  **Ejecutar el servidor de desarrollo**
    ```bash
    ng serve -o
    ```
    La aplicación estará disponible en `http://localhost:4200/`.

