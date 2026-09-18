import { Controller, Get } from '@nestjs/common';
import { createLogger } from '../../common/services/logger.service';
import { RequireUnscopedKey } from '../auth/decorators/auth.decorators';
import { ConfigService } from '@nestjs/config';

@Controller('infra')
@RequireUnscopedKey()
export class InfraLayoutController {
  private readonly logger = createLogger('InfraLayoutController');

  constructor(private readonly configService: ConfigService) {}

  @Get('layout')
  getLayout() {
    return {
      brand: {
        name: this.configService.get('layout.brand.name'),
        logoUrl: this.configService.get('layout.brand.logoUrl'),
      },
    };
  }
}
