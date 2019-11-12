import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-unmatched-eras',
  templateUrl: './unmatched-eras.component.html',
  styleUrls: ['./unmatched-eras.component.scss']
})
export class UnmatchedErasComponent implements OnInit {

  selectedItem = '1';
  selectedStatus = '1';

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    columns: {
      checkdate: {
        title: 'Check Date',
        type: 'string',
        editable: false,
        width: '10%',
      },
      posteddate: {
        title: 'Posted Date',
        type: 'string',
        width: '10%',
      },
      checktrace: {
        title: 'Check/Trace #',
        type: 'string',
        width: '10%',
      },
      dos: {
        title: 'DOS',
        type: 'string',
        width: '8%',
      },
      insurance: {
        title: 'Insurance Co',
        type: 'string',
        width: '12%',
      },
      payment: {
        title: 'Payment',
        type: 'string',
        width: '10%',
      },
      adjustment: {
        title: 'adjustment',
        type: 'string',
        width: '10%',
      },
      reason: {
        title: 'Adjustment Reason',
        type: 'string',
        width: '15%',
      },
      status: {
        title: 'Status',
        type: 'string',
        width: '10%',
      },
      note: {
        title: ' ',
        type: 'string',
        width: '5%',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    const data = [];
    this.source.load(data);
  }

  ngOnInit() {
  }


}
