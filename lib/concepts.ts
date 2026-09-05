import concepts from "@/data/concepts/python.json";
import { Concept } from "@/types/concept";

export const pythonConcepts = concepts as Concept[];

export function getConceptById(id: string): Concept | undefined {
  return pythonConcepts.find((concept) => concept.id === id);
}