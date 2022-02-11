<p align="center">
  <a target="blank"><img src="./logo.jpg" width="320" alt="Notify Logo" /></a>
</p>

  <p align="center">A progressive framework for building efficient and scalable rule engine based Notification Engine.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>  
</p>

## Description

A repository to handle rules based on patterns and the necessary actions that needs to be taken.

Rule-Based Systems are used to implement expert systems. Expert systems are knowledge-based systems that use a set of rules to process an incoming fact. 

A Rule System is Turing complete with a focus on collecting a set of rules (Ruleset) to express propositional and first-order logic in a concise, non-ambiguous, and declarative manner. The current Rule system is lightweight and built-in such a way that business folks can add a set of rules with the list of patterns and the actions that need to be taken.  

The Ruleset is currently stored in a NoSQL database which represents a knowledge graph. Later this can be moved into a graph-based knowledge system.

## Rule:

A Ruleset is a set of rules that are used to process an incoming fact.
The rule is categorized into the following :

- a rule label that is unique and cannot contain spaces e.g CheckoutRule. This cannot be Checkout Rule.
- when - A list of patterns which the rule should validate against .
- then - When the above list of patterns are matched do the following actions.

Sample Ruleset along with Rules Looks like this

```jsx
{
"ruleset_label": "LoanDisbursement",
"rules": [
	{
		"rule_label": "Check Salary Range",
		"when": [
		"user.salary > 200000"
		],
		"then": [
		"user.eligible = 'yes'"
		]
},
{
	"rule_label": "CheckOutstandingLoans",
	"when": [
	"checkoutstandingLoans()"
	],
	"then": [
	"startProcessingLoan()",
	"sendEmail('Loan Processing has been started')"
	]
}]
}
```

## Fact:

Fact is an incoming message. In our case, it can be a JSON request/response that needs to be evaluated with the following ruleset.

A Fact is categorized into the following :

- ruleset_label - Load a ruleset from the knowledgebase based on the ruleset_label
- data: JSON Object

Sample Fact which needs to be evaluated against a particular ruleset will be in the following format: 
```jsx
{
"ruleset_name": "LoanDisbursement",
"data": {}
}
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Notify is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. 

## Stay in touch

- Author - Arun Kutty , Shyam Sunder


## License

Notify is [MIT licensed](LICENSE).
