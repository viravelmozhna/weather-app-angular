import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocalStorageThemeService } from './services/local-storage/local-storage-theme.service';
import { LoaderService } from './services/loader.service';
import { DayTimeService } from './services/day-time.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit, AfterContentChecked {
  isDarkMode!: boolean;

  public backgroundClassName: string = '';
  public title: string = 'SoulTeam Weather';
  public isLoading: boolean = true;

  constructor(
    public localStorageThemeService: LocalStorageThemeService,
    private changeDetector: ChangeDetectorRef,
    private dayTimeService: DayTimeService,
    private loaderService: LoaderService) { }
  
  ngOnInit(): void {
    const currentTheme: string | null = this.localStorageThemeService.getCurrentTheme();
    this.isDarkMode = currentTheme === 'dark';

    // Pages report the local time of the city they show
    this.dayTimeService.backgroundClassName.subscribe(
      (className: string) => this.backgroundClassName = className
    );

    this.loaderService.isLoading.subscribe(
      (isLoading: boolean) => this.isLoading = isLoading
    );
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.localStorageThemeService.setTheme(this.isDarkMode === true ? 'dark' : 'light');
  }

}
