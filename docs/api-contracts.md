# API de contratos

La frontera estable del sistema son los bindings en `packages/interface`. Aquí se generan las definiciones consumibles por frontend y backend (por ejemplo, tipos, clientes y helpers).

Flujo recomendado:
1. Actualiza contratos en `packages/contracts`.
2. Ejecuta `scripts/generate_bindings.sh` para regenerar artefactos en `packages/interface/generated`.
3. Frontend (`packages/frontend`) y backend (`packages/backend`) sólo consumen esos artefactos; no referencian código fuente de contratos directamente.

Documenta cualquier cambio en las interfaces expuestas y versiona los bindings de forma compatible para evitar rompimientos aguas abajo.
