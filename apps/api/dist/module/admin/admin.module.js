"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_cakes_controller_1 = require("./admin-cakes.controller");
const admin_cakes_service_1 = require("./admin-cakes.service");
const storage_module_1 = require("../../infra/storage/storage.module");
const cakes_module_1 = require("../cakes/cakes.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({ imports: [storage_module_1.StorageModule, cakes_module_1.CakesModule], controllers: [admin_cakes_controller_1.AdminCakesController], providers: [admin_cakes_service_1.AdminCakesService] })
], AdminModule);
