import { pythonConcepts } from "@/lib/concepts";

export default function TestPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Python Concepts
      </h1>

      <div className="mt-6 space-y-2">
        {pythonConcepts.map((concept) => (
          <div key={concept.id}>
            {concept.name} — Tier {concept.difficulty_tier}
          </div>
        ))}
      </div>
    </main>
  );
}