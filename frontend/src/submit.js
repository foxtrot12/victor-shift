// submit.js

import { shallow } from 'zustand/shallow';
import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await res.json();
      alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    } catch (err) {
      alert('Error submitting pipeline');
    }
  };

  return (
    <div className="submit-container">
      <button type="button" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
