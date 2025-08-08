from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    adj = {node.id: [] for node in pipeline.nodes}
    indegree = {node.id: 0 for node in pipeline.nodes}
    for edge in pipeline.edges:
        if edge.source in adj and edge.target in adj:
            adj[edge.source].append(edge.target)
            indegree[edge.target] += 1

    queue = [n for n, deg in indegree.items() if deg == 0]
    visited = 0
    while queue:
        n = queue.pop(0)
        visited += 1
        for neigh in adj[n]:
            indegree[neigh] -= 1
            if indegree[neigh] == 0:
                queue.append(neigh)

    is_dag = visited == num_nodes

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
