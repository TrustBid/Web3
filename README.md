# Stellar / Soroban Monorepo Scaffold

Monorepo listo para inicializar un proyecto sobre Stellar Soroban con contratos, interfaz de bindings y aplicaciones cliente (frontend/backend) trabajando en paralelo.

## Layout
- `packages/contracts`: workspace Rust para contratos Soroban (ej: `contract-a`).
- `packages/interface`: frontera estable; generación de bindings consumidos por frontend/backend.
- `packages/frontend`: cliente web que consume bindings generados.
- `packages/backend`: servicios que consumen bindings y exponen APIs.
- `docs`: arquitectura, contratos y decisiones técnicas.
- `scripts`: utilidades para devnet local, despliegue y generación de bindings.
- `infra`: plantillas para CI/CD e infraestructura (placeholders iniciales).

## Uso rápido
1. Instala toolchain Rust y Soroban CLI.
2. `scripts/devnet.sh` para levantar un devnet local (placeholder, agrega comandos reales).
3. `scripts/generate_bindings.sh` para regenerar bindings en `packages/interface/generated`.
4. `cargo build --workspace --manifest-path packages/contracts/Cargo.toml` para compilar contratos.

Adapta la licencia en `LICENSE` y completa `.env.example` antes de desplegar.
