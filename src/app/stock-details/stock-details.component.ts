import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
 /*  stocks = [
    {}
  ]; */
  
  stocks = [
    {stock_id: 1, stock_name: 'Tech Mahindra', stock_symbol: 'TECHM', stock_price: 550},
    {stock_id: 2, stock_name: 'Infosys', stock_symbol: 'INFI', stock_price: 1200},
    {stock_id: 3, stock_name: 'Tata Consultancy Services', stock_symbol: 'TCS', stock_price: 2200},
    {stock_id: 4, stock_name: 'Larsen & Tubro Infotech', stock_symbol: 'LTI', stock_price: 820},
  ];

  positive_bucket = [
    {stock_id: 0, stock_name: '-', stock_symbol: '-', stock_price: 0},
  ];
  negative_bucket = [
    {stock_id: 0, stock_name: '-', stock_symbol: '-', stock_price: 0},
  ];

  justbucket=[{}];

  addToPoitiveBucket(index: number){
    this.positive_bucket.push(this.stocks[index]);
    console.log("Positive bucket size: "+this.positive_bucket.length)
    this.stocks.splice(index,1);
    console.log(this.stocks.length);
  }

  addToNegativeBucket(index: number){
    this.negative_bucket.push(this.stocks[index]);
    console.log("Negative bucket size: "+this.negative_bucket.length)
    this.stocks.splice(index,1);
    console.log(this.stocks.length);
  }

  removeFromPoitiveBucket(index: number){
    this.stocks.push(this.positive_bucket[index]);
    console.log("Positive bucket size: "+this.positive_bucket.length)
    this.positive_bucket.splice(index,1);
    console.log(this.positive_bucket.length);
  }

  removeFromNegativeBucket(index: number){
    this.stocks.push(this.negative_bucket[index]);
    console.log("Negative bucket size: "+this.negative_bucket.length)
    this.negative_bucket.splice(index,1);
    console.log(this.negative_bucket.length);
  }

  stockLiveData: any[] | undefined;
  data: any;
   records: any = [];
   records2: any = [];
  some: Object = [{}];
  count = 1;
  constructor(private http: HttpClient) {
    console.log("Inside While");
  
      console.log("Inside While");

      setInterval(() => {
        //console.log("Inside While asda");
        this.http.get('https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050')
    .subscribe(response=>{
      this.records.push(response);
      this.records2 = Object.values(response)[3];
      console.log(this.records2); 
      
    })
      }, 15000);
    
    }
  
    
   

  ngOnInit(): void {
    
  }

  

}
