import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-fee-schedule',
  templateUrl: './fee-schedule.component.html',
  styleUrls: ['./fee-schedule.component.scss']
})
export class FeeScheduleComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    columns:{},
  };
  selectTab(event) {
    if ( event.tabTitle == 'ICD-9' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          code: {
            title: 'ICD-9 Code',
            type: 'string',
            editable: false,
            width: '30%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '15%',
          },
          picklist: {
            title: 'Picklist Category',
            type: 'string',
            width: '55%',
          },
        },
      }
    } else if ( event.tabTitle == 'ICD-10' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          code: {
            title: 'ICD-10 Code',
            type: 'string',
            editable: false,
            width: '30%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '15%',
          },
          picklist: {
            title: 'Picklist Category',
            type: 'string',
            width: '55%',
          },
        },
      }
    } else {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          produce: {
            title: 'Produce',
            type: 'string',
            editable: false,
            width: '10%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '7%',
          },
          office: {
            title: 'Office',
            type: 'string',
            width: '8%',
          },
          insurance: {
            title: 'Insurance Payer',
            type: 'string',
            width: '14%',
          },
          price: {
            title: 'Price',
            type: 'string',
            width: '8%',
          },
          allowed: {
            title: 'Allowed',
            type: 'string',
            width: '8%',
          },
          modifiers: {
            title: 'Modifiers',
            type: 'string',
            width: '10%',
          },
          code: {
            title: 'NDC Code',
            type: 'string',
            width: '10%',
          },
          payerid: {
            title: 'Payer ID',
            type: 'string',
            width: '10%',
          },
          picklist: {
            title: 'Picklist',
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
    }
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
