"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module"); // Verifique se este caminho existe
const auth_module_1 = require("./module/auth/auth.module");
const users_module_1 = require("./module/users/users.module");
const cakes_module_1 = require("./module/cakes/cakes.module");
const admin_module_1 = require("./module/admin/admin.module");
const categories_module_1 = require("./module/categories/categories.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'uploads'), // Ajuste o caminho para a pasta uploads
                serveRoot: '/uploads',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                // Isso busca a pasta uploads na raiz do projeto da API
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule, // Agora o NestJS sabe de onde vem este módulo
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            cakes_module_1.CakesModule,
            admin_module_1.AdminModule,
            categories_module_1.CategoriesModule,
        ],
    })
], AppModule);
