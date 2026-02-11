import { hanuSquadPlan } from './hanuSquad';
import { humanoidPlan } from './humanoid';
export { hanuSquadPlan, humanoidPlan };
export * from './types';

import type { PlanDefinition } from './types';

export const ALL_PLANS: readonly PlanDefinition[] = [
  hanuSquadPlan,
  humanoidPlan,
] as const;

export const PLAN_NAMES = ALL_PLANS.map(p => p.name) as readonly string[];

export const PLAN_REGISTRY: Record<string, PlanDefinition> = ALL_PLANS.reduce((acc, p) => {
  acc[p.name] = p;
  return acc;
}, {} as Record<string, PlanDefinition>);

export function getPlanByName(name: string): PlanDefinition | undefined {
  return PLAN_REGISTRY[name];
}

export const DEFAULT_PLAN_NAME: string = 'Hanu Squad Mission';
