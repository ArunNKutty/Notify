export interface RulesetDto {
    ruleset_label: string;
    rules: Rule[];
}


export interface Rule {
    rule_label: string;
    when: string[];
    then: string[];
}
