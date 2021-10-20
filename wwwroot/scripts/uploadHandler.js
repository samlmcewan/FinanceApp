//   get the json from session storage and parse it  
        let jsonObject = sessionStorage.getItem('transactions');
        let parsedJson = JSON.parse(jsonObject);

//  Iterate over the transactions and if its a debit transaction add it to the debitTransactions array  
        let debitTransactions = [];
        parsedJson.forEach((transaction) => {
            if (transaction['Debit Amount'] > 0) {
debitTransactions.push(transaction);
            }
        })
       

// Group the debit transactions by merchant
        const groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {});
        let merchantArrays = groupByKey(debitTransactions, 'Transaction Description');

//  Get just the Merchant and its transactions

    let merchantsTotalDebits = [];
       for (const [merchant, transaction] of Object.entries(merchantArrays)) {
           let transactions = [];
             transaction.forEach((value) => {
                transactions.push(value['Debit Amount']);
            }); 
   


// Add up the total debit amounts for each merchant

            const sum = transactions.reduce((partial_sum, a) => partial_sum + a,0); 
// Make sum a string to 2 decimel places 
            const sumFormat = sum.toFixed(2);
            merchantsTotalDebits.push([merchant, parseFloat(sumFormat)]);
           
        };
        console.log(merchantsTotalDebits);
        
// Take the merchantTOtalDebits array and sort from lowest to highest
        merchantsTotalDebits.sort(function(a, b)
	{
	  return a[1]-b[1]; // compare numbers
	});
	 console.log(merchantsTotalDebits);



// get the top 10 transactions with highest value into new array 
     let topTen = merchantsTotalDebits.slice(-10);
     console.log(topTen);

     let top20 = merchantsTotalDebits.slice(-20, -10);
     console.log(`top 20: ${merchantsTotalDebits.slice(-20)}`);
     console.log(`top twenty second 10: ${top20}`);
     console.log(`top twenty first 10: ${topTen}`);

     



// this code takes an array and turns into an object
    //  const obj = Object.fromEntries(someArray);
    //     console.log(obj);  
                        