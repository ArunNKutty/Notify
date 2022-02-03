import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FactsDto } from './dto/facts.dto';

import { RulesetDto } from './dto/ruleset.dto';
import { EngineApiService } from './engine-api.service';



@Controller('/v1')
export class EngineApiController {
  constructor(private readonly engineApiService: EngineApiService) {}

  @Post('/rulesets')
  addRules(@Body() rulesetDto: RulesetDto) {
    return this.engineApiService.createRuleSet(rulesetDto);
  }

  @Put('/ruleset/:ruleset_label')
  updateRules(@Param('ruleset_label') ruleset_label: string, @Body() rulesetDto: RulesetDto) {
    return this.engineApiService.updateRules(ruleset_label, rulesetDto);
  }

  @Delete('/ruleset/:ruleset_label')
  deleteRules(@Param('ruleset_label') ruleset_label: string) {
    return this.engineApiService.deleteRules(ruleset_label);
  }


  @Post('/infer')
  infer(@Body() facts: FactsDto) {
    return this.engineApiService.infer(facts);
  }



  
}
