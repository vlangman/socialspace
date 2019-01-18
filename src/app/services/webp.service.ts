import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class WebpService {

  WebglSupported: boolean = false;

  constructor(private deviceDetect: DeviceDetectorService) { }

  detectDevice() {
		var browser = this.deviceDetect.browser;
		var version = this.deviceDetect.browser_version.split('.', 1)[0];
		console.log(browser);
		console.log(version);

		if ( browser == "Chrome" && version >= '50') {
			this.WebglSupported = true;
			return true;
		} else if (browser == "Firefox" && version >= '50') {
			this.WebglSupported = false;
			return true;
		} else if (browser == "Safari" && version >= '10') {
			console.log("this safari version is supported but webp is not supported on safari at all :(")
			this.WebglSupported = false;
			return true;
	
		} else if (browser == "ie" && version == '11') {
			this.WebglSupported = false;
			return false;
		}
		else if (browser == "MS-Edge" && version >= '18') {
			this.WebglSupported = true;
			if (version < '18') {
				console.log("Please Update to the latest version to experiance Great quality")
				return false;
			} else {
				return true;
			}
		} else if (browser == "Opera" && version >= '13') {
			this.WebglSupported = true;
			return true;
		} else if (browser == "Samsung" && version >= '4') {
			this.WebglSupported = true;
			return true;
		} else if (browser == "UC-Browser" && version >= '11.8') {
			this.WebglSupported = true;
			return true;
		}
  }
  
  webpSupport(): boolean{
    return this.WebglSupported;
  }

}
