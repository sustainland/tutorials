import { ProjectService } from './../services/ProjectService';
import { Project } from './../models/project.model';
import { Get, Post, Body, Delete, Param } from "@sustain/common";
import { Controller } from "@sustain/core";


@Controller('/project')
export default class ProjectController {
    constructor(
        private projectService: ProjectService
    ) { }

    @Get()
    listProject() {
        return this.projectService.list();
    }

    @Post()
    createProject(@Body() project: Project) {
        this.projectService.add(project);
        return 'ADDED';
    }

    @Delete('/:id')
    deleteProject(@Param('id') projectId: string) {
        this.projectService.removeById(projectId);
        return 'DELETED';
    }
}