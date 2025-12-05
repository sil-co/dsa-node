
export class GraphMap {
    private adjacencyList: Map<string, string[]>

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): boolean {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
            return true;
        }
        return false;
    }

    addEdge(vertex1: string, vertex2: string): boolean {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
            this.adjacencyList.get(vertex2)!.push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1: string, vertex2: string): boolean {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(
                vertex1,
                this.adjacencyList.get(vertex1)!.filter(v => v !== vertex2)
            );
            this.adjacencyList.set(
                vertex2,
                this.adjacencyList.get(vertex2)!.filter(v => v !== vertex1)
            );
            return true;
        }
        return false;
    }

    removeVertex(vertex: string): GraphMap | undefined {
        if (!this.adjacencyList.has(vertex)) return undefined;
        while (this.adjacencyList.get(vertex)?.length) {
            let temp = this.adjacencyList.get(vertex)!.pop()!;
            let tempArray = this.adjacencyList.get(temp); 
            tempArray = this.adjacencyList.get(temp)?.filter(v => v !== vertex);
        }
        this.adjacencyList.delete(vertex);
        return this;
    }
}
