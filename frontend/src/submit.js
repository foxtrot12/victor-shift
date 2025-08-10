// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const handleSubmit = async () => {
    // Shape payload to match backend schema
    const payload = {
      nodes: (nodes || []).map((n) => ({ id: n.id })),
      edges: (edges || []).map((e) => ({
        source: e.source,
        target: e.target,
      })),
    };

    try {
      const res = await fetch('http://localhost:8000/pipelines/parse', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed: ${res.status}`);
      }

      const data = await res.json();
      alert(
        `Pipeline summary:\n` +
          `• Nodes: ${data.num_nodes}\n` +
          `• Edges: ${data.num_edges}\n` +
          `• Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (err) {
      console.error(err);
      alert("Sorry, something went wrong submitting your pipeline.");
    }
  };

  return (
    <div className="flex items-center justify-center border-">
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
