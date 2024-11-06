/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = accounts[i].reduce((sum, bank) => sum + bank, 0);

        maxWealth = Math.max(maxWealth, currentWealth);
    }

    return maxWealth;
};