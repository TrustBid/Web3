# Arquitectura

Este monorepo separa responsabilidades para permitir trabajo paralelo sin fricción:

- `packages/contracts`: código de contratos Soroban. Cada contrato vive en su crate Rust dentro del workspace.
- `packages/interface`: frontera estable que define y publica bindings generados desde los contratos. Aquí se versionan los artefactos que consumen frontend/backend.
- `packages/frontend`: cliente web que consume únicamente bindings de `packages/interface` y nunca importa contratos directamente.
- `packages/backend`: servicios o APIs que consumen bindings de `packages/interface` y sirven como capa de integración con datos externos.
- `docs`: decisiones de arquitectura, APIs y cambios de contratos.
- `scripts`: tareas repetibles para devnet, despliegue y generación de bindings.
- `infra`: archivos de CI/CD y contenedores (placeholders iniciales).

Las capas cliente (frontend/backend) no deberían depender del código fuente de contratos; sólo de los bindings publicados por `packages/interface`. Cualquier cambio en contratos debe reflejarse en nuevos bindings para mantener compatibilidad.
