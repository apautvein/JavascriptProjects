function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    changeDue = Number.parseFloat(changeDue).toFixed(2);


    let open = { status: "OPEN", change: [] };
    let insufficientFunds = { status: "INSUFFICIENT_FUNDS", change: [] };
    let closed = { status: "CLOSED", change: cid }

    let totalCash = cid.reduce((accumulator, current) => accumulator + current[1], 0);
    if (totalCash < changeDue) {
        return insufficientFunds;
    } else if (totalCash == changeDue) {
        return closed;
    }


    while (changeDue > 0) {
        if (changeDue >= 100 && cid[8][1] > 0) {
            conductTransaction(cid[8], 100)
        }
        else if (changeDue >= 20 && cid[7][1] >= 20) {
            conductTransaction(cid[7], 20)

        }
        else if (changeDue >= 10 && cid[6][1] > 0) {
            conductTransaction(cid[6], 10)
        }
        else if (changeDue >= 5 && cid[5][1] > 0) {
            conductTransaction(cid[5], 5)
        }
        else if (changeDue >= 1 && cid[4][1] > 0) {
            conductTransaction(cid[4], 1)
        }
        else if (changeDue >= 0.25 && cid[3][1] > 0) {
            conductTransaction(cid[3], 0.25)
        }
        else if (changeDue >= 0.10 && cid[2][1] > 0) {
            conductTransaction(cid[2], 0.10)
        }
        else if (changeDue >= 0.05 && cid[1][1] > 0) {
            conductTransaction(cid[1], 0.05)
        }
        else if (changeDue >= 0.01 && cid[0][1] > 0) {
            conductTransaction(cid[0], 0.01)

        } else {
            return insufficientFunds
        }
    } return open;

    function exists(search) {
        return open.change.some(row => row.includes(search));
    }

    function addBillsToChangeDue(billType, billValue) {
        return open.change.map(bill => {
            if (bill[0] === billType) {
                return [billType, bill[1] + billValue]
            }
            else {
                return bill;
            }
        })
    }
    function conductTransaction(bill, billValue) {
        if (exists(bill[0])) {
            open.change = addBillsToChangeDue(bill[0], billValue);
        } else {
            open.change.push([bill[0], billValue])
        }
        changeDue -= billValue;
        bill[1] -= billValue
        changeDue = Number.parseFloat(changeDue).toFixed(2);
    }

}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 