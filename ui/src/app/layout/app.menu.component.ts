import {Component, OnInit} from '@angular/core';
import {LayoutService} from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Bamboo',
        items: [
          {label: 'Build Logs', icon: 'pi pi-fw pi-home', routerLink: ['/']},
          {label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']},
        ],
      },
      {
        label: 'Demos',
        items: [
          {
            label: 'Components', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']},
              {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
              {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
              {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
              {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
              {label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button']},
              {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
              {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
              {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
              {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
              {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
              {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
              {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
              {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
              {label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc']},
              {
                label: 'Menu',
                icon: 'pi pi-fw pi-bars',
                routerLink: ['/uikit/menu'],
                routerLinkActiveOptions: {
                  paths: 'subset',
                  queryParams: 'ignored',
                  matrixParams: 'ignored',
                  fragment: 'ignored'
                }
              },
            ]
          },
          {
            label: 'Pages', icon: 'pi pi-fw pi-bookmark',
            items: [{
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              routerLink: ['/auth/login']
            },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error']
              },
              {
                label: 'Access Denied',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access']
              },
              {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud']
              },
              {
                label: 'Timeline',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/pages/timeline']
              },
              {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/notfound']
              },
              {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty']
              }
            ]
          },
        ]
      },
    ];
  }
}
