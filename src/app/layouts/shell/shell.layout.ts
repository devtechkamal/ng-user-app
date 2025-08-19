import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedImports } from '../../shared/shared.config';
import { trigger, transition, style, animate } from '@angular/animations';

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

  readonly sidebarSections = computed(() => {
    return [
      {
        section: 'Main Navigation',
        items: [
          { label: 'Dashboard', icon: 'home', route: '/dashboard' },
          {
            label: 'Products',
            icon: 'box',
            children: [
              { label: 'Product List', icon: 'list', route: '/products' },
              { label: 'Add Product', icon: 'plus', route: '/products/create' },
            ],
          },
          { label: 'Suppliers', icon: 'truck', route: '/suppliers' },
        ],
      },
      {
        section: 'Settings',
        items: [
          { label: 'Users', icon: 'users', route: '/users' },
          { label: 'Roles', icon: 'shield', route: '/roles' },
        ],
      },
    ];
  });

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
