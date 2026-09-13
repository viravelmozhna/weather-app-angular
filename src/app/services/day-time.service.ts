import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayTimeService {
  // Background of the city currently on screen; starts from the visitor's own clock
  public backgroundClassName = new BehaviorSubject<string>(this.getClassNameForHour(new Date().getHours()));

  // Called by pages with WeatherAPI's `location.localtime` ("YYYY-MM-DD HH:mm") of the shown city
  setLocalTime(localDateTime: string): void {
    this.backgroundClassName.next(this.getBackgroundClassName(localDateTime));
  }

  getBackgroundClassName(localDateTime: string): string {
    return this.getClassNameForHour(parseInt(localDateTime.split(' ')[1]));
  }

  private getClassNameForHour(hour: number): string {
    switch (true) {
      case (hour >= 0 && hour < 6):
        return 'night';
      case (hour >= 6 && hour < 12):
        return 'morning';
      case (hour >= 18 && hour < 24):
        return 'evening';
      default:
        return 'day';
    }
  }

}
