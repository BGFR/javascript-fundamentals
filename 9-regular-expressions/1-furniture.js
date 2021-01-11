//1.  Furniture
function furniture(input) {
    let totalMoney = 0;
    let bought = "Bought furniture:\n";
  
    for (let line of input) {
      let pattern = /(?:>>)(?<item>[\w]+)(?:<<)(?<price>\d+\.?\d+)!(?<quantity>\d+)/gm;
      let result = pattern.exec(line);
      if (result) {
        let item = result.groups["item"];
        let price = Number(result.groups["price"]);
        let quantity = Number(result.groups["quantity"]);
        totalMoney += price * quantity;
        bought += item + "\n";
      }
    }
  
    console.log(bought + "Total money spend: " + totalMoney.toFixed(2));
  }
  
  furniture([">>Sofa<<312.23!3", ">>TV<<", ">Invalid<<!5", "Purchase"]);
