import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsScrollService {
	constructor() {}

	public disable() : void {
    document.body.classList.add('disabled-scroll');
	}

	public enable() : void {
    document.body.classList.remove('disabled-scroll');
	}

}
