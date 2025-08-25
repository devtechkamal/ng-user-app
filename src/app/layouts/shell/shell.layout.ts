import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedImports } from '../../shared/shared.config';
import { SidebarSection } from '../../core/interfaces/sidebar.interface';
import { AppUrl } from '../../core/constants/url.constants';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SharedImports, RouterLink, RouterLinkActive],
  templateUrl: './shell.layout.html',
  styleUrl: './shell.layout.css',
  standalone: true,
})
export class ShellLayout {
  userMenuOpen = signal(false);
  openSection = signal<string | null>(null);
  showMobileSidebar = signal(false);
  animateSidebar = signal(false);
  appUrl = AppUrl;
  user = { profileImage: null };
  sidebar: SidebarSection[] = [
    {
      title: 'Navigation',
      items: [
        { label: 'Dashboard', icon: 'home', route: AppUrl.Dashboard },
        { label: 'Users', icon: 'groups', route: AppUrl.Users.main, roles: ['admin'] },
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
