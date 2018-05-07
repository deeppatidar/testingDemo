import { Errors } from "./errors";

export interface APIResponse {
    statusCode: number;
    errors: Errors[];
    warnings: string[];
    data: any;
}
