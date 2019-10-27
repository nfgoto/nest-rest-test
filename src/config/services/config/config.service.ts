import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';

export type EnvConfig = Record<string, string>;

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor(filePath?: string) {
        if (filePath) {
            // read and validate .env config file
            const fileConfig = dotenv.parse(fs.readFileSync(filePath));
            this.envConfig = this.validateInput(fileConfig);
        }

        const config = {
            MONGO_URL: process.env.MONGO_URL,
            NODE_ENV: process.env.NODE_ENV,
            API_AUTH_ENABLED: process.env.API_AUTH_ENABLED || 'false',
        };
        this.envConfig = this.validateInput(config);
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    // Custom getter functions
    get isApiAuthEnabled(): boolean {
        return Boolean(this.envConfig.API_AUTH_ENABLED);
    }

    /**
     * Ensures all needed variables are set, and returns the validated JavaScript object
     * including the applied default values
     *
     * @param envConfig
     */

    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid('development', 'production', 'test', 'provision')
                .default('development'),
            PORT: Joi.number().default(3000),
            API_AUTH_ENABLED: Joi.boolean().required(),
            MONGO_URL: Joi.string().default('mongodb://localhost:27017/test'),
        });

        const { error, value: validatedEnvConfig } = envVarsSchema.validate(
            envConfig,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
}
