# /backend/main.py
from typing import List, Dict
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware  


app = FastAPI()



@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# ---------- Models ----------
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineIn(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

class PipelineOut(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    node_ids = {n.id for n in nodes}
    for e in edges:
        node_ids.add(e.source)
        node_ids.add(e.target)

    adj: Dict[str, List[str]] = {nid: [] for nid in node_ids}
    indeg: Dict[str, int] = {nid: 0 for nid in node_ids}

    for e in edges:
        adj[e.source].append(e.target)
        indeg[e.target] += 1

    queue = [nid for nid in node_ids if indeg[nid] == 0]
    visited = 0

    while queue:
        cur = queue.pop()
        visited += 1
        for nxt in adj[cur]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                queue.append(nxt)

    return visited == len(node_ids)

@app.post("/pipelines/parse", response_model=PipelineOut)
def parse_pipeline(p: PipelineIn):
    num_nodes = len(p.nodes)
    num_edges = len(p.edges)
    dag = is_dag(p.nodes, p.edges)
    return PipelineOut(num_nodes=num_nodes, num_edges=num_edges, is_dag=dag)
