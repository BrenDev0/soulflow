"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responses_1 = require("../utils/responses");
const twilio_1 = __importDefault(require("twilio"));
class DialogController {
    constructor() {
        this.errorMessage = responses_1.code500;
        this.twilioClient = (0, twilio_1.default)(process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_AUTH_TOKEN);
    }
    interact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { client, agent, message } = req.body;
                console.log("interact::::::::::::", req.body);
                yield this.twilioClient.messages.create({
                    to: client,
                    from: agent,
                    body: message
                });
                return res.status(200).json({ "message": "Message sent." });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ "message": this.errorMessage });
            }
        });
    }
}
exports.default = DialogController;
