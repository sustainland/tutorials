import { ProjectService } from './services/ProjectService';
import { App, bootstrap, Controller } from '@sustain/core';
import { Get, Extensions } from '@sustain/common';
import ProjectController from './controllers/ProjectController';
const bodyParser = require('@sustain/body-parser');

@Controller()
export default class HelloController {
    constructor() { }

    @Get()
    hello(): string {
        return `Hello Sustainers`;
    }
}
@Extensions({
    expressMiddlewares: [
        bodyParser.json()
    ]
})
@App({
    controllers: [
        HelloController,
        ProjectController
    ],
    providers: [
        ProjectService
    ],
    port: process.env.PORT || 5002
})
class AppModule { }

/**
 * Bootstrap the application
 */
module.exports = bootstrap(AppModule);



