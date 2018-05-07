// Anything added to this file is visible to the client.  Keep that in mind when you modify.

export class AppConfig {
  isProduction: boolean;
  apiUrl: string;
  envName: string;
  tenantConfigs: TenantConfig[];
}

export class TenantConfig {
  tenantId: string;
  navbarTheme: string; 
  logoimage: string;
}
