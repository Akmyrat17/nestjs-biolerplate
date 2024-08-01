import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';

@Injectable()
export class ParseIntCustomPipe implements PipeTransform {
  constructor(private i18n: I18nService<I18nTranslations>) {}
  transform(value: any, metadata: ArgumentMetadata): any {
    // Implement your custom logic here

    const val = parseInt(value, 10);
    if (isNaN(val)) {
      const lang = I18nContext.current().lang;
      const message = this.i18n.translate('validation.parse_int_pipe', {
        lang,
      });
      throw new BadRequestException(message);
    }
  }
}
