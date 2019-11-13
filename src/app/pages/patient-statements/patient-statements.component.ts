import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-patient-statements',
  templateUrl: './patient-statements.component.html',
  styleUrls: ['./patient-statements.component.scss']
})
export class PatientStatementsComponent implements OnInit {

  selectedItem1 = '1';
  items = [
    { title: 'Print PDF' },
    { title: 'Print Transactions' },
    { title: 'Print Itemize Statement' },
    { title: 'Export CSV' },
  ];
  settings = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
      select:true,
    },
    hideSubHeader: true,
    columns: {
      patient: {
        title: 'Patient',
        type: 'string',
        editable: false,
        width: '8%',
      },
      chartid: {
        title: 'Chart ID',
        type: 'string',
        width: '8%',
      },
      lastappt: {
        title: 'Last Appt',
        type: 'string',
        width: '8%',
      },
      upcoming: {
        title: 'Upsomming Appt',
        type: 'string',
        width: '8%',
      },
      totalstmts: {
        title: 'Total Stmts',
        type: 'string',
        width: '5%',
      },
      laststmts: {
        title: 'Last Stmt',
        type: 'string',
        width: '5%',
      },
      lastamt: {
        title: 'Last Payment Amt',
        type: 'string',
        width: '15%',
      },
      lastposted: {
        title: 'Last Payment Posted',
        type: 'string',
        width: '15%',
      },
      unallocated: {
        title: 'Unallocated',
        type: 'string',
        width: '8%',
      },
      stmtbal: {
        title: 'Stmt Bal',
        type: 'string',
        width: '5%',
      },
      lastupdated: {
        title: 'Last Updated',
        type: 'string',
        width: '8%',
      },
      note: {
        title: ' ',
        type: 'string',
        width: '5%',
      },
    },
  };

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  selectTab(event) {
    if ( event.tabTitle == 'Default' ) {
      console.log('default');
    } else {
      console.log('analysis');
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    const data = [
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
      },
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
      },
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
      },
    ];
    this.source.load(data);
  }

  ngOnInit() {
  }

}
