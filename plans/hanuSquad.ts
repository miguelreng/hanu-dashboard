import type { PlanDefinition } from './types';

export const hanuSquadPlan: PlanDefinition = {
  name: 'Hanu Squad Mission',
  description: 'Coordinating the digital deities to scale Rengi.mp4 and manage the ecosystem.',
  groups: [
    {
      id: 'G',
      title: 'Ganesha (Infra)',
      description: 'Infrastructure, Nginx, Redes, SSL, Tailscale.',
    },
    {
      id: 'R',
      title: 'Rama (Dev)',
      description: 'Development, React, PWA, Backend Python, APIs.',
    },
    {
      id: 'S',
      title: 'Saraswati (Content)',
      description: 'Branding, Scripts rengi.mp4, Hooks, Lore.',
    },
    {
      id: 'K',
      title: 'Kubera (Data)',
      description: 'Notion Action Center, Metrics, Wealth Management.',
    },
  ],
  items: [
    { id: 'G1', group: 'G', sector: 'Planning', depends_on: [], estimate_ms: 15000, tps_min: 10, tps_max: 30, work_desc: 'Optimizar Nginx y túneles Tailscale' },
    { id: 'R1', group: 'R', sector: 'Build', depends_on: ['G1'], estimate_ms: 25000, tps_min: 20, tps_max: 50, work_desc: 'Desplegar Hanu Dashboard v1.0' },
    { id: 'S1', group: 'S', sector: 'Planning', depends_on: [], estimate_ms: 20000, tps_min: 15, tps_max: 40, work_desc: 'Guiones de calle: Dibuja el logo' },
    { id: 'K1', group: 'K', sector: 'Eval', depends_on: ['S1'], estimate_ms: 18000, tps_min: 5, tps_max: 20, work_desc: 'Análisis de engagement post-lanzamiento' },
  ],
};

export default hanuSquadPlan;
