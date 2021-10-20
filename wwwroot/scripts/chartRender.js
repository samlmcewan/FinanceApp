

// ['ACTIVE OUTDOOR PUR', 626]
// 1: (2) ['BILLY BILSLAND CYC', 649.98]
// 2: (2) ['CRO Topup', 700]
// 3: (2) ['DELIVEROO', 752.27]
// 4: (2) ['PLATINUM MASTERCAR', 800.3]
// 5: (2) ['SAINSBURYS S/MKTS', 902.6]
// 6: (2) ['HELP TO BUY ISA', 1000]
// 7: (2) ['CRO', 2897.63]
// 8: (2) ['MISS HEATHER DICKS', 2960]
// 9: (2) ['S MCEWAN', 4700]


// this code takes an array and turns into an object
    //  const obj = Object.fromEntries(someArray);
    //     console.log(obj); 
    
    
    const topTenObj = Object.fromEntries(topTen);
       
//         {
            // ACTIVE OUTDOOR PUR: 626
            // BILLY BILSLAND CYC: 649.98
            // CRO: 2897.63
            // CRO Topup: 700
            // DELIVEROO: 752.27
            // HELP TO BUY ISA: 1000
            // MISS HEATHER DICKS: 2960
            // PLATINUM MASTERCAR: 800.3
            // S MCEWAN: 4700
            // SAINSBURYS S/MKTS: 902.6
//         }


const labelsArray = [];
topTen.forEach(item => labelsArray.push(item[0]));

const debitAmountsArray = [];
topTen.forEach(item => debitAmountsArray.push(item[1]));


const labelsArray2 = [];
top20.forEach(item => labelsArray2.push(item[0]));

const debitAmountsArray2 = [];
top20.forEach(item => debitAmountsArray2.push(item[1]));



    //   topTen.forEach( (item) =>  Object.defineProperties( 
    //       dataObj, { 
    //           labels: 
    //               {value: `${item[0]}`}
    //       , 
    //               property2: {
                      
    //               } 
    //             }) );

    //   console.log(dataObj);
 


         const data = {
            labels: labelsArray,
            datasets: [{
                label: 'Spending insights data',
                data: debitAmountsArray,
                backgroundColor: [
                    
                'rgb(0, 168, 255)',
                
                
                'rgb(76, 209, 55)',
                'rgb(127, 143, 166)',
                'rgb(72, 126, 176)',
                
                'rgb(39, 60, 117)',
                'rgb(53, 59, 72)',
                'rgb(220, 221, 225)',
                'rgb(156, 136, 255)',
                'rgb(251, 197, 49)',
                'rgb(232, 65, 24)',
                
                ],
                hoverOffset: 4,
                cutout: '33%'
            }]
            };
            const config = {
        type: 'doughnut',
        data: data,
        }; 
           
            var ctx = document.getElementById('myChart');

            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
            });
                        




    // add up the the total debit amount values for all merchants in the chart, add it to the center div 
    const totalSum = debitAmountsArray.reduce((partial_sum, a) => partial_sum + a,0); 
    const totalNumDiv = document.querySelector('#totalNum');
    console.log(totalNumDiv);
    let totalNumP = document.createElement('p');
    totalNumP.innerHTML = (totalSum);
    totalNumDiv.appendChild(totalNumP);
    
      
          


            