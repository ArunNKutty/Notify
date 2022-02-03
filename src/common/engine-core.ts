import { Injectable } from '@nestjs/common';
import { FactsDto } from 'src/engine-api/dto/facts.dto';
import { Rools, Rule } from 'src/notify/index';

@Injectable()
export class InferenceEngine {
  async infer(facts: FactsDto): Promise<string[]> {
    let rules = this.getRules(facts.ruleset_label);
    return this.evaluateFacts(facts, rules);
  }

  getRules(ruleset_label: string): Rule[] {
    let pattern: string = 'facts.'.concat('data.address.number === 201');
    let action1: string = 'facts.'.concat("data.mood = 'great'");

    // rules
    const ruleMoodGreat = new Rule({
      name: 'mood is great if 200 stars or more',
      when: [(facts) => eval(pattern)],
      then: (facts) => {
        eval(action1);
      },
    });
    return [ruleMoodGreat];
  }

  async evaluateFacts(facts: FactsDto, rules: Rule[]): Promise<any> {
    try {
      const rools = new Rools();
      rools.register(rules);
      console.log(facts);
      const answer = await rools.evaluate(facts);
      console.log(answer);
      console.log(facts);
      return answer;
    } catch (error) {
      console.error(error);
    }
  }
}
