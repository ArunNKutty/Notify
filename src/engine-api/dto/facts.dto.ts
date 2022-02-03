import { PartialType } from '@nestjs/mapped-types';


export interface FactsDto {
    ruleset_label: string;
    data: Data;
}

export interface Data {

}
