"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Esta linha permite que qualquer um acesse a pasta uploads via URL
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads'), {
        prefix: '/uploads/',
    });
    app.enableCors();
    await app.listen(3333);
}
bootstrap();
