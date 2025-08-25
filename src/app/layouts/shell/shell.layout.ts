import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedImports } from '../../shared/shared.config';
import { trigger, transition, style, animate } from '@angular/animations';
import { SidebarSection } from '../../core/interfaces/sidebar.interface';
import { AppUrl } from '../../core/constants/url.constants';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SharedImports, RouterLink],
  templateUrl: './shell.layout.html',
  styleUrl: './shell.layout.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))]),
    ]),
  ],
})
export class ShellLayout {
  userMenuOpen = signal(false);
  openSection = signal<string | null>(null);
  showMobileSidebar = signal(false);
  animateSidebar = signal(false);
  appUrl = AppUrl;
  sidebar: SidebarSection[] = [
    {
      title: 'Main Navigation',
      items: [{ label: 'Dashboard', icon: 'home', route: AppUrl.Dashboard }],
    },
    {
      title: 'Management',
      items: [
        { label: 'Users', icon: 'groups', route: AppUrl.Users.main, roles: ['admin'] },
        { label: 'Settings', icon: 'settings', route: '/settings' },
      ],
    },
    // {
    //   title: 'Reports',
    //   items: [
    //     {
    //       label: 'Reports',
    //       icon: 'bar_chart',
    //       children: [
    //         { label: 'Sales', route: '/reports/sales' },
    //         { label: 'Finance', route: '/reports/finance' },
    //       ],
    //     },
    //   ],
    // },
  ];

  toggleSection(sectionLabel: string) {
    this.openSection.update((current) => (current === sectionLabel ? null : sectionLabel));
  }

  toggleMobileSidebar() {
    if (this.showMobileSidebar()) {
      // trigger slide-out
      this.animateSidebar.set(false);
      setTimeout(() => this.showMobileSidebar.set(false), 300);
    } else {
      this.showMobileSidebar.set(true);
      setTimeout(() => this.animateSidebar.set(true), 10);
    }
  }
}
