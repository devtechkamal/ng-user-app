import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedImports } from '../../../shared/shared.config';
import { users } from '../../../core/data';
import { AppUrl } from '../../../core/constants/url.constants';
import { UserFormPage } from '../user-form/user-form.page';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, SharedImports, UserFormPage],
  templateUrl: './user-list.page.html',
  styleUrl: './user-list.page.css',
  providers: [ConfirmationService, MessageService],
})
export class UserListPage {
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  users = users;
  appUrl = AppUrl;

  deleteUser(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
