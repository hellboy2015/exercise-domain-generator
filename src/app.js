let pronoun = ['the','our','your'];
let adj = ['great','big','small' ];
let noun = ['jogger','racoon','panda'];
let domain = ['.com','.net','.us']

pronoun.forEach(pronouns => {
    adj.forEach(adjs => {
       noun.forEach(nouns => {
           domain.forEach(domains => {
               console.log(pronouns+adjs+nouns+domains);
           });
       }); 
    });
});