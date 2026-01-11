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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCakesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const storage_service_1 = require("../../infra/storage/storage.service");
let AdminCakesService = class AdminCakesService {
    constructor(prisma, storage) {
        this.prisma = prisma;
        this.storage = storage;
    }
    async create(data) {
        let imageUrl;
        if (data.image) {
            imageUrl = await this.storage.uploadFile(data.image);
        }
        const category = await this.prisma.category.findUnique({
            where: { id: data.categoryId },
        });
        if (!category) {
            throw new common_1.NotFoundException("Category not found");
        }
        return this.prisma.cake.create({
            data: { name: data.name, priceCents: data.priceCents, imageUrl, categoryId: category.id },
        });
    }
    async remove(id) {
        const cake = await this.prisma.cake.findUnique({ where: { id } });
        if (!cake)
            throw new common_1.NotFoundException();
        if (cake.imageUrl) {
            await this.storage.deleteFileByUrl(cake.imageUrl);
        }
        await this.prisma.cake.delete({ where: { id } });
        return { ok: true };
    }
};
exports.AdminCakesService = AdminCakesService;
exports.AdminCakesService = AdminCakesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, storage_service_1.StorageService])
], AdminCakesService);
