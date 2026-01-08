"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCakesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const admin_cakes_service_1 = require("./admin-cakes.service");
const path_1 = require("path");
function filename(req, file, cb) {
    const name = file.originalname.split('.').slice(0, -1).join('-').replace(/\s+/g, '-');
    cb(null, `${Date.now()}-${name}${(0, path_1.extname)(file.originalname)}`);
}
let AdminCakesController = class AdminCakesController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async create(file, body) {
        const priceCents = Math.round(Number(body.price) * 100) || Number(body.price) || 0;
        return this.adminService.create({ name: body.name, priceCents, categoryId: body.categoryId ? Number(body.categoryId) : undefined, image: file });
    }
    async remove(id) {
        return this.adminService.remove(Number(id));
    }
};
exports.AdminCakesController = AdminCakesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({ destination: './uploads', filename }),
        limits: { fileSize: 5 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminCakesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminCakesController.prototype, "remove", null);
exports.AdminCakesController = AdminCakesController = __decorate([
    (0, common_1.Controller)('admin/cakes')
    // @UseGuards(AuthGuard('jwt'))
    ,
    __metadata("design:paramtypes", [admin_cakes_service_1.AdminCakesService])
], AdminCakesController);
