import { Injectable } from '@nestjs/common';
import { InferenceEngine } from 'src/common/engine-core';
import { FactsDto } from './dto/facts.dto';
import { RulesetDto } from './dto/ruleset.dto';



@Injectable()
export class EngineApiService {

  constructor(private readonly inferenceEngine: InferenceEngine) {
  }


  deleteRules(ruleset_label: string) {
    return ruleset_label;
  }

  updateRules(ruleset_label: string, rulesetDto: RulesetDto) {
    return rulesetDto;
  }


  createRuleSet(ruleset: RulesetDto) {
    return ruleset;
  }

  infer(facts: FactsDto) {
    return this.inferenceEngine.infer(facts);
  }
}
