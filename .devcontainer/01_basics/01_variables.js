const accountId = 14425
let accountEmail = "navneet@google.com"
var accountPassword = "1234"
accountCity = "Agra"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hd.com"
accountPassword = "21212121"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId,accountEmail,accountCity])