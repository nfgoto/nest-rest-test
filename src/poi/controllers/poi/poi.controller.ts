import { Controller } from '@nestjs/common';
import { PoiService } from '../../../poi/services/poi/poi.service';

@Controller('poi')
export class PoiController {
    constructor(
        private readonly poiService: PoiService,
    ) {}

}
