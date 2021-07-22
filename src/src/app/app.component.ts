import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theRealCarneiro';

	icon: string = 'bedtime'
	toggleControl = new FormControl(false);
	@HostBinding('class') className = '';

	dark(): void{
			const darkClassName = 'darkMode';
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
	}
}
