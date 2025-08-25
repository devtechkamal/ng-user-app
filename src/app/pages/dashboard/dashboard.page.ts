import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SharedImports } from '../../shared/shared.config';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthContext } from '../../config/context';
import { DashboardService, DashboardSummary } from '../../core/services/dashboard.service';
import { User } from '../../core/interfaces/user.interface';
import type { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedImports],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css',
  standalone: true,
  providers: [AuthContext],
})
export class DashboardPage implements OnInit {
  private api = inject(DashboardService);
  auth = inject(AuthContext);
  summary?: DashboardSummary;
  recentUsers: User[] = [];

  // Charts data
  userGrowthData: ChartData<'line'> | undefined;
  roleDistributionData: ChartData<'doughnut'> | undefined;
  loginActivityData: ChartData<'bar'> | undefined;

  // Chart options
  lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: true } },
  };

  doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
  };

  barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: true } },
  };

  async ngOnInit() {
    const [summary, users, growth, roles, logins] = await Promise.all([
      this.api.getSummary(),
      this.api.getRecentUsers(),
      this.api.getUserGrowthSeries(),
      this.api.getRoleDistribution(),
      this.api.getLoginActivitySeries(),
    ]);

    this.summary = summary;
    this.recentUsers = users;
    this.userGrowthData = growth;
    this.roleDistributionData = roles;
    this.loginActivityData = logins;
  }
}
