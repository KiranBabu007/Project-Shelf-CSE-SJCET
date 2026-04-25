export interface Project {
  id: number;
  title: string;
  description: string;
  students: string;
  supervisor: string;
  tags: string[];
  projectType?: "main" | "mini";
}
