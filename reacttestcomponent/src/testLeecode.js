let maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  prices.shift();
  for (const sell of prices) {
    if (sell > buy) {
      profit = Math.max(profit, sell - buy);
    } else {
      buy = sell;
    }
  }
  return profit;
};
// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([3, 8, 1, 4, 7, 5]);

function convertHoursToCalendarUnit(hours) {
  if (hours < 0) {
    throw new Error('Input must be a non-negative number of hours');
  }

  if (hours < 24) {
    return { unit: 'h', value: hours };
  } else if (hours < 24 * 7) {
    return { unit: 'd', value: hours / 24 };
  } else if (hours < 24 * 30) {
    return { unit: 'w', value: hours / (24 * 7) };
  } else if (hours < 24 * 365) {
    return { unit: 'm', value: hours / (24 * 30) };
  } else {
    return { unit: 'a', value: hours / (24 * 365) };
  }
}

console.log(JSON.stringify(convertHoursToCalendarUnit(1368)));
