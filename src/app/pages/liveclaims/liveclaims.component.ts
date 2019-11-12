import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-liveclaims',
  templateUrl: './liveclaims.component.html',
  styleUrls: ['./liveclaims.component.scss']
})
export class LiveclaimsComponent implements OnInit {
  selectedItem;

  settings = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
      select: true,
    },
    hideSubHeader: true,
    columns: {
      info: {
        title: 'Info',
        type: 'string',
        editable: false,
        width: '50px',
      },
      id: {
        title: 'Claim ID',
        type: 'number',
        width: '4%',
      },
      patient: {
        title: 'Patient',
        type: 'string',
        width: '4%',
      },
      sdate: {
        title: 'Date of Service',
        type: 'date',
        width: '4%',
      },
      office: {
        title: 'Office',
        type: 'string',
        width: '4%',
      },
      billed: {
        title: 'billed',
        type: 'currency',
        width: '4%',
      },
      allowed: {
        title: 'Allowed',
        type: 'currency',
        width: '4%',
      },
      adjmt: {
        title: 'Adjmt',
        type: 'currency',
        width: '4%',
      },
      insonepaid: {
        title: 'Ins1 Paid',
        type: 'currency',
        width: '4%',
      },
      instwopaid: {
        title: 'Ins2 Paid',
        type: 'currency',
        width: '4%',
      },
      pt: {
        title: 'pt',
        type: 'currency',
        width: '4%',
      },
      ins: {
        title: 'Ins Bal',
        type: 'currency',
        width: '4%',
      },
      ptline: {
        title: 'Pt Line Item Bal',
        type: 'currency',
        width: '4%',
      },
      claim: {
        title: 'Claim Bal',
        type: 'currency',
        width: '4%',
      },
      exp: {
        title: 'Exp Reimbr',
        type: 'currency',
        width: '4%',
      },
      insone: {
        title: 'Ins 1',
        type: 'string',
        width: '4%',
      },
      insonestauts: {
        title: 'Ins1 Status',
        type: 'string',
        width: '4%',
      },
      instwo: {
        title: 'Ins 2',
        type: 'string',
        width: '4%',
      },
      instwostatus: {
        title: 'Ins2 Status',
        type: 'currency',
        width: '4%',
      },
      firstedi: {
        title: 'Firtst EDI',
        type: 'string',
        width: '4%',
      },
      lastedi: {
        title: 'Last EDI',
        type: 'string',
        width: '4%',
      },
      servienote: {
        title: 'Service Notes',
        type: 'string',
        width: '4%',
      },
      billingnote: {
        title: 'Billing Notes',
        type: 'string',
        width: '4%',
      },
    },
  };

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    const data = [
      {
        id: 133022133,
        patient: "Leanne Graham",
        sdate: "11/11/2019 04:45PM",
        office: "Primary Office",
        billed: "$1,200.00",
        allowed: "$1,200.00",
        adjmt: "$0.00",
        insonepaid: "$0.00",
        instwopaid: "$0.00",
        pt: "$0.00",
        ins: "$0.00",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
      },
      {
        id: 133022134,
        patient: "Leanne Graham",
        sdate: "11/11/2019 04:45PM",
        office: "Primary Office",
        billed: "$1,000.00",
        allowed: "$1,000.00",
        adjmt: "$0.00",
        insonepaid: "$0.00",
        instwopaid: "$0.00",
        pt: "$0.00",
        ins: "$0.00",
        ptline: "$1,000.00",
        claim: "$1,000.00",
        exp: "$0.00",
      },
      {
        id: 133022135,
        patient: "Leanne Graham",
        sdate: "11/11/2019 04:45PM",
        office: "Primary Office",
        billed: "$100.00",
        allowed: "$100.00",
        adjmt: "$0.00",
        insonepaid: "$0.00",
        instwopaid: "$0.00",
        pt: "$0.00",
        ins: "$0.00",
        ptline: "$100.00",
        claim: "$100.00",
        exp: "$0.00",
      },
      {
        id: 133022136,
        patient: "Leanne Graham",
        sdate: "11/11/2019 04:45PM",
        office: "Primary Office",
        billed: "$1,100.00",
        allowed: "$1,100.00",
        adjmt: "$0.00",
        insonepaid: "$0.00",
        instwopaid: "$0.00",
        pt: "$0.00",
        ins: "$0.00",
        ptline: "$1,100.00",
        claim: "$1,100.00",
        exp: "$0.00",
      },
      {
        id: 133022137,
        patient: "Leanne Graham",
        sdate: "11/12/2019 04:45PM",
        office: "Primary Office",
        billed: "$1,500.00",
        allowed: "$1,500.00",
        adjmt: "$0.00",
        insonepaid: "$0.00",
        instwopaid: "$0.00",
        pt: "$0.00",
        ins: "$0.00",
        ptline: "$1,500.00",
        claim: "$1,500.00",
        exp: "$0.00",
      },
    ];
    this.source.load(data);
  }

  ngOnInit() {
  }

}
