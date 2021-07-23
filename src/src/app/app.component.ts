import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theRealCarneiro';

	@HostBinding('class') className = '';
	toggleControl = new FormControl(false);
	icon: string = ''

	darkModeToggle(): void{
			if (this.icon == "brightness_5"){
				this.icon = "bedtime";
				this.className = 'darkMode';
			}else{
				this.icon = "brightness_5";
				this.className = '';
			}
	}

	ngOnInit(): void {
		this.className = 'darkMode';
		this.icon = 'bedtime'
	}
}
