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
exports.CurrencyPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const wallet_model_1 = require("./wallet.model");
let CurrencyPojo = class CurrencyPojo extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.currencyId = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        primaryKey: true,
        autoIncrement: true,
        field: 'currencyId'
    }),
    __metadata("design:type", String)
], CurrencyPojo.prototype, "currencyId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'currencyName'
    }),
    __metadata("design:type", String)
], CurrencyPojo.prototype, "currencyName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DECIMAL,
        field: 'value'
    }),
    __metadata("design:type", Number)
], CurrencyPojo.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'acronym'
    }),
    __metadata("design:type", String)
], CurrencyPojo.prototype, "acronym", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'icon'
    }),
    __metadata("design:type", String)
], CurrencyPojo.prototype, "icon", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => wallet_model_1.WalletPojo),
    __metadata("design:type", Array)
], CurrencyPojo.prototype, "wallet", void 0);
CurrencyPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'currencies',
        schema: 'mcw',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    })
], CurrencyPojo);
exports.CurrencyPojo = CurrencyPojo;
