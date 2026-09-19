# Actualización UX — 19 de septiembre de 2026

Referencias revisadas: las seis páginas de Capturas pantallas Figma.pdf, las seis páginas de Capturas pantallas Codex.pdf y los 17 bloques de la presentación de mockups en documentos/UX.

## Cambios

- Un único dispositivo de 390 × 844 px como máximo, con área superior reservada. En móviles desaparece el marco. Header y navegación quedan fuera del contenedor de scroll.
- Logo horizontal original, avatar naranja/turquesa, Salir explícito y flecha de regreso en las pantallas internas.
- Confirmación de cuenta creada antes del inicio de sesión; confirmaciones de guardado y borrado; borrado de lugares y recorridos con Cancelar/Confirmar.
- Modales contenidos en el teléfono, foco atrapado, Escape para cerrar y restauración de foco cuando el control original sigue presente.
- Preferencias de tamaño, guía de lectura y movimiento funcionales y persistentes. Se conserva lectura en voz alta y contraste.
- Iconografía de navegación consistente, acciones principales naranjas y recálculo celeste. Tarjetas de lugares sin categoría redundante.
- Cancelar en confirmación de reporte; actualización de última consulta de recorridos; edición de nombre desde perfil.

## Validación

- TypeScript: sin errores.
- ESLint completo: sin errores; cuatro advertencias informativas por los logos con img existentes. Se conservan los archivos originales sin introducir un servicio de optimización.
- Build de producción vinext: correcto. El helper de Sites no pudo resolver npm en este entorno Windows; se ejecutó directamente el mismo comando de compilación del proyecto.
- Navegador Edge: bienvenida, invitado, restricciones en contexto, registro, confirmación, inicio de sesión, usuario registrado y cierre de sesión.
- Recorridos: mapa, indicaciones relativas, guardado, cancelar borrado, confirmar borrado, direcciones manuales e intercambio de origen/destino.
- Lugares: crear con ícono, editar, cancelar borrado, confirmar borrado y mensajes de éxito.
- Reportes: ubicación actual, tipo de barrera, descripción, resumen, cancelar y envío exitoso.
- Tutoriales: buscador, detalle e iframe original. Verificado en YouTube que el video inicia y su tiempo de reproducción avanza, con acceso externo habilitado.
- Perfil: edición del nombre, controles de accesibilidad y persistencia de preferencias tras recargar.
- Contención comprobada en escritorio (1366 × 960 y 1366 × 768) y móvil (390 × 844 y 320 × 568), incluyendo scroll hasta el final del perfil.
- Sin excepciones JavaScript durante el recorrido principal.
- Revisión visual de las pantallas y estados frente a Figma: paleta, jerarquía, header, tarjetas, formularios, modales, navegación y marco.

El cálculo, los escenarios de veredas y cruces y los identificadores de videos de mockData.ts se mantienen sin cambios. La cuenta, el mapa, las ubicaciones y el envío de reportes siguen siendo simulados; la cuenta no implica sincronización real entre dispositivos.
