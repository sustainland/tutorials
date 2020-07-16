import { Project } from './../models/project.model';
import { Injectable } from "@sustain/core";

@Injectable()
export class ProjectService {
    projects: Project[] = [];

    add(project: Project): void {
        this.projects.push(project);
    }

    removeById(projectId: string) {
        return this.projects = this.projects.filter((project: any) => project.id != projectId);
    }

    list(): Project[] {
        return this.projects;
    }
}