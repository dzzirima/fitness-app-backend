"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const swaggerDocs_1 = __importDefault(require("./helpers/swaggerDocs"));
const PORT = 4000;
app_1.default.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
    (0, swaggerDocs_1.default)(app_1.default, PORT);
});
exports.default = app_1.default;
