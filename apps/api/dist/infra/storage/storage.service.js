"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const promises_1 = require("fs/promises");
let StorageService = class StorageService {
    async uploadFile(file) {
        const appUrl = process.env.APP_URL || 'http://localhost:3333';
        return `${appUrl}/uploads/${file.filename}`;
    }
    deleteFileByUrl(url) {
        const filename = url.split('/uploads/')[1];
        if (!filename)
            return;
        const filePath = (0, path_1.join)(process.cwd(), 'uploads', filename);
        return (0, promises_1.unlink)(filePath).catch(() => { });
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)()
], StorageService);
