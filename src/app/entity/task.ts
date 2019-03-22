export class Task {
  name: string;
  projectId: string;
  id: number;
  constructor(name: string, projectId: string, id: number) {
    this.name = name;
    this.projectId = projectId;
    this.id = id;
  }
}
